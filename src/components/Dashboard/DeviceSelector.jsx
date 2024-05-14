import stations from '../../data/StationsData';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfToday, subDays, subWeeks, subMonths } from 'date-fns';

export default function DeviceSelector() {
    const [selectedStations, setSelectedStations] = useState([]);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [selectedTimeRange, setSelectedTimeRange] = useState(null);
    const [customDateRange, setCustomDateRange] = useState([null, null]);
    const [startDate, endDate] = customDateRange;

    useEffect(() => {
        // Actualiza los dispositivos basado en las estaciones seleccionadas
        const allSelectedDevices = selectedStations.flatMap(station =>
            station.devices.map(device => ({ ...device, label: `Dispositivo ${device.id}` }))
        );
        setSelectedDevices(prevDevices =>
            prevDevices.filter(device => allSelectedDevices.some(sDevice => sDevice.id === device.id))
        );
    }, [selectedStations]);

    const handleStationChange = selectedOptions => {
        setSelectedStations(selectedOptions);
    };

    const handleDeviceChange = selectedOptions => {
        setSelectedDevices(selectedOptions);
    };

    const handleTimeRangeChange = selectedOption => {
        setSelectedTimeRange(selectedOption);
        if (selectedOption.id !== 'custom') {
            setCustomDateRange([null, null]); 
        }
    };

    const stationOptions = stations.map(station => ({
        value: station.id,
        label: `Estación ${station.id}`,
        devices: station.devices
    }));

    const timeOptions = [
      { id: 'today', label: 'Hoy', value: { start: startOfToday(), end: new Date() } },
      { id: 'lastWeek', label: 'Última Semana', value: { start: subWeeks(startOfToday(), 1), end: new Date() } },
      { id: 'last30Days', label: 'Últimos 30 días', value: { start: subDays(startOfToday(), 30), end: new Date() } },
      { id: 'last90Days', label: 'Últimos 90 días', value: { start: subMonths(startOfToday(), 3), end: new Date() } },
      { id: 'custom', label: 'Personalizado', value: null }
  ];

    return (
      <section className="grid grid-cols-3 gap-6">
      <Select
          id="station-select"
          onChange={handleStationChange}
          options={stationOptions}
          placeholder="Seleccione estaciones"
          isMulti
      />

      <Select
          id="device-select"
          onChange={handleDeviceChange}
          options={selectedStations.flatMap(station => station.devices.map(device => ({ value: device.id, label: `Dispositivo ${device.id}` })))}
          placeholder="Todos los dispositivos"
          isMulti
          isDisabled={!selectedStations.length}
      />

      <Select
          id="time-range-select"
          onChange={handleTimeRangeChange}
          options={timeOptions}
          placeholder="Seleccione un rango de tiempo"
      />

      {selectedTimeRange && selectedTimeRange.id === 'custom' && (
          <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={setCustomDateRange}
              isClearable={true}
              placeholderText="Selecciona un rango de fechas"
          />
      )}
  </section>
    );
  }