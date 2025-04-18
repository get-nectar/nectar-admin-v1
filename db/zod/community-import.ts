// @ts-nocheck
import { z } from 'zod'

export enum CommunityMemberPredefinedAttribute {
  IDENTIFIER = 'identifier',
  EMAIL = 'email',
  PHONE_NUMBER = 'phoneNumber',
  LOCATION = 'location',
  LABELS = 'labels',
  INSTAGRAM_HANDLE = 'instagramHandle',
  TIKTOK_HANDLE = 'tiktokHandle',
  STREET_ADDRESS = 'streetAddress',
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
  ZIP_CODE = 'zipCode',
}

const ImportCommunityMemberPredefinedColumnMappingSchema = z.object({
  type: z.literal('PREDEFINED'),
  columnName: z.string(),
  attribute: z.nativeEnum(CommunityMemberPredefinedAttribute),
  isUniqueAttribute: z.boolean().optional(),
})

const ImportCommunityMemberCustomColumnMappingSchema = z.object({
  type: z.literal('CUSTOM'),
  columnName: z.string(),
  customFieldId: z.string().uuid(),
})

export const ImportCommunityMemberColumnMappingSchema = z.discriminatedUnion(
  'type',
  [
    ImportCommunityMemberPredefinedColumnMappingSchema,
    ImportCommunityMemberCustomColumnMappingSchema,
  ],
)

export const ImportCommunityMemberSchema = z.object({
  jobTitle: z.string(),
  workspaceId: z.string(),
  uploadedFileUrl: z.string(),
  columnMapping: z.array(ImportCommunityMemberColumnMappingSchema),
})

export type ImportCommunityMemberType = z.infer<
  typeof ImportCommunityMemberSchema
>

export type ImportCommunityMemberColumnMappingType = z.infer<
  typeof ImportCommunityMemberColumnMappingSchema
>
