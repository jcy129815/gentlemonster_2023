//header, footer JS
//header 전체메뉴 스크립트 flow


//변수 생성
const nav = document.querySelector('#nav')//메뉴
const open_nav= document.querySelector('#open_nav')
const nav_close= document.querySelector('#nav_close')//닫기버튼
console.log(open_nav,nav_close,nav)
//1. open-nav 초기 숨기기
open_nav.style.transform = 'translateX(100%)'
//2. 햄버거메뉴 클릭 시 open-nav 출력
open_nav.style.transition = '0.5sease'
nav.addEventListener('click',function(){// transition: 0.5s linear;
    open_nav.style.transform = 'translateX(0%)'
    //display = 'none'으로 숨긴 대상을 보이게 할 경우
    //기존 디자인 css에서flex로 정렬한 대상이면 display = 'flex'
    //기존 디자인 css에서flex 설정이 없다면 display = 'block'
})
//3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)'
})

//swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1500},
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})