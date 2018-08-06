
  var map;
  var marks=[];


  function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
         zoom: 8
    });
  }

////mapa funcionando
   $(document).ready(function() {
    $('.box-1').delay('3000').fadeOut('slow');
      $('.box-2').delay('3000').fadeIn('slow');   

   })
   $.each(restaurantes, function (index, restaurante) {
    $("<img>").attr("src", restaurante.image).appendTo(".imageSelect").addClass(restaurante.name);
   });  

       //// var marker = new google.maps.Marker({
         // position: uluru,
          //map: map
        //});
  //  });  
    
