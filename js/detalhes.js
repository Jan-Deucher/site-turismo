
$('.carrosel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

  });

  $(document).ready(function(){
    $('.slider').slider();
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
  });

  
  let productID = document.location.search.split("?")[1];
  let imageList = [];
  $.get( "http://localhost:8090/product/"+productID, ( produto ) => {
      $(".titulo-mais").html(produto.name);
      $(".container").html(produto.description);

      $.post( "http://localhost:8090/images/"+productID, ( images ) => {
        imageList = images;

        console.log( produto, imageList);   
      });
  });




