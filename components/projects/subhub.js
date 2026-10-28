(() => {
  const template = document.createElement('template');
  template.innerHTML = `<div class="project-section" id="subhub" data-tech="swiftui,sql">
      <div class="project-header">
        <h1>SubHub</h1>
        <img src="images/subhublogo.png" alt="SubHub" />
      </div>

      <div class="tech-section">

        <div class="tech-tags">
          <span class="tech-tag ios">SwiftUI</span>
          <span class="tech-tag sql">SwiftSQL</span>
          <span class="tech-tag ios">iOS</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-box">
          <span>2024-2025</span>
        </div>
      </div>

      <p>
        To learn SwiftUI, I created SubHub as a simple subscription manager.
        <br /><br />
        Do you struggle with keeping up with subscriptions you didnt know you
        had? Subhub makes it easy to see these and pay so you don't waste
        money on subscriptions you don't need. For me, I used SubHub to learn
        how to use SQL on Swift, as well as learn SwiftUI in general.
      </p>

      <button class="gallery-toggle closed" onclick="toggleSubHub(this)">
        <svg class="gallery-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        View Images
      </button>

      <div class="subhub-content hidden">
        <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
                margin-top: 0;
              ">
          <div class="gallery-item">
            <img src="images/subhub/subadd.png" class="gallery-image" />
            <div class="gallery-description">
              <h3>Add Modal</h3>
              <p>
                This is a modal where you fill out parameters for a
                subscription.
              </p>
            </div>
          </div>

          <div class="gallery-item">
            <img src="images/subhub/subhub.png" class="gallery-image" />
            <div class="gallery-description">
              <h3>Main Screen</h3>
              <p>
                This is where you view subscriptions organized by priotity.
              </p>
            </div>
          </div>

          <div class="gallery-item">
            <img src="images/subhub/subedit.png" class="gallery-image" />
            <div class="gallery-description">
              <h3>Edit Mode</h3>
              <p>Like in any IOS app, you can remove subscriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  document.currentScript.replaceWith(template.content);
})();
