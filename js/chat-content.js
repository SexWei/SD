
$(function(){
	
	/*//$.holdReady(true);*/
	var aItem=$(".items");
	alert(aItem.length);
	for(var i=0;i<aItem.length;i++)
	{
		aItem[i].click(function(){
			$("#dynamic").load("dynamic/chat-content.html");
			$("#menu").hide();
		})
	}
	
	
	/*var key="553875b4b80e4ad4b98c3279a92013c2";
	var url="http://www.tuling123.com/openapi/api";
	
	$("#bottom-right").click(function(){
		var info={
			"key":key,
			"info":$("#bottom-center").val()
		}
		var msg=$("<div class="right size">"+$("#bottom-center")+"</div><br>");
		$("#content-top").append(msg);
		
			$.ajax({
				type: "POST",
				url: url,
				data: info,
				dataType: "json",
				success: function(result) {
					var robot = $("<div class='left size'>"+result.text +"</div><br>")

					$("#content-top").append(robot)
				
				}
			});
        
		
		
	}
		*/
	
})
