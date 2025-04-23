export class ProductsService {
  constructor() {
    this.zapatillas = [
      {
        nombre: "Air Jordan 1 High OG",
        precio: "$45.000",
        categoty: "men",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/1427071-1400-1400?v=638786891842500000",
      },
      {
        nombre: "Nike Tiempo Legend 10 Elite LX",
        precio: "$50.000",
        categoty: "men",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/1369216-1400-1400?v=638739475649800000",
      },
      {
        nombre: "Sabrina 2 Stronger Than Gold",
        precio: "$38.000",
        categoty: "women",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/1393637-1400-1400?v=638785022807900000",
      },
      {
        nombre: "Air Jordan 1 Retro High OG",
        precio: "$38.000",
        categoty: "women",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/1427277-1400-1400?v=638786894595030000",
      },
      {
        nombre: "Nike Revolution 7",
        precio: "$38.000",
        categoty: "women",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/1328251-1200-1200?width=1200&height=1200",
      },
      {
        nombre: "Air Jordan 1 Low",
        precio: "$198.000",
        categoty: "men",
        imagen:
          "https://nikearprod.vtexassets.com/arquivos/ids/844396-1200-1200?width=1200&height=1200",
      },
    ];
  }

  // Simula una petición que tarda 1 segundo en devolver todas las zapatillas
  async getAllProducts(getAllProductsProps) {
    const { category } = getAllProductsProps;

    const request = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.zapatillas);
      }, 1000);
    });

    const response = category
      ? request.filter((zapa) => zapa.categoty === category)
      : request;

    return response;
  }
}
