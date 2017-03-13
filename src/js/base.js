/////////////
// base.js //
/////////////



/* ------------------------------------------------------------
 * 公共依赖模块
 * ------------------------------------------------------------ */

/* ------------------------------------------------------------
 * 返回顶部
 * ------------------------------------------------------------ */
smoothScroll('.go-header', '#header');

function smoothScroll(btn, target) {
    var animationTime = 500;
    $(btn).click(function() {
        var position = $(target).offset().top;
        $('html, body').animate({scrollTop: position}, animationTime);
    })
}



window.onload = function() {
    $('#indexSliderBox').sliderFunc();
}

//全局公共变量
var _window=$(window);


//初始化
function initFunc(){
    //menu响应式高度处理
    var _screeHeight=_window.height();
    var windowWidth=_window.width();
    if (windowWidth>=1025) {//屏幕响应断点
        $(".menu-item-list-wrapper").css({height:"100%"});
        $("#index").css({height:_screeHeight});
        $(".menu-item").children('.menu-item-content-wrapper').children('.menuList').children('a').mouseenter(function(){
             var Src=$(this).attr("data-src");
             var pBig=$(this).attr("pBig");
             var pSmall=$(this).attr("pSmall");
             $(this).parent().parent().children(".menuShow").css("background-image","url('"+Src+"')");
             $(this).parent().parent().children(".menuShow").children(".menuMask").children(".p-24").text(pBig);
             $(this).parent().parent().children(".menuShow").children(".menuMask").children(".p-16").text(pSmall);
        });
         $(".menu-item").mouseover(function(){
             $(this).children('.menu-item-content-wrapper').css("display","inline-block");
        });
        $(".menu-item").mouseout(function(){
             $(this).children('.menu-item-content-wrapper').css("display","none");
        });
    }else{
        $(".menu-item-list-wrapper").css({height:_screeHeight-65});//移动端menu减去header高度
        $("#index").css({height:_screeHeight/2});
         $(".menuDown").click(function(){
             if($(this).parent().children('.menu-item-content-wrapper').css("display")=="none"){
                $(this).parent().children('.menu-item-content-wrapper').css("display","inline-block");
             }else{
                $(this).parent().children('.menu-item-content-wrapper').css("display","none");
             }
                
        });
    }
      getActive();
}
initFunc();


//监听窗口大小变化
_window.resize(function(){
    initFunc();
});


$(".menu-mobile-trigger").click(function(){
    var _this=$(this);
    var _listBox=$('.menu-item-list-wrapper');
    if (_this.hasClass("open")) {
        _this.removeClass("open");
        _listBox.removeClass("open");
    }else{
        _this.addClass('open');
        _listBox.addClass('open');
    }
});


//
$(".divselect cite").click(function(){//当language select被点击，显示 opations
    var ul = $(this).parent().children("ul");
    if(ul.css("display")=="none"){
        ul.css("display","block");
        $(this).parent().css("border","1px solid #000");
    }else{
        ul.css("display","none");
        $(this).parent().css("border","1px solid #fff");
    }
});

$('.videoOn').click(function () {
    if ($('#videPlay>video').length==0) {
        var _url=$(this).attr('data-src');
        var V=$('<video>').attr({'preload':'auto','controls':''}).addClass('acm');
        var S=$('<source>').attr({'src':_url,'type':'video/mp4'});
            V.appendTo($('#videPlay'));
            S.appendTo(V);
        };
        $('#videPlay>video').get(0).play();
        $('#videPlay>video').attr('width',(_window.width()-200)+'px');
        $('#videPlay').removeClass('none').addClass('block');
     $('#fullpage').bindScroll();

})
$('#videPlay>.videoClose').click(function () {
    $('video').get(0).pause();
    $('video').remove();
    $('#videPlay').removeClass('block').addClass('none');
    $('#fullpage').unBindScroll();
})

//拓展$.prototype
    $.fn.extend({
        LizToggleOne:function(str1,str2) {
            if ($(this).hasClass(str1)) {
                $(this).removeClass(str1).addClass(str2);
            }else if ($(this).hasClass(str2)) {
                $(this).removeClass(str2).addClass(str1);
            }
        },
        hasNoClass:function (str) {
            var $this=$(this);
            var $that;
            $this.each(function(){
                if (!$(this).hasClass(str)) {
                    $that=$(this);
                };
            });
            return $that;
        },
        bindScroll:function (obj) {
            var $this=$(this);
            var eventType = 'mousewheel';
            if (document.mozHidden !== undefined) {
                eventType = 'DOMMouseScroll';
            }
            $(document).on(eventType, function(event) {
                if (typeof obj ==='undefined') {
                    event.preventDefault();
                }else{
                    var scrollTop = $(obj)[0].scrollTop,
                    scrollHeight = $(obj)[0].scrollHeight,
                    height = $(obj)[0].clientHeight;

                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    $(obj)[0].scrollTop = delta > 0? 0: scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault();
                }    
            }        
            });
        },
        unBindScroll:function () {
            console.log('unBindScroll');
            var eventType = 'mousewheel';
            if (document.mozHidden !== undefined) {
                eventType = 'DOMMouseScroll';
            }
            $(document).off(eventType);
        }
    });
function toTop(){
    $('html, body').animate({scrollTop: $('.fullPages').offset().top+_window.height()/2}, 500);
}

function getActive(){
    var url=location.href;
    var query;
    if (url.indexOf("#")+1) {
        if (url.indexOf("?")+1) {
            query=url.substring(url.indexOf("#")+1,url.indexOf("?"));//查找到查询串，并去掉'#'
        }else{
            query=url.substring(url.indexOf("#")+1);//查找到查询串，并去掉'#'
        }
        
    };
    if (query) {
        if (query!="stores"&&query!="lookbook-detail"&&query!="product-detail") {
            setTimeout(toTop(),2000);
        };
        if (query=="lookbook-detail") {
            query="lookbook";
        };
        if (query=="product-detail") {
            query="product";
        };
        $("."+query).addClass("menu-active");
    };
}

