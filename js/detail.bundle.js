webpackJsonp([4],{

/***/ 0:
/*!**************************!*\
  !*** ./src/js/detail.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../css/base.css */ 1);
	__webpack_require__(/*! ../css/public.css */ 9);
	__webpack_require__(/*! ../css/component.css */ 12);
	__webpack_require__(/*! ../css/detail.css */ 25);
	__webpack_require__(/*! ../js/base.js */ 18);
	__webpack_require__(/*! ../js/slider.js */ 29);

/***/ },

/***/ 25:
/*!****************************!*\
  !*** ./src/css/detail.css ***!
  \****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 29:
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	(function () {
	
	    function G(s) {
	        return document.getElementById(s);
	    }
	
	    function getStyle(obj, attr) {
	        if (obj.currentStyle) {
	            return obj.currentStyle[attr];
	        } else {
	            return getComputedStyle(obj, false)[attr];
	        }
	    }
	
	    function Animate(obj, json) {
	        if (obj.timer) {
	            clearInterval(obj.timer);
	        }
	        obj.timer = setInterval(function () {
	            for (var attr in json) {
	                var iCur = parseInt(getStyle(obj, attr));
	                iCur = iCur ? iCur : 0;
	                var iSpeed = (json[attr] - iCur) / 5;
	                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
	                obj.style[attr] = iCur + iSpeed + 'px';
	                if (iCur == json[attr]) {
	                    clearInterval(obj.timer);
	                }
	            }
	        }, 30);
	    }
	
	    var oPic = G("picBox");
	    var oList = G("listBox");
	
	    var oPrev = G("prev");
	    var oNext = G("next");
	    var oPrevTop = G("prevTop");
	    var oNextTop = G("nextTop");
	
	    var oPicLi = oPic.getElementsByTagName("li");
	    var oListLi = oList.getElementsByTagName("li");
	    var len1 = oPicLi.length;
	    var len2 = oListLi.length;
	
	    var oPicUl = oPic.getElementsByTagName("ul")[0];
	    var oListUl = oList.getElementsByTagName("ul")[0];
	    var w1 = oPic.offsetWidth; //窗口宽度
	    var w2 = oListLi[0].offsetWidth;
	    var start = {},
	        current = {};
	
	    var index = 0;
	
	    var num = 6;
	    var num2 = Math.ceil(num / 2);
	    oPicUl.style.width = w1 * len1 + "px";
	    oListUl.style.width = w1 / num * len2 + "px";
	    for (var i = len1 - 1; i >= 0; i--) {
	        oPicLi[i].style.width = w1 + "px";
	        oListLi[i].style.width = w1 / num + "px";
	    };
	    function Change() {
	
	        Animate(oPicUl, { left: -index * w1 });
	
	        if (index < num2) {
	            Animate(oListUl, { left: 0 });
	        } else if (index + num2 <= len2) {
	            Animate(oListUl, { left: -(index - num2 + 1) * w2 });
	        } else {
	            Animate(oListUl, { left: -(len2 - num) * w2 });
	        }
	
	        for (var i = 0; i < len2; i++) {
	            oListLi[i].className = "";
	            if (i == index) {
	                oListLi[i].className = "on";
	            }
	        }
	    }
	
	    oNextTop.onclick = oNext.onclick = function () {
	        index++;
	        index = index == len2 ? 0 : index;
	        Change();
	    };
	
	    oPrevTop.onclick = oPrev.onclick = function () {
	        index--;
	        index = index == -1 ? len2 - 1 : index;
	        Change();
	    };
	
	    for (var i = 0; i < len2; i++) {
	        oListLi[i].index = i;
	        oListLi[i].onclick = function () {
	            index = this.index;
	            Change();
	        };
	    }
	
	    var _super = G("sliderBox");
	    $(_super).on('touchstart', '', pageStart);
	    $(_super).on('touchmove', '', pageMove);
	    $(_super).on('touchend', '', pageEnd);
	    //pageMove
	    function pageMove(e) {}
	    //e.preventDefault();
	
	    //pageStart
	    function pageStart(e) {
	        console.log('pageStart');
	        if (start.active) return;
	        if (e.originalEvent.touches.length < 2) {
	            start.x = e.originalEvent.touches[0].pageX;
	            start.when = new Date().getTime();
	            start.active = true;
	        }
	    }
	    //pageEnd
	    function pageEnd(e) {
	        console.log('pageEnd');
	        current.x = e.originalEvent.changedTouches[0].pageX;
	        start.active = false;
	        if (isSwipe(e)) {
	            if (current.x - start.x < 0) {
	                oNextTop.onclick();
	            } else {
	                oPrevTop.onclick();
	            }
	        }
	    }
	    //是否到达滑动的条件
	    function isSwipe(e) {
	        var duration = new Date().getTime() - start.when;
	        var xdist;
	        xdist = current.x - start.x;
	        return duration < 500 && 100 < Math.abs(xdist);
	    }
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 17)))

/***/ }

});
//# sourceMappingURL=detail.bundle.js.map