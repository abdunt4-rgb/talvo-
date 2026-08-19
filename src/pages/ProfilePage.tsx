import { useTranslation } from 'react-i18next'
import { useDataService } from '@/hooks/useDataService'
import ProgressBar from '@/components/ui/ProgressBar'

export default function ProfilePage() {
  const { t } = useTranslation()
  const { user, skills, projects, achievements } = useDataService()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-4xl">
          {user.avatar || '👤'}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-slate-500">@{user.username}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl">
          <h2 className="text-sm font-medium text-slate-500 mb-1">
            {t('profile.level')}
          </h2>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            {user.level}
          </p>
        </div>
        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl">
          <h2 className="text-sm font-medium text-slate-500 mb-1">
            {t('profile.xp')}
          </h2>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            {user.xp}
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-3">{t('profile.skills')}</h2>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 bg-white dark:bg-slate-800 rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-slate-500">
                  Level {skill.level}
                </span>
              </div>
              <ProgressBar value={skill.mastery} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          {t('profile.projects')}
        </h2>
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-white dark:bg-slate-800 rounded-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{project.name}</span>
                <span className="text-sm text-slate-500">{project.status}</span>
              </div>
              <ProgressBar value={project.progress} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          {t('profile.achievements')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-4 bg-white dark:bg-slate-800 rounded-xl flex items-start gap-3"
            >
              <span className="text-3xl">{achievement.icon}</span>
              <div>
                <p className="font-medium">{achievement.title}</p>
                <p className="text-sm text-slate-500">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
