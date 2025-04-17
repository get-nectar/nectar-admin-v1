import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function GET() {
  try {
    // Get all workspaces
    const workspaces = await prisma.workspace.findMany({
      select: {
        id: true,
        companyName: true,
      },
      orderBy: {
        companyName: 'asc',
      },
    })
    
    // Format the response for the frontend
    const formattedWorkspaces = workspaces.map(workspace => ({
      id: workspace.id,
      name: workspace.companyName
    }))
    
    return NextResponse.json(formattedWorkspaces)
  } catch (error) {
    console.error('Error fetching workspaces:', error)
    return NextResponse.json(
      { error: 'Failed to fetch workspaces' },
      { status: 500 }
    )
  }
} 