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
    $('.logger .label').fastClick(function(e) { 
            var el = $(this);
            if (el.hasClass('tally')) {
                var count = el.find('.count');
                if ((count.text() === '') || (count.text() === '0')) {
                    count.text('1');
                    el.toggleClass('active');
                }
                else {
                    var newCount = parseInt(count.text())+1;
                    count.text(newCount + '');
                }
            }
            else {
                el.toggleClass('active');
            }
    });


    // bind address bar stuff
    window.addEventListener("load", hideAddressBar );
    window.addEventListener("orientationchange", hideAddressBar );
});