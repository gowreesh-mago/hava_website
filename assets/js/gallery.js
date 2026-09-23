document.querySelectorAll('[data-photo-roll]').forEach(function (gallery) {
  const groups = gallery.querySelectorAll('.photo-roll-group');
  const order = Array.from(groups[0].children, function (_, index) { return index; });
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // Keep both copies in the same shuffled order for a seamless loop.
  groups.forEach(function (group) {
    const photos = Array.from(group.children);
    order.forEach(function (index) { group.appendChild(photos[index]); });
  });

  const toggle = gallery.querySelector('.photo-roll-toggle');
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    const paused = gallery.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Resume photo carousel' : 'Pause photo carousel');
    toggle.textContent = paused ? 'Resume' : 'Pause';
  });
});
