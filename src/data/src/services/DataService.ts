import type { User, Skill, Challenge, Project, Achievement } from '@/models'

export interface AllData {
  user: User
  skills: Skill[]
  challenges: Challenge[]
  projects: Project[]
  achievements: Achievement[]
}

export interface DataService {
  getUser(): User
  getSkills(): Skill[]
  getChallenges(): Challenge[]
  getProjects(): Project[]
  getAchievements(): Achievement[]
  getAll(): AllData
  updateUser(partial: Partial<User>): void
  updateSkill(skillId: string, partial: Partial<Skill>): void
  updateChallenge(challengeId: string, partial: Partial<Challenge>): void
  updateProject(projectId: string, partial: Partial<Project>): void
  addAchievement(achievement: Achievement): void
} 
