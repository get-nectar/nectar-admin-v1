// @ts-nocheck
import { z } from 'zod'

import {
  MFAFactor,
  RegistrationStage,
  Workspace,
  WorkspacePageAccess,
  WorkspaceRole,
} from '@prisma/client'

export type FetchUserAuthDataResponseType = {
  data: {
    registrationStage: RegistrationStage
    activeWorkspace: {
      role: WorkspaceRole
      workspace: {
        isMFAEnabled: boolean | null
      }
      accessRole: {
        permissions: WorkspacePageAccess[]
      } | null
    } | null
  } | null
}

type WorkspaceWithActiveField = Workspace & {
  isActive: boolean
}
export type FetchUserWorkspacesResponseType = WorkspaceWithActiveField[]
export type FetchVerifiedMfaFactorsResponseType = MFAFactor[]

export const UpdateActiveWorkspaceRequestSchema = z.object({
  workspaceId: z.string().uuid(),
})

export type UpdateActiveWorkspaceRequestType = z.infer<
  typeof UpdateActiveWorkspaceRequestSchema
>

export type UpdateActiveWorkspaceResponseType = {
  isSuccess: boolean
}
