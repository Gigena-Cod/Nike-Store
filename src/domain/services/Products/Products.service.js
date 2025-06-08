import { getAllProducts as getAllProductsDB } from "../../databases/products.db.js";

/**
 * Service to handle product operations
 * @class
 */
export class ProductsService {
  /**
   * Get all products
   * @param {Object} getAllProductsProps - Object containing category filter
   * @param {string} getAllProductsProps.category - Category to filter products
   * @returns {Promise<Array>} Array of products
   */
  async getAllProducts(getAllProductsProps) {
    const { category } = getAllProductsProps;

    const request = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAllProductsDB());
      }, 1000);
    });

    const response = category
      ? request.filter((zapa) => zapa.categoty === category)
      : request;

    return response;
  }
}
