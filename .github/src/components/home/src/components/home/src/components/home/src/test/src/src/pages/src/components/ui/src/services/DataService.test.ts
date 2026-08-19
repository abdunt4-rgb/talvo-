import { MockDataService } from './MockDataService'
import { mockData } from '@/data/mockData'

describe('MockDataService', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns mock data when no stored data', () => {
    const service = new MockDataService()
    expect(service.getUser().id).toBe(mockData.user.id)
    expect(service.getSkills()).toHaveLength(mockData.skills.length)
  })

  it('updates user and persists', () => {
    const service = new MockDataService()
    service.updateUser({ name: 'Test' })
    const updated = new MockDataService()
    expect(updated.getUser().name).toBe('Test')
  })

  it('updates skill', () => {
    const service = new MockDataService()
    const skillId = mockData.skills[0].id
    service.updateSkill(skillId, { mastery: 80 })
    const updated = service.getSkills().find((s) => s.id === skillId)
    expect(updated?.mastery).toBe(80)
  })

  it('adds achievement', () => {
    const service = new MockDataService()
    const achievement = {
      id: 'ach-test',
      title: 'Test',
      description: 'Test achievement',
      dateEarned: '2024-01-01',
      icon: '✅',
    }
    service.addAchievement(achievement)
    expect(service.getAchievements()).toContainEqual(achievement)
  })
}) 
