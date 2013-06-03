$(document).ready(function(){
	
	//var setGrid="";
	
	$("#header").shadow();
	$(".list").kendoDropDownList();
	
	$("#tabs").tabs();
	$(".ui-tabs").css({"padding":"0px"});
	
	

	
	var clickTab1 = function(){
	
		$.ajax({
			url:"bRPayment.htm",
			type:"get",
			dataType:"html",
			success:function(data){
				$("#tabs-1").html(data);
				$("#content").slideDown();
			}
		});

	};
	
	var clickTab2 = function(){
		
		$.ajax({
			url:"debtor.htm",
			type:"get",
			dataType:"html",
			success:function(data){
				$("#tabs-2").html(data);
				$("#content").slideDown();
			}
		});

	};
	
	
	$("a[href=#tabs-1]").click(function(){
		clickTab1();
	});
	$("a[href=#tabs-2]").click(function(){
		clickTab2();
	});
	
	$("#submit").click(function(){
		
		clickTab1();
	});
	
	
});