const heart = document.querySelector('.heart');

heart.addEventListener('click', (e) => {
  // e.preventDefault();
  
  heart.classList.toggle('fireup');
})