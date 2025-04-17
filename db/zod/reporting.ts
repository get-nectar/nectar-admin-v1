// @ts-nocheck
import { z } from 'zod'

import {
  ContentSurface,
  ContentType,
  Label,
  Media,
  Platform,
  Sentiment,
} from '@prisma/client'

export enum AccountMetrics {
  LIKES = 'LIKES',
  COMMENTS = 'COMMENTS',
  SHARES = 'SHARES',
  SAVES = 'SAVES',
  REACH = 'REACH',
  IMPRESSIONS = 'IMPRESSIONS',
  ENGAGEMENT = 'ENGAGEMENT',
  ENGAGEMENT_RATE = 'ENGAGEMENT_RATE',
  FOLLOWERS = 'FOLLOWERS',
  UNFOLLOWERS = 'UNFOLLOWERS',
  NET_FOLLOWERS = 'NET_FOLLOWERS',
  VIDEO_VIEWS = 'VIDEO_VIEWS',
  REACH_BREAKDOWN = 'REACH_BREAKDOWN',
  PROFILE_ACTIONS = 'PROFILE_ACTIONS',
  STORY_PERFORMANCE = 'STORY_PERFORMANCE',
  PROFILE_VIEWS = 'PROFILE_VIEWS',
  GENDER_BREAKDOWN = 'GENDER_BREAKDOWN',
  AGE_BREAKDOWN = 'AGE_BREAKDOWN',
}

export const MetricSchema = z.object({
  tiktok: z.number().nullish(),
  tiktok_percent: z.number().nullish(),
  avg_tiktok: z.number().nullish(),
  avg_tiktok_percent: z.number().nullish(),
  facebook: z.number().nullish(),
  facebook_percent: z.number().nullish(),
  facebook_organic: z.number().nullish(),
  facebook_paid: z.number().nullish(),
  avg_facebook: z.number().nullish(),
  avg_facebook_percent: z.number().nullish(),
  avg_facebook_organic: z.number().nullish(),
  avg_facebook_paid: z.number().nullish(),
  instagram_total: z.number().nullish(),
  instagram_total_percent: z.number().nullish(),
  instagram_organic: z.number().nullish(),
  instagram_paid: z.number().nullish(),
  instagram_story: z.number().nullish(),
  instagram_story_percent: z.number().nullish(),
  instagram_post: z.number().nullish(),
  instagram_post_percent: z.number().nullish(),
  instagram_reel: z.number().nullish(),
  instagram_reel_percent: z.number().nullish(),
  avg_instagram_total: z.number().nullish(),
  avg_instagram_total_percent: z.number().nullish(),
  avg_instagram_organic: z.number().nullish(),
  avg_instagram_paid: z.number().nullish(),
  avg_instagram_story: z.number().nullish(),
  avg_instagram_story_percent: z.number().nullish(),
  avg_instagram_post: z.number().nullish(),
  avg_instagram_post_percent: z.number().nullish(),
  avg_instagram_reel: z.number().nullish(),
  avg_instagram_reel_percent: z.number().nullish(),
  combined_total: z.number().nullish(),
  combined_total_percent: z.number().nullish(),
  combined_avg: z.number().nullish(),
  combined_avg_percent: z.number().nullish(),
  tiktok_growth: z.number().nullish(),
  facebook_growth: z.number().nullish(),
  facebook_paid_growth: z.number().nullish(),
  facebook_organic_growth: z.number().nullish(),
  instagram_total_growth: z.number().nullish(),
  instagram_paid_growth: z.number().nullish(),
  instagram_organic_growth: z.number().nullish(),
  instagram_story_growth: z.number().nullish(),
  instagram_post_growth: z.number().nullish(),
  instagram_reel_growth: z.number().nullish(),
  combined_total_growth: z.number().nullish(),
})

export type Metrics = z.infer<typeof MetricSchema>

export const MetricsTimelineSchema = MetricSchema.extend({
  timestamp: z.date().nullable(),
})

export type MetricsTimeline = z.infer<typeof MetricsTimelineSchema>

export const FetchAccountMetricsSchema = z.object({
  accountIds: z.array(z.string()).nullish(),
  workspaceId: z.string().nullish(),
  metrics: z.array(z.nativeEnum(AccountMetrics)),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  isTimeSeries: z.boolean().nullish(),
  ticks: z.string().nullish(),
})

export type FetchAccountMetricsType = z.infer<typeof FetchAccountMetricsSchema>

export type ResultantMetrics = {
  [key in AccountMetrics]?: {
    total: Metrics
    timeseries?: MetricsTimeline[]
  }
}

export const FetchReachBreakdownSchema = z.object({
  accountIds: z.array(z.string()).nullish(),
  workspaceId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  isTimeSeries: z.boolean().nullish(),
  ticks: z.string().nullish(),
})

export type FetchReachBreakdownType = z.infer<typeof FetchReachBreakdownSchema>

export const FetchStoryPerformanceRequestSchema = z.object({
  accountIds: z.array(z.string()).nullish(),
  workspaceId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  isTimeSeries: z.boolean().nullish(),
  ticks: z.string().nullish(),
})

export type FetchStoryPerformanceRequestType = z.infer<
  typeof FetchStoryPerformanceRequestSchema
>

export const StoryPerformanceMetricsSchema = z.object({
  story_replies: z.number().nullish(),
  published_stories: z.string().transform(Number).nullish(),
  tap_exits: z.number().nullish(),
  tap_forwards: z.number().nullish(),
  tap_backs: z.number().nullish(),
  swipe_forwards: z.number().nullish(),
})

export const StoryPerformanceMetricsSchemaWithGrowth =
  StoryPerformanceMetricsSchema.extend({
    story_replies_growth: z.number().nullish(),
    published_stories_growth: z.string().transform(Number).nullish(),
    tap_exits_growth: z.number().nullish(),
    tap_forwards_growth: z.number().nullish(),
    tap_backs_growth: z.number().nullish(),
    swipe_forwards_growth: z.number().nullish(),
  })

export type StoryPerformanceMetrics = z.infer<
  typeof StoryPerformanceMetricsSchemaWithGrowth
>

export const StoryPerformanceMetricsTimelineSchema =
  StoryPerformanceMetricsSchema.extend({
    timestamp: z.date().nullish(),
  })

export type StoryPerformanceMetricsTimelineType = z.infer<
  typeof StoryPerformanceMetricsTimelineSchema
>

export type StoryPerformanceMetricsResponseType = {
  total: StoryPerformanceMetrics
  timeseries?: StoryPerformanceMetricsTimelineType[]
}

export const ReachBreakdownMetricsSchema = z.object({
  instagram_total: z.number().nullish(),

  instagram_story: z.number().nullish(),
  instagram_post: z.number().nullish(),
  instagram_reel: z.number().nullish(),
  instagram_carousels: z.number().nullish(),
  instagram_igtv: z.number().nullish(),

  instagram_followers: z.number().nullish(),
  instagram_non_followers: z.number().nullish(),

  instagram_post_followers: z.number().nullish(),
  instagram_post_non_followers: z.number().nullish(),

  instagram_reel_followers: z.number().nullish(),
  instagram_reel_non_followers: z.number().nullish(),

  instagram_story_followers: z.number().nullish(),
  instagram_story_non_followers: z.number().nullish(),

  instagram_carousels_followers: z.number().nullish(),
  instagram_carousels_non_followers: z.number().nullish(),

  instagram_igtv_followers: z.number().nullish(),
  instagram_igtv_non_followers: z.number().nullish(),

  avg_instagram_total: z.number().nullish(),

  avg_instagram_story: z.number().nullish(),
  avg_instagram_post: z.number().nullish(),
  avg_instagram_reel: z.number().nullish(),
  avg_instagram_carousels: z.number().nullish(),
  avg_instagram_igtv: z.number().nullish(),

  avg_instagram_followers: z.number().nullish(),
  avg_instagram_non_followers: z.number().nullish(),

  avg_instagram_post_followers: z.number().nullish(),
  avg_instagram_post_non_followers: z.number().nullish(),

  avg_instagram_reel_followers: z.number().nullish(),
  avg_instagram_reel_non_followers: z.number().nullish(),

  avg_instagram_story_followers: z.number().nullish(),
  avg_instagram_story_non_followers: z.number().nullish(),

  avg_instagram_carousels_followers: z.number().nullish(),
  avg_instagram_carousels_non_followers: z.number().nullish(),

  avg_instagram_igtv_followers: z.number().nullish(),
  avg_instagram_igtv_non_followers: z.number().nullish(),
})

export const ReachBreakdownMetricsSchemaWithGrowth =
  ReachBreakdownMetricsSchema.extend({
    instagram_total_growth: z.number().nullish(),

    instagram_story_growth: z.number().nullish(),
    instagram_post_growth: z.number().nullish(),
    instagram_reel_growth: z.number().nullish(),
    instagram_carousels_growth: z.number().nullish(),
    instagram_igtv_growth: z.number().nullish(),

    instagram_followers_growth: z.number().nullish(),
    instagram_non_followers_growth: z.number().nullish(),

    instagram_post_followers_growth: z.number().nullish(),
    instagram_post_non_followers_growth: z.number().nullish(),

    instagram_reel_followers_growth: z.number().nullish(),
    instagram_reel_non_followers_growth: z.number().nullish(),

    instagram_story_followers_growth: z.number().nullish(),
    instagram_story_non_followers_growth: z.number().nullish(),

    instagram_carousels_followers_growth: z.number().nullish(),
    instagram_carousels_non_followers_growth: z.number().nullish(),

    instagram_igtv_followers_growth: z.number().nullish(),
    instagram_igtv_non_followers_growth: z.number().nullish(),

    avg_instagram_total_growth: z.number().nullish(),

    avg_instagram_story_growth: z.number().nullish(),
    avg_instagram_post_growth: z.number().nullish(),
    avg_instagram_reel_growth: z.number().nullish(),
    avg_instagram_carousels_growth: z.number().nullish(),
    avg_instagram_igtv_growth: z.number().nullish(),

    avg_instagram_followers_growth: z.number().nullish(),
    avg_instagram_non_followers_growth: z.number().nullish(),

    avg_instagram_post_followers_growth: z.number().nullish(),
    avg_instagram_post_non_followers_growth: z.number().nullish(),

    avg_instagram_reel_followers_growth: z.number().nullish(),
    avg_instagram_reel_non_followers_growth: z.number().nullish(),

    avg_instagram_story_followers_growth: z.number().nullish(),
    avg_instagram_story_non_followers_growth: z.number().nullish(),

    avg_instagram_carousels_followers_growth: z.number().nullish(),
    avg_instagram_carousels_non_followers_growth: z.number().nullish(),

    avg_instagram_igtv_followers_growth: z.number().nullish(),
    avg_instagram_igtv_non_followers_growth: z.number().nullish(),
  })

export type ReachBreakdownMetrics = z.infer<
  typeof ReachBreakdownMetricsSchemaWithGrowth
>

export const ReachBreakdownMetricsTimelineSchema =
  ReachBreakdownMetricsSchema.extend({
    timestamp: z.date().nullable(),
  })

export type ReachBreakdownMetricsTimeline = z.infer<
  typeof ReachBreakdownMetricsTimelineSchema
>

export type ReachBreakdown = {
  total: ReachBreakdownMetrics
  timeseries?: ReachBreakdownMetricsTimeline[]
}

export const FetchProfileActionsSchema = z.object({
  accountIds: z.array(z.string()).nullish(),
  workspaceId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  isTimeSeries: z.boolean().nullish(),
  ticks: z.string().nullish(),
})

export type FetchProfileActionsType = z.infer<typeof FetchProfileActionsSchema>

export const FetchGenderBreakdownRequestSchema = z.object({
  workspaceId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  accountIds: z.array(z.string()).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
})

export type FetchGenderBreakdownRequestType = z.infer<
  typeof FetchGenderBreakdownRequestSchema
>

export const FetchGenderBreakdownRow = z.object({
  tiktok_female_avg: z.number().nullish(),
  tiktok_male_avg: z.number().nullish(),
  tiktok_other_avg: z.number().nullish(),

  instagram_female_sum: z.number().nullish(),
  instagram_male_sum: z.number().nullish(),
  instagram_other_sum: z.number().nullish(),

  instagram_female_avg: z.number().nullish(),
  instagram_male_avg: z.number().nullish(),
  instagram_other_avg: z.number().nullish(),
  instagram_total: z.number().nullish(),
})

export type FetchGenderBreakdownRowType = z.infer<
  typeof FetchGenderBreakdownRow
>

export const FetchGenderBreakdownResponseSchema = z.object({
  data: FetchGenderBreakdownRow,
})

export type FetchGenderBreakdownResponseType = z.infer<
  typeof FetchGenderBreakdownResponseSchema
>

export const FetchAgeBreakdownRequestSchema = z.object({
  workspaceId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  accountIds: z.array(z.string()).nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
})

export type FetchAgeBreakdownRequestType = z.infer<
  typeof FetchAgeBreakdownRequestSchema
>

export const FetchAgeBreakdownResponseRow = z.object({
  tiktok_age15_avg: z.number().nullish(),
  tiktok_age20_avg: z.number().nullish(),
  tiktok_age30_avg: z.number().nullish(),
  tiktok_age40_avg: z.number().nullish(),
  tiktok_age50_avg: z.number().nullish(),
  tiktok_age60_avg: z.number().nullish(),
  tiktok_age65_avg: z.number().nullish(),

  instagram_age15_avg: z.number().nullish(),
  instagram_age20_avg: z.number().nullish(),
  instagram_age30_avg: z.number().nullish(),
  instagram_age40_avg: z.number().nullish(),
  instagram_age50_avg: z.number().nullish(),
  instagram_age60_avg: z.number().nullish(),
  instagram_age65_avg: z.number().nullish(),
  instagram_total: z.number().nullish(),
})

export type FetchAgeBreakdownResponseRowType = z.infer<
  typeof FetchAgeBreakdownResponseRow
>

export const FetchAgeBreakdownResponseSchema = z.object({
  data: FetchAgeBreakdownResponseRow,
})

export type FetchAgeBreakdownResponseType = z.infer<
  typeof FetchAgeBreakdownResponseSchema
>

export const ProfileActionsMetricsSchema = z.object({
  instagram_email_clicks: z.number().nullish(),
  instagram_book_now_clicks: z.number().nullish(),
  instagram_call_clicks: z.number().nullish(),
  instagram_directions_clicks: z.number().nullish(),
  instagram_instant_experience_clicks: z.number().nullish(),
  instagram_text_clicks: z.number().nullish(),

  avg_instagram_email_clicks: z.number().nullish(),
  avg_instagram_book_now_clicks: z.number().nullish(),
  avg_instagram_call_clicks: z.number().nullish(),
  avg_instagram_directions_clicks: z.number().nullish(),
  avg_instagram_instant_experience_clicks: z.number().nullish(),
  avg_instagram_text_clicks: z.number().nullish(),
})

export type ProfileActionsMetrics = z.infer<typeof ProfileActionsMetricsSchema>

export const ProfileActionsMetricsSchemaWithGrowth =
  ProfileActionsMetricsSchema.extend({
    instagram_email_clicks_growth: z.number().nullish(),
    instagram_book_now_clicks_growth: z.number().nullish(),
    instagram_call_clicks_growth: z.number().nullish(),
    instagram_directions_clicks_growth: z.number().nullish(),
    instagram_instant_experience_clicks_growth: z.number().nullish(),
    instagram_text_clicks_growth: z.number().nullish(),

    avg_instagram_email_clicks_growth: z.number().nullish(),
    avg_instagram_book_now_clicks_growth: z.number().nullish(),
    avg_instagram_call_clicks_growth: z.number().nullish(),
    avg_instagram_directions_clicks_growth: z.number().nullish(),
    avg_instagram_instant_experience_clicks_growth: z.number().nullish(),
    avg_instagram_text_clicks_growth: z.number().nullish(),
  })

export type ProfileActionsMetricsWithGrowth = z.infer<
  typeof ProfileActionsMetricsSchemaWithGrowth
>

export const ProfileActionsMetricsTimelineSchema =
  ProfileActionsMetricsSchema.extend({
    timestamp: z.date().nullable(),
  })

export type ProfileActionsMetricsTimeline = z.infer<
  typeof ProfileActionsMetricsTimelineSchema
>

export type ProfileActions = {
  total: ProfileActionsMetrics
  timeseries?: ProfileActionsMetricsTimeline[]
}

export enum SortFilterField {
  COMMENTS = 'comments',
  REACTIONS = 'reactions',
  REACH = 'reach',
  IMPRESSIONS = 'impressions',
  VIDEO_VIEWS = 'videoViews',
  VIEWS = 'views',
  SHARES = 'shares',
  SAVES = 'saves',
  ENGAGEMENT = 'engagement',
  ENGAGEMENT_RATE = 'engagement_rate',
  PUBLISHED_DATE = 'publishTimestamp',
}

export const SortFilterSchema = z.object({
  field: z.nativeEnum(SortFilterField),
  direction: z.enum(['ASC', 'DESC']),
})

export type SortFilter = z.infer<typeof SortFilterSchema>

export const FetchContentMetricsSchema = z.object({
  accountIds: z.array(z.string()).nullish(),
  workspaceId: z.string().nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  contentIds: z.array(z.string()).nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  postType: z.array(z.nativeEnum(ContentSurface)).nullish(),
  contentType: z.array(z.nativeEnum(ContentType)).nullish(),
  captionSearch: z.string().nullish(),
  page: z.number().nullish(),
  limit: z.number().nullish(),
  sortFilters: z.array(SortFilterSchema).nullish(),
  fuzzySearchEnabled: z.boolean().nullish(),
})

export const FetchIndividualContentMetricsSchema = z.object({
  contentId: z.string(),
})

export type FetchIndividualContentMetricsType = z.infer<
  typeof FetchIndividualContentMetricsSchema
>

export const FetchIndividualContentMetricsTimelineSchema = z.object({
  contentId: z.string(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  ticks: z.string().nullish(),
})

export type FetchIndividualContentMetricsTimelineType = z.infer<
  typeof FetchIndividualContentMetricsTimelineSchema
>

export type FetchContentMetricsType = z.infer<typeof FetchContentMetricsSchema>

export const ContentMetricsSchema = z.object({
  contentId: z.string(),
  accountId: z.string(),
  workspaceId: z.string(),
  comments: z.number().nullish(),
  reactions: z.number().nullish(),
  reach: z.number().nullish(),
  impressions: z.number().nullish(),
  videoViews: z.number().nullish(),
  views: z.number().nullish(),
  shares: z.number().nullish(),
  saves: z.number().nullish(),
  engagement: z.number().nullish(),
  engagementRate: z.number().nullish(),
  derivedView: z.number().nullish(),
})

export type ContentMetrics = z.infer<typeof ContentMetricsSchema>

export const ContentSchema = z.object({
  id: z.string(),
  platformContentId: z.string().nullable(),
  contentType: z.nativeEnum(ContentType),
  contentSurface: z.nativeEnum(ContentSurface),
  publishTimestamp: z.date().nullable(),
  caption: z.string().nullable(),
  permalink: z.string().nullable(),
  platform: z.nativeEnum(Platform),
})

export type Content = z.infer<typeof ContentSchema>

export const MediaSchema = z.object({
  id: z.string(),
  sourceUri: z.string().nullable(),
  thumbnailUri: z.string().nullable(),
})

export const ContentMetricsWithDetailsSchema = ContentMetricsSchema.extend({
  ...ContentMetricsSchema.shape,
  ...ContentSchema.shape,
  media: z.array(MediaSchema).nullish(),
  sentiment: z.nativeEnum(Sentiment).nullish(),
  generatedSummary: z.string().nullish(),
})

export type ContentMetricsWithDetails = z.infer<
  typeof ContentMetricsWithDetailsSchema
>

export type TopCommentSchemaType = {
  id: string
  contentId: string
  body: string
  likeCount?: number | null
  replyCount?: number | null
  engagementScore?: number | null
  handle?: string | null
  profileName?: string | null
  profilePictureUri?: string | null
  publishedTimestamp?: Date
  sentiment?: Sentiment | null
}

export const TimelineMetricsSchema = z.array(
  z.object({
    timestamp: z.date(),
    comments: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    reactions: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    reach: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    impressions: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    videoViews: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    views: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    shares: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    saves: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    engagement: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
    engagement_rate: z.union([z.number(), z.null(), z.undefined(), z.nan()]),
  }),
)

export type TimelineMetrics = z.infer<typeof TimelineMetricsSchema>

export const IndividualContentMetricsSchema = z.object({
  comments: z.number().nullish(),
  reactions: z.number().nullish(),
  reach: z.number().nullish(),
  impressions: z.number().nullish(),
  videoViews: z.number().nullish(),
  views: z.number().nullish(),
  shares: z.number().nullish(),
  saves: z.number().nullish(),
  engagement: z.number().nullish(),
  videoPlay: z.number().nullish(),
  photoView: z.number().nullish(),
  linkClicks: z.number().nullish(),
  otherClicks: z.number().nullish(),
  tapExit: z.number().nullish(),
  tapForward: z.number().nullish(),
  swipeForward: z.number().nullish(),
  tapBack: z.number().nullish(),
  saved: z.number().nullish(),
  replies: z.number().nullish(),
  newFollowers: z.number().nullish(),
  totalTimeWatched: z.number().nullish(),
  averageTimeWatched: z.number().nullish(),
  fullVideoWatchedRate: z.number().nullish(),
  forYouImpressionPercent: z.number().nullish(),
  followImpressionPercent: z.number().nullish(),
  soundImpressionPercent: z.number().nullish(),
  personalProfileImpressionPercent: z.number().nullish(),
  searchImpressionPercent: z.number().nullish(),
  othersImpressionPercent: z.number().nullish(),
  newViewers: z.number().nullish(),
  returnViewers: z.number().nullish(),
  followersPercent: z.number().nullish(),
  nonFollowersPercent: z.number().nullish(),
  femalePercent: z.number().nullish(),
  malePercent: z.number().nullish(),
  otherPercent: z.number().nullish(),
  engagement_rate: z.number().nullish(),
  loveReactions: z.number().nullish(),
  hahaReactions: z.number().nullish(),
  wowReactions: z.number().nullish(),
  sorryReactions: z.number().nullish(),
  angerReactions: z.number().nullish(),
})

export type IndividualContentMetrics = Content &
  ContentMetrics & {
    media?: Pick<Media, 'id' | 'sourceUri' | 'thumbnailUri'>[] | null
    sentiment?: Sentiment | null
    labels?: Label[] | null
    generatedSummary?: string | null

    videoPlay?: number | null
    photoView?: number | null
    linkClicks?: number | null
    otherClicks?: number | null
    tapExit?: number | null
    tapForward?: number | null
    swipeForward?: number | null
    tapBack?: number | null
    saved?: number | null
    replies?: number | null
    newFollowers?: number | null
    totalTimeWatched?: number | null
    averageTimeWatched?: number | null
    fullVideoWatchedRate?: number | null
    forYouImpressionPercent?: number | null
    followImpressionPercent?: number | null
    soundImpressionPercent?: number | null
    personalProfileImpressionPercent?: number | null
    searchImpressionPercent?: number | null
    othersImpressionPercent?: number | null
    newViewers?: number | null
    returnViewers?: number | null
    followersPercent?: number | null
    nonFollowersPercent?: number | null
    femalePercent?: number | null
    malePercent?: number | null
    otherPercent?: number | null

    engagementRate?: number | null
    loveReactions?: number | null
    hahaReactions?: number | null
    wowReactions?: number | null
    sorryReactions?: number | null
    angerReactions?: number | null

    topComments?: TopCommentSchemaType[]
  }

export type ContentMetricsResponseType = {
  hasMore: boolean
  metrics: ContentMetricsWithDetails[]
}
