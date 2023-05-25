// Function to display the cart items in the modal
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
  
    let cartTotal = 0;
  
    for (const item of cartItems) {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('cart-item');
      itemContainer.innerHTML = `
        <div class="item-name">${item.name}</div>
        <div class="item-price">$${item.price.toFixed(2)}</div>
        <div class="item-quantity">${item.quantity}</div>
        <button class="btn btn-sm btn-danger" onclick="removeCartItem('${item.id}')">Remove</button>
      `;
  
      cartItemsContainer.appendChild(itemContainer);
  
      const itemTotal = item.price * item.quantity;
      cartTotal += itemTotal;
    }
  
    const cartTotalModal = document.getElementById('cartTotalModal');
    cartTotalModal.textContent = cartTotal.toFixed(2);
  }
  
  // Function to remove a cart item
  function removeCartItem(itemId) {
    // Find the item index in the cart
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
  
    if (itemIndex !== -1) {
      // Remove the item from the cart
      cartItems.splice(itemIndex, 1);
  
      // Update the cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
      // Refresh the displayed cart items
      displayCartItems();
      updateCartBadge();
    }
  }
  
  // Function to handle the checkout process
  function checkout() {
    // Perform the checkout process, e.g., redirect to a payment page or submit the order to a server
  
    // After the checkout is complete, clear the cart and update the UI
    cartItems = [];
    localStorage.removeItem('cartItems');
    displayCartItems();
    updateCartBadge();
  
    // Display a success message or perform any other desired actions
    alert('Checkout complete!');
  }
  
  // Function to update the cart badge
  function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.textContent = cartItems.length;
  }
  
  // Function to initialize the cart modal
  function initializeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.addEventListener('show.bs.modal', function () {
      displayCartItems();
    });
  }
  
  // Retrieve stored cart items from local storage, or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // Call the function to update the cart badge when the page loads
  updateCartBadge();
  
  // Call the function to initialize the cart modal
  initializeCartModal();
  