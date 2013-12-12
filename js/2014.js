<!-- Preloader -->
//<![CDATA[
	$(window).load(function() { // 
		$('#status').fadeOut(); // 
		$('#preloader').delay(350).fadeOut('slow'); // 
		$('body').delay(350).css({'overflow':'visible'});
	})
//]]>

//Swiper
var mySwiper = new Swiper('.swiper-container',{
  speed:1000,
  keyboardControl: true,
  mousewheelControl: true,
  pagination: '.my-pagination',
  paginationClickable: true,
  mode:'vertical',
  centeredSlides: true,
  visibilityFullFit: true,
  resizeReInit: true,
  updateOnImagesReady: true,
  onProgressChange: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          var slide = swiper.slides[i];
          var progress = slide.progress;
          var translate, boxShadow;
          if (progress>0) {
            translate = progress*swiper.height;  
            boxShadowOpacity = 0;
          }
          else {
            translate=0; 
            boxShadowOpacity = 1  - Math.min(Math.abs(progress),1);
          }
          slide.style.boxShadow='0px 0px 10px rgba(0,0,0,'+boxShadowOpacity+')';
          swiper.setTransform(slide,'translate3d(0,0,'+(translate)+'px)');
        }
      },
	  onSlideChangeStart:function() {
		d = new Date();
		$(".image1").attr("src", "img/Scene1.gif?"+d.getTime());
		$(".image2").attr("src", "img/Scene2.gif?"+d.getTime());
		$(".image3").attr("src", "img/Scene3.gif?"+d.getTime());
		$(".image4").attr("src", "img/Scene4_.gif?"+d.getTime());
	  },
      onTouchStart:function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], 0);
        }
      },
      onSetWrapperTransition: function(swiper) {
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], swiper.params.speed);
        }
      }
    })
    // Set Z-Indexes
    for (var i = 0; i < mySwiper.slides.length; i++){
      mySwiper.slides[i].style.zIndex = i;
    }
	var $arrowBot = $('.arrowBot').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	})
	var $arrowTop = $('.arrowTop').on('click', function(e){
		e.preventDefault()
		mySwiper.swipePrev()
	})