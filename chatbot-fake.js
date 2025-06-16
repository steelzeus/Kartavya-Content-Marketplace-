// chatbot-fake.js - Floating chatbot button and fake chat panel for Kartavya
(function() {
  // Floating button
  const btn = document.createElement('button');
  btn.className = 'chatbot-button';
  btn.type = 'button';
  btn.innerHTML = '<span class="chatbot-icon">\
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#e93b81"/><path d="M7 10.5C7 9.11929 8.11929 8 9.5 8H14.5C15.8807 8 17 9.11929 17 10.5V13.5C17 14.8807 15.8807 16 14.5 16H10.5L8 18V13.5V10.5Z" stroke="white" stroke-width="1.5"/></svg></span> Ask Kartavya Bot';
  document.body.appendChild(btn);

  // Chat panel
  const panel = document.createElement('div');
  panel.className = 'chatbot-panel';
  panel.innerHTML = `
    <div class="chatbot-header">Hi! I’m your assistant 👋</div>
    <div class="chatbot-messages">
      <div class="chatbot-message">What can I help you with?</div>
      <div class="chatbot-message">Try asking: <em>How do I sell a product?</em></div>
    </div>
    <form class="chatbot-input-row" onsubmit="return false;">
      <input class="chatbot-input" type="text" placeholder="Type your message..." disabled />
      <button class="chatbot-advanced-btn" type="button" onclick="window.location.href='chatbot.html'">Open Advanced Assistant</button>
    </form>
  `;
  document.body.appendChild(panel);

  // Toggle panel
  btn.addEventListener('click', function() {
    panel.classList.toggle('open');
  });

  // Hide panel on outside click
  document.addEventListener('mousedown', function(e) {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove('open');
    }
  });
})();
