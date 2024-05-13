import { useState } from "react";
import GeneralSection from "../components/Dashboard/GeneralSection";

export default function DashboardView() {
  const [view, setView] = useState("general");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <>
      <main className="px-6 pt-6 2xl:container">
        <section className="view-selector flex space-x-4 justify-center mb-4">
          <button
            className={`btn ${
              view === "general" ? "bg-acustica-primary hover:bg-acustica-hover" : "bg-gray-400"
            }`}
            onClick={() => handleViewChange("general")}
          >
            Vista por Estación
          </button>
          <button
            className={`btn ${
              view === "category" ? "bg-acustica-primary hover:bg-acustica-hover" : "bg-gray-400"
            }`}
            onClick={() => handleViewChange("category")}
            disabled
          >
            Vista por Definir
          </button>
        </section>

        {view === "general" ? <GeneralSection /> : ""}
      </main>
    </>
  );
}
