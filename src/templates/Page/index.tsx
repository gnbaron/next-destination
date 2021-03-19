import { NextSeo } from 'next-seo'
import { Close } from '@styled-icons/material-rounded'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: {
    html: string
    text: string
  }
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${heading} - Next Destination`}
        description={body.text}
      />
      <S.Wrapper>
        <S.Content>
          <LinkWrapper href="/">
            <Close size={32} aria-label="Home" />
          </LinkWrapper>

          <S.Heading>{heading}</S.Heading>

          <S.Body>
            <div dangerouslySetInnerHTML={{ __html: body.html }} />
          </S.Body>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default PageTemplate
