// Pretend this is AB testing + analytics (blocking)
(function () {
  const s = performance.now();
  while (performance.now() - s < 3200) {
    Math.sqrt(Math.random() * 9999999);
  }
})();

// Late insert bar => CLS (for your tutorial)
window.addEventListener("load", () => {
  setTimeout(() => {
    const bar = document.createElement("div");
    bar.className = "tg-strip";
    bar.textContent = "⚡ Extra 10% OFF with code NEW10 — added late (CLS demo)";
    document.body.prepend(bar);
  }, 1200);
});
