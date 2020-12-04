{
  const btn = document.querySelector('.btn'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.modal__close');
  btn.addEventListener('click', function () {
    modal.style.display = 'flex';
  });
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

{
  class SlideShow {
    constructor(startIndex, element) {
      this.startIndex = startIndex;
      this.currentIndex = startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll('.modal-work__item');

      this.setActiveSlide();
      this.next();
      this.prev();
    }
    setActiveSlide(){
      this.slides.forEach((item,index)=>{
        if(index===this.currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })

    }

    next(){
      let nextBtn = this.element.querySelector('[data-way=next]');
      nextBtn.addEventListener('click',()=>{
        if(this.currentIndex === this.slides.length-1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.setActiveSlide();
      })
    }

    prev(){
      let prevBtn = this.element.querySelector('[data-way=prev]');
      prevBtn.addEventListener('click',()=>{
        if(this.currentIndex===0) {
          this.currentIndex = this.slides.length -1;
        } else {
          this.currentIndex--;
        }
        this.setActiveSlide();
      })

    }

  }
  let slideShow = document.querySelectorAll('.modal__slider');
  slideShow.forEach(item=>{
    new SlideShow(0,item);
  })
}