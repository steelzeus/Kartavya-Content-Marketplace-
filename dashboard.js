// dashboard.js - Kartavya Dashboard Product Data & Rendering

const dashboardProducts = [
  {
    title: "Zen Focus Wallpaper Kit",
    price: "₹79",
    description: "Minimal, calming wallpapers for deep work and study.",
    category: "Wallpaper",
    image: "https://source.unsplash.com/random/600x400?minimal,zen,wallpaper"
  },
  {
    title: "Study System Journal PDF",
    price: "₹99",
    description: "Printable journal to organize your study goals and habits.",
    category: "Template",
    image: "https://source.unsplash.com/random/600x400?journal,study,template"
  },
  {
    title: "2025 Planner Notion Pack",
    price: "₹149",
    description: "A Notion template for planning your best year yet.",
    category: "Template",
    image: "https://source.unsplash.com/random/600x400?notion,planner,template"
  },
  {
    title: "Kawaii Study Notes",
    price: "₹99",
    description: "Pastel notepad aesthetic for cute, organized study notes.",
    category: "Template",
    image: "https://source.unsplash.com/random/600x400?pastel,notebook"
  },
  {
    title: "Dark Mode Wallpaper Pack",
    price: "₹149",
    description: "Tech-inspired dark theme wallpapers for all your devices.",
    category: "Wallpaper",
    image: "https://source.unsplash.com/random/600x400?dark,technology"
  },
  {
    title: "Custom Resume Builder",
    price: "₹119",
    description: "Modern resume UI mockup for job seekers.",
    category: "UI Kit",
    image: "https://source.unsplash.com/random/600x400?resume,ui"
  },
  {
    title: "Study Timer App UI Kit",
    price: "₹139",
    description: "Mobile app mockup for a productivity timer.",
    category: "UI Kit",
    image: "https://source.unsplash.com/random/600x400?app,mobile,ui"
  },
  {
    title: "Self-Care Habit Tracker",
    price: "₹109",
    description: "Clean health dashboard for tracking habits and wellness.",
    category: "Template",
    image: "https://source.unsplash.com/random/600x400?health,tracker"
  },
  {
    title: "College Essay eBook",
    price: "₹149",
    description: "A digital eBook for writing standout college essays.",
    category: "eBook",
    image: "https://source.unsplash.com/random/600x400?book,laptop"
  },
  {
    title: "Creative Portfolio Starter",
    price: "₹159",
    description: "Sleek personal site preview for creative portfolios.",
    category: "UI Kit",
    image: "https://source.unsplash.com/random/600x400?portfolio,website"
  },
  {
    title: "Motivation Quote Poster Set",
    price: "₹49",
    description: "Printable posters to inspire your study space every day.",
    category: "Wallpaper",
    image: "https://source.unsplash.com/random/600x400?poster,motivation"
  },
  {
    title: "Digital Flashcard Maker",
    price: "₹129",
    description: "Create, organize, and review flashcards for any subject.",
    category: "UI Kit",
    image: "https://source.unsplash.com/random/600x400?flashcard,app"
  }
];

function renderDashboardProducts() {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;
  grid.innerHTML = dashboardProducts.map(product => `
    <div class="product-card">
      <span class="category-badge" data-category="${product.category}">${product.category}</span>
      <img src="${product.image}" alt="${product.title}" class="product-cover" />
      <div class="product-info">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">${product.price}</p>
        <p class="product-desc">${product.description}</p>
        <a href="product.html" class="view-btn" title="View Product">👁️ View Product</a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderDashboardProducts);
