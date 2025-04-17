// @ts-nocheck
import { z } from 'zod'

import { Platform } from '@prisma/client'

import { EntityType, LogicalConnector } from './journey'

export enum HASHTAG_TRACKING_CLIENT_RESPONSES {
  TRACKING_LIMIT_REACHED = 'TRACKING_LIMIT_REACHED',
  INSTAGRAM_TRACKING_COOL_DOWN_TIME = 'INSTAGRAM_TRACKING_COOL_DOWN_TIME',
  INSTAGRAM_HASHTAG_NOT_FOUND = 'INSTAGRAM_HASHTAG_NOT_FOUND',
  INSTAGRAM_HASHTAG_ALREADY_TRACKED = 'INSTAGRAM_HASHTAG_ALREADY_TRACKED',
  TIKTOK_HASHTAG_ALREADY_TRACKED = 'TIKTOK_HASHTAG_ALREADY_TRACKED',
  SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG',
  SUCCESS = 'SUCCESS',
}

export enum TopicKeywordType {
  HASHTAG = 'HASHTAG',
  SEARCH_QUERY = 'SEARCH_QUERY',
}

export enum ConditionType {
  INCLUDES = 'INCLUDES',
  EXCLUDES = 'EXCLUDES',
}

export const SocialListeningTopicSchema = z.array(
  z.object({
    platform: z.nativeEnum(Platform),
    keywordType: z.nativeEnum(TopicKeywordType),
    conditions: z.array(
      z.union([
        z.object({
          entityType: z.literal(EntityType.LOGICAL_CONNECTOR),
          logicalConnector: z.nativeEnum(LogicalConnector),
        }),
        z.object({
          entityType: z.literal(EntityType.CONDITION),
          conditionType: z.nativeEnum(ConditionType),
          keywords: z.array(z.string()),
        }),
      ]),
    ),
  }),
)

export type SocialListeningTopicSchemaType = z.infer<
  typeof SocialListeningTopicSchema
>

export const SocialListeningTopicRequestSchema = z.object({
  instagramAccountId: z.string().nullish(),
  tiktokAccountId: z.string().nullish(),
  title: z.string(),
  topic: SocialListeningTopicSchema,
})

export type SocialListeningTopicRequestSchemaType = z.infer<
  typeof SocialListeningTopicRequestSchema
>

export const SocialListeningTopicUpdateRequestSchema = z.object({
  topicId: z.string(),
  instagramAccountId: z.string().nullish(),
  tiktokAccountId: z.string().nullish(),
  title: z.string(),
  topic: SocialListeningTopicSchema,
})

export type SocialListeningTopicUpdateRequestSchemaType = z.infer<
  typeof SocialListeningTopicUpdateRequestSchema
>

export const SocialListeningTopicDeleteRequestSchema = z.object({
  topicId: z.string(),
  instagramAccountId: z.string().nullish(),
  tiktokAccountId: z.string().nullish(),
})

export type SocialListeningTopicDeleteRequestSchemaType = z.infer<
  typeof SocialListeningTopicDeleteRequestSchema
>

export const SocialListeningTopicPromptSchema = z.object({
  instagramAccountId: z.string().nullish(),
  tiktokAccountId: z.string().nullish(),
  title: z.string(),
  prompts: z.array(z.string()),
})

export type SocialListeningTopicPromptSchemaType = z.infer<
  typeof SocialListeningTopicPromptSchema
>
