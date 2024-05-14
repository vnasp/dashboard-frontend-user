import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartPie,
  faFileArrowUp,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function MenuSection() {
  const setActiveclassName = ({ isActive }) =>
    isActive
      ? "navigation__link navigation__link--active group"
      : "navigation__link group";

  return (
    <>
      <ul className="navigation__menu">
        <li>
          <NavLink to="/" aria-label="dashboard" className={setActiveclassName}>
            <FontAwesomeIcon icon={faChartPie} />
            <span className="-mr-1 font-medium">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu2" className={setActiveclassName} disabled>
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Por definir</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="menu3" className={setActiveclassName} disabled>
            <FontAwesomeIcon icon={faFileArrowUp} />
            <span>Por definir</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
