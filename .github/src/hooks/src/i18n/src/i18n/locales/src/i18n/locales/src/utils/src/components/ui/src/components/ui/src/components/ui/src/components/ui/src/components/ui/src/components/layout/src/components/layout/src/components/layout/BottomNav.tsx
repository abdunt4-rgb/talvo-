import { useTranslation } from 'react-i18next'
import type { NavItem } from '@/types'

interface BottomNavProps {
  items: NavItem[]
  currentRoute: string
  onNavigate: (route: string) => void
}

export default function BottomNav({
  items,
  currentRoute,
  onNavigate,
}: BottomNavProps) {
  const { t } = useTranslation()

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 z-40"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              flex flex-col items-center justify-center py-1 px-2 rounded-lg text-xs font-medium transition-colors
              ${
                currentRoute === item.id
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-500 dark:text-slate-400'
              }
            `}
            aria-label={t(`nav.${item.id}`)}
            aria-current={currentRoute === item.id ? 'page' : undefined}
          >
            <span className="text-lg leading-none mb-1">
              {item.id === 'home' && '🏠'}
              {item.id === 'challenges' && '🎯'}
              {item.id === 'projects' && '📁'}
              {item.id === 'skills' && '⚡'}
              {item.id === 'profile' && '👤'}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
} 
