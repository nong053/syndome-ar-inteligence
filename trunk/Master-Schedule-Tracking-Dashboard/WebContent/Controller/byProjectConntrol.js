
	//alert($("#embedParamGlobalUserLevel").val());
	//alert($("#embedParamGlobalUserData").val());
	//call ajax content by project
	var listCateProject=function(){
		//alert($("#sorting").val());
	$.ajax({
		url:'../Model/projectStatusByProject.jsp',
		type:'get',
		dataType:'json',
		data:{"paramUserLevel":$("#embedParamGlobalUserLevel").val(),
			  "paramUserData":$("#embedParamGlobalUserData").val(),
			  "paramYear":$("#embedParamYear").val(),
			  "paramMonth":$("#embedParamMonth").val(),
			  "paramOrderBy":$("#sorting").val(),
			  },
		success:function(data){
			//alert(data);
			var htmlCateProject="";
			htmlCateProject+="<div id=\"accordion\">";
			$.each(data,function(index,EntryIndex){
				/*
				 <h3>Section 2</h3>
				<div>
				<p>
				Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
				purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
				velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
				suscipit faucibus urna.
				</p>
				</div>
				 */
				var imageStatusProject="";
				if(EntryIndex[3]=="Delay"){
					//alert("Delay");
					imageStatusProject="../images/delay.png";
				}else if(EntryIndex[3]=="Ontime"){
					//alert("Ontime");
					imageStatusProject="../images/ontime.png";
				}
				htmlCateProject+="<h3 id='"+EntryIndex[0]+"'><div class='titleProject'><div class='txt'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+EntryIndex[1]+"</div></div><div class='statusProjectColor' style='background-image:url("+imageStatusProject+");'></div></h3>";
				htmlCateProject+="<div>";
				htmlCateProject+="<p id='content"+EntryIndex[0]+"'>";
				//htmlCateProject+="test content";
				htmlCateProject+="</p>";
				htmlCateProject+="</div>";
				/*
				console.log(EntryIndex[0]);
				console.log(EntryIndex[1]);
				console.log(EntryIndex[2]);
				console.log(EntryIndex[3]);
				console.log("------------");
				*/
			});
			htmlCateProject+="</div>";
			$("#accordionArea").html(htmlCateProject);
			$("#accordion").accordion({
				heightStyle: "content"
			});
			$("h3.ui-accordion-header").css({"padding":"0px","pdding-left":"25px","height":"33px"});
			//alert(htmlCateProject);
			$(".ui-accordion-content").css({"height":"0px","padding":"0px"});
		}
	});
	//--end
	
	};
	
	$("#sorting").kendoDropDownList();
	$("#sorting").change(function(){
		//alert($(this).val());
		$("#embedParamSort").remove();
		$("body").append("<input type='hidden' id='embedParamSort' name='embedParamSort' value='"+$(this).val()+"'>");
		listCateProject();
	});
	
	$("#sorting").change();
