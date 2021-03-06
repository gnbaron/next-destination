import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'types/graphql'
import { Place } from 'types/global'
import PlaceTemplate from 'templates/Place'

export default function PlacePage({ place }: { place: Place }) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  })

  const paths = places.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 21600, // 6h
    props: {
      place,
    },
  }
}
