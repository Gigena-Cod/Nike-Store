**Aplicaciones Web 1** de la carrera **Analista de Sistemas** en IES:

---

## 📄 Proyecto: E-commerce Mock - Nike Store

**Materia:** Aplicaciones Web 1  
**Carrera:** Analista de Sistemas  
**Institución:** Colegio Universitario IES  
**Estudiante:** *Christian Nahuel Gigena*  

---

### 🧩 Versión: 1.0 - Primera Entrega

#### 🛠️ Descripción General

Este proyecto es una simulación de una tienda online de zapatillas deportivas (inspirada en Nike), desarrollada como práctica para la materia Aplicaciones Web 1. La finalidad es crear una base funcional y estilizada que sirva como punto de partida para futuras iteraciones.

Todos los datos (productos y usuarios) están **mockeados** y las funcionalidades simulan el comportamiento de una aplicación real utilizando **HTML, CSS (Tailwind CSS) y JavaScript** puro.

---

### 🧩 Versión: 1.1 - Tercera Entrega

#### 🛠️ Descripción General

- Implementación de sistema de autenticación básico
  - Validación de cookies en todas las páginas protegidas
  - Redirección automática a página de inicio de sesión
  - Actualización de rutas en el header para mejor organización

---
### 🧩 Versión: 1.2 - Cuarta Entrega

#### 🛠️ Descripción General

-  Implementacion de botones de suma y resta para la cantidad de productos
-  Implementacion de una base de datos para los productos
-  Implementacion package.json para levantar el servidor
-  Refactorizacion del codigo

### 🧩 Versión: 1.3 - Quinta Entrega

#### 🛠️ Descripción General

-  Implementacion de un carrito de compras
-  Implementacion de un checkout
-  Implementacion de un sistema de pagos
-  Implementacion de un sistema de envio
-  Implementacion de un sistema de facturacion



### 🔍 Features actuales

#### 1. **Home pública (sin login)**
- Visualización de todos los productos disponibles.
- Productos separados por **categoría (hombre / mujer)**.
- Carga simulada desde un servicio con **retardo artificial de 1 segundo** (`ProductsService`).
- Inclusión de **loader visual (skeleton loader)** mientras se cargan los productos.

#### 2. **Vista de Registro (Sign Up)**
- Formulario de creación de cuenta con los siguientes campos:
  - Nombre
  - Apellido
  - Email
  - Teléfono
  - Contraseña
- Botón para crear cuenta (sin lógica aún).

#### 3. **Vista de Inicio de Sesión (Sign In)**
- Formulario con email y contraseña.
- Checkbox para aceptar términos y condiciones.
- Mensaje legal sobre aceptación de políticas de privacidad.

#### 4. **Vista de Carrito (Cart)**
- Visualización de todos los productos agregados al carrito.
- Carga simulada desde un servicio con **retardo artificial de 1 segundo** (`ProductsService`).
- Inclusión de **loader visual (skeleton loader)** mientras se cargan los productos.
- Botones de suma y resta para la cantidad de productos.

---

### 🧪 Tecnologías utilizadas
- HTML5 + CSS3
- Tailwind CSS
- JavaScript (ES6)
- Simulación de peticiones usando `setTimeout`
- Estructura basada en componentes reutilizables con clases