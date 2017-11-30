$(function(){
	setInterval(function(){
	 	//充电
		var curr=$('#battery-body').width();
		if(curr>=36){
			$('#battery-body').width(4);
		}else{
			$('#battery-body').width(curr+4);
		}
		
		//变色
		if($('#battery-body').width()<=10){
			$('#battery-body').css("background-color","red");
		}else if($('#battery-body').width()>10&&$('#battery-body').width()<=28){
			$('#battery-body').css("background-color","yellow");
		}else if($('#battery-body').width()>28&&$('#battery-body').width()<=36){
			$('#battery-body').css("background-color","lawngreen");
		}
	},1000)
})
