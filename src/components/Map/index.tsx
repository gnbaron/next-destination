import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { LightPlace } from 'types/global'

export type MapProps = {
  places?: LightPlace[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
  )
}

export default Map
