import { useTranslation } from 'react-i18next'
import ProgressBar from '@/components/ui/ProgressBar'

interface ProgressSummaryProps {
  level: number
  xp: number
}

export default function ProgressSummary({
  level,
  xp,
}: ProgressSummaryProps) {
  const { t } = useTranslation()
  const nextLevelXp = level * 100
  const currentLevelXp = xp % 100
  const progress = (currentLevelXp / 100) * 100

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
      <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
        {t('home.progress')}
      </h2>
      <div className="flex items-end justify-between mb-2">
        <div>
          <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            {t('profile.level')} {level}
          </span>
        </div>
        <div className="text-end">
          <span className="text-sm text-slate-500">
            {xp} / {nextLevelXp} XP
          </span>
        </div>
      </div>
      <ProgressBar value={progress} />
    </div>
  )
} 
