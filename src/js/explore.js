// Explore page functionality
function exploreApp() {
  return {
    // State
    loading: true,
    loadingMore: false,
    hasMore: true,
    searchQuery: '',
    selectedCategories: [],
    sortBy: 'newest',
    allProducts: [],
    filteredProducts: [],
    currentPage: 1,
    productsPerPage: 12,
    
    // Categories
    categories: [
      { id: 'all', name: 'All' },
      { id: 'art', name: 'Digital Art' },
      { id: 'templates', name: 'Templates' },
      { id: 'ebooks', name: 'eBooks' },
      { id: 'design', name: 'Design Assets' },
      { id: 'photography', name: 'Photography' },
      { id: 'music', name: 'Music' },
      { id: 'videos', name: 'Videos' }
    ],

    // Sample products data
    sampleProducts: [
      {
        id: 1,
        title: "Minimalist Wallpaper Collection",
        creator: "Arya Sharma",
        price: 149,
        category: "art",
        description: "A stunning collection of 20 minimalist wallpapers perfect for desktop and mobile devices.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        tags: ["wallpapers", "minimalist", "digital art"],
        wishlisted: false,
        featured: true
      },
      {
        id: 2,
        title: "Study Planner Template",
        creator: "Rohan Gupta",
        price: 99,
        category: "templates",
        description: "Comprehensive study planner template for Notion with goal tracking and progress monitoring.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        rating: 4.9,
        tags: ["notion", "productivity", "study"],
        wishlisted: false,
        featured: false
      },
      {
        id: 3,
        title: "Digital Art Brush Pack",
        creator: "Priya Singh",
        price: 199,
        category: "art",
        description: "Professional digital art brushes for Procreate and Photoshop. 50+ unique brushes included.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        tags: ["brushes", "procreate", "photoshop"],
        wishlisted: true,
        featured: true
      },
      {
        id: 4,
        title: "Startup Guide eBook",
        creator: "Vikash Kumar",
        price: 299,
        category: "ebooks",
        description: "Complete guide for student entrepreneurs. Learn how to start and grow your business.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        tags: ["entrepreneurship", "business", "guide"],
        wishlisted: false,
        featured: false
      },
      {
        id: 5,
        title: "Social Media Templates",
        creator: "Ananya Patel",
        price: 179,
        category: "templates",
        description: "Instagram story and post templates designed for student creators and small businesses.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        tags: ["instagram", "social media", "templates"],
        wishlisted: false,
        featured: true
      },
      {
        id: 6,
        title: "Logo Design Kit",
        creator: "Arjun Verma",
        price: 249,
        category: "design",
        description: "Professional logo templates and design elements for creating stunning brand identities.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        tags: ["logos", "branding", "design"],
        wishlisted: false,
        featured: false
      },
      {
        id: 7,
        title: "Photography Presets",
        creator: "Sana Ali",
        price: 129,
        category: "photography",
        description: "Lightroom presets for stunning portrait and landscape photography. 25 presets included.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        rating: 4.9,
        tags: ["lightroom", "presets", "photography"],
        wishlisted: true,
        featured: true
      },
      {
        id: 8,
        title: "Chill Beats Collection",
        creator: "Dev Sharma",
        price: 199,
        category: "music",
        description: "Lo-fi and chill beats perfect for studying, working, or relaxing. 15 tracks included.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
        rating: 4.7,
        tags: ["lo-fi", "beats", "study music"],
        wishlisted: false,
        featured: false
      },
      {
        id: 9,
        title: "Animation Tutorial Series",
        creator: "Maya Reddy",
        price: 399,
        category: "videos",
        description: "Complete animation tutorial series for beginners. Learn 2D animation from scratch.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        tags: ["animation", "tutorial", "2d"],
        wishlisted: false,
        featured: true
      },
      {
        id: 10,
        title: "Resume Template Pack",
        creator: "Karan Joshi",
        price: 79,
        category: "templates",
        description: "Modern and professional resume templates. ATS-friendly designs for job seekers.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        tags: ["resume", "cv", "job"],
        wishlisted: false,
        featured: false
      }
    ],

    // Initialize
    init() {
      this.loadProducts();
    },

    // Load products (simulate API call)
    async loadProducts() {
      this.loading = true;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate more products for demonstration
      this.allProducts = this.generateProducts(100);
      this.filterProducts();
      this.loading = false;
    },

    // Generate sample products
    generateProducts(count) {
      const products = [...this.sampleProducts];
      
      for (let i = products.length; i < count; i++) {
        const baseProduct = this.sampleProducts[i % this.sampleProducts.length];
        products.push({
          ...baseProduct,
          id: i + 1,
          title: `${baseProduct.title} ${Math.floor(i / this.sampleProducts.length) + 1}`,
          price: baseProduct.price + Math.floor(Math.random() * 100) - 50,
          rating: (4 + Math.random()).toFixed(1),
          wishlisted: Math.random() > 0.8,
          featured: Math.random() > 0.7
        });
      }
      
      return products;
    },

    // Filter and sort products
    filterProducts() {
      let filtered = [...this.allProducts];

      // Apply search filter
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.title.toLowerCase().includes(query) ||
          product.creator.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Apply category filter
      if (this.selectedCategories.length > 0 && !this.selectedCategories.includes('all')) {
        filtered = filtered.filter(product => 
          this.selectedCategories.includes(product.category)
        );
      }

      // Apply sorting
      filtered.sort((a, b) => {
        switch (this.sortBy) {
          case 'popular':
            return b.rating - a.rating;
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'newest':
          default:
            return b.id - a.id;
        }
      });

      this.filteredProducts = filtered.slice(0, this.currentPage * this.productsPerPage);
      this.hasMore = filtered.length > this.filteredProducts.length;
      
      // Announce to screen readers
      this.announceResults();
    },

    // Toggle category filter
    toggleCategory(categoryId) {
      if (categoryId === 'all') {
        this.selectedCategories = [];
      } else {
        const index = this.selectedCategories.indexOf(categoryId);
        if (index > -1) {
          this.selectedCategories.splice(index, 1);
        } else {
          this.selectedCategories.push(categoryId);
        }
      }
      this.currentPage = 1;
      this.filterProducts();
    },

    // Clear all filters
    clearFilters() {
      this.searchQuery = '';
      this.selectedCategories = [];
      this.sortBy = 'newest';
      this.currentPage = 1;
      this.filterProducts();
    },

    // Load more products
    async loadMore() {
      this.loadingMore = true;
      this.currentPage++;
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.filterProducts();
      this.loadingMore = false;
    },

    // Get category color
    getCategoryColor(category) {
      const colors = {
        art: 'bg-purple-500',
        templates: 'bg-blue-500',
        ebooks: 'bg-green-500',
        design: 'bg-pink-500',
        photography: 'bg-yellow-500',
        music: 'bg-red-500',
        videos: 'bg-indigo-500'
      };
      return colors[category] || 'bg-gray-500';
    },

    // Toggle wishlist
    toggleWishlist(productId) {
      const product = this.allProducts.find(p => p.id === productId);
      if (product) {
        product.wishlisted = !product.wishlisted;
        
        // Update filtered products
        const filteredProduct = this.filteredProducts.find(p => p.id === productId);
        if (filteredProduct) {
          filteredProduct.wishlisted = product.wishlisted;
        }
        
        // Announce to screen readers
        const message = product.wishlisted ? 
          `${product.title} added to wishlist` : 
          `${product.title} removed from wishlist`;
        this.announceToScreenReader(message);
      }
    },

    // Add to cart
    addToCart(product) {
      // Simulate adding to cart
      this.announceToScreenReader(`${product.title} added to cart`);
      
      // Show success feedback
      this.showToast(`${product.title} added to cart!`, 'success');
    },

    // View product
    viewProduct(product) {
      // Navigate to product detail page
      window.location.href = `/product.html?id=${product.id}`;
    },

    // Announce results to screen readers
    announceResults() {
      const message = `${this.filteredProducts.length} products found`;
      this.announceToScreenReader(message);
    },

    // Announce to screen reader
    announceToScreenReader(message) {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    },

    // Show toast notification
    showToast(message, type = 'info') {
      // Create toast element
      const toast = document.createElement('div');
      toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 translate-x-full ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
      }`;
      toast.textContent = message;
      
      document.body.appendChild(toast);
      
      // Animate in
      setTimeout(() => {
        toast.classList.remove('translate-x-full');
      }, 100);
      
      // Remove after delay
      setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    }
  };
}

// Add utility CSS classes
const style = document.createElement('style');
style.textContent = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .focus\\:not-sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`;
document.head.appendChild(style);