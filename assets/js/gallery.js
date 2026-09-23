document.querySelectorAll('[data-photo-roll]').forEach(function (gallery) {
  const toggle = gallery.querySelector('.photo-roll-toggle');
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    const paused = gallery.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Resume photo carousel' : 'Pause photo carousel');
    toggle.textContent = paused ? 'Resume' : 'Pause';
  });
});
