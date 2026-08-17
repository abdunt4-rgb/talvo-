import { useEffect, useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'
import {
  ChallengesPlaceholder,
  ProjectsPlaceholder,
  SkillsPlaceholder,
} from '@/pages/PlaceholderPages'
import { DataServiceProvider } from '@/hooks/useDataService'
import { ThemeProvider, useTheme } from '@/hooks/useTheme'

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState('home')
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />
      case 'challenges':
        return <ChallengesPlaceholder />
      case 'projects':
        return <ProjectsPlaceholder />
      case 'skills':
        return <SkillsPlaceholder />
      case 'profile':
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <MainLayout currentRoute={currentRoute} onNavigate={setCurrentRoute}>
      {renderPage()}
    </MainLayout>
  )
}

function App() {
  return (
    <ThemeProvider>
      <DataServiceProvider>
        <AppContent />
      </DataServiceProvider>
    </ThemeProvider>
  )
}

export default App 
