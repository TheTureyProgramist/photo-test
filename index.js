//Принцип роботи основа: сайт оптимізований вікіпедія про індиків. Коли гортаючи сайт ви прогорнули зображення 
//то воно завантажується. Що додати: золи ви загорнули зображення то воно зникає і назад гортаючи зявляється з анімашкою.
const observerImages = document.querySelectorAll('.go-img');//збір елементів з цим класом
const betaImg = {
  root: null, //дозволяє спостерігати елент в межах вікна браузера
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.classList.remove('lazy');
      observer.unobserve(image);
    }
  });
}, options);
lazyImages.forEach(image => {
  observer.observe(image);
});