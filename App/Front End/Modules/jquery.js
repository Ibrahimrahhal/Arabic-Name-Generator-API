$( function() {
   var state = true;
   $( ".pri-cta" ).on( "click", function() {
   $(".img-cont").effect("drop");
     $(".btn-cont").fadeOut();

       $( "body" ).animate({
         backgroundColor: "#DA1F26"
       }, 500 );



   });
 } );
