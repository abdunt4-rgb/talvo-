import { ReactNode } from 'react'
import Navigation from '@/components/layout/Navigation'

interface MainLayoutProps {
  currentRoute: string
  onNavigate: (route: string) => void
  children: ReactNode
}

export default function MainLayout({
  currentRoute,
  onNavigate,
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <Navigation currentRoute={currentRoute} onNavigate={onNavigate} />
      <main className="pb-20 md:pb-8 md:pt-8 md:ps-20 lg:ps-64">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
