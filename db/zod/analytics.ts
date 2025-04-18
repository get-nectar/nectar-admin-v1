// @ts-nocheck
import { z } from 'zod'

import { BlastCampaignType, LinkSurface, LinkType } from '@prisma/client'

export enum AnalyticsTotalRevenueRequestBodyLinkType {
  BLAST_LINK = 'BLAST_LINK',
  NON_BLAST_LINK = 'NON_BLAST_LINK',
}

const JSONRecordSchema = z.record(z.string(), z.unknown())

export const AnalyticsLinksRequestSchema = z.object({
  searchQuery: z.string().optional(),
  surface: z.nativeEnum(LinkSurface).optional(),
  types: z.array(z.nativeEnum(LinkType)).optional(),
  page: z
    .string()
    .refine((val) => (val.length && val !== '0' ? Number(val) : true))
    .transform((val) => Number(val) || 1)
    .optional(),
  pageSize: z
    .string()
    .refine((val) => (val.length && val !== '0' ? Number(val) : true))
    .transform((val) => Number(val) || 20)
    .optional(),
  createdAtStartDate: z.string().optional(),
  activeWorkspaceId: z.string().uuid(),
  orderBy: z.union([z.array(JSONRecordSchema), JSONRecordSchema]).nullish(),
})

export const PurchaseAnalyticsRequestSchema = z.object({
  activeWorkspaceId: z.string().uuid(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  surface: z.nativeEnum(LinkSurface).optional(),
  linkTypes: z.array(z.nativeEnum(LinkType)).optional(),
  blastType: z.nativeEnum(BlastCampaignType).optional(),
  isBlast: z.boolean().optional(),
})

const AnalyticsTotalRevenueRequestBodyCommonSchema = z.object({
  workspaceId: z.string().uuid(),
  startDate: z.string().datetime().nullish(),
  endDate: z.string().datetime().nullish(),
  surface: z.nativeEnum(LinkSurface).nullish(),
  linkTypes: z.array(z.nativeEnum(LinkType)).nullish(),
})

const AnalyticsTotalRevenueRequestBodyLinkSchema =
  AnalyticsTotalRevenueRequestBodyCommonSchema.extend({
    variant: z.literal(AnalyticsTotalRevenueRequestBodyLinkType.NON_BLAST_LINK),
  })

const AnalyticsTotalRevenueRequestBodyBlastSchema =
  AnalyticsTotalRevenueRequestBodyCommonSchema.extend({
    variant: z.literal(AnalyticsTotalRevenueRequestBodyLinkType.BLAST_LINK),
    blastType: z.nativeEnum(BlastCampaignType).nullish(),
  })

export const AnalyticsTotalRevenueRequestSchema = z.discriminatedUnion(
  'variant',
  [
    AnalyticsTotalRevenueRequestBodyLinkSchema,
    AnalyticsTotalRevenueRequestBodyBlastSchema,
  ],
)

export type AnalyticsTotalRevenueRequestBodyType = z.infer<
  typeof AnalyticsTotalRevenueRequestSchema
>

export type AnalyticsTotalRevenueResponse = {
  totalRevenue: number
}

export const LinkFindCvrRequestBodySchema = z.object({
  surface: z.nativeEnum(LinkSurface).nullish(),
  startDate: z.string().datetime().nullish(),
  endDate: z.string().datetime().nullish(),
  types: z.array(z.nativeEnum(LinkType)).nullish(),
  workspaceId: z.string().uuid(),
})

export type LinkFindCvrRequestBodyType = z.infer<
  typeof LinkFindCvrRequestBodySchema
>

export type LinkFindCvrResponseType = {
  conversionRate: number
}
