// @ts-nocheck
import { z } from 'zod'

import {
  CommunityInsightBin,
  ContentSurface,
  ContentType,
  InsightGroupStatus,
  MessageType,
  MetricTimePeriod,
  Platform,
  Prisma,
  Sentiment,
} from '@prisma/client'

import { AgentPerformanceMetricType } from './agent-performance'

// ----------------------------- Message Volume -----------------------------
export const MessageVolumeMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  dms: z.string().transform(Number),
  comments: z.string().transform(Number),
})

export type MessageVolumeMetricType = z.infer<typeof MessageVolumeMetricSchema>

export const MessageVolumeOverviewMetricSchema = z.object({
  total_count: z.string().transform(Number),
  dms_count: z.string().transform(Number),
  comments_count: z.string().transform(Number),
})

export type MessageVolumeOverviewMetricType = z.infer<
  typeof MessageVolumeOverviewMetricSchema
>

export type MessageVolumeMetricResponseType = {
  totalCount: number
  dmsCount: number
  commentsCount: number
  metrics: MessageVolumeMetricType[]
}

// ----------------------------- Response Rate -----------------------------
export const ResponseRateMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  conversation_ai_response_rate: z.number(),
  conversation_manual_response_rate: z.number(),
  conversation_response_rate: z.number(),
  comment_ai_response_rate: z.number(),
  comment_manual_response_rate: z.number(),
  comment_response_rate: z.number(),
})

export type ResponseRateMetricType = z.infer<typeof ResponseRateMetricSchema>

export const ResponseRateOverviewMetricSchema = z.object({
  overall_response_rate: z.number(),
  conversation_response_rate: z.number(),
  comment_response_rate: z.number(),
})

export type ResponseRateOverviewMetricType = z.infer<
  typeof ResponseRateOverviewMetricSchema
>

export type ResponseRateMetricResponseType = {
  overallResponseRate: number
  conversationResponseRate: number
  commentResponseRate: number
  metrics: ResponseRateMetricType[]
}

// ----------------------------- Community Members -----------------------------
export const CommunityMemberMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  high_count: z.string().transform(Number),
  medium_count: z.string().transform(Number),
  low_count: z.string().transform(Number),
  spam_count: z.string().transform(Number),
  shopify_count: z.string().transform(Number),
  new_count: z.string().transform(Number),
})

export type CommunityMemberMetricType = z.infer<
  typeof CommunityMemberMetricSchema
>

export const CommunityMemberOverviewMetricSchema = z.object({
  total_count: z.string().transform(Number),
  high_count: z.string().transform(Number),
  medium_count: z.string().transform(Number),
  low_count: z.string().transform(Number),
  spam_count: z.string().transform(Number),
  shopify_count: z.string().transform(Number),
  new_count: z.string().transform(Number),
})

export type CommunityMemberOverviewMetricType = z.infer<
  typeof CommunityMemberOverviewMetricSchema
>

export type CommunityMemberMetricResponseType = {
  totalCount: number
  highCount: number
  mediumCount: number
  lowCount: number
  spamCount: number
  shopifyCount: number
  newCount: number
  metrics: CommunityMemberMetricType[]
}

// ----------------------------- Revenue -----------------------------
export const RevenueMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  attributed_revenue: z.number(),
  community_revenue: z.number(),
  // TODO: [Danish] Remove nullish when the FE is updated
  content_attributed_revenue: z.number().nullish(),
  inbox_attributed_revenue: z.number().nullish(),
  journey_attributed_revenue: z.number().nullish(),
  blast_attributed_revenue: z.number().nullish(),
  absent_link_attributed_revenue: z.number().nullish(),
})

export type RevenueMetricType = z.infer<typeof RevenueMetricSchema>

export const RevenueOverviewMetricSchema = z.object({
  overall_attributed_revenue: z.number(),
  overall_community_revenue: z.number(),
  // TODO: [Danish] Remove nullish when the FE is updated
  content_attributed_revenue: z.number().nullish(),
  inbox_attributed_revenue: z.number().nullish(),
  journey_attributed_revenue: z.number().nullish(),
  blast_attributed_revenue: z.number().nullish(),
  absent_link_attributed_revenue: z.number().nullish(),
})

export type RevenueOverviewMetricType = z.infer<
  typeof RevenueOverviewMetricSchema
>

export type RevenueMetricResponseType = {
  overallAttributedRevenue: number
  overallCommunityRevenue: number
  contentAttributedRevenue?: number | null
  inboxAttributedRevenue?: number | null
  journeyAttributedRevenue?: number | null
  blastAttributedRevenue?: number | null
  absentLinkAttributedRevenue?: number | null
  metrics: RevenueMetricType[]
}

// ----------------------------- Community Customers -----------------------------
export const CommunityCustomerMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  total_count: z.string().transform(Number),
})

export type CommunityCustomerMetricType = z.infer<
  typeof CommunityCustomerMetricSchema
>

export const CommunityCustomerOverviewMetricSchema = z.object({
  total_count: z.string().transform(Number),
})

export type CommunityCustomerOverviewMetricType = z.infer<
  typeof CommunityCustomerOverviewMetricSchema
>

export type CommunityCustomerMetricResponseType = {
  totalCount: number
  metrics: CommunityCustomerMetricType[]
}

// ----------------------------- Content Tagged -----------------------------
export const ContentTaggedMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  posts: z.string().transform(Number),
  stories: z.string().transform(Number),
})

export type ContentTaggedMetricType = z.infer<typeof ContentTaggedMetricSchema>

export const ContentTaggedOverviewMetricSchema = z.object({
  total_count: z.string().transform(Number),
  posts_count: z.string().transform(Number),
  stories_count: z.string().transform(Number),
})

export type ContentTaggedOverviewMetricType = z.infer<
  typeof ContentTaggedOverviewMetricSchema
>

export type ContentTaggedMetricResponseType = {
  totalCount: number
  postsCount: number
  storiesCount: number
  metrics: ContentTaggedMetricType[]
}

// ----------------------------- Sentiment Analysis ----------------------------
export const SentimentAnalysisMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  positive_sentiment_rate: z.number(),
  negative_sentiment_rate: z.number(),
  neutral_sentiment_rate: z.number(),
  mixed_sentiment_rate: z.number(),
  conversation_rate: z.number(),
  conversation_positive_sentiment_rate: z.number(),
  conversation_negative_sentiment_rate: z.number(),
  conversation_neutral_sentiment_rate: z.number(),
  conversation_mixed_sentiment_rate: z.number(),
  comment_rate: z.number(),
  comment_positive_sentiment_rate: z.number(),
  comment_negative_sentiment_rate: z.number(),
  comment_neutral_sentiment_rate: z.number(),
  comment_mixed_sentiment_rate: z.number(),
})

export type SentimentAnalysisMetricType = z.infer<
  typeof SentimentAnalysisMetricSchema
>

export const SentimentAnalysisOverviewMetricSchema = z.object({
  positive_sentiment_rate: z.number(),
  negative_sentiment_rate: z.number(),
  neutral_sentiment_rate: z.number(),
  mixed_sentiment_rate: z.number(),
})

export type SentimentAnalysisOverviewMetricType = z.infer<
  typeof SentimentAnalysisOverviewMetricSchema
>

export type SentimentAnalysisMetricResponseType = {
  positiveSentimentRate: number
  negativeSentimentRate: number
  neutralSentimentRate: number
  mixedSentimentRate: number
  metrics: SentimentAnalysisMetricType[]
}

// ----------------------------- Product Mentioned ----------------------------
export const ProductMentionedMetricSchema = z.object({
  timestamp: z.date().transform((date) => date.toISOString()),
  dms_count: z.string().transform(Number),
  comments_count: z.string().transform(Number),
  posts_count: z.string().transform(Number),
})

export type ProductMentionedMetricType = z.infer<
  typeof ProductMentionedMetricSchema
>

export const ProductMentionedOverviewMetricSchema = z.object({
  total_count: z.string().transform(Number),
  dms_count: z.string().transform(Number),
  comments_count: z.string().transform(Number),
  posts_count: z.string().transform(Number),
})

export type ProductMentionedOverviewMetricType = z.infer<
  typeof ProductMentionedOverviewMetricSchema
>

export const ProductMentionCountsMetricSchema = z.object({
  product_id: z.string(),
  total_count: z.string().transform(Number),
})

export type ProductMentionCountsMetricType = z.infer<
  typeof ProductMentionCountsMetricSchema
>

export type ProductMentionedMetricResponseType = {
  totalCount: number
  dmsCount: number
  commentsCount: number
  postsCount: number
  metrics: ProductMentionedMetricType[]
}

// ----------------------------- Dashboard Metrics -----------------------------
export enum DashboardMetricType {
  MESSAGE_VOLUME = 'MESSAGE_VOLUME',
  RESPONSE_RATE = 'RESPONSE_RATE',
  TAGGED_CONTENT = 'TAGGED_CONTENT',
  COMMUNITY_MEMBERS = 'COMMUNITY_MEMBERS',
  REVENUE = 'REVENUE',
  COMMUNITY_CUSTOMERS = 'COMMUNITY_CUSTOMERS',
  COMMUNITY_INSIGHTS = 'COMMUNITY_INSIGHTS',
  PRODUCT_MENTIONS = 'PRODUCT_MENTIONS',
  SENTIMENT = 'SENTIMENT',
}

export enum AttributedRevenueCategory {
  INBOX = 'INBOX',
  JOURNEY = 'JOURNEY',
  BLAST = 'BLAST',
  CONTENT = 'CONTENT',
}

export type DashboardMetricsResponseTypeMap = {
  [DashboardMetricType.MESSAGE_VOLUME]: MessageVolumeMetricResponseType
  [DashboardMetricType.RESPONSE_RATE]: ResponseRateMetricResponseType
  [DashboardMetricType.COMMUNITY_MEMBERS]: CommunityMemberMetricResponseType
  [DashboardMetricType.REVENUE]: RevenueMetricResponseType
  [DashboardMetricType.COMMUNITY_CUSTOMERS]: CommunityCustomerMetricResponseType
  [DashboardMetricType.TAGGED_CONTENT]: ContentTaggedMetricResponseType
  [DashboardMetricType.SENTIMENT]: SentimentAnalysisMetricResponseType
  [DashboardMetricType.PRODUCT_MENTIONS]: ProductMentionedMetricResponseType
}

export const DashboardMetricsBaseRequestSchema = z.object({
  workspaceId: z.string().uuid(),
  timePeriod: z.nativeEnum(MetricTimePeriod).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  timezone: z.string().optional(),
  platforms: z
    .union([z.nativeEnum(Platform), z.array(z.nativeEnum(Platform))])
    .optional(),
})

export type DashboardMetricsBaseRequestType = z.infer<
  typeof DashboardMetricsBaseRequestSchema
>

export const DashboardMetricsRequestSchema =
  DashboardMetricsBaseRequestSchema.extend({
    metricType: z.nativeEnum(DashboardMetricType),
    productIds: z.union([z.string(), z.array(z.string())]).optional(),
  })

export type DashboardMetricsRequestType = z.infer<
  typeof DashboardMetricsRequestSchema
>

export const AgentPerformanceMetricsRequestSchema =
  DashboardMetricsBaseRequestSchema.extend({
    metricType: z.nativeEnum(AgentPerformanceMetricType),
  })

export type AgentPerformanceMetricsRequestType = z.infer<
  typeof AgentPerformanceMetricsRequestSchema
>

export const AgentPerformanceTopPerformersRequestSchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
})

export type AgentPerformanceTopPerformersRequestType = z.infer<
  typeof AgentPerformanceTopPerformersRequestSchema
>

export enum InsightEntity {
  DM = 'DM',
  COMMENT = 'COMMENT',
  POST_MENTION = 'POST_MENTION',
  STORY_MENTION = 'STORY_MENTION',
  ALL = 'ALL',
}

export enum InsightEntityV2 {
  DM = 'DM',
  ORGANIC_COMMENT = 'ORGANIC_COMMENT',
  PAID_COMMENT = 'PAID_COMMENT',
  POST_MENTION = 'POST_MENTION',
  STORY_MENTION = 'STORY_MENTION',
}

export const FetchTopInsightsQueryParamsSchema = z.object({
  workspaceId: z.string().uuid(),
  insightsToFetch: z.number().default(5),
  startDate: z.string().datetime(),
  sentiments: z.array(z.nativeEnum(Sentiment)).nullish(),
  entity: z.nativeEnum(InsightEntity).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
})

export type FetchTopInsightsQueryParamsType = z.infer<
  typeof FetchTopInsightsQueryParamsSchema
>

export const FetchInsightBinsQueryParamsSchema = z.object({
  workspaceId: z.string().uuid(),
  startDate: z.string().datetime(),
})

export type FetchInsightBinsQueryParamsType = z.infer<
  typeof FetchInsightBinsQueryParamsSchema
>

export type FetchInsightBinsResponse = {
  counts: Record<CommunityInsightBin | 'totalCount', number>
}

export type TopInsight = {
  id: string
  title: string
  sentiment: Sentiment | null
  totalCount: number
}

export type FetchTopInsightsResponseType = {
  totalInsights: number
  topInsights: TopInsight[]
}

export enum InsightSortField {
  EVENTS = 'EVENTS',
  CREATED_AT = 'CREATED_AT',
  LAST_SEEN = 'LAST_SEEN',
  TITLE = 'TITLE',
}

export const FetchInsightsQueryParamsSchema = z.object({
  categoryId: z.string().uuid().nullish(),
  insightBins: z.array(z.nativeEnum(CommunityInsightBin)),
  pageSize: z.number().optional().default(15),
  page: z.number().optional().default(1),
  startDate: z.string().datetime(),
  searchQuery: z.string().optional().default(''),
  sentiments: z.array(z.nativeEnum(Sentiment)).nullish(),
  entity: z.nativeEnum(InsightEntity).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  sortField: z
    .nativeEnum(InsightSortField)
    .optional()
    .default(InsightSortField.CREATED_AT),
  sortOrder: z
    .nativeEnum(Prisma.SortOrder)
    .optional()
    .default(Prisma.SortOrder.desc),
})

export const FetchInsightsQueryParamsSchemaV2 = z.object({
  categoryId: z.string().uuid().nullish(),
  insightBins: z.array(z.nativeEnum(CommunityInsightBin)),
  pageSize: z.number().optional().default(15),
  page: z.number().optional().default(1),
  startDate: z.string().datetime(),
  searchQuery: z.string().optional().default(''),
  sentiments: z.array(z.nativeEnum(Sentiment)).nullish(),
  entities: z.array(z.nativeEnum(InsightEntityV2)).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  sortField: z
    .nativeEnum(InsightSortField)
    .optional()
    .default(InsightSortField.CREATED_AT),
  sortOrder: z
    .nativeEnum(Prisma.SortOrder)
    .optional()
    .default(Prisma.SortOrder.desc),
})

export type FetchInsightsQueryParamsSchemaType = z.infer<
  typeof FetchInsightsQueryParamsSchema
>

export const FetchInsightCategoriesBreakdownQueryParamsSchema = z.object({
  startDate: z.string().datetime(),
  sentiments: z.array(z.nativeEnum(Sentiment)).nullish(),
  entity: z.nativeEnum(InsightEntity).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  insightBins: z.array(z.nativeEnum(CommunityInsightBin)).nullish(),
})

export const FetchInsightCategoriesBreakdownQueryParamsSchemaV2 = z.object({
  startDate: z.string().datetime(),
  sentiments: z.array(z.nativeEnum(Sentiment)).nullish(),
  entities: z.array(z.nativeEnum(InsightEntityV2)).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  insightBins: z.array(z.nativeEnum(CommunityInsightBin)).nullish(),
})

export type FetchInsightCategoriesBreakdownQueryParamsType = z.infer<
  typeof FetchInsightCategoriesBreakdownQueryParamsSchema
>

export const FetchInsightCategoriesBreakdownResponseSchema = z.object({
  insightCategoryId: z.string(),
  insightCategoryTitle: z.string(),
  totalTopics: z.string().transform(Number),
  totalContent: z.string().transform(Number),
})

export type FetchInsightCategoriesBreakdownResponseType = z.infer<
  typeof FetchInsightCategoriesBreakdownResponseSchema
>

export type InsightType = {
  id: string
  createdAt: Date
  status: InsightGroupStatus
  lastSeen: Date
  title: string
  categoryTitle: string
  sentiment: Sentiment | null
  platforms: Platform[] | null
  events: number | null
}

export type FetchInsightsResponseType = {
  totalCount: number
  hasNextPage: boolean
  insights: InsightType[]
}

export const FetchInsightEventsQueryParamsSchema = z.object({
  insightGroupId: z.string().uuid(),
  pageSize: z.number().optional().default(15),
  page: z.number().optional().default(1),
  startDate: z.string().datetime(),
  entity: z.nativeEnum(InsightEntity).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
})

export const FetchInsightEventsQueryParamsSchemaV2 = z.object({
  insightGroupId: z.string().uuid(),
  pageSize: z.number().optional().default(15),
  page: z.number().optional().default(1),
  startDate: z.string().datetime(),
  entities: z.array(z.nativeEnum(InsightEntityV2)).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
})

export type FetchInsightEventsQueryParamsType = z.infer<
  typeof FetchInsightEventsQueryParamsSchema
>

export type InsightMessageReply = {
  entityType: InsightEntity.DM
  messageType: MessageType
  attachments: unknown
}

export type InsightCommentReply = {
  entityType: InsightEntity.COMMENT
}

export type InsightCommonReply = {
  id: string
  content: string
  timestamp: Date
  parentId: string
  platform: Platform
  fullName: string | null
  handle: string | null
  profilePictureUri: string | null
}

export type InsightReply = InsightCommonReply &
  (InsightMessageReply | InsightCommentReply)
type EventAuthor = {
  memberId?: string | null
  isLimited: boolean
}

export type InsightParent = {
  id: string
  content: string
  timestamp: Date
  parentId: string
  platform: Platform
  fullName: string | null
  handle: string | null
  profilePictureUri: string | null
}

export type EventMedia = {
  id: string
  sourceUri?: string | null
  thumbnailUri?: string | null
}

export type InsightEvent = {
  id: string
  conversationId: string
  content: string
  profilePictureUri: string | null
  handle: string | null
  timestamp: Date
  contentId: string
  entityType: InsightEntity
  fullName: string | null
  platform: Platform
  isHidden: boolean
  isPaid: boolean
  replies: InsightReply[]
  contentSurface: ContentSurface | null
  contentType: ContentType | null
  eventAuthor: EventAuthor
  ownerPlatformAccountId: string | null
  sentiment: Sentiment | null
  generatedSummary?: string | null
  parentEntity?: InsightParent | null
  media: EventMedia[]
}

export type FetchInsightEventsResponseType = {
  totalCount: number
  hasNextPage: boolean
  events: InsightEvent[]
}

export const DashboardProductWithMentionsCountRequestSchema = z.object({
  pageSize: z.string().transform(Number).optional(),
  pageNumber: z.string().transform(Number).optional(),
  searchQuery: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  platforms: z
    .union([z.nativeEnum(Platform), z.array(z.nativeEnum(Platform))])
    .optional(),
})

export type DashboardProductWithMentionsCountRequestType = z.infer<
  typeof DashboardProductWithMentionsCountRequestSchema
>

export const DashboardProductWithMentionsCountResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  pictureUri: z.string().nullish(),
  mentionsCount: z.string().transform(Number),
})

export type DashboardProductWithMentionsCountResponseType = z.infer<
  typeof DashboardProductWithMentionsCountResponseSchema
>

export const FetchDashboardMetricsSchema = z.object({
  workspaceId: z.string().nullish(),
  ticks: z.string().nullish(),
  startDate: z.date().nullish(),
  endDate: z.date().nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  shouldPassPlatforms: z.boolean().nullish(),
  productIds: z.array(z.string()).nullish(),
  shouldPassProductIds: z.boolean().nullish(),
  timezone: z.string().nullish(),
})

export type FetchDashboardMetricsType = z.infer<
  typeof FetchDashboardMetricsSchema
>
