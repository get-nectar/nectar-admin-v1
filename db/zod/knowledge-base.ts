// @ts-nocheck
import { z } from 'zod'

import { EmbeddingEntity } from '@prisma/client'

export enum KnowledgeBaseTaskType {
  DOCUMENT_REFRESH = 'DOCUMENT_REFRESH',
  SHOPIFY_REFRESH = 'SHOPIFY_REFRESH',
  SHOPIFY_PRODUCT_INTEGRATION = 'SHOPIFY_PRODUCT_INTEGRATION',
  REFRESH_ALL = 'REFRESH_ALL',
}

export type KnowledgeBaseTaskData = z.infer<typeof KnowledgeBaseTaskDataSchema>

export type ShopifyRefreshTaskData = z.infer<
  typeof ShopifyRefreshTaskDataSchema
>

export const documentRefreshRequestSchema = z.object({
  documentResourceId: z.string(),
})

export const shopifyPageRefreshRequestSchema = z.object({
  shopifyResourceId: z.string(),
})

export const shopifyProductRefreshRequestSchema = z.object({
  shopifyResourceId: z.string(),
})

const DocumentRefreshTaskDataSchema = z.object({
  type: z.literal(KnowledgeBaseTaskType.DOCUMENT_REFRESH),
  ...documentRefreshRequestSchema.shape,
})

export const ShopifyRefreshTaskDataSchema = z.object({
  type: z.literal(KnowledgeBaseTaskType.SHOPIFY_REFRESH),
  ...shopifyProductRefreshRequestSchema.shape,
})

export const RefreshAllTaskDataSchema = z.object({
  type: z.literal(KnowledgeBaseTaskType.REFRESH_ALL),
})

export const KnowledgeBaseTaskDataSchema = z.discriminatedUnion('type', [
  DocumentRefreshTaskDataSchema,
  ShopifyRefreshTaskDataSchema,
  RefreshAllTaskDataSchema,
])

export const EmbeddingRequestSchema = z.object({
  data: z.object({
    entityId: z.string(),
    rawTexts: z.array(z.string()),
    embeddings: z.array(z.array(z.number())),
    parentEntity: z.nativeEnum(EmbeddingEntity),
  }),
})

export enum KnowledgeBaseEmbeddingType {
  SHOPIFY_EMBEDDING = 'SHOPIFY_EMBEDDING',
  DOCUMENT_EMBEDDING = 'DOCUMENT_EMBEDDING',
}

export const ShopifyEmbeddingTaskDataSchema = z.object({
  type: z.literal(KnowledgeBaseEmbeddingType.SHOPIFY_EMBEDDING),
  shopifyResourceId: z.string(),
})

export const DocumentEmbeddingTaskDataSchema = z.object({
  type: z.literal(KnowledgeBaseEmbeddingType.DOCUMENT_EMBEDDING),
  documentResourceId: z.string(),
})

export const KnowledgeBaseEmbeddingTaskDataSchema = z.discriminatedUnion(
  'type',
  [ShopifyEmbeddingTaskDataSchema, DocumentEmbeddingTaskDataSchema],
)

export const VectorSearchSchema = z.object({
  queryText: z.string().transform((text) => {
    try {
      return decodeURIComponent(text)
    } catch {
      return text
    }
  }),
  limit: z.string(),
  threshold: z.string(),
  intentShadowResourceId: z.string().optional(),
  workspaceId: z.string(),
  parentEntity: z.string().optional(),
  shopifyResourceIds: z.array(z.string()).optional(),
})
