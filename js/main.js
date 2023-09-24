/**
* Template Name: Mentor
* Updated: Aug 30 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

    // Array of background image URLs
    const backgroundImages = [
      'url("assets/img/hero-bg.jpg")',
      'url("assets/img/student1.png")', // Replace with the path to your second image
      'url("assets/img/student2.png")', // Replace with the path to your third image
    ];

    const hero = document.getElementById('hero');
    let currentImageIndex = 0;

    function changeBackgroundImage() {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      const nextImage = backgroundImages[currentImageIndex];

      // Apply the fading transition class
      hero.classList.add('background-fade');

      // After a brief delay, change the background image and remove the transition class
      setTimeout(() => {
        hero.style.backgroundImage = nextImage;
        hero.classList.remove('background-fade');
      }, 1000); // Adjust the delay to match your transition duration
    }

    // Change background image every 2 seconds
    setInterval(changeBackgroundImage, 4000);

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter
   */
function pureCounter(element) {
  const start = parseInt(element.getAttribute('data-purecounter-start'));
  const end = parseInt(element.getAttribute('data-purecounter-end'));
  const durationAttribute = element.getAttribute('data-purecounter-duration');
  const duration = parseFloat(durationAttribute) * 1000;
  const step = Math.abs(Math.floor(duration / (end - start) / 10)); // Adjusted for faster speed (5000 times faster)

  let current = start;
  const timer = setInterval(() => {
    if (current < end) {
      if (durationAttribute === "0,5") {
        current += 50; // Increment by 1000 if the duration is "0,5"
      } else {
        current += 1; // Otherwise, increment by 1
      }
      element.textContent = '+' + current;
    } else {
      clearInterval(timer);
      element.dispatchEvent(new Event('PureCounter:done'));
    }
  }, step);
}



// Find all purecounter elements and initiate counting
const purecounters = document.querySelectorAll('.purecounter');
purecounters.forEach(counter => {
  pureCounter(counter);
});

// Add an event listener to detect when counting animation has finished
purecounters.forEach(counter => {
  counter.addEventListener('PureCounter:done', () => {
    // Get the final number
    const finalNumber = parseInt(counter.getAttribute('data-purecounter-end'));

    // Replace the current text with the final number with a '+'
    counter.textContent = '+' + finalNumber;
  });
});

})()
