import type { Skill } from '@/models'
import ProgressBar from './ProgressBar'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{skill.name}</h3>
        <span className="text-sm text-slate-500">Level {skill.level}</span>
      </div>
      <ProgressBar value={skill.mastery} />
      <p className="text-xs text-slate-400 mt-2">{skill.xp} XP</p>
    </div>
  )
} 
