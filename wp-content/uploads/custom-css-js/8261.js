<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 


jQuery(document).ready(function( $ ){
  	
  jQuery('.content-scroll-bottom').on( 'click', () => {
    console.log('evento clic');
    jQuery('#entradaM23').animate(
    	{ scrollTop: jQuery('#mainContentWallM23Good008 .vc_tta-container').offset().top -80 }, 500
    );
  })   
  
});

function scrollBottom() {
  
  
  
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 500;
  //window.scrollBy(0, 500);
}


</script>
<!-- end Simple Custom CSS and JS -->
