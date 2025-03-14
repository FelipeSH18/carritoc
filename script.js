document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, title: "MacBook Pro", image: "/mac.jpg", price: 20000 },
        { id: 2, title: "PlayStation 5", image: "/psfive.jpg", price: 8000 },
        { id: 3, title: "Monitor LG 4K", image: "/monitor.jpg", price: 9000 },
        { id: 4, title: "Teclado Mecánico RGB", image: "/teclado.jpg", price: 6000 },
        { id: 5, title: "Mouse Logitech G Pro", image: "/mouse.jpg", price: 4500 },
        { id: 6, title: "Smartwatch Samsung", image: "/smartw.jpg", price: 4090 },
        { id: 7, title: "Tablet iPad Pro", image: "/ipad.jpg", price: 14000 },
        { id: 8, title: "Cámara GoPro Hero", image: "/gopro.jpg", price: 8000 },
        { id: 9, title: "Auriculares Bose", image: "/bose.jpg", price: 3400 },
        { id: 10, title: "Router WiFi 6", image: "/modem.jpg", price: 3200 }
    ];
    

    const container = document.getElementById("product-container");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const closeModal = document.querySelector(".close");
    const verCarrito = document.getElementById("ver-carrito");
    const vaciarCarrito = document.getElementById("vaciar-carrito");

    let cart = [];

    function updateCartUI() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((product, index) => {
            total += product.price;
            const item = document.createElement("div");
            item.innerHTML = `
                <p>${product.title} - $${product.price} 
                <button class="remove-btn" data-index="${index}">🗑️</button></p>
            `;
            cartItemsContainer.appendChild(item);
        });

        cartTotal.textContent = total;
        cartCount.textContent = cart.length;

        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                removeFromCart(btn.getAttribute("data-index"));
            });
        });
    }

    function addToCart(product) {
        cart.push(product);
        updateCartUI();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function emptyCart() {
        cart = [];
        updateCartUI();
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <button class="buy-btn">Agregar al Carrito</button>
        `;

        productCard.querySelector(".buy-btn").addEventListener("click", () => addToCart(product));

        container.appendChild(productCard);
    });

    verCarrito.addEventListener("click", () => cartModal.style.display = "flex");
    closeModal.addEventListener("click", () => cartModal.style.display = "none");
    vaciarCarrito.addEventListener("click", emptyCart);
});
