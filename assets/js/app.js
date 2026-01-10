// Heavy computation (TBT demo)
function heavyComputation() {
  let result = 0;
  for (let i = 0; i < 1200000; i++) {
    result += Math.sqrt(i) * Math.random();
  }
  return result;
}
for (let i = 0; i < 4; i++) heavyComputation();

// Unthrottled scroll work (bad)
window.addEventListener("scroll", function () {
  document.querySelectorAll(".tg-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.opacity = "1";
    }
  });
});

document.querySelectorAll(".tg-buy").forEach(btn => {
  btn.addEventListener("click", () => alert("Added to cart!"));
});

setInterval(() => console.log("heartbeat:", Math.random()), 1000);
