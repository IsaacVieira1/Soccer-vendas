
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".feature-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

      }
    });
  }, { threshold: 0.2 }); 

  items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 
    });

    elements.forEach(el => observer.observe(el));
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

