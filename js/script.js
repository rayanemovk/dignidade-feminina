const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => menu.classList.toggle('ativo'));
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('ativo'));
  });
}
