

$(function(){


    // header 언어별 사이트 이동

      $('#langBtn').click(function(){

          link = $('#language_select').val();

          location.href = link;
          
    })


    // main slide 탭메뉴

    $('#mainSlide .nav').click(function(e){

        e.preventDefault();

        $('#mainSlide .content').removeClass('active');
        $(this).parent('.content').addClass('active');
        $('#mainSlide .tap').removeClass('active');
        $(this).addClass('active');
        $('#mainSlide .status').addClass('pause');

        if($(this).parent('.cont1').hasClass('active')){//처음클릭
            slide01.autoplay.start();
            slide02.autoplay.stop();

        }

        else{
            slide01.autoplay.stop();
            slide02.autoplay.start();
        }

    })

    //slide01 스와이퍼

    var slide01 = new Swiper(".slide01", {
        loop: true,
        pagination: {
            el: ".slide01 .fraction",
            type:"fraction",
          },

        navigation: {
          nextEl: ".slide01 .next",
          prevEl: ".slide01 .prev",
        },

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
  
      });

      
      //slide02 스와이퍼

      var slide02 = new Swiper(".slide02", {
        loop: true,
        pagination: {
            el: ".slide02 .fraction",
            type:"fraction",
          },

        navigation: {
          nextEl: ".slide02 .next",
          prevEl: ".slide02 .prev",
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
  
      });


      slide02.autoplay.stop();


      // main 슬라이드 컨트롤


      $('#mainSlide .pause').click(function(e){
          e.preventDefault();

        if($(this).hasClass('pause')){
            slide01.autoplay.stop();
            slide02.autoplay.stop();

            $(this).removeClass('pause');
        }else{
            slide01.autoplay.start();
            slide02.autoplay.start();

            $(this).addClass('pause');
        }

      })

      //banner_slide

      var banner_slide = new Swiper(".banner_slide", {
        slidesPerView: 3,
        spaceBetween: 43,

        loop:true,

        pagination: {
            el: ".banner_slide .fraction",
            type:"fraction",
          },

        navigation: {
          nextEl: ".banner_slide .next",
          prevEl: ".banner_slide .prev",
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
         
    
    });

    $('.banner_slide .state').click(function(e){
        e.preventDefault();

      if($(this).hasClass('pause')){
        banner_slide.autoplay.stop();

          $(this).removeClass('pause');
      }else{
        banner_slide.autoplay.start();
          $(this).addClass('pause');
      }

    })



    //more_info 열렸다 닫히기

    $('.relative_site .dept1').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.sub').children('ul').outerHeight();

        if($(this).siblings('.sub').outerHeight() > 0){
            $('.relative_site .sub').stop().animate({height:0},300);
        }else{
            $('.relative_site .sub').stop().animate({height:0},300);
            $(this).siblings('.sub').stop().animate({height:h},300);
        }

    })

    $('.relative_site .sub li:last-child a').blur(function(){
        $('.relative_site .sub').stop().animate({height:0},300);
    })


})