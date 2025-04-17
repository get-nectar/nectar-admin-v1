// @ts-nocheck
import { z } from 'zod'

import { Platform, Sentiment } from '@prisma/client'

export enum ProductMentionsTick {
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export enum ProductMentionsSortFilterField {
  CREATORS = 'totalCreators',
  CONTENT = 'totalContent',
  ENGAGEMENT = 'totalEngagement',
  LIKES = 'totalLikes',
  COMMENTS = 'totalComments',
  SHARES = 'totalShares',
  PLAYS = 'totalPlays',
  PRICE = 'price',
  MIN_PRICE = 'minPrice',
  MAX_PRICE = 'maxPrice',
  EMV = 'totalEMV',
}

export const ProductMentionsSortFilterSchema = z.object({
  field: z.nativeEnum(ProductMentionsSortFilterField),
  direction: z.enum(['ASC', 'DESC']),
})

export type ProductMentionsSortFilter = z.infer<
  typeof ProductMentionsSortFilterSchema
>

export const FetchProductsMetricsSchema = z.object({
  workspaceId: z.string(),
  accountIds: z.array(z.string()).nullish(),
  shopifyStoreIds: z.array(z.string()).nullish(),
  shopifyResourceIds: z.array(z.string()).nullish(),
  resourceTitle: z.string().nullish(),
  minPrice: z.number().nullish(),
  maxPrice: z.number().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  sortFilters: z.array(ProductMentionsSortFilterSchema).nullish(),
  limit: z.number().nullish(),
  page: z.number().nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  shouldPassPlatforms: z.boolean().nullish(),
})

export type FetchProductsMetrics = z.infer<typeof FetchProductsMetricsSchema>

export const ProductMetricsSchema = z.object({
  productId: z.string(),
  instagramCount: z.number().nullable(),
  tiktokCount: z.number().nullable(),
  totalCreators: z.number().nullable(),
  totalContent: z.number().nullable(),
  storyContent: z.number().nullable(),
  postContent: z.number().nullable(),
  totalEngagement: z.number().nullable(),
  totalLikes: z.number().nullable(),
  totalComments: z.number().nullable(),
  totalShares: z.number().nullable(),
  totalPlays: z.number().nullable(),
  totalEMV: z.number().nullable(),
  productTitle: z.string().nullable(),
  productType: z.string().nullable(),
  storeId: z.string().nullable(),
  price: z.string().nullable(),
  minPrice: z.string().nullable(),
  maxPrice: z.string().nullable(),
  positivePercentage: z.number().nullable(),
  negativePercentage: z.number().nullable(),
  neutralPercentage: z.number().nullable(),
  mixedPercentage: z.number().nullable(),
})

export type ProductMetrics = z.infer<typeof ProductMetricsSchema>

export type MentionsMetricsWithProductInfo = Array<
  ProductMetrics & { pictureUri: string | null }
>

export const FetchTopContentSchema = z.object({
  workspaceId: z.string(),
  accountIds: z.array(z.string()).nullish(),
  shopifyStoreIds: z.array(z.string()).nullish(),
  shopifyResourceIds: z.array(z.string()).nullish(),
  resourceTitle: z.string().nullish(),
  minPrice: z.number().nullish(),
  maxPrice: z.number().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  limit: z.number().nullish(),
})

export type FetchTopContent = z.infer<typeof FetchTopContentSchema>

export const TopContentSchema = z.object({
  contentId: z.string(),
  platform: z.string(),
  publishTimestamp: z.string(),
  workspaceId: z.string(),
  accountId: z.string(),
  productId: z.string(),
  shopifyResourceTitle: z.string().nullable(),
  authorId: z.string(),
  authorDisplayName: z.string().nullable(),
  authorIdentifier: z.string().nullable(),
  authorInstagramHandle: z.string().nullable(),
  authorTiktokName: z.string().nullable(),
  likeCount: z.number().nullable(),
  commentCount: z.number().nullable(),
  shareCount: z.number().nullable(),
  playCount: z.number().nullable(),
  engagement: z.number().nullable(),
  emv: z.number().nullable(),

  caption: z.string().nullable(),
  platformContentId: z.string().nullable(),
  permalink: z.string().nullable(),
  contentType: z.string().nullable(),
  contentSurface: z.string(),
  sourceType: z.string().nullable(),

  contentOwnerId: z.string().nullable(),
})

const MediaSchema = z.object({
  id: z.string(),
  sourceUri: z.string().nullable(),
  thumbnailUri: z.string().nullable(),
})

export type TopContent = z.infer<typeof TopContentSchema>

export const TopContentWithMediaSchema = TopContentSchema.extend({
  mediaItems: z.array(MediaSchema),
  authorProfilePictureUri: z.string().nullish(),
  sentiment: z.nativeEnum(Sentiment).nullable(),
})

export type TopContentWithMedia = z.infer<typeof TopContentWithMediaSchema>

export const FetchTimeseriesMetricsSchema = z.object({
  workspaceId: z.string(),
  ticks: z.nativeEnum(ProductMentionsTick).nullish(),
  accountIds: z.array(z.string()).nullish(),
  shopifyResourceIds: z.array(z.string()).nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  platforms: z.array(z.nativeEnum(Platform)).nullish(),
  shouldPassPlatforms: z.boolean().nullish(),
})

export type FetchTimeseriesMetrics = z.infer<
  typeof FetchTimeseriesMetricsSchema
>

export const TimeseriesMetricsSchema = z.object({
  timestamp: z.date(),
  totalProducts: z.number().nullable(),
  totalContent: z.number().nullable(),
  totalCreators: z.number().nullable(),
  storyContent: z.number().nullable(),
  postContent: z.number().nullable(),
  totalLikes: z.number().nullable(),
  totalComments: z.number().nullable(),
  totalShares: z.number().nullable(),
  totalPlays: z.number().nullable(),
  totalEngagement: z.number().nullable(),
})

export type TimeseriesMetrics = z.infer<typeof TimeseriesMetricsSchema>
