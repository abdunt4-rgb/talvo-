import { useTranslation } from 'react-i18next'
import Sidebar from './Sidebar'
import BottomNav from './BottomNav'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageToggle from '@/components/ui/LanguageToggle'

interface NavigationProps {
  currentRoute: string
  onNavigate: (route: string) => void
}

export default function Navigation({
  currentRoute,
  onNavigate,
}: NavigationProps) {
  const { t } = useTranslation()

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'challenges', label: t('nav.challenges') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'profile', label: t('nav.profile') },
  ]

  return (
    <>
      <Sidebar
        items={navItems}
        currentRoute={currentRoute}
        onNavigate={onNavigate}
      />
      <BottomNav
        items={navItems}
        currentRoute={currentRoute}
        onNavigate={onNavigate}
      />
      <div className="fixed top-4 end-4 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </>
  )
} 
