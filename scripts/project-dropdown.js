(() => {
  const button = document.getElementById('projectsBtn');
  const dropdown = document.getElementById('projectsDropdown');
  const items = document.querySelectorAll('.project-list-item');
  const search = document.getElementById('searchInput');

  function setOpen(open) {
    dropdown.classList.toggle('active', open);
    button.setAttribute('aria-expanded', String(open));
  }

  button.addEventListener('click', () => {
    setOpen(!dropdown.classList.contains('active'));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.projects-wrapper')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dropdown.classList.contains('active')) {
      setOpen(false);
      button.focus();
    }
  });

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      const project = document.getElementById(item.dataset.project);
      if (project && project.style.display !== 'none') {
        event.preventDefault();
        project.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    });
  });

  if (search) {
    const projects = document.querySelectorAll('.project-section');
    search.addEventListener('input', () => {
      const term = search.value.toLowerCase();
      projects.forEach((project) => {
        const title = project.querySelector('h1').textContent.toLowerCase();
        const description = project.querySelector('p').textContent.toLowerCase();
        const matches = title.includes(term) || description.includes(term);
        project.style.display = matches ? 'flex' : 'none';
        items.forEach((item) => {
          if (item.dataset.project === project.id) {
            item.classList.toggle('hidden', !matches);
          }
        });
      });
    });
  }
})();
