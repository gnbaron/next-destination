import { render, screen } from '@testing-library/react'
import Hello from './index'

describe('<Hello />', () => {
  it('renders the default heading', () => {
    render(<Hello />)
    expect(
      screen.getByRole('heading', { name: /hello next/i })
    ).toBeInTheDocument()
  })

  it('renders a custom title', () => {
    render(<Hello title="world" />)
    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
  })
})
