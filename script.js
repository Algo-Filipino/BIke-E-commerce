// JavaScript code for the home page
// You can add your logic and functionality here

// Example function to handle the "Add to Cart" button click event
function addToCart(productId) {
    // Get the product details based on the productId
    // Perform any necessary operations (e.g., add to cart array, update UI, etc.)
    // ...
    alert('Product added to cart!');
  }
  
  // Example function to fetch featured products from an API
  function fetchFeaturedProducts() {
    // Make an API call to fetch the featured products
    // ...
    // Example response data from the API
    const products = [
      {
        id: 1,
        name: 'Mountain Bike',
        image: 'bike1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 499.99
      },
      {
        id: 2,
        name: 'Road Bike',
        image: 'bike2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 599.99
      }
    ];
  
    // Render the featured products on the page
    const featuredProductsContainer = document.getElementById('featured-products');
    featuredProductsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);
  
      const priceElement = document.createElement('p');
      priceElement.textContent = 'Price: $' + product.price;
      productElement.appendChild(priceElement);
  
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => {
        addToCart(product.id);
      });
      productElement.appendChild(addToCartButton);
  
      featuredProductsContainer.appendChild(productElement);
    });
  }
  
  // Call the function to fetch and render the featured products
  fetchFeaturedProducts();
  