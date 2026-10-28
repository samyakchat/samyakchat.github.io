(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="kitchen-mate" data-tech="python,tkinter">
      <div class="project-header">
        <h1>Kitchen-mate</h1>
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag python">Python</span>
          <span class="tech-tag tkinter">Tkinter</span>
          <span class="tech-tag hardware">Raspberry Pi (4gb, 1.5Ghz)</span>
          <span class="tech-tag python">Pygame</span>
          <span class="tech-tag ai">Apple music API</span>
          <span class="tech-tag ai">Open Weather API</span>
          <span class="tech-tag ai">Spoonacular API</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2025</span>
        </div>
        <div class="meta-box">
          <a href="https://github.com/samyakchat/KitchenMate/" target="_blank">
            <ion-icon name="logo-github" style="font-size: 1rem;"></ion-icon>
            GitHub
          </a>
        </div>
      </div>

      <p>
        A small device that was made to help around the kitchen all with a
        touchscreen. Making a casserole? Find the best recipe based on any
        region through our MasterChef app, manage the ingredients with the
        PantryPal app, and time your dishes in the oven with Timer. If you are
        ever bored in the process, play Wordle, check the weather, or listen
        to music!
      </p>

      <button class="gallery-toggle closed" onclick="toggleGallery(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="gallery-container hidden">
        <div class="gallery-item">
          <img src="images/home_screen.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Homescreen</h3>
            <p>
              This is where the apps are held, inside the collapsable bar.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/inusekitchen.jpeg" class="gallery-image" />
          <div class="gallery-description">
            <h3>Example of use</h3>
            <p>Currently in my kitchen, it's used everyday to make food.</p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/3Dmodels.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>3D-case model</h3>
            <p>
              I made a case with the specific device in mind, including screen
              and ribbon cables that connect the computer together.
            </p>
          </div>
        </div>
        <div class="gallery-item">
          <img src="images/masterchef.png" class="gallery-image" />
          <div class="gallery-description">
            <h3>Recipe Finder app</h3>
            <p>
              This is one of the revolutionary apps that holds over 115
              Thousand recipes and menus.
            </p>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
