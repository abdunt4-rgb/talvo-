import { useTranslation } from 'react-i18next'
import type { Skill } from '@/models'
import SkillCard from '@/components/ui/SkillCard'

interface SkillPreviewProps {
  skills: Skill[]
}

export default function SkillPreview({ skills }: SkillPreviewProps) {
  const { t } = useTranslation()
  const topSkills = skills.slice(0, 3)

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">{t('home.skillsPreview')}</h2>
        <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
          {t('home.viewAll')}
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {topSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
} 
