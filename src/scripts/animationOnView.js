// Выбор элемента для наблюдения
// const targetNode = document.getElementById("animatedElement");
const targets = document.querySelectorAll("[data-animation]");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const className = entry.target.dataset.animation || "fadeIn";

    if (entry.isIntersecting) {
      entry.target.classList.add(`animate__${className}`);
    }
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const myObserver = new IntersectionObserver(callback, options);

targets.forEach((item) => {
  myObserver.observe(item); // Начинаем наблюдение за каждым элементом
});
