// @ts-nocheck
import { z } from 'zod'

export enum NodeType {
  PARAGRAPH = 'paragraph',
}

export enum NodeContentType {
  TEXT = 'text',
  HARD_BREAK = 'hardBreak',
  CUSTOM_CHIP = 'customChip',
  FACEBOOK_MENTION = 'facebookMention',
  SHOPIFY_PRODUCT_LINK = 'shopifyProductLink',
  INSTAGRAM_MENTION = 'instagramMention',
  INSTAGRAM_HANDLE = 'instagramHandle',
  INSTAGRAM_BIO_NAME = 'instagramBioName',
  INSTAGRAM_LAST_ENGAGED = 'instagramLastEngaged',
  SHOPIFY_FIRST_NAME = 'shopifyFirstName',
  SHOPIFY_LAST_NAME = 'shopifyLastName',
  SHOPIFY_FULL_NAME = 'shopifyFullName',
  SHOPIFY_ABANDON_CART_DATE = 'shopifyAbandonCartDate',
  SHOPIFY_LAST_ORDER_ITEMS = 'shopifyLastOrderItems',
  SHOPIFY_LAST_ORDER_DATE = 'shopifyLastOrderDate',
  SHOPIFY_LAST_ADD_TO_CART = 'shopifyLastAddToCart',
  SHOPIFY_ADD_TO_CART_ITEMS = 'shopifyAddToCartItems',
  CUSTOM_COMMUNITY_MEMBER_FIELD = 'customCommunityMemberField',
}

export enum NodeSurface {
  INBOX = 'inbox',
  BLASTS = 'blasts',
  JOURNEYS = 'journeys',
  COPILOT = 'copilot',
}

export const FacebookMentionSchema = z.object({
  name: z.string(),
  psId: z.number(),
})

export const InstagramMentionSchema = z.object({
  handle: z.string(),
})

export const ShopifyProductLinkSchema = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string(),
  surface: z.nativeEnum(NodeSurface),
})

export const CustomChipSchema = z.object({
  name: z.string(),
  type: z.string(),
})

export const CustomCommunityMemberFieldSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
})

export const TipTapPayloadSchema = z.object({
  type: z.string(),
  content: z.array(
    z.object({
      type: z.nativeEnum(NodeType),
      content: z
        .array(
          z.object({
            type: z.nativeEnum(NodeContentType),
            text: z.string().optional(),
            attrs: z
              .union([
                CustomCommunityMemberFieldSchema,
                FacebookMentionSchema,
                ShopifyProductLinkSchema,
                InstagramMentionSchema,
                CustomChipSchema,
              ])
              .optional(),
          }),
        )
        .optional(),
    }),
  ),
})
