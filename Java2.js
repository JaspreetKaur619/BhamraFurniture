const products = [
    {
        title: "Modern Chair",
        url: "ModernChair.html",
        image: "https://storage.googleapis.com/a1aa/image/er1ZsjlmsfjlfoqN0jNvvhiYLhMYB3nrTptQeL6BBLOcZbzOB.jpg",
        price: "₹9,000"
    },
    {
        title: "Dining Table",
        url: "DiningTable.html",
        image: "https://storage.googleapis.com/a1aa/image/wnekkOlCPZyZRiGFcE7h3fBrIkPry75Xy8VcTT6nWybS22sTA.jpg",
        price: "₹26,000"
    },
    {
        title: "Comfortable Sofa",
        url: "ComfortableSofa.html",
        image: "https://storage.googleapis.com/a1aa/image/MFxNggeldLTYU6tCP222q57g6UJkbcyLlGy0uyF8hctKbb2JA.jpg",
        price: "₹33,000"
    },
    {
        title: "Coffee Table",
        url: "CoffeeTable.html",
        image: "https://storage.googleapis.com/a1aa/image/34fwvhewKTtgdUdttcdSG0CSi4r3ylkqYrkP3ZIbSMsI73sTA.jpg",
        price: "₹12,000"
    },
    {
        title: "Wooden Bed",
        url: "WoodenBed.html",
        image: "https://storage.googleapis.com/a1aa/image/26me8AS7czT6cyCW2t5Bion8XIl0BdhnEE8EGgfu7jCKK4sTA.jpg",
        price: "₹45,000"
    },
    {
        title: "Bookshelf",
        url: "Bookshelf.html",
        image: "https://storage.googleapis.com/a1aa/image/97LeIuVoCCVdV6p6nMT5TIAFcLKa1uTXbhlyHHF8uOFGFc2JA.jpg",
        price: "₹15,000"
    },
    {
        title: "TV Stand",
        url: "TVstand.html",
        image: "https://storage.googleapis.com/a1aa/image/UepW1nEbhE2ZTKgnQzezxFwVzhHNznQuVWA4APFRG2HSK4sTA.jpg",
        price: "₹20,000"
    },
    {
        title: "Dresser",
        url: "Dresser.html",
        image: "https://storage.googleapis.com/a1aa/image/71VeymShPNUf7kkm0d7WvCGGxPE3ulpIfOdmScfzinx4ogzOB.jpg",
        price: "₹18,000"
    },
    {
        title: "Nightstand",
        url: "Nightstand.html",
        image: "https://storage.googleapis.com/a1aa/image/wpnjskSlNL4qHtYR03z6yBdlNhUeTfVYQ6yOUktJvtfgUwZnA.jpg",
        price: "₹8,000"
    }
];

const pageMappings = {
    'home': "Home.html",
    'shop': "Shop.html",
    'about us': "About.html",
    'contact us': "Contact.html",
    'us':'About.html',
    'about':'About.html',
    'contact':'Contact.html'
};

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.querySelector('.grid'); 
    resultsContainer.innerHTML = '';

    // Check if the query matches any of the predefined pages
    if (pageMappings[query]) {
        // Redirect to the corresponding page
        window.location.href = pageMappings[query];
        return; // Exit the function to prevent further processing
    }

    // Filter products based on the search query
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query)
    );

    // Display filtered products
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white shadow-md rounded-lg overflow-hidden hover-scale hover-shadow';
            productCard.innerHTML = `
                <a href="${product.url}">
                    <img alt="${product.title}" class="w-full h-48 object-cover" src="${product.image}" />
                </a>
                <div class="p-6">
                    <a href="${product.url}" class="text-xl font-bold mb-2 no-underline text-gray-900 hover-text-blue">
                        ${product.title}
                    </a>
                    <span class="text-gray-900 font-bold">
                        ${product.price}
                    </span>
                </div>
            `;
            resultsContainer.appendChild(productCard);
        });
    } else {
        resultsContainer.innerHTML = `<p class="text-center text-gray-700">No products found.</p>`;
    }
}

// Attach the search function to the button click
document.getElementById('search-button').addEventListener('click', searchProducts);

// Allow searching with the Enter key
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});