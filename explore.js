// explore.js - Kartavya Explore Page Product Data & Rendering

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const resultsCount = document.getElementById("resultsCount");
  const backToTopBtn = document.getElementById("backToTop");
  const categoryFilters = document.querySelectorAll(".category-filter");
  
  if (!grid) {
    console.error("Missing #productGrid");
    return;
  }

  // Confirm JS is working
  console.log("Rendering 100 products...");

  // Store all products
  let allProducts = [];
  let filteredProducts = [];
  let currentCategory = "all";
  let currentSearch = "";

  // Generate all products
  for (let i = 0; i < 100; i++) {
    const keyword = `study+workspace+${i}`;
    const category = ["Template", "UI Kit", "Planner", "eBook", "Wallpaper", "Journal"][i % 6];
    const price = `₹${Math.floor(Math.random() * 300) + 49}`;
    const title = `Creative ${category} #${i + 1}`;
    const description = `A premium ${category.toLowerCase()} designed for students and creators.`;

    allProducts.push({
      id: i + 1,
      title,
      category,
      price,
      description,
      keyword,
      image: `https://source.unsplash.com/600x400/?${keyword}`
    });
  }

  // Create product card element
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden transform hover:scale-105";
    card.dataset.category = product.category;
    card.dataset.title = product.title.toLowerCase();
    card.dataset.keyword = product.keyword.toLowerCase();

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <div class="text-xs text-indigo-600 uppercase font-semibold tracking-wide">${product.category}</div>
        <h3 class="text-lg font-bold text-gray-900 mt-1">${product.title}</h3>
        <p class="text-sm text-gray-600 mt-1">${product.description}</p>
        <div class="mt-2 text-indigo-700 font-semibold">${product.price}</div>
        <a href="product.html" class="inline-block mt-4 text-sm px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View Product</a>
      </div>
    `;

    return card;
  }

  // Filter products based on search and category
  function filterProducts() {
    filteredProducts = allProducts.filter(product => {
      const matchesSearch = currentSearch === "" || 
        product.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        product.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
        product.keyword.toLowerCase().includes(currentSearch.toLowerCase());
      
      const matchesCategory = currentCategory === "all" || product.category === currentCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  // Render filtered products
  function renderProducts() {
    // Clear grid
    grid.innerHTML = "";
    
    // Add loading animation
    grid.classList.add("opacity-50");
    
    setTimeout(() => {
      // Render filtered products
      filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
      });
      
      // Update results count
      if (resultsCount) {
        resultsCount.textContent = filteredProducts.length;
      }
      
      // Remove loading state
      grid.classList.remove("opacity-50");
      
      // Add fade-in animation to new cards
      const cards = grid.querySelectorAll("div");
      cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 50);
      });
    }, 300);
  }

  // Initialize
  function init() {
    filteredProducts = allProducts;
    renderProducts();
    console.log("100 products rendered successfully!");
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      filterProducts();
      renderProducts();
    });
  }

  // Category filter functionality
  categoryFilters.forEach(filter => {
    filter.addEventListener("click", () => {
      // Update active state
      categoryFilters.forEach(f => {
        f.classList.remove("active", "bg-indigo-600", "text-white");
        f.classList.add("bg-gray-100", "text-gray-700");
      });
      filter.classList.add("active", "bg-indigo-600", "text-white");
      filter.classList.remove("bg-gray-100", "text-gray-700");
      
      // Update category
      currentCategory = filter.dataset.category;
      filterProducts();
      renderProducts();
    });
  });

  // Back to top functionality
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove("opacity-0", "invisible");
        backToTopBtn.classList.add("opacity-100", "visible");
      } else {
        backToTopBtn.classList.add("opacity-0", "invisible");
        backToTopBtn.classList.remove("opacity-100", "visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Initialize the page
  init();
});
