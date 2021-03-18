import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      name
      slug
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
