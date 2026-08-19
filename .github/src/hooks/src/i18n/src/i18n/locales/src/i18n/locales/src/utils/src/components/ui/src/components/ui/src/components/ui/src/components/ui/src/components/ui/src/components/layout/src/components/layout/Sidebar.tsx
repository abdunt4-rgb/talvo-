import { useTranslation } from 'react-i18next'
import type { NavItem } from '@/types'

interface SidebarProps {
  items: NavItem[]
  currentRoute: string
  onNavigate: (route: string) => void
}

export default function Sidebar({
  items,
  currentRoute,
  onNavigate,
}: SidebarProps) {
  const { t } = useTranslation()

  return (
    <aside className="hidden md:flex md:flex-col fixed inset-y-0 start-0 w-64 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800 z-40">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          {t('appName')}
        </h1>
        <p className="text-xs text-slate-500 mt-1">{t('tagline')}</p>
      </div>
      <nav className="flex-1 px-3 space-y-1" aria-label="Main navigation">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
              ${
                currentRoute === item.id
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }
            `}
            aria-current={currentRoute === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
} 
