// Add your JavaScript
 //$.each( restaurantes, function( index , value ) {
 //   console.log( 'valor:'+ value.image ); 
//});
// console.log( sum ); 

// $.each( , function() {
//     console.log(value);
//   });

//$(document).ready(function() {
//var  userChoice;

//$(document).keypress(function getValue(e){
  //  if(e.which === 13){
    //    userChoice = $('input').val();
      //  getRestaurantImage();
    //}
//})

//function getRestaurantImage(){
  //  $.each(restaurantes, function (index,value){
    //    if (userChoice === value.name) {
      //      $('div').html('<img src="assets/' +  value.image + '"></img>');
       // }
   // })
//};
  
//})

//$(document).ready(function() {

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

// var myInputSearch = $('#myInput').val();
// console.log(myInputSearch);

    // $("#myInput").on("keyup", function() {
    //   var search;
    //   var value = $('restaurantes').val().toLowerCase();
    //   if(value ==''){
    //     search = $('restaurantes');
    //   } else {
    //     search = $('restaurantes').filter(function() {
    //       return restaurantes.type === value;  
    //     });
    //   }console.log(restaurantes);
    // });


       //// var marker = new google.maps.Marker({
         // position: uluru,
          //map: map
        });
  //  });  
    
