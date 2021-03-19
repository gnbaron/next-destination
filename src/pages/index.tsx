import HomeTemplate from 'templates/Home'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'types/graphql'
import { LightPlace } from 'types/global'

export default function Home({ places }: { places: LightPlace[] }) {
  return <HomeTemplate places={places} />
}

export async function getStaticProps() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  return {
    revalidate: 21600, // 6h
    props: {
      places,
    },
  }
}
