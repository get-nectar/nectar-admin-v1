import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

export async function GET(
  request: Request,
  { params }: { params: { workspaceId: string } }
) {
  try {
    const { workspaceId } = params
    
    // Validate workspaceId
    if (!workspaceId) {
      return NextResponse.json(
        { error: 'Workspace ID is required' },
        { status: 400 }
      )
    }
    
    // Check if workspace exists
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    })
    
    if (!workspace) {
      return NextResponse.json(
        { error: 'Workspace not found' },
        { status: 404 }
      )
    }
    
    // Get all users for the workspace
    const workspaceUsers = await prisma.workspaceUser.findMany({
      where: {
        workspaceId,
      },
      select: {
        id: true,
        role: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    // Format response
    const formattedUsers = workspaceUsers.map(wu => ({
      id: wu.id,
      userId: wu.user.id,
      email: wu.user.email,
      name: wu.user.name || wu.user.email,
      role: wu.role,
    }))
    
    return NextResponse.json(formattedUsers)
  } catch (error) {
    console.error('Error fetching workspace users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch workspace users' },
      { status: 500 }
    )
  }
} 