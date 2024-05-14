import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function LogOutSection() {
  return (
    <>
        <button className="navigation__logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Cerrar Sesión</span>
        </button>
    </>
  );
}
