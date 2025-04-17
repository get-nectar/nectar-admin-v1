// @ts-nocheck
import { z } from 'zod'

import { MessageType } from '@prisma/client'

export const MediaAttachmentSchema = z.object({
  type: z.nativeEnum(MessageType).transform((data) => data.toLowerCase()),
  url: z.string(),
})

export const CardAttachmentSchema = z.object({
  ctaTitle: z.string(),
  ctaUrl: z.string(),
  title: z.string(),
  imageUrl: z.string(),
  subtitle: z.string().optional(),
})

export enum PostGenerateCardType {
  SHOPIFY = 'SHOPIFY',
  CUSTOM = 'CUSTOM',
}

export const CardAttachmentWithoutLinkSchema = z.object({
  ctaTitle: z.string(),
  ctaShopifyResourceId: z.string().nullish(),
  title: z.string(),
  imageUrl: z.string(),
  type: z.nativeEnum(PostGenerateCardType),
  subtitle: z.string(),
  originalUrl: z.string(),
})

export enum AttachmentType {
  IMAGE,
  VIDEO,
  AUDIO,
  CARD,
}

export const UploadAttachmentSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.nativeEnum(AttachmentType),
  isUploading: z.boolean().optional(),
  imageUrl: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  ctaText: z.string().optional(),
  resourceId: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
})

export type UploadAttachmentType = z.infer<typeof UploadAttachmentSchema>
