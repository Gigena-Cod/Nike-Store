/**
 * Module that handles the home page functionality
 * @module HomeFeatures
 */
import { CartService } from "../../../domain/services/Cart/Cart.service.js";

/**
 * Service to handle product operations
 * @type {CartService}
 */
const cartService = new CartService();

/**
 * Main container to display sneakers
 * @type {HTMLElement}
 */
const contenedor = document.getElementById("products-list");

/**
 * Total element to display the total price
 * @type {HTMLElement}
 */
const totalContainer = document.getElementById("total");

/**
 * Loading element to display during asynchronous operations
 * @type {HTMLElement}
 */
const loading = document.getElementById("loading");

/**
 * Main function that displays sneakers on the page
 * @async
 * @function obtenerProducts
 * @returns {Promise<void>}
 */
async function obtenerProducts() {
  try {
    loading.style.display = "grid";
    contenedor.style.display = "none";

    // Inicializar la base de datos primero
    await cartService.init();
    const response = await cartService.getAllProducts();

    if (response.length === 0) {
      contenedor.innerHTML = `
        <div class="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>Añade productos para continuar</p>
        </div>
      `;
      loading.style.display = "none";
      contenedor.style.display = "grid";
      return;
    }

    let total = 0;
    contenedor.innerHTML = response
      .map((product, index) => {
        total += product.precio * product.quantity;
        return `
      <div id="product-separator-${product.id}" class="separador"></div>
        <div id="product-${
          product.id
        }" class="box-border flex flex-col rounded-md productCard">
          <div class="productImage">        
            <img src="${product.imagen}" alt="${product.nombre}">
          </div>
          <div class="flex flex-col nameAndDelete">        
            <span class="font-bold line-clamp-1 name">${product.nombre}</span>
           <span class="text-xs line-clamp-3">${product.description}</span>
            <button id="delete${
              product.id
            }" class="delete flex items-center justify-center text-red-500 cursor-pointer ">Eliminar</button>
          </div> 
          <div class="productQuantity">        
             
              
              <div class="flex items-center justify-between pr-2 pl-2 border border-gray-300 rounded-full gap-4 w-24 h-7 overflow-hidden ml-auto "> <button id="rest${
                product.id
              }" class="decrement flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">-</button>
              <span id="quantity${
                product.id
              }" class="quantity text-gray-500 user-select-none">${
          product.quantity
        }</span>
              <button id="increment${
                product.id
              }" class="increment flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">+</button>
              </div>
            </div>
              
          <span class="font-bold text-lg productPrice">${product.precio.toLocaleString(
            "es-AR",
            { style: "currency", currency: "ARS" }
          )}</span>
        </div>
      `;
      })
      .join("");

    // Agregar el total
    totalContainer.innerHTML = `
      <div class="cart-total flex flex-col gap-2">
        <span class="text-lg font-bold">Total: ${total.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}</span>
        <button id="checkout-button" class=" cursor-pointer h-10 bg-black text-white w-full checkout-button">Finalizar compra</button>
        <a class="h-10 !flex !items-center !justify-center bg-black !text-white !decoration-none !no-underline w-full checkout-button" href="../Home/Home.features.html">Continuar comprando</a>
      </div>
    `;

    function refreshCheckout() {
      // Recalcular el nuevo total
      let newTotal = 0;
      const products = document.querySelectorAll(".productCard");
      products.forEach((product) => {
        const price = parseFloat(
          product
            .querySelector(".productPrice")
            .textContent.replace(/[^0-9.]/g, "")
        );
        const quantity = parseInt(
          product.querySelector(".quantity").textContent
        );
        newTotal += price * quantity;
      });

      totalContainer.innerHTML = `
          <div class="cart-total flex flex-col gap-2">
            <span class="text-lg font-bold">Total: ${newTotal.toLocaleString(
              "es-AR",
              {
                style: "currency",
                currency: "ARS",
              }
            )}</span>
            <button id="checkout-button" class=" cursor-pointer h-10 bg-black text-white w-full">Finalizar compra</button>
            <a class="h-10 !flex !items-center !justify-center bg-black !text-white !decoration-none !no-underline w-full " href="../Home/Home.features.html">Continuar comprando</a>
          </div>
        `;
    }

    document.querySelectorAll(".increment").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.id.replace("increment", "");
        const quantity = document.getElementById(`quantity${id}`);
        quantity.textContent = parseInt(quantity.textContent) + 1;
        cartService.updateProductQuantity(id, parseInt(quantity.textContent));

        refreshCheckout();
      });
    });
    document.querySelectorAll(".decrement").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.id.replace("rest", "");
        const quantity = document.getElementById(`quantity${id}`);
        if (parseInt(quantity.textContent) > 1) {
          quantity.textContent = parseInt(quantity.textContent) - 1;
          cartService.updateProductQuantity(id, parseInt(quantity.textContent));
          refreshCheckout();
        }
      });
    });

    // Agregar event listeners para los botones de eliminar
    document.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.id.replace("delete", "");
        cartService.removeProduct(id);
        refreshCheckout();

        const productSeparatorElement = document.getElementById(
          `product-separator-${id}`
        );
        const productElement = document.getElementById(`product-${id}`);

        productSeparatorElement.remove();
        productElement.remove();
      });
    });

    // Agregar evento al botón de checkout
    document
      .getElementById("checkout-button")
      .addEventListener("click", async () => {
        try {
          // Limpiar el carrito
          await cartService.clearCart();

          // Redirigir a la página de inicio
          window.location.href = "../Home/Home.features.html";
        } catch (error) {
          console.error("Error al procesar el checkout:", error);
          alert(
            "Hubo un error al procesar tu compra. Por favor, intenta nuevamente."
          );
        }
      });

    loading.style.display = "none";
    contenedor.style.display = "grid";
  } catch (error) {
    console.error("Error loading products:", error);
    contenedor.innerHTML = `
      <div class="error-message">
        <h2>Error al cargar los productos</h2>
        <p>Por favor, intenta nuevamente más tarde</p>
      </div>
    `;
    loading.style.display = "none";
    contenedor.style.display = "grid";
  }
}

obtenerProducts();
