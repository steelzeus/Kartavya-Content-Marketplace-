// index-personalization.js
// Handles dynamic name/role personalization and CTA logic for index.html

document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('kartavyaUser'));
    const exploreAs = document.querySelector('.explore-as .cta-buttons');
    const heroCtas = document.querySelector('.hero .cta-buttons');
    const navLinks = document.querySelector('.nav-links');

    // Helper to create a button
    function createBtn(href, text, className, style) {
        const a = document.createElement('a');
        a.href = href;
        a.textContent = text;
        a.className = className;
        if (style) a.style = style;
        return a;
    }

    // Helper to create logout button
    function createLogoutBtn() {
        const btn = document.createElement('button');
        btn.textContent = 'Logout';
        btn.className = 'btn-secondary';
        btn.style = 'margin-left:1rem;background:#fff;color:#2D2A8A;border:1px solid #2D2A8A;';
        btn.onclick = function () {
            localStorage.removeItem('kartavyaUser');
            window.location.href = 'login.html';
        };
        return btn;
    }

    // Personalize Explore As section
    if (user && user.name && user.role) {
        // Clear and repopulate explore-as buttons
        exploreAs.innerHTML = '';
        if (user.role === 'creator') {
            exploreAs.appendChild(createBtn('dashboard.html', `Enter as ${user.name} (Creator)`, 'btn-primary', 'background:#2D2A8A;'));
            exploreAs.appendChild(createBtn('storefront.html', `Visit ${user.name}’s Store`, 'btn-secondary', 'background:#e93b81;'));
        }
        if (user.role === 'parent') {
            exploreAs.appendChild(createBtn('parent-dashboard.html', `Enter as ${user.name} (Parent)`, 'btn-primary', 'background:#FFCF59;color:#1a1a1a;'));
        }
        if (user.role === 'school') {
            exploreAs.appendChild(createBtn('school-dashboard.html', `Enter as ${user.name} (School)`, 'btn-primary', 'background:#72E4C4;color:#1a1a1a;'));
        }
        // Always show explore
        exploreAs.appendChild(createBtn('explore.html', 'Explore Products', 'btn-secondary', 'background:#2D2A8A;color:#fff;'));
    } else {
        // Not logged in: show all entry points with generic names
        exploreAs.innerHTML = '';
        exploreAs.appendChild(createBtn('dashboard.html', 'Enter as Creator', 'btn-primary', 'background:#2D2A8A;'));
        exploreAs.appendChild(createBtn('storefront.html', 'Visit Store', 'btn-secondary', 'background:#e93b81;'));
        exploreAs.appendChild(createBtn('parent-dashboard.html', 'Parent View', 'btn-primary', 'background:#FFCF59;color:#1a1a1a;'));
        exploreAs.appendChild(createBtn('school-dashboard.html', 'School View', 'btn-primary', 'background:#72E4C4;color:#1a1a1a;'));
    }

    // Personalize hero CTA buttons
    if (user && user.role === 'creator') {
        heroCtas.innerHTML = '';
        heroCtas.appendChild(createBtn('dashboard.html', `Go to ${user.name}'s Dashboard`, 'btn-primary'));
        heroCtas.appendChild(createBtn('storefront.html', `Visit ${user.name}’s Store`, 'btn-secondary'));
        heroCtas.appendChild(createBtn('explore.html', 'Explore Products', 'btn-secondary'));
    } else {
        heroCtas.innerHTML = '';
        heroCtas.appendChild(createBtn('dashboard.html', 'Start Selling', 'btn-primary'));
        heroCtas.appendChild(createBtn('explore.html', 'Explore Products', 'btn-secondary'));
    }

    // Update nav links and add logout if logged in
    if (user && user.name) {
        // Remove Login link
        const loginLi = navLinks.querySelector('a[href="login.html"]')?.parentElement;
        if (loginLi) loginLi.remove();
        // Add Logout button
        if (!navLinks.querySelector('.btn-secondary')) {
            const li = document.createElement('li');
            li.appendChild(createLogoutBtn());
            navLinks.appendChild(li);
        }
    }
});
