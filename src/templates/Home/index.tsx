import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'
import { LightPlace } from 'types/global'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: { places: LightPlace[] }) {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
