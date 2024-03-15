// Funcionalidades adicionales
/* Función para agregar productos al carrito */
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

/* Vaciar carrito */
function vaciarCarrito() {
    carrito = [];
    total = 0;

    actualizarCarrito();
}

/* Actualizar carrito */
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio} €`;
        listaCarrito.appendChild(li);
    });

    totalCarrito.textContent = total;
}