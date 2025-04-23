const zapatillas = [
  {
    nombre: "Air Jordan 1 High OG",
    precio: "$45.000",
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1427071-1400-1400?v=638786891842500000&width=1400&height=1400&aspect=true",
  },
  {
    nombre: "Nike Tiempo Legend 10 Elite LX",
    precio: "$50.000",
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1369216-1400-1400?v=638739475649800000&width=1400&height=1400&aspect=true",
  },
  {
    nombre: "Sabrina 2 Stronger Than Gold",
    categoty: "women",
    precio: "$38.000",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1393637-1400-1400?v=638785022807900000&width=1400&height=1400&aspect=true",
  },
  {
    nombre: "Air Jordan 1 Retro High OG",
    precio: "$38.000",
    categoty: "women",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1427277-1400-1400?v=638786894595030000&width=1400&height=1400&aspect=true",
  },
  {
    nombre: "Nike Revolution 7",
    precio: "$38.000",
    categoty: "women",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1328251-1200-1200?width=1200&height=1200&aspect=true",
  },
  {
    nombre: "Air Jordan 1 Low",
    precio: "$198.000",
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/844396-1200-1200?width=1200&height=1200&aspect=true",
  },
];

const contenedor = document.getElementById("zapatillas-list");

zapatillas.forEach((zapa) => {
  contenedor.innerHTML += `
      <div class="sneakerCard">
        <img src="${zapa.imagen}" alt="${zapa.nombre}" />
        <h3>${zapa.nombre}</h3>
        <span>${zapa.precio}</span>
      </div>
    `;
});
