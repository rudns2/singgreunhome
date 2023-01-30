var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tabItem = document.querySelectorAll('.sing_tab')
const tabInner = document.querySelectorAll('.tab_inner')

tabItem.forEach((tab, idx) => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    tabInner.forEach((inner) => {
      inner.classList.remove('active')
    })
    
    tabItem.forEach((item) => {
      item.classList.remove('active')
    })
    
    tabItem[idx].classList.add('active');
    tabInner[idx].classList.add('active');
  })
})