  $.fn.sliderFunc=function(_stat) {
    var _super=this;
  var animated = false;
    var _const=_super.children().length;
  var timer;
    var _point='point';
  var index = 0; //记录点击
  var sliderWidth=$(_super).width();
    var _stat=true;
    //将轮播图最后一个移动到第一个
    var superlast=$(_super).children().last().clone();
    $(_super).children().last().remove();
    $(_super).prepend(superlast);

  var Children = $(_super).children();
    var p=1;//错位个数
  var start={},
    current={};
  //动态设置滚动元素的宽度，left和index编号
  $.each(Children,function(i){
       $(this).attr({'width':(sliderWidth + 'px'),'index':(i)});
       $(this).css({'left':(($(this).attr('index')-1)*sliderWidth + 'px')});
       $(this).attr({'index':i});
       if (i==0) {
         $(this).attr('index',_const); 
       };
      // $(this).html($(this).attr('index'));//输出当前页号
  })
  //当需要显示原点时
  if (_stat) {
      //动态生成原点盒子
      var div=document.createElement("div");
          div.setAttribute('id',_point);
          _point="#point";
          $(_super).after(div);
      //动态生成原点
      for (var i = 0; i <_const; i++) {
          var _pointChild=document.createElement("span");
           _pointChild.setAttribute('index',i+1);
          $(_point).append(_pointChild);
      };
      var _point=$(_point).children();
      _point[0].className = 'on';
     for (var i = _point.length - 1; i >= 0; i--) {
          _point[i].addEventListener('click',function () {//为原点绑定点击事件
          var num=$(this).attr('index');//获取原点序号
          pageClick(num);
      })
      };
  };

    

    _init();

    


    //enter
    function _init() {
        $(_super).bind('runstate', '', function() {
            animated = true;
        });
        $(_super).bind('stopstate', '', function() {
            animated = false;
        });
        $(_super).on('touchstart','',pageStart);
        $(_super).on('touchmove','',pageMove);
        $(_super).on('touchend','',pageEnd);
        autoPlay(sliderWidth);
        return $(_super); //以便于链式调用
    }
    // pageClick
    function pageClick(num){
        if (!animated) {
            var from=0;
            var sw;
            to=num;
            $.each(Children,function () {           
                if (parseInt(this.style.left)==0) {
                    from=parseInt($(this).attr('index'));
                };
            })

            if (from==to) {
                return;
            }else{
                sw=(from-to)*sliderWidth;
            }

            index=to-1;
            showPoint();
            animate(sw);
        }
    }
    //pageMove
    function pageMove(e){
        //e.preventDefault();
    }
    //pageStart
    function pageStart(e){
        if(start.active) return;
        if( e.originalEvent.touches.length < 2 ) {
          start.x = e.originalEvent.touches[0].pageX;
          start.when = new Date().getTime();
          start.active = true;
        }
    }
    //pageEnd
    function pageEnd(e){
        current.x = e.originalEvent.changedTouches[0].pageX;       
        start.active = false;   
        if(isSwipe(e) ){
                 if(current.x-start.x<0){
                        Arrow_r(sliderWidth);
                      }else{
                        Arrow_l(sliderWidth);                
                    }
            }   
    }
    //是否到达滑动的条件
    function isSwipe(e) {
        var duration = new Date().getTime()-start.when;
        var xdist;
            xdist    = current.x - start.x;
        return duration < 500 && 100 < Math.abs( xdist );
    }   
    //向左滚动一页
    function Arrow_r(sw) {
        if (!animated) {
            index++;
           if(index==_const){
                index=0;
            }
            if (_stat) {
                showPoint();
            };
            animate(-sw);
        }
    }
    //向右滚动一页
    function Arrow_l(sw) {
        if (!animated) {
            index--;
            if (index==-1) {
                index=_const-1;
            }
            if (_stat) {
                showPoint();
            };
            
            animate(sw);
        }
    }
    //自动向左滚动
    function autoPlay(sw) {
        timer = setInterval(function() {
            Arrow_r(sw);
        }, 5000)
    }
    //停止自动滚动
    function stopAuto() {
        clearInterval(timer)
    }
    //点亮当前原点
    function showPoint() {
        for (var i = 0; i <_point.length; i++) {
            _point[i].className = '';
        };
        _point[index].className = "on";
    }
    //滚动函数
    function animate(wid) {//wid是绝对偏移量，带符号
        animated = true;
        stopAuto();
        if (wid == 0) {
            return
        };
        var time =sliderWidth/1000;//滚动时间
        var left; //目的偏移量
        var leftCorrt;//当前偏移量
        var stat=0;//记录动画次数

         
        $.each(Children,function () {        
            leftCorrt=parseInt(this.style.left);
            left = leftCorrt + wid;
             
           
            //移动相对位置
            if (Math.abs(left)>Math.abs((_const-(p+1))*sliderWidth)) {
                $(this).css('z-index','-999');
                if (wid>0) {
                    left=wid+leftCorrt-(_const)*sliderWidth;
                }else{
                    left=wid+leftCorrt+(_const)*sliderWidth;
                }
            };


           if(left==0){
                    $(this).css('z-index','999');
             };
            if (wid>0) {
                if (leftCorrt==0&&left==-sliderWidth) {
                    $(this).css('z-index','888');
                }
            }else{
                if (leftCorrt==0&&left==sliderWidth) {
                    $(this).css('z-index','888');
                }
            }
            //移动
            $(this).animate({left:left},{quequ:false,complete:function(){
                stat++;
                if (stat==_const) {//监听移动次数以便允许用户其他操作
                    animated=false;
                    autoPlay(sliderWidth);
                    $.each(Children,function () {  $(this).css('z-index','0'); });
                    };
                }}
            );
           /* 
           //移动
           $(this).css({
                        "left" : left,
                        "-moz-transition" : 'left '+time+'s ease',
                        "-ms-transition" : 'left '+time+'s ease',
                        "-webkit-transition" : 'left '+time+'s ease',
                        "transition" : 'left '+time+'s ease'
                    });
            //监听移动次数以便允许用户其他操作
            this.addEventListener('webkitTransitionEnd',function () {
                    stat++;
                    if (stat==_const) {
                        animated=false;
                        autoPlay(sliderWidth);
                         $.each(Children,function () {  $(this).css('z-index','-100'); });
                     };
            });*/
            
        });
    }
}