// @ts-nocheck
import { z } from 'zod'

import { CustomFieldType } from '@prisma/client'

export enum CommunityTableColumnFields {
  // Default
  USER = 'user',
  HANDLE = 'handle',
  CHANNELS = 'channels',
  EMAIL = 'email',
  ENGAGEMENT = 'engagement',
  LABELS = 'labels',
  PHONE = 'phone',
  LOCATION = 'location',
  STREET_ADDRESS = 'streetAddress',
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
  ZIP_CODE = 'zipCode',
  INSTAGRAM_SCOPED_ID = 'instagramScopedId',
  FACEBOOK_SCOPED_ID = 'facebookScopedId',
  IS_ELIGIBLE_FOR_DM = 'isEligibleForDM',

  // Instagram
  INSTAGRAM_ACCOUNT_TYPE = 'instagramAccountType',
  INSTAGRAM_FOLLOWING_STATUS = 'instagramFollowingStatus',
  INSTAGRAM_BIO_DESCRIPTION = 'instagramBioDescription',
  INSTAGRAM_COMMENT_COUNT = 'instagramCommentCount',
  INSTAGRAM_FOLLOWER_COUNT = 'instagramFollowerCount',
  INSTAGRAM_PROFILE_POST_COUNT = 'instagramProfilePostCount',
  INSTAGRAM_TAG_OR_MENTION_COUNT = 'instagramTagOrMentionCount',
  INSTAGRAM_HAS_MESSAGED = 'instagramHasMessaged',
  INSTAGRAM_HAS_STORY_MENTION = 'instagramHasStoryMention',
  INSTAGRAM_HAS_POST_MENTION = 'instagramHasPostMention',
  INSTAGRAM_LAST_ENGAGED_DATE = 'instagramLastEngagedDate',

  // TikTok
  TIKTOK_BIO_DESCRIPTION = 'tiktokBioDescription',
  TIKTOK_FOLLOWER_COUNT = 'tiktokFollowerCount',
  TIKTOK_PROFILE_POST_COUNT = 'tiktokProfilePostCount',

  // Shopify
  SHOPIFY_CUSTOMER_FIRST_NAME = 'shopifyCustomerFirstName',
  SHOPIFY_CUSTOMER_LAST_NAME = 'shopifyCustomerLastName',
  SHOPIFY_ORDER_AOV = 'shopifyOrderAOV',
  SHOPIFY_ABANDONED_CHECKOUT_DATE = 'shopifyAbandonedCheckoutDate',
  SHOPIFY_ORDERS_ORDER_NUMBER = 'shopifyOrdersOrderNumber',
  SHOPIFY_ORDERS_TOTAL_ORDER_VALUE = 'shopifyOrdersTotalOrderValue',
  SHOPIFY_ORDERS_NUMBER_OF_ORDERS = 'shopifyOrdersNumberOfOrders',
  SHOPIFY_ORDERS_PURCHASED_ITEMS = 'shopifyOrdersPurchasedItems',
  SHOPIFY_ORDERS_LAST_ORDER_DATE = 'shopifyOrdersLastOrderDate',
  SHOPIFY_ADD_TO_CART_PERFORMED_ACTION = 'shopifyAddToCartPerformedAction',
  SHOPIFY_ADD_TO_CART_LAST_ADDED_DATE = 'shopifyAddToCartLastAddedDate',
  SHOPIFY_ADD_TO_CART_ITEM_NAMES = 'shopifyAddToCartItemNames',
  SHOPIFY_PRODUCT_VIEWED = 'shopifyProductViewed',
  SHOPIFY_COLLECTION_VIEWED = 'shopifyCollectionViewed',
  SHOPIFY_PAGE_VIEWED = 'shopifyPageViewed',
  SHOPIFY_CART_VIEWED = 'shopifyCartViewed',
  SHOPIFY_USER_SEARCHED_FOR = 'shopifyUserSearchedFor',
  SHOPIFY_LOCATION_STATES_OR_PROVINCES = 'shopifyLocationStatesOrProvinces',
  SHOPIFY_LOCATION_CITY = 'shopifyLocationCity',
  SHOPIFY_LOCATION_COUNTRIES_OR_REGIONS = 'shopifyLocationCountriesOrRegions',
  SHOPIFY_EMAIL_SUBSCRIBER_STATUS = 'shopifyEmailSubscriberStatus',
  SHOPIFY_SMS_SUBSCRIBER_STATUS = 'shopifySMSSubscriberStatus',

  // Brand Mention
  BRAND_MENTION_COUNT = 'brandMentionCount',
}

export enum CommunityTableColumnType {
  PREDEFINED = 'PREDEFINED',
  CUSTOM = 'CUSTOM',
}

export const PredefinedColumnSchema = z.object({
  type: z.literal(CommunityTableColumnType.PREDEFINED),
  field: z.string(),
  hide: z.boolean().optional(),
  pinned: z
    .union([z.boolean(), z.literal('left'), z.literal('right')])
    .optional()
    .nullable(),
  width: z.number().optional(),
  sort: z
    .union([z.literal('asc'), z.literal('desc')])
    .optional()
    .nullable(),
  title: z.string().optional(),
})

export const CustomDataColumnSchema = z.object({
  type: z.literal(CommunityTableColumnType.CUSTOM),
  field: z.string().uuid(),
  hide: z.boolean().optional(),
  pinned: z
    .union([z.boolean(), z.literal('left'), z.literal('right')])
    .optional()
    .nullable(),
  width: z.number().optional(),
  sort: z
    .union([z.literal('asc'), z.literal('desc')])
    .optional()
    .nullable(),
  title: z.string(),
  icon: z.string(),
})

export const PersistedColumnDataSchema = z
  .array(
    z.discriminatedUnion('type', [
      PredefinedColumnSchema,
      CustomDataColumnSchema,
    ]),
  )
  .nullable()

export const CustomDataFieldValueSchema = z.object({
  id: z.string().uuid(),
  type: z.nativeEnum(CustomFieldType),
  value: z
    .union([z.string(), z.number(), z.boolean(), z.array(z.string()), z.date()])
    .nullable(),
})

export type PersistedColumnData = z.infer<typeof PersistedColumnDataSchema>

export type CustomDataFieldValue = z.infer<typeof CustomDataFieldValueSchema>
