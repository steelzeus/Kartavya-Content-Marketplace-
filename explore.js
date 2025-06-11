// explore.js - Kartavya Explore Page Prototype

const products = [
  {
    title: "Watercolor Dreams",
    price: "₹299",
    description: "A collection of vibrant watercolor art prints for your creative projects.",
    category: "Art",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Minimalist Resume Template",
    price: "₹99",
    description: "A clean, ATS-friendly resume template for job seekers.",
    category: "Templates",
    image: "https://via.placeholder.com/400x250?text=Resume+Template"
  },
  {
    title: "Digital Sketchbook",
    price: "₹199",
    description: "A digital sketchbook with 50+ pages for artists and doodlers.",
    category: "Art",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Startup eBook Guide",
    price: "₹149",
    description: "A practical eBook for students launching their first startup.",
    category: "eBook",
    image: "https://via.placeholder.com/400x250?text=eBook+Guide"
  },
  {
    title: "Social Media Kit",
    price: "₹129",
    description: "Editable templates for Instagram, Facebook, and Twitter posts.",
    category: "Templates",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Modern Poster Pack",
    price: "₹179",
    description: "A set of 10 modern posters for dorm rooms and study spaces.",
    category: "Design",
    image: "https://via.placeholder.com/400x250?text=Poster+Pack"
  }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';
let currentSearch = '';

function renderProducts() {
  let filtered = products.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category.toLowerCase() === currentCategory;
    const matchesSearch = product.title.toLowerCase().includes(currentSearch);
    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filtered.length ? filtered.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" class="product-cover" />
      <div class="product-info">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">${product.price}</p>
        <p class="product-desc">${product.description}</p>
      </div>
    </div>
  `).join('') : '<p style="grid-column: 1/-1; text-align:center; color:#888;">No products found.</p>';
}

searchInput.addEventListener('input', e => {
  currentSearch = e.target.value.trim().toLowerCase();
  renderProducts();
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

// Initial render
renderProducts();
