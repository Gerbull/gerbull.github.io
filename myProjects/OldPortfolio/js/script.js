const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})

const percents = document.querySelectorAll('.tools__skills-item-percent'),
      bars = document.querySelectorAll('.tools__skills-item-bar span');

percents.forEach( (item, i) => {
    bars[i].style.width = item.innerHTML;
});