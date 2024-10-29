const headerBtn = document.querySelector('.header__btn');
const navList = document.querySelector('.header__navList');
const header = document.querySelector('.header');
const defaultOffset = 300;
let lastScroll = 0;

headerBtn.addEventListener('click', () => {
    headerBtn.classList.toggle('active');
    navList.classList.toggle('active');
})

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide')

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
});