// $('.deal-carousel').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   arrows: true,
//   dots: true,
//   responsive: [
//     { breakpoint: 992, settings: { slidesToShow: 2 } },
//     { breakpoint: 576, settings: { slidesToShow: 1 } },
//   ]
// });

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

async function bootCarousel() {
  if (window.__slickReady) return;
  window.__slickReady = true;

  await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
  await loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
  );
  await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );

  $(".deal-carousel").slick({ slidesToShow: 3, dots: true });
}

function once(fn) {
  let done = false;
  return function () {
    if (done) return;
    done = true;
    fn();
  };
}

const start = once(bootCarousel);

window.addEventListener("wheel", start, { passive: true, once: true });
window.addEventListener("touchstart", start, { passive: true, once: true });
window.addEventListener("keydown", start, { once: true });
