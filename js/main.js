// 올해 년도
document.getElementById('this_year').textContent = new Date().getFullYear()

//scrollreveal
const scrollRevealOption = {
  distance: "50px", // 요소가 50px 아래서 원위치로
  origin: "bottom", // 방향 = 아래쪽
  duration: 1000, // 속도 ms(1초)
}

// header
ScrollReveal().reveal('.header__container h1', {
  ...scrollRevealOption, //... 전개 연산자
});
ScrollReveal().reveal('.header__form', {
  ...scrollRevealOption,
  delay: 500, 
});
ScrollReveal().reveal('.card', {
  ...scrollRevealOption,
  delay: 500, 
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.section__container').forEach((section) => {
    const $slider = $(section).find('.slider');
    

  $slider.slick({
    slidesToShow: 3, //화면에 보여질 요소의 개수
    slidesToScroll: 1, // 이동개수
    arrows: false, //화살표 안보이기
    dots: false, //점 안보이기
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false, // 슬라이드 가 처음/끝에 멈춤

    responsive: [
      {
        breakpoint: 900, //900 이하
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500, //500 이하
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });  

  // 버튼 처리
  const prevBtn = section.querySelector('.slider-prev')
  const nextBtn = section.querySelector('.slider-next')
 
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      $slider.slick('slickPrev')
    });
    nextBtn.addEventListener('click', () => {
      $slider.slick('slickNext')
    });
  }
});
});
