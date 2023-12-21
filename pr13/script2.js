window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    const additionalContent = document.getElementById('additional-content');
  additionalContent.style.display = 'block';
  }
});