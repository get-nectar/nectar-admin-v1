// @ts-nocheck
import { z } from 'zod'

import { ContentType, MetricTimePeriod } from '@prisma/client'

export const EngagementMetricsSchema = z.object({
  totalPosts: z.union([z.number(), z.string()]).nullish(),
  totalEngagement: z.number().nullish(),

  commentCount: z.number().nullish(),
  fbLikeCount: z.number().nullish(),
  fbPlayCount: z.number().nullish(),
  likeCount: z.number().nullish(),
  playCount: z.number().nullish(),
  saveCount: z.number().nullish(),
  shareCount: z.number().nullish(),
  userFollowerCount: z.number().nullish(),
  userMediaCount: z.number().nullish(),
  viewCount: z.number().nullish(),
  collectCount: z.number().nullish(),

  engagementToPostRatio: z.number().nullish(),

  tiktokEMV: z.number().nullish(),
  instagramEMV: z.number().nullish(),
})

export type EngagementMetrics = z.infer<typeof EngagementMetricsSchema>

export const EngagementMetricsTimelineSchema = EngagementMetricsSchema.extend({
  timestamp: z.date().nullish(),
})

export type EngagementMetricsTimeline = z.infer<
  typeof EngagementMetricsTimelineSchema
>

export const fetchEngagementMetricsSchema = z.object({
  topicId: z.string(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  ticks: z.string().nullish(),
})

export type FetchEngagementMetricsType = z.infer<
  typeof fetchEngagementMetricsSchema
>

export const TopEngagementItemsSchema = z.object({
  contentId: z.string(),
  platform: z.string(),
  sourceType: z.string(),
  timestamp: z.date().nullable(),
  totalEngagement: z.number(),
  permalink: z.string().nullish(),
  commentCount: z.number().nullish(),
  fbLikeCount: z.number().nullish(),
  fbPlayCount: z.number().nullish(),
  likeCount: z.number().nullish(),
  playCount: z.number().nullish(),
  saveCount: z.number().nullish(),
  shareCount: z.number().nullish(),
  userFollowerCount: z.number().nullish(),
  userMediaCount: z.number().nullish(),
  viewCount: z.number().nullish(),
  collectCount: z.number().nullish(),
  caption: z.string().nullish(),
  media: z
    .array(
      z.object({
        id: z.string().nullish(),
        sourceUri: z.string().nullish(),
        thumbnailUri: z.string().nullish(),
        contentType: z.nativeEnum(ContentType).nullish(),
      }),
    )
    .nullish(),
})

export type TopEngagementItems = z.infer<typeof TopEngagementItemsSchema>

export type TopEngagementItemsResponse = {
  topEngagementItems: TopEngagementItems[]
}

export type EngagementMetricsResponse = {
  total: EngagementMetrics
  timeline: EngagementMetricsTimeline[]
}

export enum SocialListeningMetricType {
  MENTIONS = 'MENTIONS',
  PLATFORM_TYPE = 'PLATFORM_TYPE',
  CONTENT_TYPE = 'CONTENT_TYPE',
  SENTIMENTS = 'SENTIMENTS',
}

export const fetchGlobalContentChartDataSchema = z.object({
  topicId: z.string(),
  metricType: z.nativeEnum(SocialListeningMetricType),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  timePeriod: z.nativeEnum(MetricTimePeriod),
})

export type FetchGlobalContentChartDataType = z.infer<
  typeof fetchGlobalContentChartDataSchema
>

export type GlobalContentChartResponseTypeMap = {
  [SocialListeningMetricType.PLATFORM_TYPE]: PostsByPlatformMetricTypeResponse
  [SocialListeningMetricType.CONTENT_TYPE]: PostsByContentTypeMetricTypeResponse
  [SocialListeningMetricType.SENTIMENTS]: PostsBySentimentMetricTypeResponse
  [SocialListeningMetricType.MENTIONS]: MentionsMetricTypeResponse
}

export type MentionsMetricTypeResponse = {
  total: MentionsMetricType & {
    mentions_growth: number
  }
  timeline: MentionsTimelineMetricType[]
}

export type PostsByPlatformMetricTypeResponse = {
  total: PostsByPlatformMetricType & {
    instagram_posts_growth: number
    tiktok_posts_growth: number
  }
  timeline: PostsByPlatformTimelineMetricType[]
}

export type PostsByContentTypeMetricTypeResponse = {
  total: PostsByContentTypeMetricType & {
    images_growth: number
    videos_growth: number
    albums_growth: number
  }
  timeline: PostsByContentTypeTimelineMetricType[]
}

export type PostsBySentimentMetricTypeResponse = {
  total: PostsBySentimentMetricType & {
    positive_growth: number
    negative_growth: number
    neutral_growth: number
    mixed_growth: number
  }
  timeline: PostsBySentimentTimelineMetricType[]
}

export const mentionsMetricSchema = z.object({
  mentions: z.string().transform(Number),
})

export type MentionsMetricType = z.infer<typeof mentionsMetricSchema>

export const mentionsTimelineMetricSchema = z.object({
  timestamp: z.date().nullish(),
  mentions: z.string().transform(Number),
})

export type MentionsTimelineMetricType = z.infer<
  typeof mentionsTimelineMetricSchema
>

export const postsByPlatformMetricSchema = z.object({
  instagram_posts: z.string().transform(Number),
  tiktok_posts: z.string().transform(Number),
})

export type PostsByPlatformMetricType = z.infer<
  typeof postsByPlatformMetricSchema
>

export const postsByPlatformTimelineMetricSchema = z.object({
  timestamp: z.date().nullish(),
  instagram_posts: z.string().transform(Number),
  tiktok_posts: z.string().transform(Number),
})

export type PostsByPlatformTimelineMetricType = z.infer<
  typeof postsByPlatformTimelineMetricSchema
>

export const postsByContentTypeMetricSchema = z.object({
  images: z.string().transform(Number),
  videos: z.string().transform(Number),
  albums: z.string().transform(Number),
})

export type PostsByContentTypeMetricType = z.infer<
  typeof postsByContentTypeMetricSchema
>

export const postsByContentTypeTimelineMetricSchema = z.object({
  timestamp: z.date().nullish(),
  images: z.string().transform(Number),
  videos: z.string().transform(Number),
  albums: z.string().transform(Number),
})

export type PostsByContentTypeTimelineMetricType = z.infer<
  typeof postsByContentTypeTimelineMetricSchema
>

export const postsBySentimentMetricSchema = z.object({
  positive: z.string().transform(Number),
  negative: z.string().transform(Number),
  neutral: z.string().transform(Number),
  mixed: z.string().transform(Number),
})

export type PostsBySentimentMetricType = z.infer<
  typeof postsBySentimentMetricSchema
>

export const postsBySentimentTimelineMetricSchema = z.object({
  timestamp: z.date().nullish(),
  positive: z.string().transform(Number),
  negative: z.string().transform(Number),
  neutral: z.string().transform(Number),
  mixed: z.string().transform(Number),
})

export type PostsBySentimentTimelineMetricType = z.infer<
  typeof postsBySentimentTimelineMetricSchema
>
