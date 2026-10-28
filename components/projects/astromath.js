(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="astromath" data-tech="react,typescript,tailwind,sql">
      <div class="project-header">
        <h1>Astromath</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag react">React (Vite)</span>
          <span class="tech-tag typescript">TypeScript</span>
          <span class="tech-tag react">Tailwind CSS</span>
          <span class="tech-tag css">Google Analytics</span>
          <span class="tech-tag sql">SQL</span>

        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2025-2026</span>
        </div>
        <div class="visitlink">
          <a href="https://astromatheducation.com" target="_blank">
            Website down:(
          </a>
        </div>
      </div>

      <p>
        As made for an FBLA Project, its goal is simple. In one area you could explore math subject contents,
        take practice tests and quizzes with interactive lessons, and play fun custom games made for a brain
        break when you're done. It also allows users to track their progress over time, helping them stay motivated
        and focused on improvement. With an easy to use interface and engaging design, it creates a balanced environment
        for both learning and relaxation.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="design/astroMath.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Homescreen</h3>
            <p>Here it shows how you can use the website and to sign up.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="design/astromath2.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Course pages</h3>
            <p>
              Here is an example course page that shows course videos and practice quizzes.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="design/astromath3.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Course listings</h3>
            <p>
              Similar to popular LMS production websites, here is a grid listing of courses with announcements etc.
            </p>
          </div>
        </div>

      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
