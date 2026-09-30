document.addEventListener("DOMContentLoaded", () => {
 
    const banner = document.getElementById("banner-promocion");

    setTimeout(() => {
        banner.innerHTML = "🔔 <strong>¡Promoción del día!</strong> 10% de descuento abonando en efectivo o transferencia en la sucursal.";
        banner.style.padding = "10px";
        banner.style.backgroundColor = "#e8f5e9";
        banner.style.border = "1px solid #c8e6c9";
        banner.style.marginTop = "10px";
    }, 3000);

    const preciosPorGramo = {
        almendras: 15,
        nueces: 12,
        chia: 5,
        granola: 8
    };


    const formPedido = document.getElementById("form-pedido");
    const mensajeEstado = document.getElementById("mensaje-estado");

    formPedido.addEventListener("submit", (e) => {
        e.preventDefault();

        const productoSeleccionado = document.getElementById("producto").value;
        const cantidadIngresada = document.getElementById("cantidad").value;

        mensajeEstado.textContent = "Calculando pedido...";

        try {
            if (!productoSeleccionado) {
                throw new Error("Debes seleccionar un producto de la lista.");
            }

            const gramos = parseFloat(cantidadIngresada);

            if (isNaN(gramos) || gramos <= 0) {
                throw new Error("Ingresa una cantidad válida en gramos (mayor a 0).");
            }

            const precioUnitario = preciosPorGramo[productoSeleccionado];
            const total = gramos * precioUnitario;

            mensajeEstado.innerHTML = `✅ <strong>Detalle:</strong> ${gramos}g de ${productoSeleccionado} = <strong>$${total.toLocaleString("es-AR")}</strong>`;

        } catch (error) {
            console.error("Se produjo un error:", error.message);
            mensajeEstado.innerHTML = `⚠️ <strong>Error:</strong> ${error.message}`;

        } finally {
            console.log("Intento de cálculo de pedido finalizado.");
        }
    });
});