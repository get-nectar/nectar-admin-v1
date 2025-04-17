// @ts-nocheck
import { z } from 'zod'

import { CardAttachmentSchema, MediaAttachmentSchema } from './attachment'
import { TipTapPayloadSchema } from './tiptap'

export const PrivateCommentReplyBaseSchema = z.object({
  ownerId: z.string(),
  instagramAccountId: z.string(),
  communityMemberId: z.string(),
  content: z.string(),
  attachments: z.array(MediaAttachmentSchema).optional(),
  isSentByAI: z.boolean().default(false),
  cards: z.array(CardAttachmentSchema).optional(),
})

export const PrivateCommentReplySchema = z.object({
  data: PrivateCommentReplyBaseSchema.extend({
    content: z.string(),
  }),
})

export const PrivateCommentReplySchemaV2 = z.object({
  data: PrivateCommentReplyBaseSchema.extend({
    content: TipTapPayloadSchema,
  }),
})

const ReplyCommentRequestBaseSchema = z.object({
  ownerId: z.string(),
  instagramAccountId: z.string().optional(),
  facebookPageAccountId: z.string().optional(),
  commentId: z.string(),
  isSentByAI: z.boolean().default(false),
})

export const ReplyCommentRequestSchema = z.object({
  data: ReplyCommentRequestBaseSchema.extend({
    body: z.string(),
  }),
})

export const ReplyCommentRequestSchemaV2 = z.object({
  data: ReplyCommentRequestBaseSchema.extend({
    body: TipTapPayloadSchema,
  }),
})

const PostCommentRequestBaseSchema = z.object({
  ownerId: z.string(),
  instagramAccountId: z.string().optional(),
  facebookPageAccountId: z.string().optional(),
  contentId: z.string(),
  isSentByAI: z.boolean().default(false),
})

export const PostCommentRequestSchema = z.object({
  data: PostCommentRequestBaseSchema.extend({
    body: z.string(),
  }),
})

export const PostCommentRequestSchemaV2 = z.object({
  data: PostCommentRequestBaseSchema.extend({
    body: TipTapPayloadSchema,
  }),
})
