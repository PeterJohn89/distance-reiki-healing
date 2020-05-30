$(document).ready(function(){

        $('.testimonial-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true
        });

        $('.steps-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true
        });

        $('.fa-bars').click(function(){
                $('.fa-bars').hide();
                $('.fa-times').show();
                $('.navbar ul').show();
                $('.navbar').addClass('active_menu');
        });

        $('.fa-times').click(function(){
                $('.fa-bars').show();
                $('.fa-times').hide();
                $('.navbar ul').hide();
                $('.navbar').removeClass('active_menu');
        });

        







        // var video = videojs('drh_player');

        // video.one('load', function() {
        //         this.bigPlayButton.hide();
        // });
        
        // $('#scrolling-menu div').click(function() { 
        //         $('.scroll-menu-items').removeClass('current-menu-item');
        //         $(this).addClass('current-menu-item');
        //         var target = $(this).attr('id');
        //         $('html, body').animate({scrollTop: $('#'+target+'-content').offset().top}, 1000);
        // });  



        // $(window).scroll(function(){

        //         if($(window).scrollTop() > $("#intro").offset().top){

        //                 $('.scroll-menu-items').removeClass('current-menu-item');
        //                 $('#intro-content').addClass('current-menu-item');

        //         }
                
        //         if($(window).scrollTop() > $("#session-content").offset().top){

        //                 $('.scroll-menu-items').removeClass('current-menu-item');
        //                 $('#session').addClass('current-menu-item');

        //         }
        //         if($(window).scrollTop() > $("#how-why-content").offset().top){

        //                 $('.scroll-menu-items').removeClass('current-menu-item');
        //                 $('#how-why').addClass('current-menu-item');

        //         }
        //         if($(window).scrollTop() > $("#benefits-content").offset().top){

        //                 $('.scroll-menu-items').removeClass('current-menu-item');
        //                 $('#benefits').addClass('current-menu-item');

        //         }


        // });

 
        


});