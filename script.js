const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.accordion details').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('.accordion details').forEach(other => { if (other !== item) other.open = false; });
}));

const form = document.querySelector('.property-form');
const message = form.querySelector('.form-message');
form.addEventListener('submit', event => {
  event.preventDefault();
  message.className = 'form-message';
  if (!form.checkValidity()) {
    form.reportValidity();
    message.textContent = 'Please complete the required fields above.';
    message.classList.add('error');
    return;
  }
  const name = new FormData(form).get('name').trim();
  message.textContent = `Thanks, ${name}. Your inquiry preview is complete. Because this is a demo, nothing was submitted or stored.`;
  message.classList.add('success');
});

document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
