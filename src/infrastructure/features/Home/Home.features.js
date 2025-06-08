/**
 * Module that handles the home page functionality
 * @module HomeFeatures
 */
import { ProductsService } from "../../../domain/services/Products/Products.service.js";

/**
 * Service to handle product operations
 * @type {ProductsService}
 */
const service = new ProductsService();

/**
 * Main container to display sneakers
 * @type {HTMLElement}
 */
const contenedor = document.getElementById("zapatillas-list");

/**
 * Loading element to display during asynchronous operations
 * @type {HTMLElement}
 */
const loading = document.getElementById("loading");

/**
 * Main function that displays sneakers on the page
 * @async
 * @function mostrarZapatillas
 * @returns {Promise<void>}
 */
async function mostrarZapatillas() {
  loading.style.display = "grid";
  contenedor.style.display = "none";

  const response = await service.getAllProducts({ category: null });

  let zapatillas = await response.map((zapa) => {
    return {
      ...zapa,
      quantity: 1,
    };
  });

  zapatillas.forEach((zapa) => {
    contenedor.innerHTML += `
      <div class="box-border flex flex-col  border border-gray-300 rounded-md sneakerCard">
        <div class="flex flex-col overflow-hidden pt-2 pb-2 pl-4 pr-4 line-clamp-1  content">        
          <span class="font-bold line-clamp-1 sneakerName">${zapa.nombre}</span>
        </div>
        <div style="background-image: url('${
          zapa.imagen
        }');" class="skeleton-img"></div>
        <div class="flex flex-col  pt-2 pb-4 pl-4 pr-4 content">        
          <span class="font-bold">Description</span>
          <span class="text-xs line-clamp-3">${zapa.description}</span>
          <div class="grid grid-cols-2 mt-4 gap-4">
            <span class="font-bold text-lg">${zapa.precio.toLocaleString(
              "es-AR",
              { style: "currency", currency: "ARS" }
            )}</span>
            <div class="flex items-center justify-between pr-2 pl-2 border border-gray-300 rounded-full gap-4 w-24 h-7 overflow-hidden ml-auto "> <button id="rest${
              zapa.id
            }" class="decrement flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">-</button>
            <span id="quantity${
              zapa.id
            }" class="quantity text-gray-500 user-select-none">${
      zapa.quantity
    }</span>
            <button id="increment${
              zapa.id
            }" class="increment flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">+</button>
            </div>
          </div>
          <button id="addToCart${
            zapa.id
          }" class="add-to-cart cursor-pointer text-sm text-white bg-black p-2 w-full h-9 mt-4 rounded-full border-gray-300">Add to cart</button>
        </div>
      </div>
    `;
  });

  // Add events to buttons
  /**
   * Adds click event to increment buttons
   * @param {HTMLElement} btn - The increment button
   */
  document.querySelectorAll(".increment").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.id.replace("increment", "");
      const quantity = document.getElementById(`quantity${id}`);
      quantity.textContent = parseInt(quantity.textContent) + 1;
    });
  });

  /**
   * Adds click event to decrement buttons
   * @param {HTMLElement} btn - The decrement button
   */
  document.querySelectorAll(".decrement").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.id.replace("rest", "");
      const quantity = document.getElementById(`quantity${id}`);
      if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
      }
    });
  });

  /**
   * Adds click event to add to cart buttons
   * @param {HTMLElement} btn - The add to cart button
   */
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Extract button ID
      const id = btn.id.replace("addToCart", "");
      console.log("Button ID:", id);

      // Verify if ID is valid
      if (!id) {
        console.error("Invalid ID");
        return;
      }

      // Find quantity element
      const quantity = document.getElementById(`quantity${id}`);
      if (!quantity) {
        console.error("Quantity element not found");
        return;
      }

      // Find product
      const producto = zapatillas.find((zapa) => zapa.id === id);
      if (!producto) {
        console.error("Product not found for ID:", id);
        return;
      }

      console.log("Product found:", producto);
      console.log("Selected quantity:", quantity.textContent);
    });
  });

  loading.style.display = "none";
  contenedor.style.display = "grid";
}

mostrarZapatillas();
