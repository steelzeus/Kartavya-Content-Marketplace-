// Main JavaScript for Kartavya
class KartavyaApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupAccessibility();
    this.setupPerformanceOptimizations();
    this.setupUserPersonalization();
  }

  setupEventListeners() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Enhanced form handling
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', this.handleFormSubmit.bind(this));
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));

    // Intersection Observer for animations
    this.setupScrollAnimations();
  }

  setupAccessibility() {
    // Focus management
    this.setupFocusManagement();
    
    // ARIA live regions
    this.setupLiveRegions();
    
    // Skip links
    this.setupSkipLinks();
  }

  setupFocusManagement() {
    // Focus visible polyfill
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('using-keyboard');
    });

    // Trap focus in modals
    document.querySelectorAll('[role="dialog"]').forEach(modal => {
      this.trapFocus(modal);
    });
  }

  trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  setupLiveRegions() {
    // Create live region for dynamic content updates
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  setupSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.feature-card, .role-card, .product-card').forEach(el => {
      observer.observe(el);
    });
  }

  setupPerformanceOptimizations() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Service worker registration
    this.registerServiceWorker();
  }

  setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  preloadCriticalResources() {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = './src/styles/main.css';
    document.head.appendChild(criticalCSS);

    // Preload fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  setupUserPersonalization() {
    // Load user preferences
    this.loadUserPreferences();
    
    // Setup theme switching
    this.setupThemeToggle();
    
    // Setup user session management
    this.setupSessionManagement();
  }

  loadUserPreferences() {
    const preferences = JSON.parse(localStorage.getItem('kartavya_preferences') || '{}');
    
    // Apply saved preferences
    if (preferences.theme) {
      document.documentElement.setAttribute('data-theme', preferences.theme);
    }
    
    if (preferences.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
  }

  setupThemeToggle() {
    // Respect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('kartavya_theme_override')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kartavya_theme', theme);
  }

  setupSessionManagement() {
    // Personalize navigation based on user role
    const userRole = localStorage.getItem('kartavya_role');
    const userName = localStorage.getItem('kartavya_name');
    
    if (userName) {
      this.personalizeNavigation(userName, userRole);
    }
  }

  personalizeNavigation(name, role) {
    const nav = document.querySelector('.nav-links');
    if (nav && !document.getElementById('nav-user')) {
      const userItem = document.createElement('li');
      userItem.id = 'nav-user';
      userItem.innerHTML = `
        <span class="text-primary-600 font-semibold px-3 py-2">
          ${name}
        </span>
      `;
      nav.appendChild(userItem);
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Show loading state
    this.showFormLoading(form);
    
    // Simulate form submission
    setTimeout(() => {
      this.showFormSuccess(form);
      this.announceToScreenReader('Form submitted successfully');
    }, 1000);
  }

  showFormLoading(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      `;
    }
  }

  showFormSuccess(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Success!
      `;
      submitBtn.classList.remove('bg-primary-600', 'hover:bg-primary-700');
      submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit';
        submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        submitBtn.classList.add('bg-primary-600', 'hover:bg-primary-700');
      }, 2000);
    }
  }

  handleKeyboardNavigation(e) {
    // Escape key handling
    if (e.key === 'Escape') {
      // Close any open modals or dropdowns
      document.querySelectorAll('[x-data]').forEach(el => {
        if (el._x_dataStack && el._x_dataStack[0].mobileMenuOpen) {
          el._x_dataStack[0].mobileMenuOpen = false;
        }
        if (el._x_dataStack && el._x_dataStack[0].feedbackOpen) {
          el._x_dataStack[0].feedbackOpen = false;
        }
      });
    }
  }

  // Utility methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new KartavyaApp();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KartavyaApp;
}