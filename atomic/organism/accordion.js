function accordion(){
    // let $accordion = $("[data-accordion='accordion']"); //아코디언 root
    let $accordions = $("[data-accordion='accordion']");

    console.log($accordions);

    $accordions.each(function(i,accordion){
        let $accordion = $(accordion);
        // let $accordion_section = $accordion.find(".accordion-section");
        let $accordion_button = $accordion.find(".accordion-section-button"); //아코디언 버튼
        // let $accordion_panel = $accordion.find(".accordion-section-panel");
    
        let viewType = $accordion.data("accordion-view");
    
        console.log(viewType);
    
        //버튼 클릭시
        $accordion_button.on("click",function(){
            let $btn = $(this);
            let $click_section = $btn.closest(".accordion-section");
            let isSelf = $click_section.hasClass("active");
    
            if(isSelf){
                $click_section.removeClass("active");
            }else{
                switch(viewType){
                    case "single":
                        $click_section.siblings().removeClass("active");    
                        console.log(viewType);
                        break;
                    case "multi":
                        console.log(viewType);
                        break;
                    default:
                        $click_section.siblings().removeClass("active");    
                        break;
    
                }
                $click_section.addClass("active");
            }
        });

    })
}

$(function(){
    accordion();
})