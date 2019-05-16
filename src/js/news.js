require('../css/base.css');
require('../css/public.css');
require('../css/component.css');
require('../css/news.css');
require("../js/indexSlider.js");
require("../js/lookbookBigSlider.js");
require("../js/base.js");


$('#lookbookSliderBox').sliderLookBook(false);
$('.lookbookSliderClose').click(function () {
	$('#lookbookSliderBox').addClass('none');
})