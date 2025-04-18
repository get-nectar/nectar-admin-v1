// @ts-nocheck
import { z } from 'zod'

import {
  CommentViewState,
  ContentSource,
  ContentType,
  MessageType,
  Platform,
  Sentiment,
} from '@prisma/client'

export interface SenderCountItem {
  _count: {
    id: number
  }
  workspaceSenderId: string | null
  userId?: string | null
  userName?: string | null
  profilePictureUri?: string | null
}

export interface AccountCountItem {
  _count: {
    id: number
  }
  id: string
  fullName: string
  platform: Platform
}

export interface CombinedSenderCountItem {
  workspaceSenderId: string | null
  userId?: string | null
  userName?: string | null
  profilePictureUri?: string | null
  count: number
}

export interface CombinedAccountCountItem {
  id: string
  fullName: string
  platform: Platform
  count: number
}

export enum OutgoingMessageType {
  COMMENT = 'COMMENT',
  DM = 'DM',
}

export enum OutgoingMessagesSortOption {
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST',
}

export enum OutgoingMessagesClassification {
  OFF_PLATFORM = 'OFF_PLATFORM',
  AI_SENT = 'AI_SENT',
  AUTOPILOT = 'AUTOPILOT',
}

export interface OutgoingComment {
  type: OutgoingMessageType
  id: string
  publishedTimestamp: Date
  contentId: string
  viewState: CommentViewState
  platform: Platform
  accountId: string
  caption: string | null
  permalink: string | null
  thumbnailUri: string | null
  parentComment: {
    id: string
    authorThumbnailUri: string | null
    authorName: string | null
    authorHandler: string | null
    authorFollowersCount: number | null
    parentCommentBody: string | null
  } | null
  isCommentMention: boolean
  mentionedPostOwner: {
    id: string
    name: string | null
    profilePictureUri: string | null
    handle: string | null
    followersCount: number | null
  } | null
  brandName: string
  brandThumbnailUri: string | null
  isReply: boolean
  comment: string
  sentiment: Sentiment | null
  aiAssisted: boolean
  workspaceSender: {
    id: string | null
    name: string | null
    profilePictureUri: string | null
  }
  media: Array<{
    id: string
    sourceUri: string
    type: ContentType
    thumbnailUri: string | null
    uploadOffset: number | null
    index: number | null
  }>
  contentSourceType: ContentSource
  contentPublishTimestamp: Date
  parentJourney: {
    id: string
    name: string
  } | null
}

export interface OutgoingCommentsCount {
  outgoingCommentsCount: number
}

export interface OutgoingMessage {
  type: OutgoingMessageType
  id: string
  publishedTimestamp: Date
  conversationId: string
  accountId: string
  platform: Platform
  message: string
  participantThumbnailUri: string | null
  participantName: string | null
  participantHandle: string | null
  participantFollowersCount: number | null
  parentComment: string | null
  sentiment: Sentiment | null
  workspaceSender: {
    id: string | null
    name: string | null
    profilePictureUri: string | null
  }
  aiAssisted: boolean
  brandName: string
  brandThumbnailUri: string | null
  messageGroupId: string | null
  parentJourney: {
    id: string
    name: string
  } | null
  parentMessage: {
    id: string
    text: string
    messageType: MessageType | null
    attachments: string[] | null
    sentTimestamp: Date
  } | null
}

export interface OutgoingMessagesCount {
  outgoingMessagesCount: number
}

export const OutgoingMessagesSchema = z.object({
  type: z.enum(['COMMENT', 'DM']).nullish(),
  workspaceId: z.string(),
  limit: z.number(),
  page: z.number(),
  accountIds: z.array(z.string()),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  searchQuery: z.string().nullish(),
  workspaceUserIds: z.array(z.string()).nullish(),
  sortOption: z.nativeEnum(OutgoingMessagesSortOption).nullish(),
  cursor: z
    .object({
      id: z.string(),
      timestamp: z.string(),
    })
    .nullish(),
})

export type OutgoingMessagesParams = z.infer<typeof OutgoingMessagesSchema>

export const OutgoingMessagesCountSchema = z.object({
  workspaceId: z.string(),
  accountIds: z.array(z.string()),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  searchQuery: z.string().nullish(),
  workspaceUserIds: z.array(z.string()).nullish(),
})

export enum OutgoingCountSchemaType {
  SENDER = 'sender',
  ACCOUNT = 'account',
  SENTIMENT = 'sentiment',
}

export const OutgoingCountSchema = z.object({
  workspaceId: z.string(),
  type: z.nativeEnum(OutgoingCountSchemaType),
  accountIds: z.array(z.string()),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  searchQuery: z.string().nullish(),
})

export type OutgoingCountParams = Pick<
  OutgoingMessagesParams,
  'workspaceId' | 'accountIds' | 'startDate' | 'endDate' | 'searchQuery'
>
