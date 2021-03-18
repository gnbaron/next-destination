import HomeTemplate from 'templates/Home'
import { GetPlacesQuery, Place } from 'graphql/generated/types'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'

type HomeProps = {
  places: Place[]
}

export default function Home({ places }: HomeProps) {
  return <HomeTemplate places={places} />
}

export async function getStaticProps() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  return {
    props: {
      places,
    },
  }
}
