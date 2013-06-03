$(document).ready(function(){
	

	var $title =[
	              {
	                  field: "Field1",
					  // width: 220
	              },
	              {
	                  field: "Field2",
					  //type: "number" 
					  //width: 310
				 },
	              {
	                  field: "Field3",
					  //width: 70
				 },
	              {
	                  field: "Field4",
					 //type: "number" 
					 //width:100
				 }];
	
	var $data =[
                {
                    Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>30</div> ",
					Field4: "5",

                    
                },
                {
                	Field1: "4/1/2013",
					Field2: "สมหญิง ยิ่งเจริญ",
                    Field3: " <div id='textR'>50</div> ",
					Field4: "<div id='textR'>12</div>",
					 
				},
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",

					
                },
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",

					
                },
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",

					
                },
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",

					
                },
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",

					
                },
                {
					Field1: "4/1/2013",
					Field2: "สมศรี ดีเลิศ",
                    Field3: " <div id='textR'>20</div> ",
					Field4: "<div id='textR'>2</div>",
                }
				]; 
	
	
	var setGrid = function(){
		
	 $("#grid1").kendoGrid({
		 theme:$(document).data("kendoSkin") || "black",
		 dataSource: {
				 data:$data
		 },
           scrollable:true,
		   sortable: true,
           columns:$title
	 });
	 
	 $("#grid2").kendoGrid({
		 theme:$(document).data("kendoSkin") || "black",
		 dataSource: {
				 data:$data
		 },
           scrollable:true,
		   sortable: true,
           columns:$title
	 });
	 
	};
	setGrid();
	
	
	var setGraph = function(){
		 $(".graph").kendoChart({
             title: {
                 text: "Site Visitors Stats /thousands/"
             },
             chartArea: {
            	    width: 480,
            	    height:280
             },
             legend: {
                 visible: false
             },
             seriesDefaults: {
                 type: "column"
             },
             series: [{
                 name: "Total Visits",
                 data: [56000, 63000, 74000, 91000, 117000, 138000]
             }, {
                 name: "Unique visitors",
                 data: [52000, 34000, 23000, 48000, 67000, 83000]
             }],
             valueAxis: {
                 max: 140000,
                 line: {
                     visible: false
                 },
                 minorGridLines: {
                     visible: true
                 }
             },
             categoryAxis: {
                 categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                 majorGridLines: {
                     visible: false
                 }
             },
             tooltip: {
                 visible: true,
                 template: "#= series.name #: #= value #"
             }
         });
	};
	//setGraph();
	var setGraphjPlot1 = function(){
		var s1 = [200, 600, 700, 1000];
	    var s2 = [460, -210, 690, 820];
	    var s3 = [-260, -440, 320, 200];
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
	    var ticks = ['May', 'June', 'July', 'August'];
	     
	    var plot1 = $.jqplot('graph1', [s1, s2, s3], {
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	            renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:[
	            {label:'Hotel'},
	            {label:'Event Regristration'},
	            {label:'Airfare'}
	        ],
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: true,
	            placement: 'insideGrid'
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                pad: 1.05,
	                tickOptions: {formatString: '$%d'}
	            }
	        }
	    });
	};
	setGraphjPlot1();
	
	var setGraphjPlot2 = function(){
		var s1 = [200, 600, 700, 1000];
	    var s2 = [460, -210, 690, 820];
	    var s3 = [-260, -440, 320, 200];
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
	    var ticks = ['May', 'June', 'July', 'August'];
	     
	    var plot1 = $.jqplot('graph2', [s1, s2, s3], {
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	            renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:[
	            {label:'Hotel'},
	            {label:'Event Regristration'},
	            {label:'Airfare'}
	        ],
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: true,
	            placement: 'insideGrid'
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                pad: 1.05,
	                tickOptions: {formatString: '$%d'}
	            }
	        }
	    });
	};
	setGraphjPlot2();
	
	var setGraphjPlot3 = function(){
		var s1 = [200, 600, 700, 1000];
	    var s2 = [460, -210, 690, 820];
	    var s3 = [-260, -440, 320, 200];
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
	    var ticks = ['May', 'June', 'July', 'August'];
	     
	    var plot1 = $.jqplot('graph3', [s1, s2, s3], {
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	            renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:[
	            {label:'Hotel'},
	            {label:'Event Regristration'},
	            {label:'Airfare'}
	        ],
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: true,
	            placement: 'insideGrid'
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                pad: 1.05,
	                tickOptions: {formatString: '$%d'}
	            }
	        }
	    });
	};
	setGraphjPlot3();
	
	var setGraphjPlot4 = function(){
		var s1 = [200, 600, 700, 1000];
	    var s2 = [460, -210, 690, 820];
	    var s3 = [-260, -440, 320, 200];
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
	    var ticks = ['May', 'June', 'July', 'August'];
	     
	    var plot1 = $.jqplot('graph4', [s1, s2, s3], {
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	            renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:[
	            {label:'Hotel'},
	            {label:'Event Regristration'},
	            {label:'Airfare'}
	        ],
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: true,
	            placement: 'insideGrid'
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                pad: 1.05,
	                tickOptions: {formatString: '$%d'}
	            }
	        }
	    });
	};
	setGraphjPlot4();
	
	$(".box").shadow();
});
	
