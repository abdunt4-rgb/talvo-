import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-5 ${className}`}
    >
      {children}
    </div>
  )
} 
