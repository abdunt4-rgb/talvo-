import { render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  it('renders with correct width', () => {
    const { getByRole } = render(<ProgressBar value={50} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '50')
  })

  it('clamps values > 100', () => {
    const { getByRole } = render(<ProgressBar value={150} />)
    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('clamps values < 0', () => {
    const { getByRole } = render(<ProgressBar value={-20} />)
    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
}) 
