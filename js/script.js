// Swiper 플러그인 사용
const swiper = new Swiper('.visual', {
    loop:true,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
});

// 모바일 햄버거 메뉴
const hamEl = document.querySelector('.ham');
const menuEl = document.querySelector('.menu');

hamEl.addEventListener('click', () => {
    hamEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});

// 메뉴 클릭 시 모바일 메뉴 닫기
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hamEl.classList.remove('active');
        menuEl.classList.remove('active');
    });
});

// 클릭 시 팝업 처리 스크립트
const popupEl = document.querySelector('.popup');
const popupOpenEl = document.querySelector('.popup_open');
const popupCloseEls = document.querySelectorAll('.popup_close');

popupOpenEl.addEventListener('click', () => {
    popupEl.classList.add('active');
});

popupCloseEls.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popupEl.classList.remove('active');
    });
});

// 팝업 배경 클릭 시 닫기
popupEl.addEventListener('click', (e) => {
    if(e.target === popupEl){
        popupEl.classList.remove('active');
    }
});
