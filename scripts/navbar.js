(() => {
  const script = document.currentScript;
  const currentPage = document.body.dataset.page;
  const base = currentPage === 'index' ? '' : '../';
  const links = currentPage === 'building'
    ? [['index', 'Main Portfolio'], ['building', 'Design']]
    : [['index', 'Home'], ['upcoming', 'Upcoming'], ['project', 'Projects'], ['about', 'About']];

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.setAttribute('aria-label', 'Main navigation');
  navbar.innerHTML = `
    <div class="navbar-left"><a href="${base}">Samyak Chatterjee</a></div>
    <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">
      <span></span><span></span><span></span>
    </button>
    <div class="navbar-right" id="primary-navigation"></div>
  `;

  const navigation = navbar.querySelector('.navbar-right');
  const toggle = navbar.querySelector('.nav-toggle');
  for (const [page, label] of links) {
    const link = document.createElement('a');
    link.href = page === 'index' ? base : `${base}${page}/`;
    link.className = 'nav-btn';
    if (page === currentPage) {
      link.classList.add('selected');
      link.setAttribute('aria-current', 'page');
    }
    if (currentPage === 'building' && page === 'index') {
      const icon = document.createElement('ion-icon');
      icon.setAttribute('name', 'arrow-back-outline');
      icon.setAttribute('aria-hidden', 'true');
      link.append(icon);
    }
    link.append(document.createTextNode(label));
    navigation.append(link);
  }

  function setMenuOpen(open) {
    navbar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  script.replaceWith(navbar);
})();
