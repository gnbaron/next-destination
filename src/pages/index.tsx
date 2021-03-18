import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { Info } from '@styled-icons/material-rounded'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
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
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
