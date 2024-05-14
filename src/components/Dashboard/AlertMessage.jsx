import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlertMessage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        Selecciona una estación, un dispositivo y define un rango de fechas para visualizar la gráfica.
      </div>
      <div
        className="mt-4 w-1/2 space-x-4 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded-lg text-sm"
        role="alert"
      >
        <FontAwesomeIcon icon={faLightbulb} />
        <span>Para este ejemplo, utiliza el rango "Últimos 90 días".</span>
      </div>
    </div>
  );
}
