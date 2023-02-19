function hamburger() {
  let ham = document.querySelector('.bx-menu');
  let hide = document.querySelector('.hide');

  ham.addEventListener('click', () => {
    hide.classList.toggle('active');
  })
}
hamburger()


let firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 4000);
  let pics;
  let img = document.querySelectorAll('.slide');
  for(pics=0; pics<img.length; pics++){
    img[pics].style.display = 'none';
  }
  firstIndex++;
  if(firstIndex > img.length){
    firstIndex = 1;
  }
  img[firstIndex -1].style.display = 'block';
}
automaticSlide();