/* ── BLOC REPLIABLE (fiche de session) ── */
document.querySelectorAll('.session-toggle').forEach(function(toggle) {
  var body = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!body) return;
  // Ne pas fixer la hauteur au chargement : les polices (font-display:swap)
  // peuvent reflow après coup et couper le contenu si la hauteur est déjà fixée.
  // L'état ouvert initial est géré par CSS (height: auto).
  toggle.addEventListener('click', function() {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      // Fermeture : ancrer la hauteur actuelle, puis animer vers 0
      body.style.height = body.scrollHeight + 'px';
      body.offsetHeight; // force reflow
      body.style.height = '0';
    } else {
      // Ouverture : animer depuis 0 jusqu'à la hauteur réelle
      body.style.height = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function handler() {
        body.style.height = 'auto';
        body.removeEventListener('transitionend', handler);
      });
    }
  });
});

/* ── EMAIL OBFUSCATION ── */
var replyLink = document.getElementById('reply-link');
if (replyLink) {
  replyLink.href = 'mailto:' + atob(replyLink.dataset.m) + '?subject=' + decodeURIComponent(escape(atob(replyLink.dataset.s)));
}

/* ── LIENS EXTERNES ── */
document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach(function(link) {
  if (link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

/* ── BOUTON RETOUR HAUT ── */
const backTop = document.getElementById('scroll-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });
  backTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
