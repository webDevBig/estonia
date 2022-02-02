 $(document).click(function(event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest(" .tootlip_text, .tooltip_icon").length) {
                $("body").find(".tootlip_box").removeClass("show");


            }
        });
        
        $(".tooltip_icon").click(function() {
            $(this).parents('.tootlip_box').toggleClass('show')
        })
        $('.mobile_menu_icon').click(function(){
            $(this).parents('.mobile-menu').toggleClass('show')
        })