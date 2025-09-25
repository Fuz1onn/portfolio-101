const toggleGalleryBtn = document.getElementById('toggleGalleryBtn');
const moreGallery = document.getElementById('moreGallery');

moreGallery.addEventListener('shown.bs.collapse', function () {
  toggleGalleryBtn.textContent = 'See Less';
});

moreGallery.addEventListener('hidden.bs.collapse', function () {
  toggleGalleryBtn.textContent = 'See More';
});

document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const currentTheme = localStorage.getItem('bsTheme') || 'light';
  htmlElement.setAttribute('data-bs-theme', currentTheme);
  updateIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('bsTheme', newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === 'dark') {
      themeIcon.classList.replace('bi-moon', 'bi-sun');
    } else {
      themeIcon.classList.replace('bi-sun', 'bi-moon');
    }
  }
});

const backToTopButton = document.getElementById("back-to-top-btn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const now = new Date();
  document.getElementById("time").value = now.toLocaleString();
