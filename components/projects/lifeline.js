(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="lifeline" data-tech="python,tkinter">
      <div class="project-header">
        <h1>LifeLine</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag python">Python</span>
          <span class="tech-tag tkinter">Tkinter</span>
          <span class="tech-tag calling-api">Twillio API</span>
          <span class="tech-tag calling-api">Raspberry Pi</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2023</span>
        </div>
        <div class="meta-box">
          <a href="https://github.com/samyakchat/LifeLine/" target="_blank">
            <ion-icon name="logo-github" style="font-size: 1rem;"></ion-icon>
            GitHub
          </a>
        </div>
      </div>

      <p>
        A Python application that could be run anywhere. It's meant for the
        elderly population that needs assistance from a nurse or caretaker. At
        the chance a caretaker is away from the patient, the patient can call
        for the caretaker, call for a cast of nurses, or call for specific
        people. The defaults are Lady and Man, but can be customized to
        anybody.
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/alertss.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Main UI</h3>
            <p>
              The primary dashboard with 4 easy to read and tap buttons; Made
              for a touchscreen.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/numberss.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Contacts</h3>
            <p>You can contact up to 4 numbers with AlertAll.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/exmapleimage.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>In-Use</h3>
            <p>This is it being used for my Grandma</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/textmessage.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Example Receipt</h3>
            <p>
              Along with calling and alarms playing, here is an example text
              message
            </p>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
