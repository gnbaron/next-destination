import { render, screen } from '@testing-library/react'
import LinkWrapper from './index'

describe('<LinkWrapper />', () => {
  it('renders the link', () => {
    render(<LinkWrapper href="http://fake.url.com">content</LinkWrapper>)

    const element = screen.getByRole('link', { name: /content/i })

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('href', 'http://fake.url.com')
  })
})
