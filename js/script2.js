// 임의 데이터 제작
const slideData = [
    {
        img:'https://picsum.photos/id/1067/1200/600',
        title:'Section Title 1'
    },
    {
        img:'https://picsum.photos/id/1015/1200/600',
        title:'Section Title 2'
    },
    {
        img:'https://picsum.photos/id/1043/1200/600',
        title:'Section Title 3'
    }
];

const contentData = [
    {
        title:'Content title',
        img:'https://picsum.photos/id/1015/500/350'
    },
    {
        title:'Content title',
        img:'https://picsum.photos/id/1025/500/350'
    },
    {
        title:'Content title',
        img:'https://picsum.photos/id/1035/500/350'
    },
    {
        title:'Content title',
        img:'https://picsum.photos/id/1043/500/350'
    }
];

// 섹션1 슬라이드 출력 - for문 사용
const slideWrap = document.querySelector('.slide_wrap');

for(let i = 0; i < slideData.length; i++){

    slideWrap.innerHTML += `
        <div class="swiper-slide">
            <img src="${slideData[i].img}" alt="${slideData[i].title}">
            <div class="slide_text">
                <h2>${slideData[i].title}</h2>
                <button type="button">View More →</button>
            </div>
        </div>
    `;

}

// Swiper: 페이지네이션, 화살표 없음, 3초 자동재생
const swiper = new Swiper('.main_slide', {

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

// 헤더: 스크롤 200px 이상에서 고정
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){

    if(window.scrollY >= 200){

        header.classList.add('fixed');

    }else{

        header.classList.remove('fixed');

    }

});

// 메뉴: 클릭 시 나오고 X버튼 누르면 닫기
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_btn');
const sideMenu = document.querySelector('.side_menu');

menuBtn.addEventListener('click', function(){

    sideMenu.classList.add('active');

});

closeBtn.addEventListener('click', function(){

    sideMenu.classList.remove('active');

});

// 섹션2 컨텐츠 출력 - for문 사용
const cardWrap = document.querySelector('.card_wrap');

for(let i = 0; i < contentData.length; i++){

    cardWrap.innerHTML += `
        <article class="card">
            <img src="${contentData[i].img}" alt="${contentData[i].title}">
            <div class="card_bottom">
                <h3>${contentData[i].title}</h3>
                <button class="heart_btn" type="button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        </article>
    `;

}

// View More 버튼 클릭하면 모달창
const viewBtn = document.querySelector('.view_btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelectorAll('.modal_close');

viewBtn.addEventListener('click', function(){

    modal.classList.add('active');

});

for(let i = 0; i < modalClose.length; i++){

    modalClose[i].addEventListener('click', function(){

        modal.classList.remove('active');

    });

}

// 모달 배경 클릭 시 닫기
modal.addEventListener('click', function(e){

    if(e.target === modal){

        modal.classList.remove('active');

    }

});

// 좋아요 버튼 누르면 하트 채워지게 - for문 사용
const heartBtn = document.querySelectorAll('.heart_btn');

for(let i = 0; i < heartBtn.length; i++){

    heartBtn[i].addEventListener('click', function(){

        heartBtn[i].classList.toggle('active');

        const icon = heartBtn[i].querySelector('i');

        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');

    });

}
