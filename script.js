document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      setTimeout(() => {
        alert('Thanks for your message! I will get back to you soon 😊');
      }, 100); // delay to let the form send
    });
  }

  // 2. Smooth scroll to top on page load
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 3. Animate headline
  const headline = document.querySelector('h2');
  if (headline) {
    headline.style.transform = 'scale(0.8)';
    headline.style.transition = 'transform 0.6s ease';
    setTimeout(() => {
      headline.style.transform = 'scale(1)';
    }, 200);
  }
});