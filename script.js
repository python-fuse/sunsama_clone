const hero_image = document.getElementById("hero");
const cards = document.querySelectorAll(".design_card");
const features = document.querySelectorAll(".feature");
const integrationCards = document.querySelectorAll(".integration_card");
const testimonials = document.querySelectorAll(".testimonial_card");
const testimonialList = document.getElementById("testimonial_list");
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

const toggleMenu = () => {
  if (menu.classList.contains("hide-menu")) {
    menu.classList.add("show-menu");
    menu.classList.remove("hide-menu");
  } else {
    menu.classList.add("hide-menu");
    menu.classList.remove("show-menu");
  }
};

hamburger.addEventListener("click", () => {
  toggleMenu();
});

let heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scale-in");
      } else {
        entry.target.classList.remove("scale-in");
      }
    });
  },
  { threshold: 0.6 }
);

heroObserver.observe(hero_image);

let cardsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("move-in");
      }
    });
  },
  { threshold: 0.5 }
);

cards.forEach((card) => {
  cardsObserver.observe(card);
});

let featuresObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      }
    });
  },
  { threshold: 0.5 }
);

features.forEach((feature) => {
  featuresObserver.observe(feature);
});

cardsObserver.observe(testimonialList);

integrationCards.forEach((card) => {
  cardsObserver.observe(card);
});

// window.addEventListener('load', function() {
//   const testimonialCards = document.querySelectorAll('.testimonial_card');
//   const cardWidth = testimonialCards[0].offsetWidth; // Get card width
//   const scrollDuration = 5000; // Adjust scroll duration (milliseconds)

//   let currentIndex = 0;

//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % testimonialCards.length;
//     testimonialList.style.transition = 'transform 1s ease-in-out';
//     testimonialList.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
//   }, scrollDuration);
// });