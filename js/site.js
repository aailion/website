(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primaryNav');

  if (!toggle || !nav) return;

  function setExpanded(isExpanded) {
    toggle.setAttribute('aria-expanded', String(isExpanded));
    nav.classList.toggle('nav-open', isExpanded);
  }

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  // Close nav on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setExpanded(false);
  });
})();
