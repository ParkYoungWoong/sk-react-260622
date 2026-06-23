import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { mapIcon, TILE_URL } from '@/lib/leaflet'

// 매장 상세용 단일 마커 지도
export default function SingleMarkerMap({ store }) {
  return (
    <MapContainer
      center={[store.lat, store.lng]}
      zoom={16}
      scrollWheelZoom
      className="h-full w-full">
      <TileLayer url={TILE_URL} />
      <Marker
        position={[store.lat, store.lng]}
        icon={mapIcon}>
        <Popup>{store.name}</Popup>
      </Marker>
    </MapContainer>
  )
}
