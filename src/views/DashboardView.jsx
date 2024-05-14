import { useState } from "react";
import ProjectsView from "./ProjectsView";

export default function DashboardView() {
  const [view, setView] = useState("general");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <main className="dashboard">
        <section className="dashboard__header">
          <div className="dashboard__project">
            <h1 className="dashboard__project--title">Proyecto 1</h1>
            <div className="dashboard__badges">
              <span className="dashboard__badge">Segmento 1</span>
              <span className="dashboard__badge">Antropológico</span>
            </div>
          </div>
          <div className="dashboard__views">
            <button
              className={`btn ${
                view === "general"
                  ? "bg-acustica-primary hover:bg-acustica-hover"
                  : "bg-gray-400"
              }`}
              onClick={() => handleViewChange("general")}
            >
              Vista por Proyecto
            </button>
            <button
              className={`btn ${
                view === "category"
                  ? "bg-acustica-primary hover:bg-acustica-hover"
                  : "bg-gray-400"
              }`}
              onClick={() => handleViewChange("category")}
              disabled
            >
              Vista por Definir
            </button>
          </div>
        </section>
        {view === "general" ? <ProjectsView /> : ""}
      </main>
    </>
  );
}
