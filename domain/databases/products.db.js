export const productsDB = [
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021f5f",
    nombre: "Nike Air Max 270",
    precio: 198000,
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1427071-1400-1400?v=638786891842500000",
    description:
      "The Nike Air Max 270 brings a fresh look to the Air Max family with its oversized Air unit and bold design. Perfect for both style and comfort, this shoe features a breathable mesh upper and a comfortable foam midsole.",
  },
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021ff0",
    nombre: "Nike Tiempo Legend 10 Elite LX",
    precio: 50000,
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1369216-1400-1400?v=638739475649800000",
    description:
      "The Nike Tiempo Legend 10 Elite LX is designed for elite performance on the pitch. With a soft leather upper and a lightweight sole, it offers excellent touch and control while maintaining durability.",
  },
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021ff1",
    nombre: "Sabrina 2 Stronger Than Gold",
    precio: 38000,
    categoty: "women",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1393637-1400-1400?v=638785022807900000",
    description:
      "The Sabrina 2 Stronger Than Gold combines style and comfort with its sleek design and metallic accents. Perfect for everyday wear, it features a breathable mesh upper and a cushioned sole for all-day comfort.",
  },
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021ff2",
    nombre: "Air Jordan 1 Retro High OG",
    precio: 38000,
    categoty: "women",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1427277-1400-1400?v=638786894595030000",
    description:
      "The Air Jordan 1 Retro High OG brings classic style to any outfit. With its iconic design and premium materials, this shoe is a must-have for sneaker enthusiasts and fashion-forward individuals.",
  },
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021ff3",
    nombre: "Nike Revolution 7",
    precio: 38000,
    categoty: "women",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1328251-1200-1200?width=1200&height=1200",
    description:
      "The Nike Revolution 7 offers lightweight comfort and durability for everyday wear. With its breathable mesh upper and responsive foam cushioning, it's perfect for casual outings and light activities.",
  },
  {
    id: "b83c6f07-3cde-4d67-8980-994fbe021ff4",
    nombre: "Air Jordan 1 Low",
    precio: 198000,
    categoty: "men",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/844396-1200-1200?width=1200&height=1200",
    description:
      "The Air Jordan 1 Low brings the iconic AJ1 style to a low-top silhouette. With its clean design and premium materials, it's perfect for those who want the classic look with a modern twist.",
  },
];

/**
 * Find product by ID
 * @param {string} id - Product ID
 * @returns {Object|null} Product object or null if not found
 */
export function findProductById(id) {
  return productsDB.find(product => product.id === id);
}

/**
 * Get all products
 * @returns {Array} Array of products
 */
export function getAllProducts() {
  return productsDB;
}


