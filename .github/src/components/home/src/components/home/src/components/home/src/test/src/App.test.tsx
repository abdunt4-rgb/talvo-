import { render, screen } from '@testing-library/react'
import App from './app/App'

describe('App', () => {
  it('renders Talvo application', async () => {
    render(<App />)
    expect(await screen.findByText(/Talvo/i)).toBeInTheDocument()
    expect(screen.getByText(/Discover\. Develop\. Create\./i)).toBeInTheDocument()
  })
}) 
