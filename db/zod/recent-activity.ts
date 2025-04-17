// @ts-nocheck
import { z } from 'zod'

import { InboxFeedItem, RecentActivity, ShopifyResource } from '@prisma/client'

export const RecentActivityWithGroupsRequestSchema = z.object({
  communityMemberId: z.string().uuid(),
  timestamp: z.string().datetime().optional(),
})

export type RecentActivityWithExtraInfo = RecentActivity & {
  linkedShopifyResources: ShopifyResource[]
  inboxItem: InboxFeedItem | null
}

export interface InfiniteRecentActivityWithExtraInfo {
  pages: RecentActivityWithExtraInfo[][]
  pageParams: Record<string, unknown>
}

export interface RecentActivityWithGroupsResponseSchema {
  group: Record<string, RecentActivityWithExtraInfo[]>
  totalCount: number
  nextTimestamp: string
  hasNextPage: boolean
}
