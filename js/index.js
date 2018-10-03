// The planets distance from the sun and sizes obviously aren't to scale, but the orbit timing is proportional














// this is just here for zooming in

$('#solar-system').change(function () {                    
  var fontsize = $(this).val()/10 + "px";
  $('html').css("font-size", fontsize );
});