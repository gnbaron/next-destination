import { NextSeo } from 'next-seo'
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
      <NextSeo
        title={`${place.name} - Next Destination`}
        description={place.description?.text}
        openGraph={{
          // TODO: update the url
          url: 'https://www.url.ie/',
          title: `${place.name} - Next Destination`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
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
