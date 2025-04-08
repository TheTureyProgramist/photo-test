//Принцип роботи основа: сайт оптимізований вікіпедія про індиків. Коли гортаючи сайт ви прогорнули зображення
//то воно завантажується. Що додати: золи ви загорнули зображення то воно зникає і назад гортаючи зявляється з анімашкою
const images = document.querySelectorAll('.go-img');
const options = {
  root: null,
  rootMargin: '0px',
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const image = entry.target;
    if (entry.isIntersecting) {
      const src = image.getAttribute('data-src');
      if (!image.src || image.src.includes('placeholder')) {
        image.src = src;
        image.classList.add('fade-in');
      }
    }
  });
}, options);
images.forEach(image => {
  observer.observe(image);
});