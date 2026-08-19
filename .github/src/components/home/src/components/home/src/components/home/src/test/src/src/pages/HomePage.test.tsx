import { render, screen } from '@testing-library/react'
import { DataServiceProvider } from '@/hooks/useDataService'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders greeting and sections', () => {
    render(
      <DataServiceProvider>
        <HomePage />
      </DataServiceProvider>,
    )
    expect(screen.getByText(/Hello,/i)).toBeInTheDocument()
    expect(screen.getByText(/Your Progress/i)).toBeInTheDocument()
    expect(screen.getByText(/Skills/i)).toBeInTheDocument()
  })
}) 
