import "./Header.css";

function Header({ ref }) {
  return (
    <div className="container-xxl" ref={ref}>
      <header className="d-flex flex-wrap justify-content-between align-items-end py-3 mb-4 border-bottom">

        <div className="p-2 g-col-6 bg-black">
          <h4 className="hometxt fw-bold text-white">HARMAN SANDHU</h4>
        </div>

        {/* <ul className="nav nav-pills align-items-end">
          <li>
            <a href="#About" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#Education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#Experience" className="nav-link">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#Projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#ABout" className="nav-link">
              About
            </a>
          </li>
        </ul> */}
      </header>
    </div>
  );
}

export default Header;
