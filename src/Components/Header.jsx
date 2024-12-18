import "./Header.css";
import corvette from "../Media/c5_logo_decal.jpg";

function Header() {
  return (
    <div className="container-xxl">
      <header className="d-flex flex-wrap justify-content-between align-items-end py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-end mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-current="page"
        >
          <div className="p-2 g-col-6">
            <img className="homeimg" src={corvette} />
          </div>
          <div className="p-2 g-col-6">
            <h4 className="hometxt">HARMAN SANDHU</h4>
          </div>
        </a>

        <ul className="nav nav-pills align-items-end">
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Education & Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
