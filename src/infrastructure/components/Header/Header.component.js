// Este archivo genera el header dinámicamente
function renderHeader() {
  // Crear el elemento header
  const header = document.createElement("header");

  // Verificar si el usuario está logueado
  const isLoggedIn = document.cookie.includes("nike_token=");

  // Asignar el contenido HTML del header
  header.innerHTML = `
  <nav class="navbar">
    <a href="../Home/Home.features.html" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 32" width="40" height="20">
        <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
      </svg>
    </a>
    <ul class="nav-links">
      ${
        isLoggedIn
          ? ""
          : '<li><a href="../../features/SignUp/SignUp.features.html">Sign Up</a></li>'
      }
      ${
        isLoggedIn
          ? ""
          : '<li><a href="../../features/SignIn/SignIn.features.html">Sign In</a></li>'
      }
      ${isLoggedIn ? '<li><a href="#" id="logout-link">Logout</a></li>' : ""}
      ${
        isLoggedIn
        ? '<li class="dropdown"><a href="#">Categorías</a><ul class="dropdown-menu"> <li><a href="../../features/ProductsMen/ProductsMen.features.html">Hombre</a></li><li><a href="../../features/ProductsWomen/ProductsWomen.features.html">Mujer</a></li></ul></li>'
        : ""
      }
      ${
        isLoggedIn
          ? '<li><a href="../../features/Cart/Cart.features.html" id="cart-link"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" alt="cart"><g fill="none" fill-rule="evenodd"><g fill="currentcolor"><path d="M9.1 17.84l-1.598-7.39h16.127l-2.452 7.39H9.1zm11.994 6.274c0 .508-.395.922-.883.922-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924.488 0 .883.414.883.924zm-11.977.922c-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924s.883.414.883.924c0 .508-.396.922-.883.922zm13.362-6.104l2.997-9.034c.084-.251.046-.53-.103-.746-.146-.216-.385-.346-.64-.346H7.147L6.132 4.12c-.08-.375-.399-.64-.767-.64H1.946c-.434 0-.786.367-.786.822 0 .453.352.822.786.822h2.791l3.584 16.573c-.962.347-1.66 1.294-1.66 2.417 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566 0-.327-.064-.636-.171-.924h6.524c-.107.288-.171.597-.171.924 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566s-1.101-2.568-2.456-2.568c-.044 0-.085.013-.128.015-.022-.002-.042-.015-.064-.015H9.902l-.446-2.062h12.28c.335 0 .634-.222.743-.552z"></path></g></g></svg></a></li>'
          : ""
      }
    </ul>
  </nav>
  <link rel="stylesheet" href="./Header.component.css">
`;

  // Insertar el header al principio del body
  document.body.prepend(header);

  // Si el usuario está logueado, agregar el evento para el logout
  if (isLoggedIn) {
    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
      logoutLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Eliminar las cookies
        const d = new Date(1970, 0, 1);
        const expires = "expires=" + d.toUTCString();
        document.cookie = "nike_token=;" + expires + ";path=/;";
        // Redirigir a la página de inicio
        window.location.href = "../SignIn/SignIn.features.html";
      });
    }
  }
}

// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", renderHeader);
