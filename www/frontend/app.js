document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector('.products');

    // Fetch products from the server
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            // Display products in the productContainer
            data.data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="product1.jpg" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <button class="add-to-cart" data-product-id="${product._id}">Add to cart</button>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

        const cartIcon = document.querySelector('.cart-icon');
    
        // Fetch products from the server...
    
        // Handle adding products to the cart
        productContainer.addEventListener('click', function (event) {
            const addToCartButton = event.target.closest('.add-to-cart');
            if (addToCartButton) {
                const productId = addToCartButton.dataset.productId;
    
                // Send a POST request to addToCart endpoint
                fetch(`http://localhost:3000/add-to-cart/${productId}`, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'  // Include credentials (e.g., session ID) in the request
                })
                .then(response => response.json())
                .then(data => {
                    // Handle success (update UI, show confirmation, etc.)
                    console.log(data.message);
                })
                .catch(error => console.error('Error adding product to cart:', error));
            }
        });
    
        // Open the cart modal on cart icon click (you need to implement the modal yourself)
        cartIcon.addEventListener('click', function () {
            // Implement your logic to show the cart modal
            // You can fetch the cart items associated with the session ID and display them in the modal
        });
});
