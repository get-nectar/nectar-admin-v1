// @ts-nocheck
import { z } from 'zod'

import { Platform, WorkspaceUserActivityLogAction } from '@prisma/client'

// ----------------------------- Sent Items -----------------------------
export const SentItemsMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  dms: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type SentItemsMetricType = z.infer<typeof SentItemsMetricSchema>

export const SentItemsOverviewMetricSchema = z.object({
  dms_count: z.string().transform(Number),
  comments_count: z.string().transform(Number),
})

export type SentItemsOverviewMetricType = z.infer<
  typeof SentItemsOverviewMetricSchema
>

export type SentItemsMetricResponseType = {
  dmsCount: number
  commentsCount: number
  metrics: SentItemsMetricType[]
}

// ----------------------------- Resolved Items -----------------------------
export const ResolvedItemsMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  conversations: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type ResolvedItemsMetricType = z.infer<typeof ResolvedItemsMetricSchema>

export const ResolvedItemsOverviewMetricSchema = z.object({
  conversations: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type ResolvedItemsOverviewMetricType = z.infer<
  typeof ResolvedItemsOverviewMetricSchema
>

export type ResolvedItemsMetricResponseType = {
  conversationsCount: number
  commentsCount: number
  metrics: ResolvedItemsMetricType[]
}

// ----------------------------- Team Attributable Revenue -----------------------------
export const TeamAttributableRevenueMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  amount: z.number(),
})

export type TeamAttributableRevenueMetricType = z.infer<
  typeof TeamAttributableRevenueMetricSchema
>

export const TeamAttributableRevenueOverviewMetricSchema = z.object({
  amount: z.number(),
})

export type TeamAttributableRevenueOverviewMetricType = z.infer<
  typeof TeamAttributableRevenueOverviewMetricSchema
>

export type TeamAttributableRevenueMetricResponseType = {
  amount: number
  metrics: TeamAttributableRevenueMetricType[]
}

// ----------------------------- Response Time -----------------------------
export const ResponseTimeMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  avgDmResponseTime: z.number(),
  avgCommentResponseTime: z.number(),
})

export type ResponseTimeMetricType = z.infer<typeof ResponseTimeMetricSchema>

export const ResponseTimeOverviewMetricSchema = z.object({
  avgResponseTime: z.number(),
  avgDmResponseTime: z.number(),
  avgCommentResponseTime: z.number(),
})

export type ResponseTimeOverviewMetricType = z.infer<
  typeof ResponseTimeOverviewMetricSchema
>

export type ResponseTimeMetricResponseType = {
  avgResponseTime: number
  avgDmResponseTime: number
  avgCommentResponseTime: number
  metrics: ResponseTimeMetricType[]
}

// ----------------------------- Messages Per Platform -----------------------------
export const MessagesPerPlatformMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  received: z.string().transform(Number),
  replied: z.string().transform(Number),
  closed: z.string().transform(Number),
})

export type MessagesPerPlatformMetricType = z.infer<
  typeof MessagesPerPlatformMetricSchema
>

export type MessagesPerPlatformMetricResponseType = {
  metrics: MessagesPerPlatformMetricType[]
}

// ----------------------------- Conversation Assignments Per Channel -----------------------------
export const ConversationAssignmentsPerChannelMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  instagram: z.number(),
  facebook: z.number(),
  tiktok: z.number(),
})

export type ConversationAssignmentsPerChannelMetricType = z.infer<
  typeof ConversationAssignmentsPerChannelMetricSchema
>

export const ConversationAssignmentsPerChannelOverviewMetricSchema = z.object({
  instagram: z.number(),
  facebook: z.number(),
  tiktok: z.number(),
})

export type ConversationAssignmentsPerChannelOverviewMetricType = z.infer<
  typeof ConversationAssignmentsPerChannelOverviewMetricSchema
>

export const ConversationAssignmentsPerUserOverviewMetricSchema = z.object({
  workspaceUserId: z.string().uuid(),
  instagram: z.string(),
  facebook: z.string(),
  tiktok: z.string(),
})

export type ConversationAssignmentsPerUserOverviewMetricType = z.infer<
  typeof ConversationAssignmentsPerUserOverviewMetricSchema
>

export const ConversationAssignmentsPerUserOverviewResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nullish(),
  profilePictureUri: z.string().nullish(),
  instagram: z.string().transform(Number),
  facebook: z.string().transform(Number),
  tiktok: z.string().transform(Number),
})

export type ConversationAssignmentsPerUserOverviewResponseType = z.infer<
  typeof ConversationAssignmentsPerUserOverviewResponseSchema
>

export type ConversationAssignmentsPerChannelMetricResponseType = {
  instagram: number
  facebook: number
  tiktok: number
  metrics: ConversationAssignmentsPerChannelMetricType[]
  perUserOverview: Array<ConversationAssignmentsPerUserOverviewResponseType>
}

// ----------------------------- Responses -----------------------------
export const ResponsesMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  commentsWithResponse: z.string().transform(Number),
  commentsWithoutResponse: z.string().transform(Number),
  dmsWithResponse: z.string().transform(Number),
  dmsWithoutResponse: z.string().transform(Number),
})

export type ResponsesMetricType = z.infer<typeof ResponsesMetricSchema>

export const ResponsesOverviewMetricSchema = z.object({
  commentsWithResponse: z.string().transform(Number),
  commentsWithoutResponse: z.string().transform(Number),
  dmsWithResponse: z.string().transform(Number),
  dmsWithoutResponse: z.string().transform(Number),
})

export type ResponsesOverviewMetricType = z.infer<
  typeof ResponsesOverviewMetricSchema
>

export const ResponsesBreakdownMetricSchema = z.object({
  total: z.string().transform(Number),
  previousTotal: z.string().transform(Number),
  commentsWithResponse: z.string().transform(Number),
  previousCommentsWithResponse: z.string().transform(Number),
  commentsWithoutResponse: z.string().transform(Number),
  previousCommentsWithoutResponse: z.string().transform(Number),
  dmsWithResponse: z.string().transform(Number),
  previousDmsWithResponse: z.string().transform(Number),
  dmsWithoutResponse: z.string().transform(Number),
  previousDmsWithoutResponse: z.string().transform(Number),
})

export type ResponsesBreakdownMetricType = z.infer<
  typeof ResponsesBreakdownMetricSchema
>

export type ResponsesMetricResponseType = {
  commentsWithResponse: number
  commentsWithoutResponse: number
  dmsWithResponse: number
  dmsWithoutResponse: number
  metrics: ResponsesMetricType[]
  breakdown: ResponsesBreakdownMetricType
}

// ----------------------------- Team SLA Report -----------------------------
export const TeamSlaReportMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  messagesWithinSla: z.string().transform(Number),
  messagesOutsideSla: z.string().transform(Number),
  dms: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type TeamSlaReportMetricType = z.infer<typeof TeamSlaReportMetricSchema>

export const TeamSlaReportOverviewMetricSchema = z.object({
  messagesWithinSla: z.string().transform(Number),
  messagesOutsideSla: z.string().transform(Number),
  dms: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type TeamSlaReportOverviewMetricType = z.infer<
  typeof ResponsesOverviewMetricSchema
>

export enum AgentPerformanceMetricEventSenderType {
  WORKSPACE_USER = 'WORKSPACE_USER',
  AUTOPILOT = 'AUTOPILOT',
  JOURNEY = 'JOURNEY',
}

export const TeamSlaReportPerUserOverviewMetricSchema =
  TeamSlaReportOverviewMetricSchema.extend({
    workspaceUserId: z.union([
      z.string().uuid(),
      z.nativeEnum(AgentPerformanceMetricEventSenderType),
    ]),
    averageResponseTimeInSeconds: z.number(),
  })

export type TeamSlaReportPerUserOverviewMetricType = z.infer<
  typeof TeamSlaReportPerUserOverviewMetricSchema
>

export const TeamSlaReportPerUserOverviewResponseSchema = z.object({
  id: z.union([
    z.string().uuid(),
    z.nativeEnum(AgentPerformanceMetricEventSenderType),
  ]),
  name: z.string().nullish(),
  profilePictureUri: z.string().nullish(),
  messagesWithinSla: z.string().transform(Number),
  messagesOutsideSla: z.string().transform(Number),
  dms: z.string().transform(Number),
  comments: z.string().transform(Number),
  averageResponseTimeInSeconds: z.number(),
})

export type TeamSlaReportPerUserOverviewResponseType = z.infer<
  typeof TeamSlaReportPerUserOverviewResponseSchema
>

export type TeamSlaReportMetricResponseType = {
  messagesWithinSla: number
  messagesOutsideSla: number
  dms: number
  comments: number
  metrics: TeamSlaReportMetricType[]
  perUserOverview: Array<TeamSlaReportPerUserOverviewResponseType>
}

// ----------------------------- Agent Performance Metrics -----------------------------

export enum AgentPerformanceMetricType {
  SENT_ITEMS = 'SENT_ITEMS',
  RESOLVED_ITEMS = 'RESOLVED_ITEMS',
  TEAM_ATTRIBUTABLE_REVENUE = 'TEAM_ATTRIBUTABLE_REVENUE',
  MESSAGES_PER_PLATFORM = 'MESSAGES_PER_PLATFORM',
  RESPONSE_TIME = 'RESPONSE_TIME',
  RESPONSES = 'RESPONSES',
  CONVERSATION_ASSIGNMENTS_PER_CHANNEL = 'CONVERSATION_ASSIGNMENTS_PER_CHANNEL',
  TEAM_SLA_REPORT = 'TEAM_SLA_REPORT',
}

export type AgentPerformanceMetricsResponseTypeMap = {
  [AgentPerformanceMetricType.SENT_ITEMS]: SentItemsMetricResponseType
  [AgentPerformanceMetricType.RESOLVED_ITEMS]: ResolvedItemsMetricResponseType
  [AgentPerformanceMetricType.TEAM_ATTRIBUTABLE_REVENUE]: TeamAttributableRevenueMetricResponseType
  [AgentPerformanceMetricType.MESSAGES_PER_PLATFORM]: MessagesPerPlatformMetricResponseType
  [AgentPerformanceMetricType.RESPONSE_TIME]: ResponseTimeMetricResponseType
  [AgentPerformanceMetricType.RESPONSES]: ResponsesMetricResponseType
  [AgentPerformanceMetricType.CONVERSATION_ASSIGNMENTS_PER_CHANNEL]: ConversationAssignmentsPerChannelMetricResponseType
  [AgentPerformanceMetricType.TEAM_SLA_REPORT]: TeamSlaReportMetricResponseType
}

export const WorkspaceUserResolutionCountSchema = z.object({
  workspaceUserId: z.string(),
  count: z.string(),
})

export type WorkspaceUserResolutionCountType = z.infer<
  typeof WorkspaceUserResolutionCountSchema
>

export const AgentPerformanceTopPerformersResponseSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  profilePictureUri: z.string().nullish(),
  closedMessages: z.string().transform(Number),
})

export type AgentPerformanceTopPerformersResponseType = z.infer<
  typeof AgentPerformanceTopPerformersResponseSchema
>

export const WorkspaceUserStatsSchema = z.object({
  workspaceUserId: z.union([
    z.string().uuid(),
    z.nativeEnum(AgentPerformanceMetricEventSenderType),
  ]),
  resolvedCount: z.string(),
  sentCount: z.string(),
  openCount: z.string(),
  instagramCount: z.string(),
  facebookCount: z.string(),
  tiktokCount: z.string(),
  activeTimeInSeconds: z.string(),
  sales: z.number(),
  completionRate: z.number(),
  overallResolutionRate: z.number(),
})

export type WorkspaceUserStatsType = z.infer<typeof WorkspaceUserStatsSchema>

export const AgentPerformanceAgentsOverviewRequestSchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
})

export type AgentPerformanceAgentsOverviewRequestType = z.infer<
  typeof AgentPerformanceAgentsOverviewRequestSchema
>

export const AgentPerformanceAgentsOverviewResponseSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  profilePictureUri: z.string().nullish(),
  resolvedCount: z.string().transform(Number),
  sentCount: z.string().transform(Number),
  openCount: z.string().transform(Number),
  instagramCount: z.string().transform(Number),
  facebookCount: z.string().transform(Number),
  tiktokCount: z.string().transform(Number),
  activeTimeInSeconds: z.string().transform(Number),
  sales: z.number(),
  completionRate: z.number(),
  overallResolutionRate: z.number(),
})

export type AgentPerformanceAgentsOverviewResponseType = z.infer<
  typeof AgentPerformanceAgentsOverviewResponseSchema
>

export const AgentPerformanceTrackActivityLogRequestSchema = z.object({
  logAction: z.nativeEnum(WorkspaceUserActivityLogAction),
  pagePathname: z.string(),
})

export type AgentPerformanceTrackActivityLogRequestType = z.infer<
  typeof AgentPerformanceTrackActivityLogRequestSchema
>

export const WorkspaceLastActiveTimeSchema = z.object({
  workspaceUserId: z.string(),
  lastOnlineMinutes: z.number(),
})

export type WorkspaceLastActiveTimeType = z.infer<
  typeof WorkspaceLastActiveTimeSchema
>

export const WorkspaceOpenMessagesSchema = z.object({
  assignedOpenCount: z.string(),
  unassignedOpenCount: z.string(),
})

export type WorkspaceOpenMessagesType = z.infer<
  typeof WorkspaceOpenMessagesSchema
>

export const WorkspaceLastestActivityResponseSchema = z.object({
  onlineAgentsCount: z.number(),
  offlineAgentsCount: z.number(),
  assignedOpenMessagesCount: z.number(),
  unassignedOpenMessagesCount: z.number(),
})

export type WorkspaceLastestActivityResponseType = z.infer<
  typeof WorkspaceLastestActivityResponseSchema
>

export const FetchAgentPerformanceMetricsSchema = z.object({
  workspaceId: z.string().nullish(),
  ticks: z.string().nullish(),
  startDate: z.date().nullish(),
  endDate: z.date().nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  shouldPassPlatforms: z.boolean().nullish(),
  workingHours: z.array(z.number()).nullish(),
  shouldPassWorkingHours: z.boolean().nullish(),
  shouldPassStartAndEndDate: z.boolean().nullish(),
  timezone: z.string().nullish(),
})

export type FetchAgentPerformanceMetricsType = z.infer<
  typeof FetchAgentPerformanceMetricsSchema
>
