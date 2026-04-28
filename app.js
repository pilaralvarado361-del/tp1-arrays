// ==============================
// Ejercicios de manejo de arrays
// ==============================

// 1) Filtrar números pares de un array
function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

// 2) Eliminar elementos duplicados
function eliminarDuplicados(array) {
  return [...new Set(array)];
}

// 3) Ordenar un array de nombres alfabéticamente
function ordenarNombres(nombres) {
  return [...nombres].sort((a, b) => a.localeCompare(b));
}

// 4) Sumar todos los elementos de un array
function sumarElementos(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// 5) Buscar un elemento en un array
function buscarElemento(array, elemento) {
  return array.indexOf(elemento);
}

// Ejemplos en consola
const numerosEjemplo = [2, 3, 4, 5, 6, 6, 7, 8];
const nombresEjemplo = ["Sofía", "Lucía", "Ana", "Mateo", "Ana"];

console.log("1) Pares:", filtrarPares(numerosEjemplo));
console.log("2) Sin duplicados:", eliminarDuplicados(nombresEjemplo));
console.log("3) Nombres ordenados:", ordenarNombres(nombresEjemplo));
console.log("4) Suma total:", sumarElementos(numerosEjemplo));
console.log("5) Índice de 'Mateo':", buscarElemento(nombresEjemplo, "Mateo"));
console.log("5) Índice de 'Juan' (si no está devuelve -1):", buscarElemento(nombresEjemplo, "Juan"));

// ==============================
// Ejercicios de manejo del DOM
// ==============================

// 1) Crear una lista dinámica
const listaNombres = ["Carla", "Pedro", "Mica", "Tomás"];
const ulNombres = document.getElementById("listaNombres");

listaNombres.forEach((nombre) => {
  const li = document.createElement("li");
  li.textContent = nombre;
  ulNombres.appendChild(li);
});

// 2) Modificar contenido de un elemento por su ID
function cambiarTextoPorId(id, nuevoTexto) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = nuevoTexto;
  }
}

document.getElementById("btnCambiarTexto").addEventListener("click", () => {
  cambiarTextoPorId("textoEditable", "Texto cambiado con JavaScript usando el ID.");
});

// 3) Agregar y quitar clases en elementos
function alternarClaseEnClick(idElemento, clase) {
  const elemento = document.getElementById(idElemento);
  if (elemento) {
    elemento.classList.toggle(clase);
  }
}

document.getElementById("btnToggleClase").addEventListener("click", () => {
  alternarClaseEnClick("btnToggleClase", "activo");
});

// 4) Formulario dinámico
const nombresFormulario = [];
const form = document.getElementById("formNombres");
const inputNombre = document.getElementById("inputNombre");
const listaFormulario = document.getElementById("listaFormulario");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  if (!nombre) {
    return;
  }

  nombresFormulario.push(nombre);
  inputNombre.value = "";

  listaFormulario.innerHTML = "";
  nombresFormulario.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listaFormulario.appendChild(li);
  });
});

// 5) Generación de tarjetas con datos de un array
const productos = [
  {
    nombre: "Teclado mecánico",
    descripcion: "Switches azules, retroiluminado",
    imagen:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=60",
  },
  {
    nombre: "Mouse gamer",
    descripcion: "Sensor óptico y 6 botones",
    imagen:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=60",
  },
  {
    nombre: "Auriculares",
    descripcion: "Sonido envolvente y micrófono",
    imagen:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60",
  },
];

const contenedorTarjetas = document.getElementById("contenedorTarjetas");

productos.forEach((producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" />
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
  `;

  contenedorTarjetas.appendChild(tarjeta);
});
index.html
index.html
Nuevo
+103
-0

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TP2 - Arrays y DOM</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 2rem;
        line-height: 1.5;
      }

      h1,
      h2 {
        margin-bottom: 0.5rem;
      }

      section {
        margin-bottom: 2rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      ul {
        padding-left: 1.2rem;
      }

      .activo {
        background: #ffe8a3;
        border: 1px solid #e4b600;
      }

      .tarjetas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
      }

      .tarjeta {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
      }

      .tarjeta img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 6px;
      }

      code {
        background: #f4f4f4;
        padding: 0.2rem 0.4rem;
      }
    </style>
  </head>
  <body>
    <h1>Resolución TP2 (Arrays + DOM)</h1>

    <section>
      <h2>Consola (ejercicios de arrays)</h2>
      <p>
        Abrí la consola del navegador para ver resultados de los ejercicios 1 al 5 de
        arrays.
      </p>
    </section>

    <section>
      <h2>1) Lista dinámica</h2>
      <ul id="listaNombres"></ul>
    </section>

    <section>
      <h2>2) Modificar contenido por ID</h2>
      <p id="textoEditable">Texto original del elemento.</p>
      <button id="btnCambiarTexto">Cambiar texto</button>
    </section>

    <section>
      <h2>3) Agregar/quitar clases</h2>
      <button id="btnToggleClase">Hacé click para alternar clase</button>
    </section>

    <section>
      <h2>4) Formulario dinámico</h2>
      <form id="formNombres">
        <input id="inputNombre" type="text" placeholder="Escribí un nombre" required />
        <button type="submit">Agregar</button>
      </form>
      <ul id="listaFormulario"></ul>
    </section>

    <section>
      <h2>5) Tarjetas desde array de objetos</h2>
      <div id="contenedorTarjetas" class="tarjetas"></div>
    </section>

    <script src="app.js"></script>
  </body>
</html>