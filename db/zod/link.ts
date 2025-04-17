// @ts-nocheck
import { z } from 'zod'

import { LinkSurface, LinkType, Platform } from '@prisma/client'

const ShortUrlForConversationSchema = z.object({
  shopifyResourceId: z.string(),
  shopifyProductVariantId: z.string().optional(),
  communityMemberId: z.string(),
  inboxFeedItemId: z.string().nullish(),
  type: z.literal('CONVERSATION'),
  discountCode: z.string().nullish(),
  discountConfigId: z.string().nullish(),
})

const ShortUrlForPostSchema = z.object({
  inboxFeedItemId: z.string().optional(),
  shopifyResourceId: z.string(),
  shopifyProductVariantId: z.string().optional(),
  type: z.literal('POST'),
  discountCode: z.string().nullish(),
  discountConfigId: z.string().nullish(),
})

const ShortUrlForCommunityMemberSchema = z.object({
  communityMemberId: z.string(),
  shopifyResourceId: z.string(),
  shopifyProductVariantId: z.string().optional(),
  type: z.literal('COMMUNITY_MEMBER'),
  discountCode: z.string().nullish(),
  discountConfigId: z.string().nullish(),
})

const ShortUrlForCustomSchema = z.object({
  url: z.string(),
  communityMemberId: z.string().optional(),
  inboxFeedItemId: z.string().optional(),
  type: z.literal('CUSTOM'),
})

export const ShortUrlRequestSchema = z.object({
  urlRequests: z.array(
    z.discriminatedUnion('type', [
      ShortUrlForConversationSchema,
      ShortUrlForPostSchema,
      ShortUrlForCommunityMemberSchema,
      ShortUrlForCustomSchema,
    ]),
  ),
  workspaceId: z.string(),
  channel: z.nativeEnum(Platform).optional(),
  dbLinkConfig: z
    .object({
      type: z.nativeEnum(LinkType),
      surface: z.nativeEnum(LinkSurface).nullish(),
    })
    .nullish(),
})

export type ShortUrlRequestType = z.infer<typeof ShortUrlRequestSchema>
