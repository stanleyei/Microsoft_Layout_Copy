
  var count = 0  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed:5,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        count++
        if(count < 2){
            return '<div class="' + className + '">' + '</div>';
        }
        else{
            return '<div class="' + className + '">' + '</div>' + 
            `<div id="pauseMark" class="pause-mark"><i class="fas fa-pause"></i></div>`+ 
            `<button id="pause" class="pause" tabindex="0"><i class="fal fa-caret-right"></i></button>`;
        } 
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  pauseMark.addEventListener('click',function(){
      swiper.autoplay.stop();
      pauseMark.style.display = "none";
      pause.style.opacity = 1;
  });

  pause.addEventListener('click',function(){
      swiper.autoplay.start();
      pause.style.opacity = 0;
      pauseMark.style.display = "flex";
  });