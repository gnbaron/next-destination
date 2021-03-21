import { NextSeo } from 'next-seo'

import * as S from './styles'

export const NotFoundTemplate = () => {
  return (
    <S.Wrapper>
      <NextSeo title={`Not found - Next Destination`} />
      <S.Heading>
        Sorry, the page you are looking for does not exist 🤷‍♀️
      </S.Heading>
    </S.Wrapper>
  )
}

export default NotFoundTemplate
