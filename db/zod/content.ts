// @ts-nocheck
import { z } from 'zod'

import {
  ContentStatus,
  ContentSurface,
  ContentType,
  MediaStatus,
  Platform,
} from '@prisma/client'

export const FrameMetadataSchema = z
  .object({
    objectsDetected: z.array(z.string()).nullish(),
    backgrounds: z.array(z.string()).nullish(),
    descriptions: z.array(z.string()).nullish(),
    contentFrameIds: z.array(z.string()).nullish(),
    summary: z.string().nullish(),
  })
  .nullish()

export const VideoMetadataSchema = z
  .object({
    summary: z.string().nullish(),
    topics: z.array(z.string()).nullish(),
    duration: z.number().nullish(),
  })
  .nullish()

export const AudioMetadataSchema = z
  .object({
    summary: z.string().nullish(),
    topics: z.array(z.string()).nullish(),
    wordTimeMapping: z
      .array(
        z.object({
          word: z.string(),
          start: z.number().nullish(),
          end: z.number().nullish(),
        }),
      )
      .nullish(),
    duration: z.number().nullish(),
    rawTranscription: z.string().nullish(),
  })
  .nullish()

export type FrameMetadata = z.infer<typeof FrameMetadataSchema>
export type VideoMetadata = z.infer<typeof VideoMetadataSchema>
export type AudioMetadata = z.infer<typeof AudioMetadataSchema>

export const ContentColumnSchema = z.object({
  field: z.string(),
  hide: z.boolean().optional(),
  title: z.string().optional(),
})

export const ContentColumnDataSchema = z.array(ContentColumnSchema).nullable()

export type ContentColumnData = z.infer<typeof ContentColumnDataSchema>

export enum ContentTableColumnFields {
  CONTENT = 'content',
  TYPE = 'type',
  PLATFORM = 'platform',
  HANDLE = 'handle',
  PERMALINK = 'permalink',
  FOLLOWERS = 'followers',
  VIEWS = 'views',
  LIKES_REACTIONS = 'likes/reactions',
  SHARES = 'shares',
  COMMENTS = 'comments',
  EMV = 'emv',
  DATE_POSTED = 'datePosted',
  SENTIMENT = 'sentiment',
  LABELS = 'labels',
  PRODUCT_TAGS = 'productTags',
}

export const ScheduleContentRequestSchema = z.object({
  id: z.string().optional(),
  platform: z.nativeEnum(Platform),
  contentOwnerId: z.string(),
  platformAccountId: z.string(),
  caption: z.string().optional(),
  location: z.string().optional(),
  locationId: z.string().optional(),
  contentType: z.nativeEnum(ContentType),
  contentSurface: z.nativeEnum(ContentSurface),
  children: z.array(
    z.object({
      id: z.string().optional(),
      contentType: z.nativeEnum(ContentType),
      sourceUri: z.string(),
      thumbnailUri: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      tags: z
        .array(
          z.object({
            tag: z.string(),
            x: z.number(),
            y: z.number(),
          }),
        )
        .optional(),
      status: z.nativeEnum(MediaStatus).optional(),
      index: z.number().optional(),
    }),
  ),
  labelIds: z.array(z.string()).optional(),
  collaborators: z
    .array(
      z.object({
        username: z.string(),
        communityMemberId: z.string().optional(),
      }),
    )
    .optional(),
  contentPublishingMetadata: z.object({
    status: z.nativeEnum(ContentStatus),
    scheduledTime: z.string().optional(),
    workspaceUserAuthorId: z.string().optional(),
    instagramFirstComment: z.string().optional(),
  }),
})

export type ScheduleContentRequest = z.infer<
  typeof ScheduleContentRequestSchema
>

export enum RecordContentMetricEventType {
  RESOLUTION_UPDATED = 'RESOLUTION_UPDATED',
  ASSIGNMENT_UPDATED = 'ASSIGNMENT_UPDATED',
}
