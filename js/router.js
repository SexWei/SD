//网页加载中
$(function(){
	
     //首次加载页面
	$("#dynamic").load("dynamic/chat-list.html");
	
	//加载chat页面
	$("#menu-wechat").click(function(){
		$("#dynamic").load("dynamic/chat-list.html");
		$("#var-fontfamily").html("微信（26）");
		$("#function_img").show();
		
		
		
		
	})
	
	//加载discover页面
	$("#menu-search").click(function(){
		
		$("#dynamic").load("dynamic/discover.html");
		$("#var-fontfamily").html("发现");
		$("#function_img").hide();
		$(".menu-photo").css("background-image","url(../img/menu/light/发现(1).svg)");
	})
	
	
	$(".items").live('click',function(){
			
			alert(1);
			
		})
	 
	
})










