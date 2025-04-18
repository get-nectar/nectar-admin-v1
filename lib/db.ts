import { PrismaClient, WorkspaceRole } from "@prisma/client";

// Create a singleton Prisma instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// User and Workspace queries
export async function getUsers() {
  try {
    // Get all users, filtering out deleted ones
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
      orderBy: {
        email: "asc",
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getWorkspaces() {
  try {
    // Get all active workspaces
    return await prisma.workspace.findMany({
      select: {
        id: true,
        companyName: true,
        createdAt: true,
      },
      orderBy: {
        companyName: "asc",
      },
    });
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return [];
  }
}

export async function getWorkspaceUsers(workspaceId: string) {
  try {
    return await prisma.workspaceUser.findMany({
      where: {
        workspaceId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  } catch (error) {
    console.error(`Error fetching users for workspace ${workspaceId}:`, error);
    return [];
  }
}

export async function addUserToWorkspace(
  userId: string,
  workspaceId: string,
  role: string
) {
  try {
    // Check if the user already exists in the workspace
    const existingUser = await prisma.workspaceUser.findFirst({
      where: {
        workspaceId,
        userId,
      },
    });

    if (existingUser) {
      throw new Error("User already exists in this workspace");
    }

    // Validate that both the user and workspace exist
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });

    if (!workspace) {
      throw new Error("Workspace not found");
    }

    // Add user to workspace
    return await prisma.workspaceUser.create({
      data: {
        workspaceId,
        userId,
        role: role as WorkspaceRole,
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
    });
  } catch (error) {
    console.error("Error adding user to workspace:", error);
    throw error;
  }
}

export async function removeUserFromWorkspace(
  userId: string,
  workspaceId: string
) {
  try {
    // Check if the user exists in the workspace
    const workspaceUser = await prisma.workspaceUser.findFirst({
      where: {
        workspaceId,
        userId,
      },
    });

    if (!workspaceUser) {
      throw new Error("User not found in this workspace");
    }

    // Remove user from workspace
    return await prisma.workspaceUser.delete({
      where: {
        id: workspaceUser.id,
      },
    });
  } catch (error) {
    console.error("Error removing user from workspace:", error);
    throw error;
  }
}
