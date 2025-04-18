// @ts-nocheck
import { z } from 'zod'

import {
  BlastCampaignType,
  ContentSurface,
  InstagramAccountType,
  MessageType,
  PredefinedViewType,
} from '@prisma/client'

import { UploadAttachmentSchema } from './attachment'
import { TipTapPayloadSchema } from './tiptap'

export const SendBlastAudienceSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('COMMUNITY_VIEW'),
    viewId: z.string(),
    minFollowersCount: z.number().optional(),
    platformContentIds: z.union([z.string(), z.array(z.string())]).optional(),
  }),
  z.object({
    type: z.literal('INDIVIDUALS'),
    memberIds: z.array(z.string()),
  }),
])

export const MessageAttachmentSchema = z.object({
  type: z.nativeEnum(MessageType),
  url: z.string(),
})

export const ShopifyCardSchema = z.object({
  ctaTitle: z.string(),
  title: z.string(),
  imageUrl: z.string(),
  subtitle: z.string().optional(),
  type: z.literal('SHOPIFY'),
  ctaShopifyResourceId: z.string(),
})

export const CustomUrlCardSchema = z.object({
  ctaTitle: z.string(),
  title: z.string(),
  imageUrl: z.string(),
  subtitle: z.string().optional(),
  type: z.literal('CUSTOM'),
  customUrl: z.string(),
})

export const CardSchema = z.discriminatedUnion('type', [
  ShopifyCardSchema,
  CustomUrlCardSchema,
])

export const BlastListSelectionSchema = z.object({
  title: z.string(),
  id: z.string(),
  count: z.number().optional(),
  imageSrc: z.string().optional(),
  type: z.enum(['LIST', 'INDIVIDUAL']),
  listPredefinedType: z.nativeEnum(PredefinedViewType).nullable(),
})

export const RepliedToSpecificPostOrStoryFilterValueSchema = z.object({
  id: z.string(),
  surface: z.nativeEnum(ContentSurface),
})

export const BlastContentOriginalDataSchema = z.object({
  campaignTitle: z.string().optional(),
  campaignType: z.nativeEnum(BlastCampaignType).optional(),
  journeyId: z.string().nullish(),
  message: TipTapPayloadSchema,
  attachments: z.array(UploadAttachmentSchema),
  audience: z.object({
    selections: z.array(BlastListSelectionSchema),
    excludedMemberIds: z.record(z.string(), z.array(z.string()).optional()),
    minFollowersCount: z.number().nullable(),
    selectedContent: z.array(RepliedToSpecificPostOrStoryFilterValueSchema),
  }),
  excludedAudience: z.object({
    selections: z.array(BlastListSelectionSchema),
    excludedMemberIds: z.record(z.string(), z.array(z.string()).optional()),
    minFollowersCount: z.number().nullable(),
    selectedContent: z.array(RepliedToSpecificPostOrStoryFilterValueSchema),
  }),
})

export const SendBlastRequestSchema = z.object({
  campaignTitle: z.string().optional(),
  audience: z.array(SendBlastAudienceSchema),
  excludedAudience: z.array(SendBlastAudienceSchema),
  instagramAccountId: z.string(),
  message: TipTapPayloadSchema,
  attachments: z.array(MessageAttachmentSchema).optional(),
  cards: z.array(CardSchema).optional(),
  campaignType: z.nativeEnum(BlastCampaignType).optional(),
  journeyId: z.string().nullish(),
  isDraft: z.boolean().optional(),
  existingBlastCampaignId: z.string().optional(),
  originalData: BlastContentOriginalDataSchema.optional(),
  sendTime: z.string().datetime().optional(),
})

export const CancelBlastRequestSchema = z.object({
  blastCampaignId: z.string(),
})

export type MessagePayloadType = z.infer<typeof TipTapPayloadSchema>

type ShopifyCard = {
  ctaTitle: string
  title: string
  imageUrl: string
  subtitle?: string
  type: 'SHOPIFY'
  ctaShopifyResourceId: string
}

type CustomUrlCard = {
  ctaTitle: string
  title: string
  imageUrl: string
  subtitle?: string
  type: 'CUSTOM'
  customUrl: string
}

export type CardType = ShopifyCard | CustomUrlCard

export interface PreparedMessageCard {
  ctaTitle: string
  ctaUrl: string
  title: string
  imageUrl: string
  subtitle?: string
}

export type SendBlastAudienceType = z.infer<typeof SendBlastAudienceSchema>

export type SendBlastRequestType = z.infer<typeof SendBlastRequestSchema>

export type CancelBlastRequestType = z.infer<typeof CancelBlastRequestSchema>

export type MessageAttachmentType = z.infer<typeof MessageAttachmentSchema>

export type ShopifyCardType = z.infer<typeof ShopifyCardSchema>

export type CustomUrlCardType = z.infer<typeof CustomUrlCardSchema>

export type CardSchemaType = z.infer<typeof CardSchema>

export type CommunityMemberBlastListTypeItem = {
  type: 'LIST'
  title: string
  membersCount: number
  viewId: string
  metadata: Record<string, unknown>
  predefinedType: PredefinedViewType | null
}

export type CommunityMemberBlastIndividualTypeItem = {
  type: 'INDIVIDUAL'
  id: string
  identifier: string
  handle: string
  profilePictureUri: string
  followersCount: number
  accountType: InstagramAccountType | null
}

export type CommunityMemberBlastListEntry =
  | CommunityMemberBlastListTypeItem
  | CommunityMemberBlastIndividualTypeItem

export type BlastListSelectionType = z.infer<typeof BlastListSelectionSchema>

export type RepliedToSpecificPostOrStoryFilterValueType = z.infer<
  typeof RepliedToSpecificPostOrStoryFilterValueSchema
>

export type BlastContentOriginalDataType = z.infer<
  typeof BlastContentOriginalDataSchema
>

export const BlastContentSchema = z.object({
  message: TipTapPayloadSchema,
  cards: z.array(CardSchema).optional(),
  attachments: z.array(MessageAttachmentSchema).optional(),
  originalData: BlastContentOriginalDataSchema.optional(),
})

export type BlastContentSchemaType = z.infer<typeof BlastContentSchema>

export const BlastFetchMessagesSentRequestSchema = z.object({
  instagramAccountId: z.string().uuid(),
  startDate: z.string().datetime().nullish(),
  endDate: z.string().datetime().nullish(),
  type: z.nativeEnum(BlastCampaignType).nullish(),
})

export type BlastFetchMessagesSentRequestType = z.infer<
  typeof BlastFetchMessagesSentRequestSchema
>

export type BlastFetchMessagesSentResponseType = {
  messagesSent: number
}

export const BlastFetchCvrAndCtrRequestSchema = z.object({
  instagramAccountId: z.string().uuid(),
  startDate: z.string().datetime().nullish(),
  endDate: z.string().datetime().nullish(),
  type: z.nativeEnum(BlastCampaignType).nullish(),
})

export type BlastFetchCvrAndCtrRequestType = z.infer<
  typeof BlastFetchCvrAndCtrRequestSchema
>

export type BlastFetchCvrAndCtrResponseType = {
  conversionRate: number
  clickThroughRate: number
}
