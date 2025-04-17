// @ts-nocheck
import { z } from 'zod'

export const CopilotQueueCommentsRequestSchema = z.object({
  sessionId: z.string().uuid(),
  accountCommentOwnerId: z.string().uuid(),
  contentId: z.string().uuid(),
  workspaceSenderId: z.string().uuid().nullish(),
})

export type CopilotQueueCommentsRequestSchema = z.infer<
  typeof CopilotQueueCommentsRequestSchema
>

export const CopilotQueueMessagesRequestSchema = z.object({
  sessionId: z.string().uuid(),
  instagramAccountConversationOwnerId: z.string().uuid(),
  contentId: z.string().uuid(),
  workspaceSenderId: z.string().uuid().nullish(),
})

export type CopilotQueueMessagesRequestSchema = z.infer<
  typeof CopilotQueueMessagesRequestSchema
>
