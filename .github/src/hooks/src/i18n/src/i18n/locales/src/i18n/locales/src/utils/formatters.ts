export function formatDate(dateString: string, locale = 'en') {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatXp(xp: number) {
  return `${xp} XP`
} 
