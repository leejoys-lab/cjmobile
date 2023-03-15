$(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 

$(function(){
    mainInit()
    
})

function mainInit(){
    gnb_menu();
    brand_logo();
    logo_banner();
    news_tap();
    familysite();
    top_btn();
    
}
function gnb_menu(){
    let $allmenu = $('#header .all-menu');
    let $nav = $('#nav');
    let $bg = $('.bg');
    let $close = $('#nav .close');
    let $menu = $('#nav .gnb > li > a');
    let $submenu = $('#nav .gnb li ul');

    $allmenu.on('click', function(){
        $nav.addClass('on');
        $bg.addClass('on');
        $submenu.stop().hide();
    })

    $close.on('click', function(){
        $nav.removeClass('on');
        $bg.removeClass('on');
    })

    $menu.on('click',function(){
        $('#nav .gnb li ul').stop().slideUp()
        $(this).next().stop().slideToggle();
    })
}

function brand_logo(){
    let $ul = $('.main .brand .brand-logo ul');
    let $li = $('.main .brand .brand-logo ul li');
    let $mask = $('.main .brand .brand-logo')
    let ww=0;
    let size = $li.width() * -7
    console.log( size )
    $mask.css('overflow','hidden');

    let cnt = 1
    setInterval(function(){        
        ww  = parseInt($ul.css('left')) ;
        if( ww < size ) {
           $ul.css({left: 0 })           
        }else {
            $ul.css({left:'-=' + cnt })
        }          
    },50)

}

function logo_banner(){
    let $logo = $('.main .board .logo-txt');
    let w = $logo.width();   
    $logo.animate({left : '-=' + w}, 30000)
}

function news_tap(){
    let $li =$('.main .board .news-tab li');
    let $box =$('.main .board .box');
    let current =0;

    $box.hide().first().show();
    $li.on('click',function(){
        current = $(this).index();
        $box.hide().eq(current).show();
        $li.removeClass('on');
        $li.eq(current).addClass('on');
    })

}

function familysite() {
    $('.title').on('click', function(){
        $('.main .familysite ul').toggleClass('on');
        $('.main .familysite .title i').toggleClass('xi-angle-down')
    })
      
  }

  function top_btn() {
    let $top = $(".top");
    let ty = 0;
    let h = $("#header").height();

    $(window).on("scroll", function () {
        ty = $(window).scrollTop();
        if (ty > h + 400) {
            $top.show();
        } else {
            $top.hide();
        }
    });
    $top.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });
}