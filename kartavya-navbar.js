// kartavya-navbar.js
// Injects a modern, dynamic navbar into all Kartavya pages
(function() {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'Explore', href: 'explore.html' },
    { name: 'Dashboard', href: 'dashboard.html' },
    { name: 'Storefront', href: 'storefront.html' }
  ];
  const getPage = () => {
    const path = window.location.pathname.split('/').pop();
    return path || 'index.html';
  };
  const name = localStorage.getItem('kartavya_name') || 'Login';
  const role = localStorage.getItem('kartavya_role');
  const loggedIn = !!localStorage.getItem('kartavya_name');
  let navLinks = pages.map(p => {
    const active = getPage() === p.href ? 'active' : '';
    return `<li><a href="${p.href}" class="${active}">${p.name}</a></li>`;
  }).join('');
  if (loggedIn) {
    navLinks += `<li><a href="#" id="nav-logout">Logout</a></li>`;
    navLinks += `<li><span class="nav-username">${name}</span></li>`;
  } else {
    navLinks += `<li><a href="login.html" class="${getPage()==='login.html'?'active':''}">Login</a></li>`;
  }
  const navbar = `
    <nav class="navbar">
      <div class="logo">Kartavya</div>
      <ul class="nav-links">${navLinks}</ul>
    </nav>
  `;
  // Replace or insert navbar
  let header = document.querySelector('header');
  if (!header) {
    header = document.createElement('header');
    document.body.insertBefore(header, document.body.firstChild);
  }
  header.innerHTML = navbar;
  // Logout logic
  const logoutBtn = document.getElementById('nav-logout');
  if (logoutBtn) {
    logoutBtn.onclick = function(e) {
      e.preventDefault();
      localStorage.removeItem('kartavya_name');
      localStorage.removeItem('kartavya_role');
      window.location.href = 'login.html';
    };
  }
})();
