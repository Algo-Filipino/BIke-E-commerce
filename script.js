function addToCart(productId, title, price) {
  // Retrieve the cart items from local storage (if any)
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Create a new cart item object
  const newItem = {
    productId,
    title,
    price
  };

  // Add the new item to the cart
  cartItems.push(newItem);

  // Update the cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the cart modal with the latest items
  updateCartModal();
}

function updateCartModal() {
  // Retrieve the cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Get the cart items container element
  const cartItemsContainer = document.getElementById('cartItems');

  // Clear the container
  cartItemsContainer.innerHTML = '';

  // Iterate over the cart items and create HTML elements to display them
  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    const titleElement = document.createElement('h4');
    titleElement.textContent = item.title;

    const priceElement = document.createElement('span');
    priceElement.textContent = 'Price: ₱' + item.price.toFixed(2);

    cartItemElement.appendChild(titleElement);
    cartItemElement.appendChild(priceElement);

    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Call the updateCartModal function when the page loads to display any existing cart items
window.addEventListener('load', updateCartModal);
