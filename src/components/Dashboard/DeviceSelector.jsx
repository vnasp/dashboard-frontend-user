import { useState } from "react";
import stations from "../../data/DataExample";

function DeviceSelector() {
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  // Actualización dinámica de dispositivos por estación
  const devices = selectedStation
    ? stations.find((station) => station.id === parseInt(selectedStation))
        .devices
    : [];

  return (
    <section className="flex justify-evenly">
      <div className="space-x-4">
        <label htmlFor="station-select">Selecciona una estación:</label>
        <select
          id="station-select"
          value={selectedStation}
          onChange={(e) => {
            setSelectedStation(e.target.value);
            setSelectedDevice("");
          }}
        >
          <option value="">Seleccione una estación</option>
          {stations.map((station) => (
            <option key={station.id} value={station.id}>
              {station.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-x-4">
        <label htmlFor="device-select">Selecciona un dispositivo:</label>
        <select
          id="device-select"
          value={selectedDevice}
          onChange={(e) => setSelectedDevice(e.target.value)}
        >
          <option value="">Todos los dispositivos</option>
          {devices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default DeviceSelector;
