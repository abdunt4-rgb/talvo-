export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Expert'
export type ChallengeStatus = 'Open' | 'In Progress' | 'Completed'
export type ProjectStatus = 'Idea' | 'Planning' | 'Building' | 'Testing' | 'Review' | 'Completed'

export interface User {
  id: string
  name: string
  username: string
  level: number
  xp: number
  avatar?: string
}

export interface Skill {
  id: string
  name: string
  level: number
  xp: number
  mastery: number
  lastActivity: string
}

export interface Challenge {
  id: string
  title: string
  description: string
  skillId: string
  difficulty: Difficulty
  estimatedMinutes: number
  xp: number
  status: ChallengeStatus
}

export interface ProjectTask {
  id: string
  title: string
  completed: boolean
}

export interface Project {
  id: string
  name: string
  description: string
  skillIds: string[]
  status: ProjectStatus
  tasks: ProjectTask[]
  progress: number
  createdAt: string
  updatedAt: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  dateEarned: string
  icon: string
} 
