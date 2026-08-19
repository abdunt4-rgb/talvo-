import { createContext, useContext, ReactNode, useState } from 'react'
import type { DataService } from '@/services/DataService'
import { MockDataService } from '@/services/MockDataService'
import type { User, Skill, Challenge, Project, Achievement } from '@/models'

interface DataServiceContextType {
  user: User
  skills: Skill[]
  challenges: Challenge[]
  projects: Project[]
  achievements: Achievement[]
  refreshData: () => void
}

const DataServiceContext = createContext<DataServiceContextType | null>(null)

export function DataServiceProvider({ children }: { children: ReactNode }) {
  const [service] = useState<DataService>(() => new MockDataService())
  const [data, setData] = useState(() => service.getAll())

  const refreshData = () => {
    setData(service.getAll())
  }

  return (
    <DataServiceContext.Provider
      value={{
        user: data.user,
        skills: data.skills,
        challenges: data.challenges,
        projects: data.projects,
        achievements: data.achievements,
        refreshData,
      }}
    >
      {children}
    </DataServiceContext.Provider>
  )
}

export function useDataService() {
  const ctx = useContext(DataServiceContext)
  if (!ctx) {
    throw new Error('useDataService must be used within DataServiceProvider')
  }
  return ctx
} 
