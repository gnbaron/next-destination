import Image from 'next/image'
import { Close } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'
import { Place } from 'types/global'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

const PlaceTemplate = ({ place }: { place: Place }) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <Close size={32} aria-label="Home" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          {place.description && (
            <S.Body
              dangerouslySetInnerHTML={{ __html: place.description?.html }}
            />
          )}
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                quality={75}
                height={600}
                width={1000}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
