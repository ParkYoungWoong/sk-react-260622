import L from 'leaflet'

// 브랜드 그래디언트 마커. 이미지가 아니라 HTML 요소로 그리는 커스텀 마커(divIcon)다.
// 실제 모양과 색은 index.css 의 .map-marker 클래스가 담당하고,
// 여기서는 크기와 기준점(anchor) 좌표만 정의한다.
export const mapIcon = L.divIcon({
  className: 'map-marker',
  html: '<span></span>',
  iconSize: [16, 16], // 마커 박스 크기 (가로 16, 세로 16 px)
  iconAnchor: [8, 8], // 지도 좌표에 닿는 기준점. 크기의 절반이라 마커가 좌표 정중앙에 온다.
  popupAnchor: [0, -9], // 팝업이 뜨는 위치(기준점 대비). 위로 9px 올려 마커 위쪽에 표시.
  tooltipAnchor: [10, 0] // 툴팁 위치(기준점 대비). 오른쪽으로 10px.
})

// 지도 타일(배경 이미지) 주소. OpenStreetMap 무료 타일. 두 지도 컴포넌트가 공용으로 쓴다.
export const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
