// <!-- ============== HEARTFELT CLEANING SWIPER SLIDER ============== -->

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 16,
  slidesPerView: 3.85,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next_arrow",
    prevEl: ".prev_arrow",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 5.6,
    },
  },
});

// <!-- -------------------- heart felt cleaning videos -----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const playButtons = document.querySelectorAll(
    ".play-button-md, .play-button-sm"
  );
  const videos = document.querySelectorAll("video");
  playButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".poster-container")
        .forEach((container) => (container.style.display = "block"));
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
      const posterContainer = this.closest(".poster-container");
      if (posterContainer) {
        posterContainer.style.display = "none";
      }
      const video = videos[index];
      video.controls = true;
      video.play();
    });
  });
});

// <!-- ----------------------------------Clean Girl Supporters counter------------------------->
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const target = parseInt(counter.getAttribute("data-target"));

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const animateCount = (element, start, end, duration) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(
        progress * (end - start) + start
      ).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const onScroll = () => {
    if (isElementInViewport(counter)) {
      window.removeEventListener("scroll", onScroll);
      animateCount(counter, 0, target, 3000);
    }
  };

  window.addEventListener("scroll", onScroll);
});
