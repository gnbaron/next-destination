import { Close } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <Close size={32} aria-label="Home" />
      </LinkWrapper>

      <S.Heading>Next Destination</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          atque minima beatae explicabo, quaerat dolorem enim, eligendi iste,
          repellat id ea aliquid. Magnam, nostrum numquam quis et omnis optio
          sint.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
