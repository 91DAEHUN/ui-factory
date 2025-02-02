function select(wrappId,option){
    let me = this;
    let opt = $.extend({
        // isPassword : false
    },option);
    
    let $select = $(wrappId);
    let $selectBtn = $select.find(".select-btn");
    let $selectList = $select.find(".select-list");
    let $selectOption = $selectList.find(".select-option");

    $selectBtn.off("click.selectBtnClick").on("click.selectBtnClick",function(){
        $selectList.toggleClass("active");
    });

    $selectOption.find(">button").off("click").on("click",function(){
        me.setValue($(this).attr("data-value"));
    });

    me.setValue=function(value){
        me.activeValue=value;
        $selectOption.each(function(idx){
            if($(this).find(">button").attr("data-value")==value){
                me.activeIdx = idx
                $selectOption.removeClass("selected");
                $selectOption.eq(idx).addClass("selected");
            }
        })
        $selectBtn.text(me.activeValue);
        $selectList.removeClass("active");
    }

    return me;
}