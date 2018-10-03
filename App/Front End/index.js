$( function() {
   var state = true;
   $( ".pri-cta" ).on( "click", function() {
     if ( state ) {
       $( "body" ).animate({
         backgroundColor: "#ffffff"
       }, 500 );
     }
   });
 } );
