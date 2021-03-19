export type ImageResource = {
  height: number
  url: string
  width: number
}

export type Place = {
  description?: {
    html: string
    text: string
  }
  gallery: ImageResource[]
  id: string
  location: {
    latitude: number
    longitude: number
  }
  name: string
  slug: string
}

export type LightPlace = Pick<Place, 'id' | 'name' | 'slug' | 'location'>
