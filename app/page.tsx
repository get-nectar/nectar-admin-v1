'use client'

import AddUserForm from '../components/AddUserForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nectar Admin Tool</h1>
        </div>
      </header>
      <main className="py-6">
        <AddUserForm />
      </main>
    </div>
  )
} 