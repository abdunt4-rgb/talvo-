import i18n from './index'

describe('i18n', () => {
  it('defaults to English', () => {
    expect(i18n.language).toBe('en')
    expect(i18n.t('appName')).toBe('Talvo')
  })

  it('switches to Arabic and updates dir', async () => {
    await i18n.changeLanguage('ar')
    expect(i18n.language).toBe('ar')
    expect(i18n.t('appName')).toBe('Talvo')
    expect(document.documentElement.dir).toBe('rtl')
    expect(document.documentElement.lang).toBe('ar')
    await i18n.changeLanguage('en')
  })
}) 
