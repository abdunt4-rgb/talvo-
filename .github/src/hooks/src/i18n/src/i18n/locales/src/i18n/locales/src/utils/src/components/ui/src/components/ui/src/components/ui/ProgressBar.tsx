interface ProgressBarProps {
  value: number
  className?: string
}

export default function ProgressBar({
  value,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div
      className={`w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-primary-500 dark:bg-primary-400 rounded-full transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
} 
