import stations from "../../data/StationsData";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { format, startOfToday, subDays, subWeeks, subMonths } from "date-fns";
import { useDataContext } from "../../context/DataContext";
import "react-datepicker/dist/react-datepicker.css";

export default function DeviceSelector() {
  const { setGraphParameters } = useDataContext();
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);

  const stationOptions = stations.map((station) => ({
    value: station.id,
    label: `Estación ${station.id}`,
    devices: station.devices,
  }));

  const handleStationChange = (selectedOption) => {
    setSelectedStation(selectedOption);
    setSelectedDevice(null);
    setSelectedTimeRange(null);
    setSelectedDates([null, null]);

    setGraphParameters((prev) => ({
      ...prev,
      stations: selectedOption ? [selectedOption.value] : [],
      devices: [],
      dateRange: { start: null, end: null },
    }));
  };

  const handleDeviceChange = (selectedOption) => {
    setSelectedDevice(selectedOption);

    setGraphParameters((prev) => ({
      ...prev,
      devices: selectedOption ? [selectedOption.value] : [],
    }));
  };

  const handleTimeRangeChange = (option) => {
    setSelectedTimeRange(option);
    if (option.id === "custom") {
      setSelectedDates([null, null]);
    } else {
      const [start, end] = option.value;
      setSelectedDates([start, end]);
      setGraphParameters((prev) => ({
        ...prev,
        dateRange: {
          start: format(start, "yyyy-MM-dd"),
          end: format(end, "yyyy-MM-dd"),
        },
      }));
    }
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    if (dates[0] && dates[1]) {
      setGraphParameters((prev) => ({
        ...prev,
        dateRange: {
          start: format(dates[0], "yyyy-MM-dd"),
          end: format(dates[1], "yyyy-MM-dd"),
        },
      }));
    }
  };

  const timeOptions = [
    { id: "today", label: "Hoy", value: [startOfToday(), new Date()] },
    {
      id: "lastWeek",
      label: "Última Semana",
      value: [subWeeks(startOfToday(), 1), new Date()],
    },
    {
      id: "last30Days",
      label: "Últimos 30 días",
      value: [subDays(startOfToday(), 30), new Date()],
    },
    {
      id: "last90Days",
      label: "Últimos 90 días",
      value: [subMonths(startOfToday(), 3), new Date()],
    },
    { id: "custom", label: "Personalizado", value: null },
  ];

  return (
    <section className="devices-selectors">
      <Select
        id="station-select"
        onChange={handleStationChange}
        options={stationOptions}
        placeholder="Seleccione una estación"
        value={selectedStation}
      />
      <Select
        id="device-select"
        onChange={handleDeviceChange}
        options={
          selectedStation
            ? selectedStation.devices.map((device) => ({
                value: device.id,
                label: `Dispositivo ${device.id}`,
              }))
            : []
        }
        placeholder="Seleccione un dispositivo"
        value={selectedDevice}
        isDisabled={!selectedStation}
      />
      <div>
        <Select
          id="time-select"
          onChange={handleTimeRangeChange}
          options={timeOptions}
          placeholder="Seleccione un rango de tiempo rápido"
          value={selectedTimeRange}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.id}
          isDisabled={!selectedStation}
        />
        {selectedTimeRange && selectedTimeRange.id === "custom" && (
          <DatePicker
            selectsRange={true}
            startDate={selectedDates[0]}
            endDate={selectedDates[1]}
            onChange={handleDateChange}
            isClearable={true}
            placeholderText="Selecciona un rango de fechas"
            dateFormat="yyyy-MM-dd"
          />
        )}
      </div>
    </section>
  );
}