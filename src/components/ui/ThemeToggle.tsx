import { useTranslation } from 'react-i18next'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105 transition-transform"
      title={t('theme.toggle')}
      aria-label={t('theme.toggle')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
