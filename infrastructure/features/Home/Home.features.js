import { ProductsService } from "../../../domain/services/products.service.js";

const service = new ProductsService();
const contenedor = document.getElementById("zapatillas-list");
const loading = document.getElementById("loading");

async function mostrarZapatillas() {
  loading.style.display = "grid";
  contenedor.style.display = "none";

  const zapatillas = await service.getAllProducts({ categoty: null });

  zapatillas.forEach((zapa) => {
    contenedor.innerHTML += `
      <div class="box-border flex flex-col  border border-gray-300 rounded-md sneakerCard">
        <div class="flex flex-col overflow-hidden pt-2 pb-2 pl-4 pr-4 line-clamp-1  content">        
          <span class="font-bold line-clamp-1 sneakerName">${zapa.nombre}</span>
        </div>
        <div style="background-image: url('${zapa.imagen}');" class="skeleton-img"></div>
         <div class="flex flex-col  pt-2 pb-4 pl-4 pr-4 content">        
          <span class="font-bold">Description</span>
          <span class="text-xs line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, ornare sed metus sit amet, hendrerit hendrerit arcu. Cras vel mauris laoreet, euismod arcu sit amet, placerat ante.</span>
          <div class="grid grid-cols-2 mt-4 gap-4">
            <span class="font-bold text-lg">${zapa.precio}</span>
            <div class="flex items-center justify-between pr-2 pl-2 border border-gray-300 rounded-full gap-4 w-24 h-7 overflow-hidden ml-auto ">
              <button class="flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">+</button>
              <span class="text-gray-500 user-select-none">0</span>
              <button class="flex hover:bg-gray-200 items-center justify-center text-gray-500 p-2 h-6 w-6 rounded-full cursor-pointer">-</button>
            </div>
          </div>
          <button class="cursor-pointer text-sm text-white bg-black p-2 w-full h-9 mt-4 rounded-full border-gray-300">Add to cart</button>
        </div>
      </div>
    `;
  });

  loading.style.display = "none";
  contenedor.style.display = "grid";
}

mostrarZapatillas();
