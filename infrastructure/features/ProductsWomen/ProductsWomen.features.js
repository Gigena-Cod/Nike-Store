import { ProductsService } from "../../../domain/services/products.service.js";

const service = new ProductsService();
const contenedor = document.getElementById("zapatillas-list");
const loading = document.getElementById("loading");

async function mostrarZapatillas() {
  loading.style.display = "grid";
  contenedor.style.display = "none";

  const zapatillas = await service.getAllProducts({
    category: "women",
  });

  zapatillas.forEach((zapa) => {
    contenedor.innerHTML += `
      <div class="flex flex-col gap-2 sneakerCard">
        <img src="${zapa.imagen}" alt="${zapa.nombre}" />
        <div class="flex flex-col content">        
          <span class="font-bold sneakerName">${zapa.nombre}</span>
          <span>${zapa.precio}</span>
        </div>
      </div>
    `;
  });

  loading.style.display = "none";
  contenedor.style.display = "grid";
}

mostrarZapatillas();
