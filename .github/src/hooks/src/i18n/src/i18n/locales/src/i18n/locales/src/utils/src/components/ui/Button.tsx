import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'px-4 py-2 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50'
  const variants = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary:
      'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100',
    ghost:
      'bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:hover:bg-primary-900/20',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
} 
