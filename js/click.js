$(function(){
    var animationOut = "animated fadeOutLeft";
    var animationIn = "animated fadeInLeft";
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";	/*webkit/moz/MS/opera/animationend*/
    /*emoticon change*/
    function emoticonAnimate(pre, next){
        $(pre).on('click',function() {
            console.log(pre)
            $(this).addClass(animationOut).one(animationEnd, function(){
                $(this).hide().removeClass(animationOut);
                $(next).show().addClass(animationIn).one(animationEnd, function(){
                    $(this).removeClass(animationIn);
                });
            });
        });
    }
    emoticonAnimate("#emoticon01", "#emoticon02");
    emoticonAnimate("#emoticon02", "#emoticon03");
    emoticonAnimate("#emoticon03", "#emoticon01");

    
    /* #emoticon, #about/ #name, #skills, #edu, #contact/#links */
    var animationOutLeft = "animated fadeOutLeft";
    var animationOutRight = "animated fadeOutRight";
    var animationZoomOut = "animated zoomOutUp";
    var animationInLeft = "animated fadeInLeft";
    var animationInRight = "animated fadeInRight";

    var fontSize01 = parseInt($("#about").css("font-size"));
    fontSize01 = fontSize01 + 30 + "px";
    var fontSize02 = parseInt($("#about").css("font-size"));
    var about_status = 0;
    fontSize02 = fontSize02 + 0 + "px";
    
    var changingCertificate = 0;

    function animateLeft(selectClass, show){                                            // IN
        $(selectClass).show().addClass(animationInLeft).one(animationEnd, function(){
            $(selectClass).removeClass(animationInLeft);
            if(show === 1) $(selectClass).show();
        });	
    }
    function animateRight(selectClass, show){
        $(selectClass).show().addClass(animationInRight).one(animationEnd, function(){
            $(selectClass).removeClass(animationInRight);
            if(show === 1) $(selectClass).show();
        });
    }

    function hideClassLeft(selectClass){
        $(selectClass).addClass(animationOutLeft).one(animationEnd, function(){         // OUT
            $(selectClass).hide().removeClass(animationOutLeft);
        });
    }
    function hideClassRight(selectClass){
        $(selectClass).addClass(animationOutRight).one(animationEnd, function(){
            $(selectClass).hide().removeClass(animationOutRight);
        });
    }

    $( "#about").on('click', function(){											//col-md-6 col-lg-6  col-md-10 col-lg-10
        hideClassLeft("#emoticon");
        hideClassRight("#name");
        hideClassLeft("#skills");
        hideClassRight("#edu");
        hideClassRight("#contact");
        hideClassRight("#links");
        $( "#about").addClass(animationZoomOut).one(animationEnd, function(){

            $( "#about").removeClass(animationZoomOut).hide();
            $( "#RWD_STYLE").hide();
            $( "#close_button_about").show();
            $( "#certificates").show().addClass("animated fadeIn").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12").one(animationEnd, function(){
                $( "#certificates").removeClass("animated fadeIn");
                
                $( "#close_button_about").unbind('click').one('click', function(){
                    $( "#close_button_about").hide(function(){
                        $( "#certificates").addClass("animated zoomOutDown").one(animationEnd, function(){
                            if(changingCertificate === 0){
                                $("#close_button_about").hide();
                                $( "#certificates").removeClass("col-xs-12 col-sm-12 col-md-12 col-lg-12").hide().removeClass("animated zoomOutDown");
                                animateLeft("#emoticon", 1);
                                animateLeft("#about", 1);
                                animateRight("#name", 0);
                                animateLeft("#skills", 0);
                                animateRight("#edu", 0);
                                animateRight("#contact", 0);
                                animateRight("#links", 0);
                                $( "#RWD_STYLE").show();
                                console.log('inside');
                            }
                            else $("#certificates").removeClass("animated zoomOutDown");
                        }); 
                    });
                    console.log("outside");
                    
                }); 
            });
        });
    });

    function certificateAnimate(pre, next){
        $(pre).unbind('click').on('click',function() {
            changingCertificate = 1;
            console.log(pre)
            $(pre).addClass(animationOut).one(animationEnd, function(){
                $(pre).hide().removeClass(animationOut);
                $(next).show().addClass("animated fadeInRight").one(animationEnd, function(){
                    console.log(next)
                    $(next).removeClass("animated fadeInRight");
                    changingCertificate = 0;
                });
            });
        });
    }
    
    certificateAnimate("#certificate01", "#certificate02");
    certificateAnimate("#certificate02", "#certificate01");
    certificateAnimate("#certificate03", "#certificate01");


});	