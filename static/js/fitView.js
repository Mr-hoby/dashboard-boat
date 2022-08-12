
function init(){
	var height =  $(window).height();
	var width = $(window).width();
	var scale = width/height;
	// console.log('scale',scale)
	// console.log('正常scale',1920/1100)
	
	var zoom = 1;
	if(scale>1920/1100){
		zoom = height/1100;
	}else{
		zoom = width/1920;
	}
	console.log(zoom)
	if(zoom>0.6){
		$(".main").attr("style","zoom:"+zoom);
	}
}
init()

$(window).resize(function(){
	init()
});