/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsivenav() {
  var x = document.getElementById("myTopnav");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(" responsive", "");
  }
}

function handleNavScroll() {
  const header = document.getElementById("mainHeader");
  const heroSection = document.querySelector(".hero-section");
  
  if (!header || !heroSection) return;
  
  window.addEventListener("scroll", function() {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    // Show header when scrolled past 80% of hero section
    if (scrollPosition > heroHeight * 0.8) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });
}

/* Scroll Fade-in Animation */
function scrollFadeIn() {
  const sections = document.querySelectorAll('.fade-in-section');
  const items = document.querySelectorAll('.fade-in-item');
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  items.forEach(item => {
    observer.observe(item);
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
  handleNavScroll();  // This was missing!
  scrollFadeIn();
});
