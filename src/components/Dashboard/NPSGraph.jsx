import React, { useEffect, useState, useContext } from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js-basic-dist";
import { useDataContext } from "../../context/DataContext";
import monitoringData from "../../data/MonitoringData.json";

const Plot = createPlotlyComponent(Plotly);

export default function NPSGraph() {
  const { graphParameters } = useDataContext();
  const [npsDataC1, setNpsDataC1] = useState([]);
  const [npsDataC2, setNpsDataC2] = useState([]);

  useEffect(() => {
    if (
      graphParameters.stations &&
      graphParameters.devices &&
      graphParameters.dateRange.start &&
      graphParameters.dateRange.end
    ) {
      const fetchData = () => {
        const startDate = new Date(graphParameters.dateRange.start);
        const endDate = new Date(graphParameters.dateRange.end);

        // Filtrar datos para canal C1
        const filteredDataC1 = monitoringData
          .filter(
            (item) =>
              graphParameters.stations.includes(item.estacion) &&
              graphParameters.devices.includes(item.dispositivo) &&
              new Date(item.fecha_captura) >= startDate &&
              new Date(item.fecha_captura) <= endDate &&
              item.canal === "C1"
          )
          .sort(
            (a, b) => new Date(a.fecha_captura) - new Date(b.fecha_captura)
          );

        setNpsDataC1(
          filteredDataC1.map((item) => ({
            x: item.fecha_captura,
            y: item.nps_global,
          }))
        );

        // Filtrar datos para canal C2
        const filteredDataC2 = monitoringData
          .filter(
            (item) =>
              graphParameters.stations.includes(item.estacion) &&
              graphParameters.devices.includes(item.dispositivo) &&
              new Date(item.fecha_captura) >= startDate &&
              new Date(item.fecha_captura) <= endDate &&
              item.canal === "C2"
          )
          .sort(
            (a, b) => new Date(a.fecha_captura) - new Date(b.fecha_captura)
          );

        setNpsDataC2(
          filteredDataC2.map((item) => ({
            x: item.fecha_captura,
            y: item.nps_global,
          }))
        );
      };

      fetchData();
    }
  }, [graphParameters, monitoringData]);

  return (
    <Plot
    data={[
      {
        x: npsDataC1.map((item) => new Date(item.x)),
        y: npsDataC1.map((item) => item.y),
        type: "scatter",
        mode: "lines+markers",
        line: {
          shape: 'spline',
          color: 'blue'
        },
        marker: { color: "blue" },
        name: "Canal C1",
      },
      {
        x: npsDataC2.map((item) => new Date(item.x)),
        y: npsDataC2.map((item) => item.y),
        type: "scatter",
        mode: "lines+markers",
        line: {
          shape: 'spline',
          color: 'red'
        },
        marker: { color: "red" },
        name: "Canal C2",
      },
    ]}
    layout={{
      width: 1000,
      height: 440,
      title: {
        text: 'NPS Global vs Tiempo por Canal',
        font: {
          family: 'Arial, sans-serif',
          size: 22,
          color: '#000',
          weight: 'bold'
        }
      },
      xaxis: {
        title: "Fecha de Captura",
        type: "date",
        tickformat: "%d/%m/%y %H:%M",
        showgrid: false,
        tickfont: {
          size: 10,
        },
        tickangle: 15,
        zeroline: true,
        showline: true,
        linecolor: 'black',
        linewidth: 1,
      },
      yaxis: {
        title: "NPS Global (dB)",
        showgrid: false,
        automargin: true,
        zeroline: true,
        showline: true,
        linecolor: 'black',
        linewidth: 1,
      },
      legend: {
        x: 0.5,
        y: -0.3,
        xanchor: "center",
        yanchor: "top",
        orientation: "h",
      },
    }}
    config={{
      displayModeBar: true,
    }}
  />
  );
}
