// Array para almacenar los productos seleccionados
let productosSeleccionados = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    productosSeleccionados.push({ nombre, precio });
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    productosSeleccionados = [];
    actualizarCarrito();
}

// Función para actualizar el carrito en el HTML
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';
    let total = 0;

    productosSeleccionados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio} €`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalCarrito.textContent = total;
}

// Función para realizar la compra
function realizarCompra() {
    alert('¡Compra realizada! Gracias por su compra.');
    vaciarCarrito();
}