import { useTranslation } from 'react-i18next'
import type { Challenge } from '@/models'

interface CurrentChallengeProps {
  challenge?: Challenge
}

export default function CurrentChallenge({
  challenge,
}: CurrentChallengeProps) {
  const { t } = useTranslation()

  if (!challenge) {
    return (
      <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
        <h3 className="font-medium mb-2">{t('home.currentChallenge')}</h3>
        <p className="text-slate-500">{t('home.noChallenge')}</p>
      </div>
    )
  }

  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
      <h3 className="font-medium mb-2">{t('home.currentChallenge')}</h3>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold">{challenge.title}</p>
          <p className="text-sm text-slate-500 mt-1">{challenge.description}</p>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
          {challenge.difficulty}
        </span>
      </div>
      <div className="mt-3 flex gap-4 text-sm text-slate-500">
        <span>{challenge.estimatedMinutes} min</span>
        <span>{challenge.xp} XP</span>
        <span className="capitalize">{challenge.status}</span>
      </div>
    </div>
  )
} 
