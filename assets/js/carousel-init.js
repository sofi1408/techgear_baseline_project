$('.deal-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  dots: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ]
});