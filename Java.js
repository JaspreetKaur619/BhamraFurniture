let cartItems = [];

function addToCart(title, price, image) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItem = cartItems.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ title, price, image, quantity });
    }

    updateCartCount();
    saveCartToLocalStorage();
    showCartMessage(); // Show the notification message
}

function updateCartCount() {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
        cartItems = JSON.parse(savedCartItems);
        updateCartCount();
    }
}

function showCartMessage() {
    const messageElement = document.getElementById("cart-message");
    messageElement.classList.remove("hidden"); // Show the message
    setTimeout(() => {
        messageElement.classList.add("hidden"); // Hide the message after 3 seconds
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);