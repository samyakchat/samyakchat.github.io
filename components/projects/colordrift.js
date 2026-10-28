(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="colordrift" data-tech="react,typescript,tailwind">
      <div class="project-header">
        <h1>Colordrift</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag react">React (Vite)</span>
          <span class="tech-tag typescript">TypeScript</span>
          <span class="tech-tag react">Tailwind CSS</span>
          <span class="tech-tag css">Vercel Analytics</span>
          <span class="tech-tag ai">colormind.io API</span>
          <span class="tech-tag ai">The Color API</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2026</span>
        </div>
        <div class="visitlink">
          <a href="https://colordrift.vercel.app/" target="_blank">
            Visit Website!
          </a>
        </div>
      </div>

      <p>
        When designing Ul, the process shouldn't be hindered by the search for
        the right colors. Colordrift is simple, you can search up any color,
        explore variations, preview frontend components, and copy code for
        platforms. Additionally, you can explore randomly generated color
        palettes with themes that change every day, save them to your
        favorites to explore later, and view them in action with our web view
        feature. Made with React, it was a simple project I even used for the
        colors on this project.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/colordrift/home.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Homescreen</h3>
            <p>Here it spells out examples of using the website.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/colordrift/palettes.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>The Palettes</h3>
            <p>
              The Palette page shows randomly generated palettes in categories
              that change daily.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/colordrift/saved.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Saved Palettes</h3>
            <p>
              Save your favorites to explore later, and view them in action
              with our web view feature.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/colordrift/colors1.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Color Page</h3>
            <p>When you search a color, there are many variations of such.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/colordrift/colors2.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Color Page (scrolled down)</h3>
            <p>
              This is the component view section to see colors in action as
              their role, and copy code for platforms (not shown).
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/colordrift/webview.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Web View</h3>
            <p>
              Here you can customize palettes and see them in a real website
              with different front end components, making the perfect palette.
            </p>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
