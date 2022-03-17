import jQuery from 'jquery'

jQuery(document).ready(function($) {
    jQuery('.mainmenu li:has(ul)').addClass('parent');
    jQuery('a.menulinks').click(function() {
           jQuery(this).next('ul').slideToggle(250);
           jQuery('body').toggleClass('mobile-open');
           jQuery('.mainmenu li.parent ul').slideUp(250);
           jQuery('a.child-triggerm').removeClass('child-open');
           return false;
    });

    jQuery('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');

    jQuery('.mainmenu a.child-triggerm').click(function() {
           jQuery(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
           jQuery(this).parent().siblings('li').find('ul').slideUp(250);
           jQuery(this).next('ul').slideToggle(250);
           jQuery(this).toggleClass('child-open');
           return false;
    });



    jQuery(".set > a").on("click", function() {
           if (jQuery(this).hasClass("active")) {
                  jQuery(this).removeClass("active");
                  jQuery(this)
                         .siblings(".content")
                         .slideUp(200);
                  jQuery(".set > a i")
                         .removeClass("fa-minus")
                         .addClass("fa-plus");
           } else {
                  jQuery(".set > a i")
                         .removeClass("fa-minus")
                         .addClass("fa-plus");
                  jQuery(this)
                         .find("i")
                         .removeClass("fa-plus")
                         .addClass("fa-minus");
                  jQuery(".set > a").removeClass("active");
                  jQuery(this).addClass("active");
                  jQuery(".content").slideUp(200);
                  jQuery(this)
                         .siblings(".content")
                         .slideDown(200);
           }
           return false;
    });
  

});