$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    // Toggle the "show" class on the navbar-nav element
    $(".navbar-nav").toggleClass("show");
  });
  // Add a click event listener to the document
  $(document).on("click", function (event) {
    // Check if the clicked element is not part of the navbar
    if (!$(event.target).closest(".navbar").length) {
      // Remove the "show" class from the navbar-nav element
      $(".navbar-nav").removeClass("show");
    }
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  ////////////////////////////// ///////////////////////
  // Text Animation
  ////////////////////////////// ///////////////////////
  // lines
  const animate_lines = document.querySelectorAll(".animate_lines");
  animate_lines.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.08;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.lines, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.lines, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // words
  const animate_words = document.querySelectorAll(".animate_words");
  animate_words.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.02;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      // type: "lines,words,chars",
      type: "lines,words",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.words, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 20,
        // x: 20,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.words, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 20,
        // x: 20,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  // chars
  const animate_chars = document.querySelectorAll(".animate_chars");
  animate_chars.forEach((areveal) => {
    var duration_value = 1;
    var onscroll_value = 1;
    var stagger_value = 0.003;
    var data_delay = 0.5;
    if (areveal.getAttribute("data-duration")) {
      duration_value = areveal.getAttribute("data-duration");
    }
    if (areveal.getAttribute("data-on-scroll")) {
      onscroll_value = areveal.getAttribute("data-on-scroll");
    }
    if (areveal.getAttribute("data-stagger")) {
      stagger_value = areveal.getAttribute("data-stagger");
    }
    if (areveal.getAttribute("data-delay")) {
      data_delay = areveal.getAttribute("data-delay");
    }
    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "anim-reveal-line",
    });
    if (onscroll_value == 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 90%",
        },
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, {
        duration: duration_value,
        delay: data_delay,
        ease: "circ.out",
        y: 80,
        stagger: stagger_value,
        opacity: 0,
      });
    }
  });
  //history Slider
  var historySlider = new Swiper(".historySlider", {
    pagination: {
      el: ".historyPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".historyNext",
      prevEl: ".historyPrev",
    },
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
      1800: {
        slidesPerView: 6,
      },
    },
  });
  // team slider
  // var teamSlider = new Swiper(".teamSlider", {
  //   navigation: {
  //     nextEl: ".teamNext",
  //     prevEl: ".teamPrev",
  //   },
  //   pagination: {
  //     el: ".teamPagination",
  //     type: "fraction",
  //   },
  //   // loop: true,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   // autoplay: {
  //   //   delay: 2500,
  //   //   disableOnInteraction: false,
  //   // },
  //   slidesPerView: "auto",
  // });
  // $(".teamSlider").hover(
  //   function () {
  //     this.swiper.autoplay.stop();
  //   },
  //   function () {
  //     this.swiper.autoplay.start();
  //   }
  // );
  //companySlider Slider
  var companySlider = new Swiper(".companySlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".companyPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  //investmentsSlider Slider
  var investmentsSlider = new Swiper(".investmentsSlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".investmentsPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  //partnersSlider Slider
  var partnersSlider = new Swiper(".partnersSlider", {
    // centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    speed: 1000,
    pagination: {
      el: ".partnersPagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
  // scroll
  const sections = document.querySelectorAll(".active-nav-class");
  $(window).on("scroll", function () {
    let current = "";
    const scrollPosition = $(window).scrollTop();
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop - 300) {
        current = section.getAttribute("id") + "-nav";
      }
    });
    if (current == "") {
      current = "home-nav";
    }
    $(".navbar-nav .navLink.active").removeClass("active");
    $("#" + current).addClass("active");
  });
  $(".navbar-nav .navLink").on("click", function () {
    $(".navbar-nav .navLink.active").removeClass("active");
    $(this).addClass("active");
  });
  const url = window.location.href;
  $(".navbar-nav .navLink").each(function () {
    if (url.includes($(this).attr("href"))) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  // zoom
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "-" || e.key === "+")) {
      e.preventDefault();
    }
  });
  document.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  });
  // ourWork
  var ourWork = new Swiper(".ourWork .swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  $(".ourWork").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  $(".cardBack .limet").each(function () {
    var text = $(this).text();
    if (text.length > 200) {
      var truncatedText =
        $.trim(text).substring(0, 200).split(" ").slice(0, -1).join(" ") +
        "...";
      $(this).text(truncatedText);
    }
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinerLoader").delay(500).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      // Check if data-aos-delay is not already set
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});
// Fade Animation Bottom
let fade_animation = gsap.utils.toArray(".cxu-fade");
fade_animation.forEach((fade) => {
  const ease_value = fade.getAttribute("data-ease");
  gsap.from(fade, {
    scrollTrigger: {
      trigger: fade,
      start: "top 90%",
    },
    delay: 0.5,
    opacity: 0,
    y: 50,
    ease: ease_value,
    duration: 1.5,
  });
});
// Service move
var service_item = gsap.utils.toArray(".cxuService .serviceItem");
let service_img = gsap.utils.toArray(".cxuService .hover-img");
function ServiceImageMove(event, item) {
  const contentBox = item.getBoundingClientRect();
  const dx = (event.clientX - contentBox.x) / 5;
  const dy = (event.clientY - contentBox.y) / 8;
  service_img.forEach((img) => {
    gsap.to(img, {
      x: dx,
      y: dy,
    });
  });
}
service_item.forEach((item, i) => {
  item.addEventListener("mousemove", (event) => {
    setInterval(ServiceImageMove(event, item), 1000);
  });
});
