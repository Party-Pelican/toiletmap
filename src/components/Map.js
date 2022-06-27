import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet";
import Locate from "./Locate";

export default function Map(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        flexGrow: 1,
        flexBasis: "100%",
        minWidth: "75%",
        height: "100%",
      }}
    >
      <MapContainer
        style={{ height: "100%", width: "100%", cursor: "crosshair" }}
        center={[51.505, -0.09]}
        zoom={12}
      >
        <TileLayer
          attribution="Tiles &copy; Esri | Leaflet"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Locate></Locate>
      </MapContainer>
    </div>
  );
}
