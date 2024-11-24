"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Mapa() {
  const positionCoordenadas: [number, number] = [-12.0464, -77.0428]; // Coordenadas de Lima, Perú

  return (
    <div className="-z-50">
      {/* MapContainer: Es el contenedor principal que renderiza el mapa */}
      <MapContainer
        // Estas son sus propiedades de configuración
        center={positionCoordenadas}
        zoom={15}
        style={{ height: "500px", width: "100%", marginTop: "2rem" }}
      >
        {/* TileLayer: Proporciona la capa gráfica del mapa (en este caso, usando OpenStreetMap) que es gratuito. */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker: Representa un punto de interés en el mapa , le pasas la posicion en coordenadas y esa posocion esta arriba definido. */}
        <Marker position={positionCoordenadas}>
          {/* El Popup muestra informacion adicional cuando haces click en el lugar indicado */}
          <Popup>Estamos aquí: Las 7 Rolas 123, San Miguel, Perú.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
