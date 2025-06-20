// explore.js - Kartavya Explore Page Product Data & Rendering

// Product dataset with 100+ unique products
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  const categories = ["Template", "eBook", "UI Kit", "Wallpaper", "Journal", "Planner"];
  const keywords = [
    "notebook", "workspace", "planner", "design", "study", "journal", "creative", "ui", "templates", "ebooks",
    "productivity", "calendar", "dashboard", "resume", "portfolio", "abstract", "paper", "desk", "illustration",
    "pastel", "minimal", "focus", "habit", "tracker", "workflow", "sketch", "draw", "document", "writing", "digital",
    "learning", "aesthetic", "flatlay", "laptop", "planner", "books", "motivation", "whiteboard", "notes", "cozy"
  ];

  const products = [];

  for (let i = 0; i < 100; i++) {
    const keyword = keywords[i % keywords.length];
    const category = categories[i % categories.length];
    products.push({
      id: i + 1,
      title: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} ${category}`,
      description: `A high-quality ${category.toLowerCase()} that helps you stay organized and inspired.`,
      price: `₹${Math.floor(Math.random() * 350) + 49}`,
      category: category,
      image: `https://source.unsplash.com/600x400/?${keyword}`
    });
  }

  // Render products
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded-xl overflow-hidden transition hover:scale-[1.02]";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover" />
      <div class="p-4">
        <div class="text-sm text-gray-500">${p.category}</div>
        <h3 class="text-lg font-semibold text-gray-800">${p.title}</h3>
        <p class="text-sm text-gray-600 mb-2">${p.description}</p>
        <div class="font-bold text-indigo-600">${p.price}</div>
        <a href="product.html" class="inline-block mt-3 text-sm text-white bg-indigo-600 px-3 py-2 rounded hover:bg-indigo-700">View Product</a>
      </div>
    `;
    productGrid.appendChild(card);
  });
});
