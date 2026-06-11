const mobileMenu = document.getElementById('mobile-menu');
const mobOpen = document.getElementById('mob-open');
const mobClose = document.getElementById('mob-close');

const openMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
};

const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('flex');
  mobileMenu.classList.add('hidden');
};

mobOpen?.addEventListener('click', openMobileMenu);
mobClose?.addEventListener('click', closeMobileMenu);

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});


