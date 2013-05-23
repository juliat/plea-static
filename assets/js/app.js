/* from http://mobile.tutsplus.com/tutorials/mobile-web-apps/remove-address-bar/ */
function hideAddressBar()
{
    if(!window.location.hash)
    {
        if(document.height <= window.outerHeight + 10)
        {
            document.body.style.height = (window.outerHeight + 50) +'px';
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
        }
        else
        {
            setTimeout( function(){ window.scrollTo(0, 1); }, 0 );
        }
    }
}

$(document).ready(function() {
    // bind logger labels
    $('.logger label').on('touchend', function(){
            console.log('touch');
            $(this).toggleClass('active');
    });

    // bind address bar stuff
    window.addEventListener("load", hideAddressBar );
    window.addEventListener("orientationchange", hideAddressBar );
});