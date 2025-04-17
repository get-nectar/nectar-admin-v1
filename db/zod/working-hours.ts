// @ts-nocheck
import { z } from 'zod'

export const BusinessHourTimeRangeSchema = z.object({
  hour: z.number(),
  minute: z.number(),
})

export type BusinessHourTimeRangeType = z.infer<
  typeof BusinessHourTimeRangeSchema
>

export const BusinessHoursConfigTimeRangesSchema = z.array(
  z.object({
    to: BusinessHourTimeRangeSchema,
    from: BusinessHourTimeRangeSchema,
  }),
)

export type BusinessHoursConfigTimeRangesType = z.infer<
  typeof BusinessHoursConfigTimeRangesSchema
>
