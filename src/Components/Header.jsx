import "./Header.css";
import corvette from "../Media/c5_logo_decal.jpg";

function Header() {
  return (
    <div class="container-xxl">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-current="page">
          <div class="p-2 g-col-6">
            <img className="homeimg" src={corvette} />
          </div>
          <div class="p-2 g-col-6">
            <h4 className="hometxt">HARMAN SANDHU</h4>
          </div>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Education & Experience</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
