// dashboard.js - Kartavya Dashboard Product Data & Rendering

const dashboardProducts = [
  { title: "FocusMode Zen Wallpapers", price: "₹199", category: "Wallpaper", description: "Find your calm with these zen-inspired backgrounds.", image: "https://source.unsplash.com/600x400/?zen,wallpaper" },
  { title: "Scholar Notion Hub", price: "₹299", category: "Template", description: "All-in-one Notion dashboard for academic success.", image: "https://source.unsplash.com/600x400/?notion,template" },
  { title: "DreamResume Kit", price: "₹149", category: "UI Kit", description: "Editable Canva + PDF resume bundle for dream jobs.", image: "https://source.unsplash.com/600x400/?resume,cv" },
  { title: "BingeBlocker Study Timer", price: "₹79", category: "Planner", description: "Printable Pomodoro sheets to boost productivity.", image: "https://source.unsplash.com/600x400/?timer,pomodoro" },
  { title: "Indie Startup UI Kit", price: "₹349", category: "UI Kit", description: "Figma template for solo founders and makers.", image: "https://source.unsplash.com/600x400/?startup,figma" },
  { title: "ColorCode Flashcards", price: "₹99", category: "Template", description: "Printable color-coded flashcard sets for any subject.", image: "https://source.unsplash.com/600x400/?flashcard,study" },
  { title: "Mind Cleanse Journal", price: "₹129", category: "Journal", description: "Minimal daily reflection PDF for clarity and calm.", image: "https://source.unsplash.com/600x400/?journal,minimal" },
  { title: "Study System Journal PDF", price: "₹89", category: "Journal", description: "Organize your study goals and habits in style.", image: "https://source.unsplash.com/600x400/?study,planner" },
  { title: "2025 Planner Notion Pack", price: "₹179", category: "Planner", description: "A Notion template for planning your best year yet.", image: "https://source.unsplash.com/600x400/?notion,planner" },
  { title: "Kawaii Study Notes", price: "₹69", category: "Template", description: "Pastel notepad aesthetic for cute, organized notes.", image: "https://source.unsplash.com/600x400/?pastel,notebook" },
  { title: "Dark Mode Wallpaper Pack", price: "₹149", category: "Wallpaper", description: "Tech-inspired dark theme wallpapers for all devices.", image: "https://source.unsplash.com/600x400/?dark,technology" },
  { title: "Custom Resume Builder", price: "₹119", category: "UI Kit", description: "Modern resume UI mockup for job seekers.", image: "https://source.unsplash.com/600x400/?resume,ui" },
  { title: "Study Timer App UI Kit", price: "₹139", category: "UI Kit", description: "Mobile app mockup for a productivity timer.", image: "https://source.unsplash.com/600x400/?app,mobile,ui" },
  { title: "Self-Care Habit Tracker", price: "₹109", category: "Template", description: "Clean health dashboard for tracking habits and wellness.", image: "https://source.unsplash.com/600x400/?health,tracker" },
  { title: "College Essay eBook", price: "₹149", category: "eBook", description: "A digital eBook for writing standout college essays.", image: "https://source.unsplash.com/600x400/?book,laptop" },
  { title: "Creative Portfolio Starter", price: "₹159", category: "UI Kit", description: "Sleek personal site preview for creative portfolios.", image: "https://source.unsplash.com/600x400/?portfolio,website" },
  // ... 84 more unique products ...
];

// Generate 84 more unique products with unique tags
const tags = [
  "notebook", "workspace", "study", "minimal", "design", "calendar", "planner", "focus", "motivation", "art", "ebook", "pdf", "dashboard", "kanban", "habit", "routine", "wellness", "reflection", "goals", "success", "creative", "branding", "portfolio", "presentation", "slides", "infographic", "colorful", "pastel", "modern", "classic", "retro", "vintage", "aesthetic", "productivity", "organizer", "meeting", "notes", "sketch", "draw", "paint", "vector", "ui", "ux", "wireframe", "prototype", "mobile", "desktop", "laptop", "tablet", "phone", "cloud", "sync", "backup", "security", "safe", "instant", "download", "share", "collab", "team", "student", "parent", "school", "teacher", "classroom", "lesson", "assignment", "quiz", "test", "exam", "certificate", "badge", "award", "leaderboard", "score", "tracker", "timer", "clock", "reminder", "alert", "notification", "calendar", "event", "deadline", "project", "task", "todo", "list", "checklist", "progress", "review", "feedback", "survey", "form", "template", "kit", "bundle"
];

while (dashboardProducts.length < 100) {
  const i = dashboardProducts.length;
  const tag = tags[i % tags.length] + ',' + (i+1);
  dashboardProducts.push({
    title: `Product ${i+1}`,
    price: `₹${Math.floor(Math.random()*351)+49}`,
    category: ["Template", "eBook", "UI Kit", "Wallpaper", "Journal", "Planner"][i%6],
    description: `Discover the power of ${tags[i % tags.length]}.`,
    image: `https://source.unsplash.com/600x400/?${tag}`
  });
}

function renderDashboardProducts() {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;
  grid.innerHTML = dashboardProducts.map(product => `
    <div class="product-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col min-h-[340px]">
      <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover" />
      <div class="p-4 flex-1 flex flex-col">
        <span class="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">${product.category}</span>
        <h2 class="text-lg font-bold mb-1 text-gray-900">${product.title}</h2>
        <p class="text-gray-600 text-sm mb-2 flex-1">${product.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-pink-500 font-bold">${product.price}</span>
          <a href="product.html" class="text-indigo-600 hover:underline font-semibold text-sm">View Product</a>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderDashboardProducts);
