// @ts-nocheck
import { z } from 'zod'

import {
  PersonaChannelBusinessHoursOptions,
  PersonaChannelTopicReplyMode,
  PersonaItemChannel,
  PersonaTopicChannel,
  Platform,
  ResponseDelayTime,
} from '@prisma/client'

const ResponseTimeSchema = z.array(
  z.object({
    channelType: z.nativeEnum(PersonaItemChannel),
    timeDelay: z.string() as z.ZodType<ResponseDelayTime>,
  }),
)
const AccountsSchema = z.array(
  z.object({
    id: z.string(),
    platform: z.enum([Platform.INSTAGRAM, Platform.FACEBOOK, Platform.TIKTOK]),
  }),
)
const TopicSchema = z.array(
  z.object({
    enableAllTopics: z.boolean().optional(),
    allowUntrainedTopics: z.boolean().optional(),
    channel: z.nativeEnum(PersonaTopicChannel),
    mode: z.nativeEnum(PersonaChannelTopicReplyMode),
    autopilotEnabled: z.boolean().optional(),
    topicId: z.string().optional(),
    accounts: AccountsSchema,
  }),
)
const UpsertParamsSchema = z.object({
  where: z.object({
    id: z.string(),
    parentConfig: z.object({
      workspaceId: z.string(),
    }),
  }),
  create: z.object({
    parentConfig: z.object({
      connectOrCreate: z.object({
        where: z.object({
          workspaceId: z.string(),
        }),
        create: z.object({
          workspaceId: z.string(),
        }),
      }),
    }),
    aiPersona: z.object({
      connect: z.object({
        id: z.string(),
      }),
    }),
    businessHoursOption: z
      .nativeEnum(PersonaChannelBusinessHoursOptions)
      .nullish(),
    responseTime: z
      .object({
        createMany: z.object({
          data: ResponseTimeSchema,
        }),
      })
      .optional(),
  }),
  update: z.object({
    aiPersonaId: z.string().optional(),
    businessHoursOption: z
      .nativeEnum(PersonaChannelBusinessHoursOptions)
      .nullish(),
    responseTime: z
      .object({
        deleteMany: z.object({}).optional(),
        createMany: z.object({
          data: ResponseTimeSchema,
        }),
      })
      .optional(),
  }),
})
export const UpsertManyChannelSettingsSchema = z.object({
  data: z.object({
    upsertParams: UpsertParamsSchema,
    enabledTopics: z.object({
      data: TopicSchema.optional(),
    }),
    workspaceId: z.string(),
  }),
})
export const FindManyChannelSettingsSchema = z.object({
  data: z.object({
    workspaceId: z.string(),
  }),
})
export type UpsertParamsType = z.infer<typeof UpsertParamsSchema>
export type UpsertManyChannelSettingsType = z.infer<
  typeof UpsertManyChannelSettingsSchema
>
export type EnabledTopicsType = z.infer<typeof TopicSchema>
