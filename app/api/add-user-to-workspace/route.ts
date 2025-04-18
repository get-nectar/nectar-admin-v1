import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'
import { WorkspaceRole } from '@prisma/client'
import logger from '../../../lib/logger'

export async function POST(request: Request) {
  try {
    const { userId, workspaceId, role } = await request.json()
    
    logger.info({ userId, workspaceId, role }, 'Adding user to workspace')

    // Validate input
    if (!userId || !workspaceId || !role) {
      logger.warn({ userId, workspaceId, role }, 'Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if role is valid
    if (!Object.values(WorkspaceRole).includes(role)) {
      logger.warn({ role }, 'Invalid role')
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      )
    }

    // Check if the user already exists in the workspace
    const existingUser = await prisma.workspaceUser.findFirst({
      where: {
        workspaceId,
        userId,
      },
    })

    if (existingUser) {
      logger.warn({ userId, workspaceId }, 'User already exists in workspace')
      return NextResponse.json(
        { error: 'User already exists in this workspace' },
        { status: 400 }
      )
    }

    // Validate that user and workspace exist
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true }
    })

    if (!user) {
      logger.warn({ userId }, 'User not found')
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      select: { id: true, companyName: true }
    })

    if (!workspace) {
      logger.warn({ workspaceId }, 'Workspace not found')
      return NextResponse.json(
        { error: 'Workspace not found' },
        { status: 404 }
      )
    }

    // Add user to workspace
    const workspaceUser = await prisma.workspaceUser.create({
      data: {
        workspaceId,
        userId,
        role: role as WorkspaceRole,
      },
      select: {
        id: true,
        role: true,
        user: {
          select: {
            email: true,
            name: true
          }
        },
        workspace: {
          select: {
            companyName: true
          }
        }
      }
    })

    logger.info({ 
      workspaceUserId: workspaceUser.id,
      userEmail: workspaceUser.user.email,
      workspace: workspaceUser.workspace.companyName,
      role: workspaceUser.role
    }, 'Successfully added user to workspace')

    return NextResponse.json(
      { 
        success: true, 
        data: {
          id: workspaceUser.id,
          role: workspaceUser.role,
          user: {
            email: workspaceUser.user.email,
            name: workspaceUser.user.name
          },
          workspace: {
            name: workspaceUser.workspace.companyName
          }
        } 
      },
      { status: 201 }
    )
  } catch (error) {
    logger.error(error, 'Error adding user to workspace')
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
} 