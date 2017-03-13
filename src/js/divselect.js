(function($) {
	divselect("#divselect1","#divselect2","#divselect3");
	function divselect(divselectid1,divselectid2,divselectid3) {

			var divSelects=[];
			
			for (var i = 0; i < arguments.length; i++) {
				divSelects.push($(arguments[i]+' cite'));
			};			
			$.each(divSelects,function() {
				var $this=$(this);
				$this.click(function() {
						var cite=$this.attr('selectid');
						var ul=$this.parent().children().filter(function() {
								return $(this).attr('selectUlId')==cite.substring(0,cite.length-2);
							});
					if(ul.css("display")=="none"){
							ul.removeClass('none').addClass('block');
						}else{
							ul.removeClass('block').addClass('none');
						}
					})
			var selectA=$this.parent().children().filter('ul').children().children();
			$.each(selectA,function() {
				var $that=$(this);
				$that.click(function(){

					var cite=$that.attr('selectid');//记录选中a的id ---1-2
					var value=$this.attr('selectid');//已经存在的id ---1-3
						var text=$that.text();
						$this.html(text).attr('selectid',cite);//更新cite
						$this.parent().children('ul').removeClass('block').addClass('none');//收起下拉框
						var citeArr=cite.split('-');// 1 ， 2
						setA(citeArr);
						function setA(arrfouse) {//选择了省自动更新市区···
							//console.log(divSelects.length);
							if (citeArr.length<=divSelects.length) {
								for (var i = citeArr.length - 1; i > citeArr.length - 2; i--) {
									citeArr.push('1');
									divSelects[i].html('请选择').attr('selectid',citeArr.join('-'));
									setA(citeArr);
								};
							}
						};
						   
					});
					
				});
			})//each---A
	    }//each---cite
	//function
})(jQuery)