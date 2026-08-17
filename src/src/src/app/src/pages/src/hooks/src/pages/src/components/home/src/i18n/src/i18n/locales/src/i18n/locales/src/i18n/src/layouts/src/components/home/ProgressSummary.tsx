import { useTranslation } from 'react-i18next'

export default function NextStep() {
  const { t } = useTranslation()

  return (
    <div className="p-5 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
      <h3 className="font-semibold text-primary-700 dark:text-primary-300">
        {t('home.nextStep')}
      </h3>
      <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">
        {t('home.nextStepSuggestion')}
      </p>
    </div>
  )
} 
