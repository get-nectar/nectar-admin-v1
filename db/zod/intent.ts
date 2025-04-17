// @ts-nocheck
import { z } from 'zod'

import { IntentChannel } from '@prisma/client'

export const channelResponseSchema = z.object({
  channel: z.nativeEnum(IntentChannel),
  plain_text: z.string(),
})

export type ChannelResponse = z.infer<typeof channelResponseSchema>

export const SimpleResponseSchema = z
  .object({
    plain_text: z.string().nullish(),
    channelResponses: z.array(channelResponseSchema).optional().nullable(),
  })
  .optional()
  .nullable()
