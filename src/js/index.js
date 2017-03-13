require('../css/base.css');
require('../css/public.css');
require('../css/component.css');
require('../css/index.css');
require("../js/indexSlider.js");
require("../js/base.js");



//产品展示
var sliderList0 = $(".sliderList").children().get(0);
var sliderList1 = $(".sliderList").children().get(1);
var sliderList2 = $(".sliderList").children().get(2);

$(sliderList0).mouseover(function(){
	$(sliderList1).css("width","25%");
	$(sliderList2).css("width","25%");
	$(sliderList0).css("width","50%");
})
$(sliderList1).mouseover(function(){
	$(sliderList0).css("width","25%");
	$(sliderList2).css("width","25%");
	$(sliderList1).css("width","50%");
})
$(sliderList2).mouseover(function(){
	$(sliderList1).css("width","25%");
	$(sliderList0).css("width","25%");
	$(sliderList2).css("width","50%");
})

$(sliderList0).mouseout(function(){
	$(sliderList1).css("width","33.3%");
	$(sliderList2).css("width","33.3%");
	$(sliderList0).css("width","33.3%");
})
$(sliderList1).mouseout(function(){
	$(sliderList0).css("width","33.3%");
	$(sliderList2).css("width","33.3%");
	$(sliderList1).css("width","33.3%");
})
$(sliderList2).mouseout(function(){
	$(sliderList1).css("width","33.3%");
	$(sliderList0).css("width","33.3%");
	$(sliderList2).css("width","33.3%");
})