import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Place } from 'graphql/generated/types'

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => (
      <Marker
        key={`place-${id}`}
        position={[location.latitude, location.longitude]}
        title={name}
      />
    ))}
  </MapContainer>
)

export default Map
