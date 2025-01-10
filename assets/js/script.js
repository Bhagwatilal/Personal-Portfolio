'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// document.addEventListener("DOMContentLoaded", function() {
//   const container = document.querySelector('.has-scrollbar');
//   const scrollStep = 100; // Adjust this value for scroll step (like cards)
//   const scrollSpeed = 2000; // Adjust this value for scroll speed (in milliseconds)

//   function autoScroll() {
//     container.scrollBy({
//       top: scrollStep,  // For vertical scrolling
//       left: 0,          // For horizontal, change to scrollStep if you want horizontal scroll
//       behavior: 'smooth' // Smooth scrolling effect
//     });

//     if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
//       // Reset to top when the bottom is reached
//       container.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }

//   // Set automatic scrolling interval
//   setInterval(autoScroll, scrollSpeed);
// });
// document.addEventListener("DOMContentLoaded", function() {
//   const testimonialsContainer = document.querySelector('.testimonials-list');
//   const clientsContainer = document.querySelector('.clients-list');
//   const scrollStep = 200; // Adjust based on your items' width
//   const scrollSpeed = 3000; // Time between each scroll in milliseconds

//   // Clone the first item and append it to create a seamless scroll
//   const cloneTestimonials = testimonialsContainer.firstElementChild.cloneNode(true);
//   const cloneClients = clientsContainer.firstElementChild.cloneNode(true);

//   testimonialsContainer.appendChild(cloneTestimonials);
//   clientsContainer.appendChild(cloneClients);

//   function autoScroll(container) {
//     container.scrollBy({
//       left: scrollStep, // Scroll horizontally by the defined step
//       behavior: 'smooth' // Smooth scroll effect
//     });

//     // Reset scroll position when reaching the end
//     if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollStep) {
//       container.scrollTo({ left: 0, behavior: 'smooth' });
//     }
//   }

//   // Set intervals for automatic scrolling
//   setInterval(() => autoScroll(testimonialsContainer), scrollSpeed);
//   setInterval(() => autoScroll(clientsContainer), scrollSpeed);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const testimonialsContainer = document.querySelector('.testimonials-list');
//   const clientsContainer = document.querySelector('.clients-list');
//   const scrollStep = 1; // Scroll by 1 pixel at a time for smoother scrolling
//   const scrollSpeed = 20; // Milliseconds between scroll steps

//   // Clone all items and append to create a seamless scroll
//   const testimonialsItems = testimonialsContainer.children;
//   const clientsItems = clientsContainer.children;

//   // Append cloned items to the container
//   const cloneTestimonials = Array.from(testimonialsItems).map(item => item.cloneNode(true));
//   const cloneClients = Array.from(clientsItems).map(item => item.cloneNode(true));

//   cloneTestimonials.forEach(item => testimonialsContainer.appendChild(item));
//   cloneClients.forEach(item => clientsContainer.appendChild(item));

//   // Set the initial scroll position
//   let scrollPosition = 0;

//   function autoScroll(container) {
//     scrollPosition += scrollStep; // Increment scroll position

//     // Set the scroll position
//     container.scrollLeft = scrollPosition;

//     // Reset scroll position if we've scrolled past the original items
//     if (scrollPosition >= container.scrollWidth / 2) {
//       scrollPosition = 0; // Reset to the start
//     }
//   }

//   // Set intervals for automatic scrolling
//   setInterval(() => autoScroll(testimonialsContainer), scrollSpeed);
//   setInterval(() => autoScroll(clientsContainer), scrollSpeed);
// });

document.addEventListener("DOMContentLoaded", function() {
  const testimonialsContainer = document.querySelector('.testimonials-list');
  const clientsContainer = document.querySelector('.clients-list');
  const scrollStep = 200; // Adjust based on your items' width
  const scrollSpeed = 3000; // Time between each scroll in milliseconds

  // Clone the first item and append it to create a seamless scroll
  const cloneTestimonials = testimonialsContainer.firstElementChild.cloneNode(true);
  const cloneClients = clientsContainer.firstElementChild.cloneNode(true);

  testimonialsContainer.appendChild(cloneTestimonials);
  clientsContainer.appendChild(cloneClients);

  function autoScroll(container) {
    container.scrollBy({
      left: scrollStep, // Scroll horizontally by the defined step
      behavior: 'smooth' // Smooth scroll effect
    });

    // Reset scroll position when reaching the end
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollStep) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }

  // Set intervals for automatic scrolling
  setInterval(() => autoScroll(testimonialsContainer), scrollSpeed);
  setInterval(() => autoScroll(clientsContainer), scrollSpeed);
});
(function() {
  emailjs.init("W2-ZCa7l8Y_Bw-pDh5xh2"); // Your Public Key
})();

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_z5ym8o8', 'template_knsngdi', this)
      .then(function() {
          alert('Message sent successfully!');
          document.querySelector('.form').reset(); // Reset form fields
      }, function(error) {
          alert('Failed to send message. Error: ' + JSON.stringify(error));
      });
});

