'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XCircleIcon, UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

// Define WorkspaceRole enum to match Prisma schema
enum WorkspaceRole {
  INTERNAL_ADMIN = 'INTERNAL_ADMIN',
  INTERNAL = 'INTERNAL',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

type User = {
  id: string
  email: string
  name: string
}

type Workspace = {
  id: string
  name: string
}

type SelectedUser = {
  id: string
  email: string
  name: string
}

export default function AddUserForm() {
  const [selectedUsers, setSelectedUsers] = useState<SelectedUser[]>([])
  const [role, setRole] = useState<WorkspaceRole>(WorkspaceRole.MEMBER)
  const [workspaceId, setWorkspaceId] = useState<string>('')
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Real implementation that fetches data from API endpoints
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users
        const usersResponse = await fetch('/api/users')
        if (!usersResponse.ok) {
          throw new Error('Failed to fetch users')
        }
        const usersData = await usersResponse.json()
        setUsers(usersData)
        setFilteredUsers(usersData)

        // Fetch workspaces
        const workspacesResponse = await fetch('/api/workspaces')
        if (!workspacesResponse.ok) {
          throw new Error('Failed to fetch workspaces')
        }
        const workspacesData = await workspacesResponse.json()
        setWorkspaces(workspacesData)

        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setStatus('error')
        setMessage('Failed to load data. Please try refreshing the page.')
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter users based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredUsers(users)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(query) || 
        user.email.toLowerCase().includes(query)
      )
      setFilteredUsers(filtered)
    }
  }, [searchQuery, users])

  const handleUserToggle = (user: User) => {
    setSelectedUsers(prevSelectedUsers => {
      const userExists = prevSelectedUsers.some(selectedUser => selectedUser.id === user.id)
      
      if (userExists) {
        // Remove user if already selected
        return prevSelectedUsers.filter(selectedUser => selectedUser.id !== user.id)
      } else {
        // Add user if not already selected
        return [...prevSelectedUsers, { id: user.id, email: user.email, name: user.name }]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedUsers.length === 0) {
      setStatus('error')
      setMessage('Please select at least one user')
      return
    }
    setIsConfirmOpen(true)
  }

  const confirmAddUsers = async () => {
    setIsConfirmOpen(false)
    setStatus('loading')
    setMessage('')

    try {
      // Process each selected user
      const results = await Promise.all(
        selectedUsers.map(user => 
          fetch('/api/add-user-to-workspace', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.id,
              workspaceId,
              role
            }),
          }).then(response => response.json())
        )
      )
      
      // Check if any requests failed
      const hasErrors = results.some(result => result.error)
      
      if (hasErrors) {
        throw new Error('Failed to add one or more users to workspace')
      }

      setStatus('success')
      setMessage(`Successfully added ${selectedUsers.length} user${selectedUsers.length !== 1 ? 's' : ''} to workspace with role ${role}`)
      
      // Reset form
      setSelectedUsers([])
      setWorkspaceId('')
      setRole(WorkspaceRole.MEMBER)
      setSearchQuery('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  const removeSelectedUser = (userId: string) => {
    setSelectedUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-8">
        <div className="flex items-center mb-6">
          <UserPlusIcon className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold">Add Users to Workspace</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Users
            </label>
            
            {/* Search input */}
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* User selection list */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="max-h-64 overflow-y-auto">
                {filteredUsers.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No users found matching your search
                  </div>
                ) : (
                  filteredUsers.map(user => (
                    <div 
                      key={user.id} 
                      className={`flex items-center p-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700`}
                      onClick={() => handleUserToggle(user)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedUsers.some(selectedUser => selectedUser.id === user.id)}
                        onChange={() => {}}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <div className="relative">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value as WorkspaceRole)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 pr-10 py-2"
                required
              >
                {Object.values(WorkspaceRole).map(roleValue => (
                  <option key={roleValue} value={roleValue}>
                    {roleValue.replace('_', ' ')}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="workspace" className="block text-sm font-medium mb-2">
              Select Workspace
            </label>
            <div className="relative">
              <select
                id="workspace"
                value={workspaceId}
                onChange={(e) => setWorkspaceId(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 pr-10 py-2"
                required
              >
                <option value="">Select a workspace</option>
                {workspaces.map(workspace => (
                  <option key={workspace.id} value={workspace.id}>
                    {workspace.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={status === 'loading' || selectedUsers.length === 0}
          >
            {status === 'loading' ? 'Processing...' : 'Add Users to Workspace'}
          </button>
          
          {status === 'success' && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-300">{message}</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
              <p className="text-sm text-red-700 dark:text-red-300">{message}</p>
            </div>
          )}
        </form>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white dark:bg-gray-800 p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium">Confirm Action</Dialog.Title>
            
            <div className="mt-4 flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
              <div>
                <p className="mb-2">
                  Are you sure you want to add <span className="font-semibold">{selectedUsers.length}</span> user{selectedUsers.length !== 1 ? 's' : ''} to 
                  the selected workspace with the role <span className="font-semibold">{role}</span>?
                </p>
                {selectedUsers.length > 0 && (
                  <div className="mt-2 max-h-40 overflow-y-auto">
                    <p className="text-sm font-medium mb-1">Selected users:</p>
                    <ul className="text-sm space-y-1">
                      {selectedUsers.map(user => (
                        <li key={user.id}>{user.name} ({user.email})</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
                onClick={() => setIsConfirmOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                onClick={confirmAddUsers}
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
} 