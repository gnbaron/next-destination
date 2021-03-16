import { render, screen } from '@testing-library/react'
import Map from './index'

describe('<Map />', () => {
  it('renders the map without markers', () => {
    render(<Map />)

    screen.getByRole('link', {
      name: /a js library for interactive maps/i,
    })
  })

  it('renders the markers correctly', () => {
    const places = [
      {
        id: '1',
        name: 'Amsterdam',
        slug: 'amsterdam',
        location: {
          latitude: 52.3676,
          longitude: 4.9041,
        },
      },
      {
        id: '2',
        name: 'Kyoto',
        slug: 'kyoto',
        location: {
          latitude: 35.0116,
          longitude: 135.7681,
        },
      },
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/amsterdam/i)).toBeInTheDocument()
    expect(screen.getByTitle(/kyoto/i)).toBeInTheDocument()
  })
})
