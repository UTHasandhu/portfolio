  // import './Footer.css';
import input from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img src="c5_logo_decal.jpg" /> 
        <span class="fs-4">Double header</span>
      </a>
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
