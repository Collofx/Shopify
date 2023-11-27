// Create an array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
    // Replace these sample details with your actual product details
    const product = {
        image: "product_image_url.jpg",
        name: "Product Name",
        price: 100, // Product price
        quantity: 1, // Initial quantity
    };

    // Add the product to the cartItems array
    cartItems.push(product);

    // Call a function to update the cart page with the latest items
    updateCartPage();
}

// Function to update the cart page with the latest items
function updateCartPage() {
    const cartItemsSection = document.getElementById("cart-items");
    cartItemsSection.innerHTML = ""; // Clear the existing items

    cartItems.forEach((item, index) => {
        // Create a new item element for the cart
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        // Add the product details to the item element
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: Ksh ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: Ksh ${item.price * item.quantity}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;

        // Append the item element to the cartItemsSection
        cartItemsSection.appendChild(cartItemElement);
    });

    // Calculate and display the cart total
    const cartTotalSection = document.getElementById("cart-total");
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalSection.innerHTML = `
        <h3>Cart Total:</h3>
        <p>Ksh ${cartTotal}</p>
        <button onclick="checkout()">Checkout</button>
    `;
}

// Function to remove an item from the cart
function removeFromCart(itemIndex) {
    cartItems.splice(itemIndex, 1);
    updateCartPage();
}

// Function to simulate a checkout process (you can replace this with your actual checkout logic)
function checkout() {
    alert("Thank you for your purchase!");
    cartItems = []; // Clear the cart after checkout
    updateCartPage();
}
