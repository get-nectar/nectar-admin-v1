import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function POST(request: Request) {
  try {
    const { userId, workspaceId } = await request.json()

    // Validate input
    if (!userId || !workspaceId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if the user exists in the workspace
    const workspaceUser = await prisma.workspaceUser.findFirst({
      where: {
        workspaceId,
        userId,
      },
      include: {
        user: {
          select: {
            email: true,
            name: true,
          },
        },
        workspace: {
          select: {
            companyName: true,
          },
        },
      },
    })

    if (!workspaceUser) {
      return NextResponse.json(
        { error: 'User not found in this workspace' },
        { status: 404 }
      )
    }

    // Remove user from workspace
    await prisma.workspaceUser.delete({
      where: {
        id: workspaceUser.id,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: `Successfully removed user ${workspaceUser.user.email} from ${workspaceUser.workspace.companyName}`,
        data: {
          email: workspaceUser.user.email,
          name: workspaceUser.user.name,
          workspace: workspaceUser.workspace.companyName,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error removing user from workspace:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
} 