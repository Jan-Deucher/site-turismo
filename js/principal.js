
$('.carrosel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

  });

  $(document).ready(function(){
    $('.slider').slider();
  });
  
  $(document).ready(function(){
    $('.datepicker').datepicker();
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
  
  $.get( "http://localhost:8090/product/list", ( produtos ) => {
    for(id in produtos){
     
      console.log(produtos[id])      
      $clone = $("#copyrow").clone( true )
      $clone.removeAttr("id")
      $clone.removeAttr("style")
      console.log($clone)
      
      $clone.find("#nome").attr('src', produtos[id].name);
      $clone.find("#descricao").attr('src', produtos[id].description);
      $clone.find("#detalhes").attr('href',"file:///C:/projetos/site-turismo/paginas/detalhes.html?"+ produtos[id].id);
      
      $.post( "http://localhost:8090/images/"+produtos[id].id, ( images ) => {
        $clone.find("#img-card").attr('src', images[images.length-1].url);
      });

      console.log( produtos[id].id)      
      
      $("#cards").prepend($clone);
      $("#descricao").text(produtos[id].description);
      $("#nome").text(produtos[id].name);
     
      
    }
  });




