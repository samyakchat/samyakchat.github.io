(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="acuity" data-tech="react,typescript,tailwind">
      <div class="project-header">
        <h1>Acuity</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag react">React Native (Expo)</span>
          <span class="tech-tag typescript">TypeScript</span>
          <span class="tech-tag react">Python</span>
          <span class="tech-tag css">Supabase</span>
          <span class="tech-tag ai">Gemini</span>
          <span class="tech-tag ai">Scikit Learn</span>
          <span class="tech-tag react">Swift</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2026</span>
        </div>
        <div class="visitlink">
          <a href="" target="_blank">
            App store coming soon!
          </a>
        </div>
      </div>

      <p>
        Acuity is a mobile app that helps caretakers and families notice gradual
         cognitive decline in older adults. Changes in memory and thinking often
          happen too slowly to see day to day, and frequent clinical checkups are
           expensive. Acuity gives patients short, simple daily tests and gives caretakers
            a dashboard that turns the results into trends, strengths, weaknesses, and a
             personalized plan. Tests are turned into plans that keep the mind active and work
             towards fixing the issue, rather than just giving the caretaker data.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/acuity/ctui.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Caretaker Data Screen</h3>
            <p>Shows detailed reports over user data</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/acuity/dmo.PNG" class="gallery-image" />
          <div class="gallery-description">
            <h3>Dig me out</h3>
            <p>
              One of the games that tests spatial reasoning
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/acuity/pf.PNG" class="gallery-image" />
          <div class="gallery-description">
            <h3>Pattern Factory</h3>
            <p>
              One of the games that tests pattern reasoning
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/acuity/ptui.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Patient homescreen</h3>
            <p>Simplistic UI for patients</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/acuity/si.PNG" class="gallery-image" />
          <div class="gallery-description">
            <h3>Seen it</h3>
            <p>
              One of the games that tests reaction time and recall
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/acuity/wg.PNG" class="gallery-image" />
          <div class="gallery-description">
            <h3>Word Garden</h3>
            <p>
              One of the games that uses the mic to test memory
            </p>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
