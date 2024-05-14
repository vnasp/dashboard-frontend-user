import { useState } from "react";
import ProjectsView from "./ProjectsView";

export default function DashboardView() {
  const [view, setView] = useState("general");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <main className="px-6 pt-6">
        <section className="flex space-x-4 justify-between items-center mb-4">
          <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-2xl text-acustica-hover uppercase">Proyecto 1</h1>
          <div className="flex space-x-2">
      <span className="inline-block bg-blue-300 text-white text-xs  mr-2 px-2.5 py-0.5 rounded">
        Segmento 1
      </span>
      <span className="inline-block bg-teal-300 text-white text-xs  mr-2 px-2.5 py-0.5 rounded">
        Antropológico
      </span>
    </div>
    </div>
          <div className="inline-flex space-x-4">
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
