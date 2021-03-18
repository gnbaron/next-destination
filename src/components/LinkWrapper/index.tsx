import Link from 'next/link'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  href: string
}

const LinkWrapper = ({ children, href }: Props) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
