// @ts-nocheck
import { z } from 'zod'

export const aiTranslateSchema = z.object({
  inputText: z.string(),
})

export const aiTranslateResponseSchema = z.object({
  englishTranslation: z.string(),
})

export type AiTranslateResponse = z.infer<typeof aiTranslateResponseSchema>
