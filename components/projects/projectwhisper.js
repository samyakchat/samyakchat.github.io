(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="projectwhisper" data-tech="htmljscss">
      <div class="project-header">
        <h1>Project Whisper</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag react">HTML</span>
          <span class="tech-tag typescript">javascript</span>
          <span class="tech-tag react">CSS</span>
          <span class="tech-tag css">Websocket</span>


        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2025</span>
        </div>
        <div class="meta-box">
          <a href="https://github.com/samyakchat/Project-Whisper" target="_blank">
            <ion-icon name="logo-github" style="font-size: 1rem;"></ion-icon>
            GitHub
          </a>
        </div>
      </div>

      <p>
        Project Whisper is a hackathon project built around a World War II–style
        secure communication scenario. Inspired by systems like Enigma and Allied ciphers,
        it lets users encrypt and decrypt messages to simulate protecting sensitive information
        from interception. The platform includes a REST API, real-time messaging, multiple encryption methods,
        and an “intercept” feature that mirrors wartime intelligence operations.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/whisper/intro.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Sign in</h3>
            <p>Here you would use your key to sign into the server.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/whisper/home.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Project Page</h3>
            <p>
              Here you would have your translation algorithms that encrypt text and decrypt text. Here you
              would also have real time websocket messaging with others in this code.
            </p>
          </div>
        </div>

      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
