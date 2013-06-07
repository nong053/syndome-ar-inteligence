$(document).ready(function(){
	//varible global
	var userNameLogin="1";//CEO
	//var userNameLogin="527";//CBO
	//var userNameLogin="10946";//SBU
	
	var user_level="";
	var golbal_user_level="";
	var user_data="";
	var golbal_user_data="";
	
	var colorRateRed="";
	var colorRateYellow="";
	var colorRateGreen="";
	var htmlPJ="";
	
		//--function call model get username
		var functionGetUser=function(){
			$.ajax({
				//url:'../Model/getUserPentaho.jsp',
				//type:'',
				//dataType:''
			});
		};
	
		//--end
	
		//insert year parameter
		$.ajax({
			url:'../Model/paramYear.jsp',
			type:'get',
			dataType:'html',
			success:function(data){
				//alert(data);
				$("#paramYearArea").html(data);
				$("#paramYear").kendoDropDownList();
			}
		});
		//--end
		
		//insert month parameter
		$.ajax({
			url:'../Model/paramMonth.jsp',
			type:'get',
			dataType:'html',
			success:function(data){
				//alert(data);
				$("#paramMonthArea").html(data);
				$("#paramMonth").kendoDropDownList();
			}
		});
		//--end
		//set of frist day parameter
		$("#paramOfFirstDay").click(function(){
			$(this).val("");
		});
		//--end
		
		
		
		//click submit action
		$("#submit").click(function(){
			/*
			alert($("#paramYear").val());
			alert($("#paramMonth").val());
			alert($("#paramOfFirstDay").val());
			*/
			$(".embedParam").remove();
			$("body").append("<input type=\"hidden\" id=\"embedParamYear\" class=\"embedParam\" name=\"embedParamYear\" value=\""+$("#paramYear").val()+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamMonth\" class=\"embedParam\" name=\"embedParamMonth\" value=\""+$("#paramMonth").val()+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamOfFirstDay\" class=\"embedParam\" name=\"embedParamOfFirstDay\" value=\""+$("#paramOfFirstDay").val()+"\">");

			functionOverviewPage();
			
			
		});
		//--end
		
		
		
		
		$(".selectList").kendoDropDownList();
		 $("#tabPruksa").tabs();
		 //$("#tabBsc").hide();
		 $(".ui-tabs-panel").css({"padding":"0px","background":"#DEEDF7"});
		 
		 
		 
		 
		 
		 $("a[href=#tab1]").click(function(){
			 functionOverviewPage();
			
		 });
		 var functionOverviewPage = function(){
			 $.ajax({
				 url:'../View/overview.jsp',
				 type:'get',
				 dataType:'html',
				 success:function(data){
					 $("#tab1").html(data);
					//ofFirstDayNumber
					$(".ofFirstDayNumber").html($("#paramOfFirstDay").val());
					functionGetLevel(); 
				
				 }
			 });
			 
			 $("#mainContentPruksa").show();
		 }
		 
		 $("a[href=#tab2]").click(function(){
			 
			 $.ajax({
				 url:'../View/byProject.jsp',
				 type:'get',
				 dataType:'html',
				 success:function(data){
					
					 $("#tab2").html(data);
					 
				 }
			 });
		 });
		 
		 
	
	
	
		//script tab2 start
		
		 $(".ceo").live("click",function(){
			var id = this.id;
			//id =id.substring(3);
			$.ajax({
				url:'../Model/cbo_list.jsp',
				type:'get',
				dataType:'json',
				success:function(data){
					//alert(id);
					$(".cboAll").empty();
					$.each(data,function(index,indexEntry){
						//alert(indexEntry[0]);
						//alert(indexEntry[1]);
						//Get user_level,level_data
						
						functionCBO(indexEntry[0],indexEntry[1],"cboAll",golbal_user_level);
						//$(".cboAll").html(data);
					});
					
					
				}
			});
			
		});
		
	
	$(".cbo").live("click",function(){
			
			var id = this.id;
			//alert(id);
			//id =id.substring(3);
			$.ajax({
				url:'../Model/sbu_list.jsp',
				type:'get',
				dataType:'json',
				data:{'paramCboCode':id},
				success:function(data){
					
				
					
					$("#area"+user_data).empty();
					$.each(data,function(index,indexEntry){
						//alert(indexEntry[0]);
						//alert(indexEntry[1]);
						//Get user_level,level_data
						functionSBU(indexEntry[0],indexEntry[1],id,golbal_user_level);
						//$(".user_data").html(data);
					});
				}
			});
			

			
			
		});
	

	$(".sbu").live("click",function(){
		var id = this.id;
		
		htmlPJ="";
		htmlPJ+="<div class=\"overviewPj\">";
		htmlPJ+="		<div class=\"mainContentTitle\">";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			Project ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			โอนกรรม<br>สิทธิ์ที่ดิน ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			เริ่มถมดิน  ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			Master <br>Layout";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>รวม/แบ่งแปลง  ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>ก่อสร้างสะพาน ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>ออกโฉนด<br>แปลงย่อย ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			1st Unit<br> Transfer";
		htmlPJ+="			</div>";
					
		htmlPJ+="		</div>";
		//functionPJ();
			/*
			var id = this.id;
			$.ajax({
				url:'../View/overviewPj.jsp',
				type:'get',
				dataType:'html',
				data:{'paramSbuCode':id},
				success:function(data){
					$("#areaPjCN").html(data);
				}
			});
			*/
			
			$.ajax({
				url:'../Model/project_list.jsp',
				type:'get',
				dataType:'json',
				data:{'paramSbuCode':id},
				async:false,
				success:function(data){
					
					$.each(data,function(index,indexEntry){
						//alert("hello world"+index);
						//if(index==0){
						//alert("newProjectCode");
						//functionPJ(indexEntry);
						htmlPJ+=""+functionPJ(indexEntry);
						
						//}
						
					});
					
						
				}
			});
			
			htmlPJ+="</div>";
			
			//alert(htmlPJ);
			
			$("#areaPj"+id+"").html(htmlPJ);			
			
		});
	//script tab2 end	
	
	
	
	
	
	
	
	//function create table grid
	//define function grid
	
	//create table for grid table
	var createTableCreate = function(gridName,gridArea){
	var	htmlTableGird="";
	htmlTableGird+="<table id=\""+gridName+"\">";
	htmlTableGird+="<thead>";
		htmlTableGird+="<tr>";
			htmlTableGird+="<th data-field=\"Field1\" ><center><b>Activity</b></center></th>";
			htmlTableGird+="<th data-field=\"Field2\" ><center><b>Accum Days<br>Target</b></center></th>";
			htmlTableGird+="<th data-field=\"Field3\" ><center><b>Target<br>Date</b></center></th>";
			htmlTableGird+="<th data-field=\"Field4\" ><center><b>Accum<br>Actual Day</b></center></th>";
			htmlTableGird+="<th data-field=\"Field5\" ><center><b>Actual<br>Date</b></center></th>";
			htmlTableGird+="<th data-field=\"Field6\" ><center><b>Accum <br>Delay Days</b></center></th>";
			htmlTableGird+="<th data-field=\"Field7\" ><center><b>Responsibility</b></center></th>";
			htmlTableGird+="<th data-field=\"Field8\" ><center><b>Revised Target<br>(if no action)</b></center></th>";
		htmlTableGird+="</tr>";
	htmlTableGird+="</thead>";
	htmlTableGird+="<tbody>";
		htmlTableGird+="<tr>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
		htmlTableGird+="</tr>";
	htmlTableGird+="</tbody>";
	
	htmlTableGird+="</table>";
	
	$("#"+gridArea).html(htmlTableGird);
	
	};
	//--end
	
	//--end
	var grid = function(gridName,gridArea,gridData){
		
		createTableCreate(gridName,gridArea);
		//create table by dinamic web
		/*
		<table id="grid1">
		  <thead>
		      <tr>
				  
				  <!--<th class="k-hierarchy-cell k-header">&nbsp;</th>-->
		          <th data-field="Field1" ><center><b>Activity</b></center></th>
				  <th data-field="Field2"><center><b>Accum Days<br>Target</b></center></th>	 
				  <th data-field="Field3"><center><b>Target<br>Date</b></center></th>
				  <th data-field="Field4"><center><b>Accum<br>Actual Day</b></center></th>
				  <th data-field="Field5"><center><b>Actual<br>Date</b></center></th>
				  <th data-field="Field6"><center><b>Accum <br>Delay Days</b></center></th>
				  <th data-field="Field7"><center><b>Responsibility</b></center></th>
		          <th data-field="Field8"><center><b>Revised Target<br>(if no action)</b></center></th>
				 

			  </tr>
		  </thead>
		  <tbody>
		      <tr>
		          <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  
		      	  
			</tr>

		  </tbody>
		 </table>
		 
		*/
	
	
	var $title =[
	              {
	                  field: "Field1",
					   width: 220
	              },
	              {
	                  field: "Field2",
					  //width: 310
				 },
	              {
	                  field: "Field3",
					  //width: 70
				 },
	              {
	                  field: "Field4",
					  //width:100
				 },
	              {
	                  field: "Field5",
					  //width: 70
				 },
	              {
	                  field: "Field6",
					  //width: 100
				 },
	              {
	                  field: "Field7",
					  //width: 100
				 },
	              {
	                  field: "Field8",
					  //width: 90
				 }];
	
	
	var $data =[
                 {
                     Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
                     
                 },
                 {
                	 Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
					 
				},
                 {
                	 Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
					
                 }
				]; 
	
	
 $("#"+gridName).kendoGrid({
		 theme:$(document).data("kendoSkin") || "black",
		 dataSource: {
				 data:gridData
		 },
           scrollable:true,
           columns:$title
 });

};
//--end
//grid();

	
	//click event header for request content table grid

	
	$("h3.ui-accordion-header").live("click",function(){
		$(".ui-accordion-content").css({"height":"365px","padding":"2px"});
		var projectCode = this.id;
		$.ajax({
			url:'../Model/project_status_by_project_drilldown.jsp',
			type:'get',
			dataType:'json',
			data:{"paramProjectCode":projectCode,
				  "paramMonth":$("#embedParamMonth").val(),
				  "paramYear":$("#embedParamYear").val()},
			success:function(data){
				
				var objGird="";
				objGird+="[";
				var i=0;
				$.each(data,function(index,EntryIndex){
					if(i==0){
						objGird+="{";
					}else{
						objGird+=",{";
					}
					
					objGird+="Field1:\""+EntryIndex[0]+"\",";
					objGird+="Field2:\"<div class='txtNumber'>"+EntryIndex[1]+"</div>\",";
					objGird+="Field3:\""+EntryIndex[2]+"\",";
					objGird+="Field4:\"<div class='txtNumber'>"+EntryIndex[3]+"</div>\",";
					objGird+="Field5:\""+EntryIndex[4]+"\",";
					objGird+="Field6:\"<div class='txtNumber'>"+EntryIndex[5]+"</div>\",";
					objGird+="Field7:\"<div class='txtNumber'>"+EntryIndex[5]+"</div>\",";
					objGird+="Field8:\"<div class='txtNumber'>"+EntryIndex[5]+"</div>\"";
					objGird+="}";
				i++;	
				});
				objGird+="]";
				var objEval=eval("("+objGird+")");
				var gridName="grid"+projectCode;
				var gridArea="content"+projectCode;
				//alert("gridName="+gridName);
				//alert("gridArea="+gridArea);
				grid(gridName,gridArea,objEval);
			}
		});
		
	});
	
	//--end


	

	//--request username for get position
	var functionGetLevel = function(){
	
	$.ajax({
		url:"../Model/user_level.jsp",
		type:"get",
		dataType:'json',
		data:{"paramUserName":userNameLogin,"paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val()},
		async:false,
		success:function(data){
			//alert(data);
			user_level=data[0][0];//user_level
			golbal_user_level=data[0][0];
			user_data=data[0][1];//user_data
			golbal_user_data=data[0][1];
			
			//alert(golbal_user_level);
			$(".embedParamUser").remove();
			$("body").append("<input type=\"hidden\" id=\"embedParamGlobalUserLevel\" class=\"embedParamUser\" name=\"embedParamGlobalUserLevel\" value=\""+golbal_user_level+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamGlobalUserData\" class=\"embedParamUser\" name=\"embedParamGlobalUserData\" value=\""+golbal_user_data+"\">");
			//embed user golbal_user_level and golbal_user_data
			$("#cateProject").html(golbal_user_level);
			if(user_level=="CEO"){
				
			//single loop
				functionCEO(user_level,user_data);
				
				

			}else if(user_level=="CBO"){
			//multiloop
				functionCBO(user_level,user_data,cboAll="");
			}else if(user_level=="SBU"){
			//multiloop
				functionSBU(user_level,user_data,parentCbo="");
			}
			
			
		}
	});
	};
	//--end



	
	
	
	//check carrying cost
	$(".boxTxtRed").live("mouseenter",function(e){
			
			colorRateRed=$("#embedcolorRateRed").val();
			colorRateYellow=$("#embedcolorRateYellow").val();
			colorRateGreen=$("#embedcolorRateGreen").val();
			
			var widthTooltip=e.pageX+10;
			var heightTooltip=e.pageY+10;
			var overallId = this.id;
			//alert(overallId);
			var user_level=$("#"+overallId+" >ul li.user_level").text();
			var current_level=$("#"+overallId+" >ul li.current_level").text();
			var current_data=$("#"+overallId+" >ul li.current_data").text();
			var current_days=$("#"+overallId+" >ul li.current_days").text();
			
			
			//alert(overallId);
			/*
			alert("user_level"+user_level);
			alert("current_level"+current_level);
			alert("current_data"+current_data);
			alert("current_days"+current_days);
			*/
			$.ajax({
				url:'../Model/carrying_cost.jsp',
				type:'get',
				dataType:'json',
				data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramDays':current_days},
				success:function(data){
					//alert(data[0][0]);
					
					$("#carryingPrice").html(data[0][0]);
					$("#tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":colorRateRed,"border":"2px solid "+colorRateRed}).show();
				}
			});
			
		//alert("hello");
	}).live("mouseleave",function(){
		$("#tooltipContent").hide();
	});
	
	
	
	
	$(".boxTxtYellow").live("mouseenter",function(e){
		var widthTooltip=e.pageX+10;
		var heightTooltip=e.pageY+10;
		var overallId = this.id;
		var user_level=$("#"+overallId+" >ul li.user_level").text();
		var current_level=$("#"+overallId+" >ul li.current_level").text();
		var current_data=$("#"+overallId+" >ul li.current_data").text();
		var current_days=$("#"+overallId+" >ul li.current_days").text();
		
		//alert("user_level"+user_level);
		//alert("current_level"+current_level);
		//alert("current_data"+current_data);
		//alert("current_days"+current_days);
		
		$.ajax({
			url:'../Model/carrying_cost.jsp',
			type:'get',
			dataType:'json',
			data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramDays':current_days},
			success:function(data){
				//alert(data[0][0]);
				$("#carryingPrice").html(data[0][0]);
				$("#tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":"black","border":"2px solid "+colorRateYellow}).show();
			}
		});
		
		//alert("hello");
	}).live("mouseleave",function(){
		$("#tooltipContent").hide();
	});
		
	$(".boxTxtGreen").live("mouseenter",function(e){
		var widthTooltip=e.pageX+10;
		var heightTooltip=e.pageY+10;
		var overallId = this.id;
		var user_level=$("#"+overallId+" >ul li.user_level").text();
		var current_level=$("#"+overallId+" >ul li.current_level").text();
		var current_data=$("#"+overallId+" >ul li.current_data").text();
		var current_days=$("#"+overallId+" >ul li.current_days").text();
		
		//alert("user_level"+user_level);
		//alert("current_level"+current_level);
		//alert("current_data"+current_data);
		//alert("current_days"+current_days);
		
		$.ajax({
			url:'../Model/carrying_cost.jsp',
			type:'get',
			dataType:'json',
			data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramDays':current_days},
			success:function(data){
				//alert(data[0][0]);
				$("#carryingPrice").html(data[0][0]);
				$("#tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":colorRateGreen,"border":"2px solid "+colorRateGreen}).show();
			}
		});
		
		//alert("hello");
	}).live("mouseleave",function(){
		$("#tooltipContent").hide();
	});
	

	
	$("body").live("mouseenter",function(e){
		$("#tooltipContent").hide();
	});
	$("#cateProject").live("click",function(){
		$("a[href=#tab1]").click();
	});
	
	
});