import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import { LightPlace } from 'types/global'

import * as S from './styles'

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

export type MapProps = {
  places?: LightPlace[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <MapContainer
        center={[0, 0]}
        maxBounds={[
          [-180, 180],
          [180, -180],
        ]}
        minZoom={3}
        style={{ height: '100%', width: '100%' }}
        zoom={3}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            return null
          }}
        </MapConsumer>

        <CustomTileLayer />

        {places?.map(({ id, name, location, slug }) => (
          <Marker
            key={`place-${id}`}
            position={[location.latitude, location.longitude]}
            title={name}
            eventHandlers={{
              click: () => router.push(`/place/${slug}`),
            }}
          />
        ))}
      </MapContainer>
    </S.Wrapper>
  )
}

export default Map
