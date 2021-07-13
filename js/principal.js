
$('.carrosel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

  });

  $(document).ready(function(){
    $('.slider').slider();
  });
       

  $('#click-resumo-campos').click(function(){
   
    $('.slider-campos-do-jordao').slideDown(1000);
    $('.slider-campos-do-jordao').removeClass('hide');
  });

  $('#fechar').click(function(){
    
    $('.slider-campos-do-jordao').addClass('hide');
  });

 
  $('#click-resumo-alfredo-wagner').click(function(){
   
    $('.slider-alfredo-wagner').slideDown(1000);
    $('.slider-alfredo-wagner').removeClass('hide');
  });

  $('#fechar2').click(function(){
    
    $('.slider-alfredo-wagner').addClass('hide');
  });