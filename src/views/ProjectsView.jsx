import { useDataContext } from "../context/DataContext";
import DeviceSelector from "../components/Dashboard/DeviceSelector";
import NPSGraph from "../components/Dashboard/NPSGraph";
import AlertMessage from "../components/Dashboard/AlertMessage";

export default function ProjectsView() {
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
      <section className="projects__view">
        <article className="projects__selector">
          <DeviceSelector />
        </article>

        <article className="projects__graph">
          {parametersAreComplete() ? (
            <NPSGraph />
          ) : (
            <AlertMessage />
          )}
        </article>
      </section>
    </>
  );
}
