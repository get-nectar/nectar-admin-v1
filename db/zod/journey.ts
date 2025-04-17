// @ts-nocheck
import { z } from 'zod'

import {
  ActionBlockType,
  DelayType,
  FacebookTriggerEvent,
  InstagramTriggerEvent,
  JourneyMetricType,
  JourneyStatus,
  MetricDisplayFormat,
  MetricTimePeriod,
  Platform,
  TriggerReplyCondition,
  TriggerScope,
  TriggerType,
} from '@prisma/client'

import {
  CardAttachmentWithoutLinkSchema,
  MediaAttachmentSchema,
} from './attachment'
import { prismaJsonSchema } from './common'

export enum CustomResponseContentVariant {
  STATIC = 'STATIC',
  AI_GENERATED = 'AI_GENERATED',
}

export enum CustomResponseVariant {
  DM = 'DM',
  COMMENT = 'COMMENT',
}

export enum JourneyEntity {
  COMMENT = 'COMMENT',
  MESSAGE = 'MESSAGE',
  CONTENT = 'CONTENT',
  COMMUNITY_MEMBER = 'COMMUNITY_MEMBER',
}

export enum PivotFilter {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  DRAFT = 'DRAFT',
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
}

export const JourneyMaxExecutionCountFiniteSchema = z.object({
  isInfinite: z.literal(false),
  count: z.number(),
})

export const JourneyMaxExecutionCountInfiniteSchema = z.object({
  isInfinite: z.literal(true),
})

export const JourneyMaxExecutionCountSchema = z
  .discriminatedUnion('isInfinite', [
    JourneyMaxExecutionCountFiniteSchema,
    JourneyMaxExecutionCountInfiniteSchema,
  ])
  .nullish()

export const JourneyConfigSchema = z
  .object({
    maxExecutionCount: JourneyMaxExecutionCountSchema,
  })
  .nullish()

export type JourneyConfigSchemaType = z.infer<typeof JourneyConfigSchema>

export const CustomResponseVariantConfig = z.object({
  isEnabled: z.boolean(),
  content: z.record(z.string(), z.unknown()).nullable(),
  contentVariant: z.nativeEnum(CustomResponseContentVariant),
  aiGeneratedContent: z.array(z.unknown()).optional(),
  cards: z.array(CardAttachmentWithoutLinkSchema).optional(),
  attachments: z.array(MediaAttachmentSchema).optional(),
})

export const CustomResponseBlockConfigSchema = z.record(
  z.nativeEnum(CustomResponseVariant),
  CustomResponseVariantConfig.optional(),
)

export const DelaySchema = z.object({
  type: z.nativeEnum(DelayType),
  scheduleTimestamp: z.coerce.date().nullish(),
  days: z.number().nullish(),
  hours: z.number().nullish(),
  minutes: z.number().nullish(),
})

export const JourneyUpdateActionBlockSchema = z.array(
  z.object({
    id: z.string(),
    type: z.nativeEnum(ActionBlockType),
    delay: DelaySchema.nullish(),
    configValues: prismaJsonSchema,
    prompt: z.string(),
    responseJourneyId: z.string(),
  }),
)

export const JourneyTriggerUpdateSchema = z.object({
  type: z.nativeEnum(TriggerType),
})

export const MetaTriggerUpdateSchema = z.object({
  triggerWords: z.array(z.string()),
  triggerIntents: z.array(z.string()),
  scope: z.nativeEnum(TriggerScope),
  replyCondition: z.nativeEnum(TriggerReplyCondition).nullish(),
  isDisabledOnNegativeSentiment: z.boolean(),
  additionalConditions: prismaJsonSchema,
  additionalConditionsUniqueHash: z.string().default(''),
  type: z.enum([TriggerType.FACEBOOK, TriggerType.INSTAGRAM]),
  event: z.union([
    z.nativeEnum(InstagramTriggerEvent),
    z.nativeEnum(FacebookTriggerEvent),
  ]),
  instagramAccountId: z.string().uuid().nullish(),
  facebookPageAccountId: z.string().uuid().nullish(),
})

export const MetaTriggerUpsertSchema = z.object({
  triggerWords: z.array(z.string()),
  triggerIntents: z.array(z.string()),
  scope: z.nativeEnum(TriggerScope),
  replyCondition: z.nativeEnum(TriggerReplyCondition).nullish(),
  isDisabledOnNegativeSentiment: z.boolean(),
  additionalConditions: prismaJsonSchema,
  additionalConditionsUniqueHash: z.string().default(''),
  type: z.enum([TriggerType.FACEBOOK, TriggerType.INSTAGRAM]),
  event: z.union([
    z.nativeEnum(InstagramTriggerEvent),
    z.nativeEnum(FacebookTriggerEvent),
  ]),
  contentIds: z.array(z.string().uuid()).nullish(),
  instagramAccountId: z.string().uuid().nullish(),
  facebookPageAccountId: z.string().uuid().nullish(),
})

export const JourneyTriggerUpsertSchema = z.object({
  type: z.nativeEnum(TriggerType),
  metaTrigger: MetaTriggerUpsertSchema.nullish(),
})

export const JourneyUpdateJourneySchema = z.object({
  name: z.string(),
  status: z.nativeEnum(JourneyStatus),
  blockOrder: prismaJsonSchema,
  config: JourneyConfigSchema.nullish(),
})

export const JourneyUpdateSchema = z.object({
  journeyId: z.string().uuid(),
  journey: JourneyUpdateJourneySchema,
  contentId: z.string().uuid().nullish(),
  latestUpdatedById: z.string().uuid().nullish(),
  actionBlocks: JourneyUpdateActionBlockSchema,
  trigger: JourneyTriggerUpdateSchema,
  metaTrigger: MetaTriggerUpdateSchema.nullish(),
})

export const JourneyUpsertCommonSchema = z.object({
  journey: JourneyUpdateJourneySchema,
  latestUpdatedById: z.string().uuid().nullish(),
  actionBlocks: JourneyUpdateActionBlockSchema,
  triggers: JourneyTriggerUpsertSchema.array(),
})

export const JourneyUpdateSchemaV2 = JourneyUpsertCommonSchema.extend({
  type: z.literal('UPDATE'),
  journeyId: z.string().uuid(),
})

export const JourneyCreateSchema = JourneyUpsertCommonSchema.extend({
  type: z.literal('CREATE'),
  workspaceId: z.string().uuid(),
})

export const JourneyUpsertSchema = z.discriminatedUnion('type', [
  JourneyUpdateSchemaV2,
  JourneyCreateSchema,
])

export const BlockOrderSchema = z.record(z.string(), z.number())

export const ManualJourneyEnqueueCommonSchema = z.object({
  entityId: z.string().uuid(),
  journeyId: z.string().uuid(),
  triggeredByWorkspaceUserId: z.string().uuid().nullish(),
  shouldAbortIfJourneyAlreadyExecuted: z.boolean().nullish(),
})

export const ManualJourneyEnqueueMessageSchema =
  ManualJourneyEnqueueCommonSchema.extend({
    entity: z.literal(JourneyEntity.MESSAGE),
  })

export const ManualJourneyEnqueueCommentSchema =
  ManualJourneyEnqueueCommonSchema.extend({
    entity: z.literal(JourneyEntity.COMMENT),
  })

export const ManualJourneyEnqueueCommunityMemberSchema =
  ManualJourneyEnqueueCommonSchema.extend({
    entity: z.literal(JourneyEntity.COMMUNITY_MEMBER),
    platform: z.nativeEnum(Platform),
    accountId: z.string().uuid(),
  })

export const ManualJourneyEnqueueSchema = z.object({
  data: z.array(
    z.discriminatedUnion('entity', [
      ManualJourneyEnqueueMessageSchema,
      ManualJourneyEnqueueCommunityMemberSchema,
      ManualJourneyEnqueueCommentSchema,
    ]),
  ),
})

export const PivotFilterCountsQueryParamsSchema = z.object({
  workspaceId: z.string().uuid(),
})

export const JourneyAnalyticsOverviewQueryParamsSchema = z.object({
  startRangeStartDate: z.string().datetime().nullish(),
  startRangeEndDate: z.string().datetime().nullish(),
  endRangeStartDate: z.string().datetime().nullish(),
  endRangeEndDate: z.string().datetime().nullish(),
})

export type JourneyAnalyticsOverviewQueryParamsType = z.infer<
  typeof JourneyAnalyticsOverviewQueryParamsSchema
>

export type JourneyAnalyticsOverview = {
  uniqueUsers: number
  quizCompletion: number
  dataCollected: number
  revenue: number
  abandonCarts: number
}

export type JourneyAnalyticsOverviewResponse = {
  current: JourneyAnalyticsOverview
  previous?: JourneyAnalyticsOverview | null
}

export type PivotFilterCountsResponse = {
  counts: Record<PivotFilter, number>
}

export const JourneyMetricTimeSeriesSchema = z.object({
  journeyId: z.string().uuid(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  metricName: z.nativeEnum(JourneyMetricType),
  timePeriod: z.nativeEnum(MetricTimePeriod),
  showHourlyMetrics: z.string().transform((arg) => arg === 'true'),
})

export type JourneyMetricTimeSeriesSchemaType = z.infer<
  typeof JourneyMetricTimeSeriesSchema
>

export type JourneyTimeSeries = Array<{
  currentValue: number
  lifetimeValue: number
  calculatedTimestamp: Date
  displayFormat: MetricDisplayFormat
}>

export type JourneyTimeSeriesResponse = {
  data: {
    timeSeries: JourneyTimeSeries
  }
}

export enum TestEnum {
  Test = 'Test',
}

export enum EntityType {
  CONDITION = 'CONDITION',
  LOGICAL_CONNECTOR = 'LOGICAL_CONNECTOR',
}

export enum LogicalConnector {
  AND = 'AND',
  OR = 'OR',
}
