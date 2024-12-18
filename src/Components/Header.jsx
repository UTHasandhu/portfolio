import "./Header.css";
import Sandhu_Harman from "../Media/Sandhu_Harman.jpg";

function Header() {
  return (
    <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-primary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary">About</a></li>
        </ul>
    </div>
  </header>
  );
}

export default Header;
