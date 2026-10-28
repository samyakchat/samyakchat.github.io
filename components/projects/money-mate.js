(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="money-mate" data-tech="python,tkinter,sql">
      <div class="project-header">
        <h1>Money-Mate</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag python">Python</span>
          <span class="tech-tag tkinter">Tkinter</span>
          <span class="tech-tag tkinter">Py-QT module</span>
          <span class="tech-tag ai">Gemini API (Fast)</span>
          <span class="tech-tag sql">SQL</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2024-2025</span>
        </div>
        <div class="meta-box">
          <a href="https://github.com/samyakchat/Money-Mate/" target="_blank">
            <ion-icon name="logo-github" style="font-size: 1rem;"></ion-icon>
            GitHub
          </a>
        </div>
      </div>

      <p>
        A tk-inter based app made for student spending. It tracks student
        spending and has advanced and basic features. To add transactions you
        can either manually fill in fields, or talk about your day. When you
        talk about your day the AI will then create transactions for you
        making your job easier. Some more basic features are filtered search,
        summary generator, and view filtered transactions.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/homecropped.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Basic UI</h3>
            <p>
              This shows an intro screen that gets the gist of the modern UI
              through the app.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/profilecropped.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Manage Profiles</h3>
            <p>Manage up to 3 profiles all kept locally with SQL.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/tellus.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>AI integration</h3>
            <p>
              This is our built-in AI that takes information about your day
              and automatically puts in your purchases and income
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/chatbot.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>ChatBot</h3>
            <p>
              This is a chatbot that answers any questions in any form u ask
              it
            </p>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
