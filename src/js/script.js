const burgerMenu = document.querySelector('.header__burger-menu');
const burgerMenuOpen = document.querySelector('.header__menu-list');
const headerLogo = document.querySelector('.header__logo');

const sliderImg = document.querySelectorAll('.slider__img');
const btnPrew = document.querySelector('.btn__prew');
const btnNext = document.querySelector('.btn__next');

const sliderText = document.querySelectorAll('.press__slider-text');
const radioBtnFirst = document.querySelector('.radio-btn__first');
const radioBtnSecond = document.querySelector('.radio-btn__second');
const sliderLinks = document.querySelector('.press__slider-link');

// SLIDER
let i = 0;
btnPrew.addEventListener('click', () => {
  sliderImg[i].style.display = 'none';
  i -= 1;
  if (i < 0) {
    i = sliderImg.length - 1;
  }
  sliderImg[i].style.display = 'block';
});
btnNext.addEventListener('click', () => {
  sliderImg[i].style.display = 'none';
  i += 1;
  if (i >= sliderImg.length) {
    i = 0;
  }
  sliderImg[i].style.display = 'block';
});

// PRESS RADIO BUTTON
radioBtnSecond.addEventListener('click', () => {
  sliderLinks.setAttribute(
    'href',
    'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html'
  );
  radioBtnFirst.classList.remove('active');
  radioBtnSecond.classList.add('active');
  sliderText[0].style.display = 'none';
  sliderText[1].style.display = 'block';
});

radioBtnFirst.addEventListener('click', () => {
  sliderLinks.setAttribute(
    'href',
    'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html'
  );
  radioBtnSecond.classList.remove('active');
  radioBtnFirst.classList.add('active');
  sliderText[1].style.display = 'none';
  sliderText[0].style.display = 'block';
});

// BURGER MENU
let menu = 'none';
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu_active');

  if (menu == 'none') {
    burgerMenuOpen.style.display = 'flex';
    menu = 'flex';
    headerLogo.style.display = 'none';
  } else {
    burgerMenuOpen.style.display = 'none';
    menu = 'none';
    headerLogo.style.display = 'block';
  }
});

// FORM
const formElement = document.querySelector('.subscribe');
const subscribeBtn = document.querySelector('.subscribe__button');
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  subscribeBtn.setAttribute('value', 'готово!');
}
formElement.addEventListener('submit', formSubmitHandler);
