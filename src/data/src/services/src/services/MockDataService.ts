import type { DataService, AllData } from './DataService'
import type { User, Skill, Challenge, Project, Achievement } from '@/models'
import { mockData } from '@/data/mockData'

const STORAGE_KEY = 'talvo_data'

export class MockDataService implements DataService {
  private data: AllData

  constructor() {
    this.data = this.load()
  }

  private load(): AllData {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored) as AllData
      } catch (e) {
        console.warn('Failed to parse stored data, using mock defaults', e)
      }
    }
    return mockData
  }

  private persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data))
  }

  getUser(): User {
    return this.data.user
  }

  getSkills(): Skill[] {
    return this.data.skills
  }

  getChallenges(): Challenge[] {
    return this.data.challenges
  }

  getProjects(): Project[] {
    return this.data.projects
  }

  getAchievements(): Achievement[] {
    return this.data.achievements
  }

  getAll(): AllData {
    return {
      user: { ...this.data.user },
      skills: [...this.data.skills],
      challenges: [...this.data.challenges],
      projects: [...this.data.projects],
      achievements: [...this.data.achievements],
    }
  }

  updateUser(partial: Partial<User>): void {
    this.data.user = { ...this.data.user, ...partial }
    this.persist()
  }

  updateSkill(skillId: string, partial: Partial<Skill>): void {
    this.data.skills = this.data.skills.map((skill) =>
      skill.id === skillId ? { ...skill, ...partial } : skill,
    )
    this.persist()
  }

  updateChallenge(challengeId: string, partial: Partial<Challenge>): void {
    this.data.challenges = this.data.challenges.map((challenge) =>
      challenge.id === challengeId ? { ...challenge, ...partial } : challenge,
    )
    this.persist()
  }

  updateProject(projectId: string, partial: Partial<Project>): void {
    this.data.projects = this.data.projects.map((project) =>
      project.id === projectId ? { ...project, ...partial } : project,
    )
    this.persist()
  }

  addAchievement(achievement: Achievement): void {
    this.data.achievements = [...this.data.achievements, achievement]
    this.persist()
  }
} 
