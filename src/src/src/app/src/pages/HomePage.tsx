import { useDataService } from '@/hooks/useDataService'
import GreetingHeader from '@/components/home/GreetingHeader'
import ProgressSummary from '@/components/home/ProgressSummary'
import SkillPreview from '@/components/home/SkillPreview'
import CurrentChallenge from '@/components/home/CurrentChallenge'
import CurrentProject from '@/components/home/CurrentProject'
import NextStep from '@/components/home/NextStep'

export default function HomePage() {
  const { user, skills, challenges, projects } = useDataService()

  const activeChallenge = challenges.find((c) => c.status !== 'Completed')
  const activeProject = projects.find((p) => p.status !== 'Completed')

  return (
    <div className="space-y-6">
      <GreetingHeader name={user.name} avatar={user.avatar} />
      <ProgressSummary level={user.level} xp={user.xp} />
      <SkillPreview skills={skills} />
      <div className="grid gap-6 md:grid-cols-2">
        <CurrentChallenge challenge={activeChallenge} />
        <CurrentProject project={activeProject} />
      </div>
      <NextStep />
    </div>
  )
} 
