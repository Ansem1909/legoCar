const burgerBtn = document.querySelector('.burger');
  const menuClose = document.querySelector('.menu-close');
  const menuBurger = document.querySelector('.right_unit__nav');

  burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
  });

  menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
  });
