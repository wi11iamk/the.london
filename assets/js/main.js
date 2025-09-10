// Split .txt into per-character <span> so CSS can animate letters individually
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.txt');
  if (!el) return;
  const chars = el.textContent.trim().split('');
  el.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
  el.classList.add('is-ready');
});
