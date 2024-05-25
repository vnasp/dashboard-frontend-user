import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlertMessage() {
  return (
    <div className="alerts">
      <p>
        Selecciona una estación, un dispositivo y define un rango de fechas para visualizar la gráfica.
      </p>
      <div
        className="alerts--info"
        role="alert"
      >
        <FontAwesomeIcon icon={faLightbulb} />
        <span>Para este ejemplo, utiliza el rango "Último Año".</span>
      </div>
    </div>
  );
}
