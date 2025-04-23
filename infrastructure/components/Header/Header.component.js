// Este archivo genera el header dinámicamente
function renderHeader() {
  // Crear el elemento header
  const header = document.createElement("header");

  // Asignar el contenido HTML del header
  header.innerHTML = `
  <nav class="navbar">
    <a  href="../Home/Home.features.html" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 32" width="40" height="20">
        <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
      </svg>
    </a>
    <ul class="nav-links">
      <li><a href="../SignUp/SignUp.features.html">Sign Up</a></li>
      <li><a href="../SignIn/SignIn.features.html">Sign In</a></li>
      <li class="dropdown">
        <a href="#">Categorías</a>
        <ul class="dropdown-menu">
          <li><a href="../ProductsMen/ProductsMen.features.html">Hombre</a></li>
          <li><a href="../ProductsWomen/ProductsWomen.features.html">Mujer</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <link rel="stylesheet" href="./Header.component.css">
`;

  // Insertar el header al principio del body
  document.body.prepend(header);
}

// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", renderHeader);
