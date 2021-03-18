import dynamic from 'next/dynamic'
import { Info } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'
import { Place } from 'graphql/generated/types'

const Map = dynamic(() => import('components/Map'), { ssr: false })

type HomeTemplateProps = {
  places: Place[]
}

export default function HomeTemplate({ places }: HomeTemplateProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
