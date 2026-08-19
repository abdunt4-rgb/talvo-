import { useTranslation } from 'react-i18next'
import type { Project } from '@/models'
import ProgressBar from '@/components/ui/ProgressBar'

interface CurrentProjectProps {
  project?: Project
}

export default function CurrentProject({ project }: CurrentProjectProps) {
  const { t } = useTranslation()

  if (!project) {
    return (
      <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
        <h3 className="font-medium mb-2">{t('home.currentProject')}</h3>
        <p className="text-slate-500">{t('home.noProject')}</p>
      </div>
    )
  }

  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
      <h3 className="font-medium mb-2">{t('home.currentProject')}</h3>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold">{project.name}</p>
          <p className="text-sm text-slate-500 mt-1">{project.description}</p>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {project.status}
        </span>
      </div>
      <div className="mt-4">
        <ProgressBar value={project.progress} />
      </div>
    </div>
  )
}
