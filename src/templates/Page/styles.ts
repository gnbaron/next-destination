import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8rem var(--medium);
`

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  max-width: var(--container);
  text-align: center;
`

export const Heading = styled.h1`
  color: var(--highlight);
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: var(--medium);
  }
`
