// @ts-nocheck
import { z } from 'zod'

import {
  CrossPlatformTriggerEvent,
  FacebookTriggerEvent,
  InstagramTriggerEvent,
  TriggerReplyCondition,
  TriggerScope,
  TriggerType,
} from '@prisma/client'

export enum Automation {
  JOURNEY = 'JOURNEY',
  INBOX_RULE = 'INBOX_RULE',
}

export enum AutomationPreview {
  AD_HOC_VERIFICATION = 'AD_HOC_VERIFICATION',
  FETCH_INBOX_ITEMS = 'FETCH_INBOX_ITEMS',
}

export enum MessageRole {
  USER = 'user',
  SYSTEM = 'system',
}

export const InboxRuleConfig = z
  .object({
    contentId: z.string().nullish(),
    triggerWords: z.array(z.string()),
    triggerIntents: z.array(z.string()),
    additionalConditions: z.object({}).passthrough(),
    scope: z.nativeEnum(TriggerScope),
    replyCondition: z.nativeEnum(TriggerReplyCondition).nullish(),
  })
  .and(
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal(TriggerType.CROSS_PLATFORM),
        event: z.nativeEnum(CrossPlatformTriggerEvent),
      }),
      z.object({
        type: z.literal(TriggerType.FACEBOOK),
        event: z.nativeEnum(FacebookTriggerEvent),
      }),

      z.object({
        type: z.literal(TriggerType.INSTAGRAM),
        event: z.nativeEnum(InstagramTriggerEvent),
      }),
    ]),
  )

export const TriggerConfig = z.discriminatedUnion('automationType', [
  z.object({
    config: InboxRuleConfig,
    automationType: z.literal(Automation.INBOX_RULE),
  }),
])

export const AutomationPreviewRequest = z
  .object({
    triggerConfig: TriggerConfig,
  })
  .and(
    z.discriminatedUnion('automationPreviewType', [
      z.object({
        automationPreviewType: z.literal(AutomationPreview.AD_HOC_VERIFICATION),
        text: z.string(),
        communityMemberId: z.string(),
      }),
      z.object({
        automationPreviewType: z.literal(AutomationPreview.FETCH_INBOX_ITEMS),
      }),
    ]),
  )

export const AutomationPreviewResponse = z.object({
  role: z.literal(MessageRole.SYSTEM),
  content: z.discriminatedUnion('type', [
    z.object({
      type: z.literal(AutomationPreview.AD_HOC_VERIFICATION),
      matched: z.boolean(),
    }),
    z.object({
      type: z.literal(AutomationPreview.FETCH_INBOX_ITEMS),
      sessionId: z.string(),
    }),
  ]),
})

export type AutomationPreviewResponseType = z.infer<
  typeof AutomationPreviewResponse
>

export type InboxRuleConfigType = z.infer<typeof InboxRuleConfig>

export type TriggerConfigType = z.infer<typeof TriggerConfig>
