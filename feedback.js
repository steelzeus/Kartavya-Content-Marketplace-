// feedback.js - Floating feedback button and panel for Kartavya

(function() {
  // Insert feedback button
  const feedbackBtn = document.createElement('button');
  feedbackBtn.className = 'feedback-button';
  feedbackBtn.type = 'button';
  feedbackBtn.innerHTML = 'Feedback';
  document.body.appendChild(feedbackBtn);

  // Insert feedback panel
  const panel = document.createElement('div');
  panel.className = 'feedback-panel';
  panel.innerHTML = `
    <h2>Send Feedback</h2>
    <form id="feedbackForm">
      <label for="fb-name">Name</label>
      <input type="text" id="fb-name" name="name" placeholder="Your name" autocomplete="name" />
      <label for="fb-page">Page</label>
      <input type="text" id="fb-page" name="page" readonly />
      <label for="fb-type">Type of Feedback</label>
      <select id="fb-type" name="type">
        <option value="Bug">Bug</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Compliment">Compliment</option>
      </select>
      <label for="fb-message">Message</label>
      <textarea id="fb-message" name="message" rows="4" placeholder="Your feedback..." required></textarea>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="thank-you" style="display:none;">Thanks for your feedback!</div>
  `;
  document.body.appendChild(panel);

  // Prefill page field
  document.getElementById('fb-page').value = window.location.pathname;

  // Toggle panel
  feedbackBtn.addEventListener('click', function() {
    panel.classList.toggle('open');
  });

  // Hide panel on outside click
  document.addEventListener('mousedown', function(e) {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== feedbackBtn) {
      panel.classList.remove('open');
    }
  });

  // Handle form submit
  const form = document.getElementById('feedbackForm');
  const thankYou = panel.querySelector('.thank-you');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    thankYou.style.display = 'block';
    setTimeout(() => {
      form.reset();
      thankYou.style.display = 'none';
      form.style.display = '';
      panel.classList.remove('open');
    }, 3000);
  });
})();
