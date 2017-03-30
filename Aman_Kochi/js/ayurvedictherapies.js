
var showgrid = function(param){
	var divs = $('[id^=grids]');
	divs.each(function(index){		
		if($(this).attr('id') !== 'grids' + param) {
			$(this).hide();
		}else{
			$(this).fadeIn( "slow" );
		}
	});
	showButton(param, divs.length);
};

var showButton = function(index, count){
	var indx = parseInt(index);
	if(count <= (indx + 1)){
		$('#btn_next').hide();
	}else{
		$('#btn_next').show();
	}
	if(indx <= 0){
		$('#btn_prev').hide();
	}else{
		$('#btn_prev').show();
	}
};

var nextgrid = function(){	
	var div = $('[id^=grids]:visible');
	var count = $('[id^=grids]').length;
	var index = div.attr('id').split('grids')[1];
	var next_index = parseInt(index)+1;
	showgrid(next_index);	
}

var prevgrid = function(){	
	var div = $('[id^=grids]:visible');
	var count = $('[id^=grids]').length;
	var index = div.attr('id').split('grids')[1];
	var prev_index = parseInt(index) - 1;
	showgrid(prev_index);	
}