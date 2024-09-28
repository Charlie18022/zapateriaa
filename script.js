document.addEventListener("DOMContentLoaded", function() {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            const productosLista = document.getElementById('productos-lista');
            data.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.folio}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.talla}</td>
                    <td>$${producto.precio}</td>
                `;
                productosLista.appendChild(row);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});
