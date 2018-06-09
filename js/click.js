$(function(){
    var animationOut = "animated fadeOutLeft";
    var animationIn = "animated fadeInLeft";
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";	/*webkit/moz/MS/opera/animationend*/
    /*emoticon change*/
    function emoticonAnimate(pre, next, In, Out){
        $(pre).on('click',function() {
            console.log(pre)
            $(this).addClass(Out).one(animationEnd, function(){
                $(this).hide().removeClass(Out);
                $(next).show().addClass(In).one(animationEnd, function(){
                    $(this).removeClass(In);
                });
            });
        });
    }
    emoticonAnimate("#emoticon01", "#emoticon02", animationIn, animationOut);
    emoticonAnimate("#emoticon02", "#emoticon03", animationIn, animationOut);
    emoticonAnimate("#emoticon03", "#emoticon01", animationIn, animationOut);

    
    /* #emoticon, #exp/ #name, #skills, #edu, #contact/#links */
    var animationOutLeft = "animated fadeOutLeft";
    var animationOutRight = "animated fadeOutRight";
    var animationZoomOut = "animated zoomOutUp";
    var animationInLeft = "animated fadeInLeft";
    var animationInRight = "animated fadeInRight";

    var fontSize01 = parseInt($("#exp").css("font-size"));
    fontSize01 = fontSize01 + 30 + "px";
    var fontSize02 = parseInt($("#exp").css("font-size"));
    fontSize02 = fontSize02 + 0 + "px";
    
    var changingCertificate = 0;

    function recoverClass(selectClass, show, direction){                          // IN
        $(selectClass).show().addClass(direction).one(animationEnd, function(){
            $(selectClass).removeClass(direction);
            if(show === 1) $(selectClass).show();
        });	
    }

    function hideClass(selectClass, direction){
        $(selectClass).addClass(direction).one(animationEnd, function(){         // OUT
            $(selectClass).hide().removeClass(direction);
        });
    }


    $( "#exp").on('click', function(){											//col-md-6 col-lg-6  col-md-10 col-lg-10
        hideClass("#emoticon", animationOutLeft);
        hideClass("#name", animationOutRight);
        hideClass("#skills", animationOutLeft);
        hideClass("#edu", animationOutRight);
        hideClass("#contact", animationOutRight);
        hideClass("#links", animationOutRight);
        $( "#exp").addClass(animationZoomOut).one(animationEnd, function(){

            $( "#exp").removeClass(animationZoomOut).hide();
            $( "#RWD_STYLE").hide();
            $( "#close_button_exp").show();
            $( "#certificates").show().addClass("animated fadeIn").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12").one(animationEnd, function(){
                $( "#certificates").removeClass("animated fadeIn");
                
                $( "#close_button_exp").unbind('click').one('click', function(){
                    $( "#close_button_exp").hide(function(){
                        $( "#certificates").addClass("animated zoomOutDown").one(animationEnd, function(){
                            if(changingCertificate === 0){
                                $("#close_button_exp").hide();
                                $( "#certificates").removeClass("col-xs-12 col-sm-12 col-md-12 col-lg-12").hide().removeClass("animated zoomOutDown");
                                recoverClass("#emoticon", 1, animationInLeft);
                                recoverClass("#exp", 1, animationInLeft);
                                recoverClass("#name", 0, animationInRight);
                                recoverClass("#skills", 0, animationInLeft);
                                recoverClass("#edu", 0, animationInRight);
                                recoverClass("#contact", 0, animationInRight);
                                recoverClass("#links", 0, animationInRight);
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