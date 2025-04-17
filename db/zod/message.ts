// @ts-nocheck
import { z } from 'zod'

import { CardAttachmentSchema, MediaAttachmentSchema } from './attachment'
import { TipTapPayloadSchema } from './tiptap'

const SendMessageRequestBaseSchema = z.object({
  ownerId: z.string(),
  workspaceUserId: z.string().optional(),
  instagramAccountId: z.string().optional(),
  facebookPageAccountId: z.string().optional(),
  conversationId: z.string(),
  content: z.string(),
  attachments: z.array(MediaAttachmentSchema).optional(),
  isSentByAI: z.boolean().default(false),
  cards: z.array(CardAttachmentSchema).optional(),
  copilotGeneratedResponseId: z.string().nullish(),
})

export const SendMessageRequestSchema = z.object({
  data: SendMessageRequestBaseSchema.extend({
    content: z.string(),
  }).refine((data) => data.instagramAccountId || data.facebookPageAccountId, {
    message:
      'Either instagramAccountId, facebookPageAccountId or tiktokAccountId must be provided. All cannot be empty.',
    path: ['instagramAccountId', 'facebookPageAccountId', 'tiktokAccountId'],
  }),
})

export const SendMessageRequestSchemaV2 = z.object({
  data: SendMessageRequestBaseSchema.extend({
    content: TipTapPayloadSchema,
  }).refine((data) => data.instagramAccountId || data.facebookPageAccountId, {
    message:
      'Either instagramAccountId, facebookPageAccountId or tiktokAccountId must be provided. All cannot be empty.',
    path: ['instagramAccountId', 'facebookPageAccountId', 'tiktokAccountId'],
  }),
})

export type SendMessageResponseCommonArgs = {
  messageIds: string[]
}

export type SendMessageResponseSucessArgs = {
  status: 'success'
}

export type SendMessageResponseErrorArgs = {
  status: 'error'
  message: string
  error: unknown
}

export type SendMessageResponse = SendMessageResponseCommonArgs &
  (SendMessageResponseSucessArgs | SendMessageResponseErrorArgs)
