 $(document).ready(function() {

    $('div.load').delay(1500).fadeOut(1500, function(){window.scrollTo(0, 0)}); // for loader 

    $('button.nav-button').click(function(){ // This function to hide and show the slider of small and extra small screens

        $('div.slider2').css('display','block');
        $('button.nav-button').hide();
    });

    $('button.back-button').click(function() // This function to hide the slider of small and extra small screens
    {
        $('div.slider2').fadeOut();
        $('button.nav-button').show(); // This one to show him when we click on the button on the top of the nav (Small and extra small)
    }); 

    $('div.pics').click(function(){ // This function to hide the slider of small and extra small screens
        $('div.slider2').fadeOut();
        $('button.nav-button').show(); // This one to show him when we click on the button on the top of the nav (Small and extra small)
    });

    $('div.about').click(function(){ // This function to hide the slider of small and extra small screens
        $('div.slider2').fadeOut();
        $('button.nav-button').show(); // This one to show him when we click on the button on the top of the nav (Small and extra small)
    });

    $('div.about').click(function(){ // This function to hide the slider of small and extra small screens
        $('div.slider2').fadeOut();
        $('button.nav-button').show(); // This one to show him when we click on the button on the top of the nav (Small and extra small)
    });
});



// Scroll by main buttons (slider of medium and large screens)

window.onscroll = function () {
    'use strict';
    console.log(pageYOffset);
}



