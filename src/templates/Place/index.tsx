import { Close } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'
import { Place } from 'types/global'

import * as S from './styles'

const PlaceTemplate = ({ place }: { place: Place }) => {
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
              <img key={`photo-${index}`} src={image.url} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
