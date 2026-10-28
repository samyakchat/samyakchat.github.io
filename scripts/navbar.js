// Shared navigation. Load this script where the navbar should appear.
(() => {
  const script = document.currentScript;
  const currentPage = document.body.dataset.page;
  const links = currentPage === 'building'
    ? [['index', 'Main Portfolio'], ['building', 'Design']]
    : [['index', 'Home'], ['upcoming', 'Upcoming'], ['project', 'Projects'], ['about', 'About']];

  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.setAttribute('aria-label', 'Main navigation');
  navbar.innerHTML = `
    <div class="navbar-left"><a href="index.html">Samyak Chatterjee</a></div>
    <div class="navbar-right"></div>
  `;

  const navigation = navbar.querySelector('.navbar-right');
  for (const [page, label] of links) {
    const link = document.createElement('a');
    link.href = `${page}.html`;
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

  script.replaceWith(navbar);
})();
