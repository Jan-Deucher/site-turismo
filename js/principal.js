
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
   
    $('.slider').slideDown(1000);
    $('.slider').removeClass('hide');
  });

  
  
  $('#fechar').click(function(){
    
    $('.slider').addClass('hide');
  });
