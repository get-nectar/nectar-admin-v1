// @ts-nocheck
import { z } from 'zod'

export const CopilotSessionCreateMetricSchema = z.object({
  data: z.object({
    workspaceId: z.string(),
    conversationId: z.string().nullable().optional(),
    contentId: z.string().nullable().optional(),
    platform: z.string(),
    date: z.string(),
  }),
})

export type CopilotSessionCreateMetricType = z.infer<
  typeof CopilotSessionCreateMetricSchema
>
