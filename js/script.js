const menu = document.getElementById('menu'), links = document.getElementById('links');
menu.onclick = () => links.classList.toggle('open');
document.querySelectorAll('.links a').forEach(a => a.onclick = () => links.classList.remove('open'));
document.getElementById('year').textContent = new Date().getFullYear();
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(e => io.observe(e));
