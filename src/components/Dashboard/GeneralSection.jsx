import { useDataContext } from "../../context/DataContext";
import DeviceSelector from "./DeviceSelector";
import NPSGraph from "./NPSGraph";

export default function GeneralSection() {
  const { graphParameters } = useDataContext();

  const parametersAreComplete = () => {
    return (
      graphParameters.stations != null &&
      graphParameters.stations.length > 0 &&
      graphParameters.devices != null &&
      graphParameters.devices.length > 0 &&
      graphParameters.dateRange.start != null &&
      graphParameters.dateRange.end != null
    );
  };

  return (
    <>
      <section className="flex flex-col gap-6">
        <article className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white text-center">
          <DeviceSelector />
        </article>

        <article className="md:col-span-2 lg:col-span-1 h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white text-center">
          {parametersAreComplete() ? (
            <NPSGraph />
          ) : (
            <p>
              Seleccione una estación y un dispositivo y defina un rango de fechas para visualizar la gráfica.
            </p>
          )}
        </article>
      </section>
    </>
  );
}
