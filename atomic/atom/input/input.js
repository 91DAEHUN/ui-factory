function input(wrappId,option){
    let me = this;
    let opt = $.extend({
        // isPassword : false
    },option);

    let $inputWrapper = $(wrappId);
    let $inputText = $inputWrapper.find(".input-text");
    let $inputClose = $inputWrapper.find(".input-close");
    let $inputEye = $inputWrapper.find(".input-eye");

    $inputText.on("focus",function(){
        $inputWrapper.addClass("active");
    });
    $inputText.on("blur",function(){
        $(this).val()=="" ? $inputWrapper.removeClass("active writing"):"";
    });
    $inputText.on("change paste keyup",function(){
        if($(this).val()==""){
            $inputWrapper.removeClass("writing");
        }else{
            $inputWrapper.addClass("writing");
        }

    })
    $inputClose.off("click.inputCloseClick").on("click.inputCloseClick",function(){
        $inputText.val("");
        $inputWrapper.removeClass("active writing");
    });
    $inputEye.off("click.inputEyeClick").on("click.inputEyeClick",function(){
        if(!$inputEye.hasClass("on")){
            $inputEye.addClass("on");
            $inputText.attr("type","text");
        }else{
            $inputEye.removeClass("on");
            $inputText.attr("type","password");
        }
    })

    //활성
    me.active=function(){
        $inputWrapper.addClass("active");
    }

    //리셋
    me.reset=function(){
        $inputWrapper.removeClass("active writing");
        $inputEye.removeClass("on");
        $inputText.val("");
    }
    return me;
    /* 
        TODOLIST 
        1. active, reset 테스트
    */
}