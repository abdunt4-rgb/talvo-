import { useTranslation } from 'react-i18next'

function PlaceholderPage({ titleKey }: { titleKey: string }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <span className="text-6xl mb-4">🚧</span>
      <h1 className="text-2xl font-bold">{t(titleKey)}</h1>
      <p className="text-slate-500 mt-2">{t('common.comingSoon')}</p>
    </div>
  )
}

export function ChallengesPlaceholder() {
  return <PlaceholderPage titleKey="nav.challenges" />
}

export function ProjectsPlaceholder() {
  return <PlaceholderPage titleKey="nav.projects" />
}

export function SkillsPlaceholder() {
  return <PlaceholderPage titleKey="nav.skills" />
} 
