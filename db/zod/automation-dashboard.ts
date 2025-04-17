// @ts-nocheck
import { z } from 'zod'

import { DashboardMetricsBaseRequestSchema } from './dashboard'

// ----------------------------- Autopilot Overview -----------------------------------------------
export const AutopilotOverviewMetricSchema = z.object({
  dm_triggered: z.string().transform(Number),
  dm_sent: z.string().transform(Number),
  dm_generated: z.string().transform(Number),
  comment_triggered: z.string().transform(Number),
  comment_sent: z.string().transform(Number),
  comment_generated: z.string().transform(Number),
  avg_resolution_time: z.number().nullable(),
})

export type AutopilotOverviewMetricType = z.infer<
  typeof AutopilotOverviewMetricSchema
>

export type AutopilotOverviewMetricResponseType = {
  metrics: AutopilotOverviewMetricType & {
    enabled_topics_count: {
      draft: number
      autopilot: number
    }
    has_non_zero_delay: boolean
    message_automation_rate: number
    comment_automation_rate: number
  }
  triggered_messages: AllAutopilotTriggeredMessagesMetricType[]
  generated_messages: AllAutopilotGeneratedMessagesMetricType[]
  sent_messages: AllAutopilotSentMessagesMetricType[]
}

// ----------------------------- All Autopilot Sent Messages --------------------------------------
export const AllAutopilotSentMessagesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  comment_sent: z.string().transform(Number),
  dm_sent: z.string().transform(Number),
})

export type AllAutopilotSentMessagesMetricType = z.infer<
  typeof AllAutopilotSentMessagesMetricSchema
>

// ----------------------------- All Autopilot Triggered Messages ---------------------------------
export const AllAutopilotTriggeredMessagesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  comment_triggered: z.string().transform(Number),
  dm_triggered: z.string().transform(Number),
})

export type AllAutopilotTriggeredMessagesMetricType = z.infer<
  typeof AllAutopilotTriggeredMessagesMetricSchema
>

// ----------------------------- All Autopilot Generated Messages ---------------------------------
export const AllAutopilotGeneratedMessagesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  comment_generated: z.string().transform(Number),
  dm_generated: z.string().transform(Number),
})

export type AllAutopilotGeneratedMessagesMetricType = z.infer<
  typeof AllAutopilotGeneratedMessagesMetricSchema
>

// ----------------------------- Autopilot Sent Messages ------------------------------------------
export const AutopilotSentMessagesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  instagram_comment_sent: z.string().transform(Number),
  instagram_dm_sent: z.string().transform(Number),
  facebook_comment_sent: z.string().transform(Number),
  facebook_dm_sent: z.string().transform(Number),
  tiktok_sent: z.string().transform(Number),
  tiktok_shop_sent: z.string().transform(Number),
})

export type AutopilotSentMessagesMetricType = z.infer<
  typeof AutopilotSentMessagesMetricSchema
>

export type AutopilotSentMessagesMetricResponseType = {
  metrics: AutopilotSentMessagesMetricType[]
  platform_sent_messages_sum: AutopilotPlatformSentMessagesSumMetricType
}

// ----------------------------- Autopilot Platform Sent Messages Sum -----------------------------
export const AutopilotPlatformSentMessagesSumMetricSchema = z.object({
  instagram_comment_sent: z.string().transform(Number),
  instagram_dm_sent: z.string().transform(Number),
  facebook_comment_sent: z.string().transform(Number),
  facebook_dm_sent: z.string().transform(Number),
  tiktok_sent: z.string().transform(Number),
  tiktok_shop_sent: z.string().transform(Number),
})

export type AutopilotPlatformSentMessagesSumMetricType = z.infer<
  typeof AutopilotPlatformSentMessagesSumMetricSchema
>

// ----------------------------- Autopilot Intent -------------------------------------------------
export const AutopilotIntentMetricSchema = z.object({
  title: z.string().nullable(),
  categories: z.array(z.string().nullable()).nullable(),
  dm_triggered: z.string().transform(Number),
  dm_sent: z.string().transform(Number),
  dm_generated: z.string().transform(Number),
  dm_resolved: z.string().transform(Number),
  comment_triggered: z.string().transform(Number),
  comment_sent: z.string().transform(Number),
  comment_generated: z.string().transform(Number),
  comment_resolved: z.string().transform(Number),
  active_platforms: z.array(z.string().nullable()).nullable(),
})

export type AutopilotIntentMetricType = z.infer<
  typeof AutopilotIntentMetricSchema
>

// ----------------------------- Autopilot Dashboard Metrics --------------------------------------
export enum AutopilotMetricType {
  OVERVIEW = 'OVERVIEW',
  SENT_MESSAGES = 'SENT_MESSAGES',
  INTENT = 'INTENT',
}

export type AutopilotMetricsResponseTypeMap = {
  [AutopilotMetricType.OVERVIEW]: AutopilotOverviewMetricResponseType
  [AutopilotMetricType.SENT_MESSAGES]: AutopilotSentMessagesMetricResponseType
  [AutopilotMetricType.INTENT]: AutopilotIntentMetricType[]
}

export const AutopilotMetricsRequestSchema =
  DashboardMetricsBaseRequestSchema.extend({
    metricType: z.nativeEnum(AutopilotMetricType),
  })

export type AutopilotMetricsRequestType = z.infer<
  typeof AutopilotMetricsRequestSchema
>

// ----------------------------- Copilot Dashboard Metrics ----------------------------------------
export enum CopilotMetricType {
  OVERVIEW = 'OVERVIEW',
  GENERATED_RESPONSES = 'GENERATED_RESPONSES',
  QUESTIONS_CATEGORIZED = 'QUESTIONS_CATEGORIZED',
}

export type CopilotMetricsResponseTypeMap = {
  [CopilotMetricType.OVERVIEW]: CopilotOverviewMetricResponseType
  [CopilotMetricType.GENERATED_RESPONSES]: CopilotGeneratedResponsesMetricResponseType
  [CopilotMetricType.QUESTIONS_CATEGORIZED]: CopilotQuestionsCategoriesMetricType
}

export const CopilotMetricsRequestSchema =
  DashboardMetricsBaseRequestSchema.extend({
    metricType: z.nativeEnum(CopilotMetricType),
  })

export type CopilotMetricsRequestType = z.infer<
  typeof CopilotMetricsRequestSchema
>

// ----------------------------- Copilot Overview ------------------------------------------------
export const CopilotOverviewMetricSchema = z.object({
  distinct_users: z.string().transform(Number),
  distinct_conversation_ids: z.string(),
  distinct_content_ids: z.string(),
  total_responses_generated: z.string().transform(Number),
  total_responses_sent: z.string().transform(Number),
  conversation_sessions: z.string().transform(Number),
  content_sessions: z.string().transform(Number),
  total_questions: z.string().transform(Number),
})

export type CopilotOverviewMetricType = z.infer<
  typeof CopilotOverviewMetricSchema
>

export type CopilotOverviewMetricResponseType = {
  metrics: Omit<
    CopilotOverviewMetricType,
    'distinct_conversation_ids' | 'distinct_content_ids'
  > & {
    comment_assisted_rate: number
    message_assisted_rate: number
  }
  conversations: CopilotConversationsMetricType[]
  questions: CopilotQuestionsMetricType[]
  generated_responses: CopilotGeneratedResponsesMetricType[]
  sent_responses: CopilotSentResponsesMetricType[]
  top_users: CopilotTopUsersMetricResponseType[]
}

// ----------------------------- Copilot Top Users ------------------------------------------------
export const CopilotTopUsersMetricSchema = z.object({
  top_1_users_ids: z.string(),
  top_1_session_count: z.string().transform(Number),
  top_2_users_ids: z.string(),
  top_2_session_count: z.string().transform(Number),
  top_3_users_ids: z.string(),
  top_3_session_count: z.string().transform(Number),
  top_4_users_ids: z.string(),
  top_4_session_count: z.string().transform(Number),
})

export type CopilotTopUsersMetricType = z.infer<
  typeof CopilotTopUsersMetricSchema
>

export type UserDetailsType = {
  id: string
  name: string
  profilePictureUri: string
}

export type CopilotTopUsersMetricResponseType = {
  users: UserDetailsType[]
  session_count: number
}

// ----------------------------- Copilot Conversations --------------------------------------------
export const CopilotConversationsMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  content_convos: z.string().transform(Number),
  dm_convos: z.string().transform(Number),
})

export type CopilotConversationsMetricType = z.infer<
  typeof CopilotConversationsMetricSchema
>

// ----------------------------- Copilot Questions ------------------------------------------------
export const CopilotQuestionsMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  content_questions: z.string().transform(Number),
  dm_questions: z.string().transform(Number),
})

export type CopilotQuestionsMetricType = z.infer<
  typeof CopilotQuestionsMetricSchema
>

// ----------------------------- Copilot Genereated Responses -------------------------------------
export const CopilotGeneratedResponsesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  comment_generated: z.string().transform(Number),
  dm_generated: z.string().transform(Number),
})

export type CopilotGeneratedResponsesMetricType = z.infer<
  typeof CopilotGeneratedResponsesMetricSchema
>

// ----------------------------- Copilot Sent Responses -------------------------------------------
export const CopilotSentResponsesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  comment_sent: z.string().transform(Number),
  dm_sent: z.string().transform(Number),
})

export type CopilotSentResponsesMetricType = z.infer<
  typeof CopilotSentResponsesMetricSchema
>

// ----------------------------- Copilot Platform Generated Responses -----------------------------
export const CopilotPlatformGeneratedResponsesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  instagram_comment_generated: z.string().transform(Number),
  instagram_dm_generated: z.string().transform(Number),
  facebook_comment_generated: z.string().transform(Number),
  facebook_dm_generated: z.string().transform(Number),
  tiktok_generated: z.string().transform(Number),
  tiktok_shop_generated: z.string().transform(Number),
})

export type CopilotPlatformGeneratedResponsesMetricType = z.infer<
  typeof CopilotPlatformGeneratedResponsesMetricSchema
>

export type CopilotGeneratedResponsesMetricResponseType = {
  metrics: CopilotPlatformGeneratedResponsesMetricType[]
  platform_generated_responses_sum: CopilotPlatformGeneratedResponsesSumMetricType
}

// ----------------------------- Copilot Platform Generated Responses Sum -------------------------
export const CopilotPlatformGeneratedResponsesSumMetricSchema = z.object({
  instagram_comment_generated: z.string().transform(Number),
  instagram_dm_generated: z.string().transform(Number),
  facebook_comment_generated: z.string().transform(Number),
  facebook_dm_generated: z.string().transform(Number),
  tiktok_generated: z.string().transform(Number),
  tiktok_shop_generated: z.string().transform(Number),
})

export type CopilotPlatformGeneratedResponsesSumMetricType = z.infer<
  typeof CopilotPlatformGeneratedResponsesSumMetricSchema
>

// ----------------------------- Copilot Questions Categorized ------------------------------------
export const CopilotQuestionCategoriesMetricSchema = z.object({
  filter_comments: z.string().transform(Number),
  draft_comment_replies: z.string().transform(Number),
  draft_dm_replies: z.string().transform(Number),
  comment_analysis: z.string().transform(Number),
  dm_analysis: z.string().transform(Number),
  kb_info: z.string().transform(Number),
  customer_lookup: z.string().transform(Number),
})

export type CopilotQuestionsCategoriesMetricType = z.infer<
  typeof CopilotQuestionCategoriesMetricSchema
>

// ----------------------------- Overall Dashboard Metrics ----------------------------------------

export enum OverallAIMetricType {
  OVERVIEW = 'OVERVIEW',
  OUTBOUND_MESSAGES = 'OUTBOUND_MESSAGES',
}

export type OverallAIMetricsResponseTypeMap = {
  [OverallAIMetricType.OVERVIEW]: OverallAIOverviewMetricResponseType
  [OverallAIMetricType.OUTBOUND_MESSAGES]: OverallAIOutboundMessagesMetricType
}

export const OverallAIMetricsRequestSchema =
  DashboardMetricsBaseRequestSchema.extend({
    metricType: z.nativeEnum(OverallAIMetricType),
  })

export type OverallAIMetricsRequestType = z.infer<
  typeof OverallAIMetricsRequestSchema
>

// ----------------------------- Overall AI Overview Response ------------------------------------
export type OverallAIOverviewMetricResponseType = {
  metrics: {
    comment_assisted_rate: number
    message_assisted_rate: number
    conversation_sessions: number
    content_sessions: number
    avg_resolution_time: number | null
    total_responses_generated: number
    total_responses_sent: number
    enabled_topics_count: {
      draft: number
      autopilot: number
    }
    has_non_zero_delay: boolean
    message_automation_rate: number
    comment_automation_rate: number
  }
  conversations: CopilotConversationsMetricType[]
  generated_messages: CopilotGeneratedResponsesMetricType[]
  sent_messages: CopilotSentResponsesMetricType[]
}

// ----------------------------- Overall AI Outbound Messages -------------------------------------
const platformSentFields = {
  instagram_manual_sent: z.string().transform(Number),
  instagram_autopilot_sent: z.string().transform(Number),
  instagram_copilot_sent: z.string().transform(Number),
  facebook_manual_sent: z.string().transform(Number),
  facebook_autopilot_sent: z.string().transform(Number),
  facebook_copilot_sent: z.string().transform(Number),
  tiktok_manual_sent: z.string().transform(Number),
  tiktok_autopilot_sent: z.string().transform(Number),
  tiktok_copilot_sent: z.string().transform(Number),
  tiktok_shop_manual_sent: z.string().transform(Number),
  tiktok_shop_autopilot_sent: z.string().transform(Number),
  tiktok_shop_copilot_sent: z.string().transform(Number),
} as const

export const OutboundMessagesCountMetricSchema = z.object({
  ...platformSentFields,
})

export type OutboundMessagesCountMetricType = z.infer<
  typeof OutboundMessagesCountMetricSchema
>

export const OutboundMessagesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  ...platformSentFields,
})

export type OutboundMessagesMetricType = z.infer<
  typeof OutboundMessagesMetricSchema
>

export const OverallAIOutboundMessagesMetricSchema = z.object({
  metrics: OutboundMessagesCountMetricSchema,
  sent_messages: z.array(OutboundMessagesMetricSchema),
})

export type OverallAIOutboundMessagesMetricType = z.infer<
  typeof OverallAIOutboundMessagesMetricSchema
>
