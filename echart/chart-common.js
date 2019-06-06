var _fontSize = 14;

//两条面积折线图--显示同比
function createChart_areaLine(id,itemArr,dataArr1,dataArr2,style){
    var opt = {
        "showTitle":false,
        "title":"",
        "legend":["今日","昨日"],
        "showLegend":false
    };
    $.extend(true, opt, style);
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        //设置图表标题
        title:{
            show:opt.showTitle,
            text:opt.title,
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
                fontWeight: 'bold',
                color:'#ffffff',
                align:'center'
            }
        },
        tooltip: {//鼠标悬浮时显示的信息
            show:true,
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width:2
                }
            },
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            padding:10,
            borderWidth:2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius:10,
            formatter:function(item){
                var sb = [];
                for(var i = 0; i < item.length; i++) {
                    var t = item[i];
                    if(i == 0) {
                        sb.push(t.name);
                    }
                    var color = t.color;
                    sb.push('<br/>');
                    sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
                    sb.push(t.seriesName + "：" + t.value);
                }
                var v = parseInt((item[0].value-item[1].value)/item[1].value*100);
                sb.push('<br/>');
                sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:#f4717d;border-radius:50%;"></span>');
                if(isNaN(v)){
                    v=0;
                }
                if(v<0){
                    sb.push("同比: ↓ " +Math.abs(v)+"%");
                }else{
                    sb.push("同比: ↑ " +Math.abs(v)+"%");
                }
                return sb.join('');
            }
        },
        legend: {//图例
            show:opt.showLegend,
            data: opt.legend,
            right: '4%',
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            }
        },
        grid: {//边框
            top:'15%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
            show:true,
            borderWidth:0,
            borderColor:'rgba(255,255,255,.3)'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                margin:10,
                textStyle:{
                    color:'#fff',
                    fontSize:_fontSize
                }
            },
            axisLine:{
                lineStyle:{
                    width:2,
                    color: 'rgba(255,255,255,.3)'
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            data: itemArr
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel:{
                margin:10,
                textStyle:{
                    color:'#fff',
                    fontSize:_fontSize
                }
            },
            axisLine:{
                lineStyle:{
                    width:2,
                    color: 'rgba(255,255,255,.3)'
                }
            },
            splitArea:{show:false},
            splitLine:{
                show:false
            }
        }],
        series: [{
            name: opt.legend[0],
            type: 'line',
            smooth: true,
            symbol:'circle',
            symbolSize: 8,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#dac37d'
                }
            },
            itemStyle: {
                normal: {
                    color: '#f5c033'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(128, 101, 33, 0.2)'
                    }, {
                        offset: 0.6,
                        color: 'rgba(254,240,137, 0.5)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: dataArr1
        },{
            name: opt.legend[1],
            type: 'line',
            smooth: true,
            symbol:'circle',
            symbolSize: 8,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color:'#98d4d6'
                }
            },
            itemStyle: {
                normal: {
                    color: '#758ec4'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(124,152,227, 0.2)'
                    }, {
                        offset: 0.6,
                        color: 'rgba(119,207,218, 0.5)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: dataArr2
        }]
    };
    myChart.setOption(option);
    /*
     * 设置浮动框轮播
     */
    var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = dataArr2.length;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % num
        });
        count++;
    }, 3000);
}



// 多数据对比柱状图
function creatChart_multi_bar(id,itemArr,dataArr1,dataArr2,dataArr3,dataArr4,dataArr5,style){
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = creatChart_multi_bar_option(itemArr,dataArr1,dataArr2,dataArr3,dataArr4,dataArr5,style)
    myChart.setOption(option);
}

// 多数据对比柱状图option
function creatChart_multi_bar_option(itemArr,dataArr1,dataArr2,dataArr3,dataArr4,dataArr5,style){
	var opt={
        "showTitle":true,
        "title":"",
        "legend":['男', '女'],
        "showLegend":true
    };
    var _barWidth = '7%';
    $.extend(true, opt, style);
    var option = {
        //设置图表标题
        title:{
            show:opt.showTitle,
            text:opt.title,
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
                fontFamily: "迷你简汉真广标",
                fontWeight: 100,
                color:'#ffffff',
                align:'center'
            }
        },
        tooltip: {//鼠标悬浮时显示的信息
            trigger: 'axis',
            /*triggerOn:'none',*/
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width:5
                }
            },
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            padding:10,
            borderWidth:1,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius:10
        },
        legend: {//图例
            show: opt.showLegend,
            type: 'scroll',
            // icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            // itemGap: 100,
            data: opt.legend,
            bottom: 15,
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    fontSize:_fontSize,
                }
            }
        },
        grid: {//边框
            top:'5%',
            left: '2%',
            right: '2%',
            bottom: '20%',
            containLabel: true,
            show:true,
            borderWidth:0,
            borderColor:'rgba(255,255,255,.3)'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLabel:{
                margin:10,
                //rotate:20,
                textStyle:{
                    color:'#fff',
                    fontSize:_fontSize,
                    fontFamily: "迷你简汉真广标"
                }
            },
            axisLine:{
                lineStyle:{
                    width:2,
                    color: 'rgba(255,255,255,.3)'
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            data: itemArr
        }],
        yAxis: [{
            show: false
        }],
        series: [{
            name: opt.legend[0],
            type: 'bar',
            barWidth : _barWidth,
            itemStyle: {
                normal: {
                    color: '#0df8f0',
                    barBorderRadius:[10, 10, 10, 10]
                }
              },
            data: dataArr1
        },{
            name: opt.legend[1],
            type: 'bar',
            barWidth : _barWidth,
            barCategoryGap: '5%',
            itemStyle: {
                normal: {
                    color: '#f1826c',
                    barBorderRadius:[10, 10, 10, 10]
                }
           },
            data: dataArr2
        },{
            name: opt.legend[2],
            type: 'bar',
            barWidth : _barWidth,
            itemStyle: {
                normal: {
                    color: '#6548da',
                    barBorderRadius:[10, 10, 10, 10]
                }
           },
            data: dataArr3
        },{
            name: opt.legend[3],
            type: 'bar',
            barWidth : _barWidth,
            itemStyle: {
                normal: {
                    color: '#f0e938',
                    barBorderRadius:[10, 10, 10, 10]
                }
           },
            data: dataArr4
        },{
            name: opt.legend[4],
            type: 'bar',
            barWidth : _barWidth,
            itemStyle: {
                normal: {
                    color: '#3a8cd2',
                    barBorderRadius:[10, 10, 10, 10]
                }
           },
            data: dataArr5
        }]
    };
    return option;
}


// 折柱混合
function creatChartDZ(id, itemArr, dataArr) {
	echarts.dispose(document.getElementById(id));
	var myChart = echarts.init(document.getElementById(id));
	var option = {
		tooltip: { //鼠标悬浮时显示的信息
			show: true,
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(122,154,227,0.5)'
					}, {
						offset: 0.5,
						color: 'rgba(115,207,218,0.5)'
					}], false),
					width: 1
				}
			},
			textStyle: {
				fontSize: _fontSize,
				color: '#fff'
			},
			padding: 12,
			borderWidth: 2,
			borderColor: 'rgba(110,138,203,0.5)',
			borderRadius: 10
		},
		legend: { //图例
			show: false
		},
		grid: { //边框
			top: '15%',
			left: '2%',
			right: '2%',
			bottom: '3%',
			containLabel: true,
			show: true,
			borderWidth: 0,
			borderColor: 'rgba(255,255,255,.3)'
		},
		xAxis: {
			type: 'category',
			boundaryGap: true,
			axisLabel: {
				margin: 15,
				textStyle: {
					color: '#fff',
					fontSize: _fontSize
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			data: itemArr
			
		},
		yAxis: {
			type: 'value',
//			name: "警种数/种",
//			nameTextStyle: {
//				color: '#869bf5',
//				padding: 10,
//				fontSize: 30,
//				fontWeight: 'bold'
//			},
			axisTick: {
				show: false
			},
			axisLabel: {
				margin: 15,
				formatter: '{value}',
				textStyle: {
					color: '#fff',
					fontSize: _fontSize
				}
			},
			axisLine: {
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			},
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '',
			type: 'line',
			smooth: true,
			/*symbol: 'circle',*/
			symbolSize: 6,
			showSymbol: true,
//			yAxisIndex: 1,
			lineStyle: {
				normal: {
					width: 3,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(128,101,33,.5)'
					}, {
						offset: 0.5,
						color: 'rgba(254,240,137,.5)'
					}], false)
				}
			},
			itemStyle: {
				normal: {
					color: '#fff',
					borderColor: '#f7be33',
					borderWidth: 2

				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(128, 101, 33, 0.2)'
					}, {
						offset: 0.6,
						color: 'rgba(254,240,137, 0.5)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			data: dataArr
		}, {
			name: '',
			type: 'bar',
			barWidth: '40%',
			itemStyle: {
				normal: {
					color: '#869bf5'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					//distance: 40,
					textStyle: {
						color: '#fff',
						fontSize: _fontSize,
						fontFamily: 'Microsoft Yahei',
						fontWeight: 100
						//fontFamily:'MagistralBlackC'
					}
				}
			},
			data: dataArr
		}],
		animationEasing:'quadraticIn'
	};
	myChart.setOption(option);
	/*setInterval(function(){
		echarts.dispose(document.getElementById(id));
		var c = echarts.init(document.getElementById(id));
		c.setOption(option);
	},5000);*/
	/*
	 * 设置浮动框轮播
	 */
	/*var timeTicket = null;
	timeTicket && clearInterval(timeTicket);
	var count = 0;
	var num = dataArr.length;
	timeTicket = setInterval(function() {
		myChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: count % num
		});
		count++;
	}, 3000);*/
}



// 带背景的堆叠柱状图
function create_DT_Bar(id,itemData, valData, style){
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = create_DT_Bar_option(itemData, valData, style);
    myChart.setOption(option);
}

// 生成堆叠柱状图option对象
function create_DT_Bar_option(itemData, valData, style){
    var opt={
        "len":0,
        "showTitle":false,
        "title":"",
        "legend":[],
        "barWidth":'30%',
        "showLegend":false,
        "dd":false,//是否堆叠
        "colorArr":[
            ["#9cebe5","#0ec8b6"],
            ["#eeb48b","#e16f22"],
            ["#c04766","#d76d72"],
            ["#2dc6b2","#fdf189"]
        ]
    };
    $.extend(true, opt, style);
	var option = {
        tooltip : {
            show: true,
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width: 1
                }
            },
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            padding: 8,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5/*,
            formatter: '{b}：{c1}'*/
        },
        legend: {
            show: opt.showLegend,
            data: opt.legend,
            textStyle:{
                fontSize: _fontSize,
                color:'#ffffff'
            },
            right: '1%'
        },
        grid: {
            top: '25%',
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                splitArea:{show:false},
                axisLabel:{
                    textStyle:{
                        fontSize:_fontSize,
                        color:'#fff'
                    },
                    formatter: function (value, index) {
                    if(opt.len>0){
                        var names=value.split("");
                        var texts=[];
                        for(var i=0;i<names.length;i++){
                            var n = i%opt.len;
                            if(i>0&&n==0){
                                texts.push("\n");
                            }
                            texts.push(names[i]);
                        }
                        return texts.join('');
                    }else{
                        return value;
                    }
                }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: 'rgba(255,255,255,.3)'
                    }
                },
                data : itemData
            }
        ],
        yAxis : [
            {
                type : 'value',
                max:'dataMax',
                splitArea:{show:false},
                splitLine:{show:false},
                axisLabel:{
                    textStyle:{
                        fontSize:_fontSize,
                        color:'#fff'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: 'rgba(255,255,255,.3)'
                    }
                },
            }
        ],
        series :getBarSeries(valData,opt)
    };
    return option;
}

function getBarSeries(dataArr,opt){
    var sb = [];
    var legend = opt.legend;
    var colorArr = opt.colorArr;
    for(var i=0;i<dataArr.length;i++){
        var name ='';
        if(opt.showLegend==true){
            name = legend[i];
        }
        var obj={
            name: name,
            type: 'bar',
            barWidth : opt.barWidth,
            barGap:'0%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: colorArr[i][0]},
                            {offset: 0, color: colorArr[i][1]}
                        ]
                    )
                }
            },
            data: dataArr[i]
        }
        if(!isNull(opt.dd)){
            obj.stack="堆叠";
        }
        sb.push(obj);
    }
    return sb;
}

// 计算背景值
function getShadowData(dataArr){
    var shadow = 0;
    var data = dataArr[0];
    if(dataArr.length>1){
        var ss=[];
        for(var i=0;i<data.length;i++){
            var sum = 0;
            for(var j=0;j<dataArr.length;j++){
                var t = dataArr[j];
                sum+=parseInt(t[i]);
            }
            ss.push(sum);
            shadow = sum>shadow?sum:shadow;
        }
        // console.log("计算值",ss);
    }else{
        for(var i=0;i<data.length;i++){
            shadow = parseInt(data[i])>shadow?parseInt(data[i]):shadow;
        }
    }
    var arr = [];
    for(var i=0;i<dataArr[0].length;i++){
        arr.push(shadow*1.2);
    }
    // console.log("计算值",arr);    
    return  arr;
}
// 横向堆叠柱状图
function creatChart4(id, itemData, seriesData,style) {
     var opt={
        "lableSize":_fontSize
    };
    $.extend(true, opt, style);
    var itemFontsize = _fontSize;
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: { //鼠标悬浮时显示的信息
            show: true,
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width: 1
                }
            },
            textStyle: {
                fontSize: itemFontsize,
                color: '#fff'
            },
            padding: 6,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5,
            formatter: function(item) {
                var circle = '';
                var sb = [];
                for(var i = 1; i < item.length; i++) {
                    var t = item[i];
                    if(i == 1) {
                        sb.push(t.name);
                    }
                    var color = t.color.colorStops[1].color;
                    sb.push('<br/>');
                    sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
                    sb.push(t.seriesName + "：" + t.value);
                }
                return sb.join('');
            }
        },
        legend: {
            show:true,
            top: 0,
            right: 15,
            z: 2,
            itemHeight: 10,
            textStyle: {
                color: '#ffffff',
                fontSize: itemFontsize
            },
            data: ["男", "女"]
        },
        grid: {
            top: '14%',
            left: '2%',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            max: 'dataMax',
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            splitArea: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: opt.lableSize
                }
            },
            axisLine: {
                show: false
            },
            data: itemData
        },
        {
            type: 'category',
            splitArea: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: opt.lableSize
                }
            },
            axisLine: {
                show: false
            },
            data: [500,500,500,500,500]
        }],
        series: [{ //阴影
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(38,39,51,0.5)',
                        borderColor: '#2d93be',
                        borderWidth: 1,
                        barBorderRadius: 20
                    }
                },
                barWidth: '60%',
                barGap: '-85%',
                // data: getShadowData([seriesData]),
                data: [500,500,500,500,500],
                animation: true
            }, {
                name: '男',
                type: 'bar',
                barWidth: '40%',
                stack: '江苏',
                data: seriesData.valData1,
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 0, 0, 5],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#60efea'
                                },
                                {
                                    offset: 1,
                                    color: '#6f85fa'
                                }
                            ]
                        )

                    }
                }
            }
            ,{
                name: '女',
                type: 'bar',
                stack: '江苏',
                data: seriesData.valData2,
                itemStyle: {
                    normal: {
                        barBorderRadius: [0, 5, 5, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#84f2e7'
                                },
                                {
                                    offset: 1,
                                    color: '#45d3c4'
                                }
                            ]
                        )
                    }
                }
            }
        ],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    return;
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    /*
     * 设置浮动框轮播
     */
    var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = 8;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count % num
        });
        count++;
    }, 3000);
}


//玫瑰图 
function create_Rose_Chart(id, legendData, seriesData,colors) {
	echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = create_Rose_Chart_option(legendData, seriesData,colors);
    myChart.setOption(option);
}

//玫瑰图option
function create_Rose_Chart_option(legendData, seriesData,colors){
	var option = {
		color:colors,
        tooltip : {
            trigger: 'item',
            formatter: "{b} :<br/> {c} ({d}%)",
            // formatter: "{b} : {c} ({d}%)",
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            padding: 12,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 10
        },
        legend: {
            x : 'center',
            y : 'top',
            top: '10',
            // itemWidth: 10,
            itemHeight: 10,
            data: legendData,
            textStyle: {
                fontSize: 12,
                color: '#ffffff'
            } 
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : ['20%', '55%'],
                center : ['50%', '60%'],
                roseType : 'area',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#ec972c',
                                fontSize: _fontSize,
                                fontWeight: 600
                            },
                            formatter: '{b|{b}}：{c|{c}}',
                            // formatter: '{b|{b}}：\n {c|{c}}',
                            // formatter: function(item){
                            // 	var name = item.data.name;
                            // 	var value = item.data.value;
                            // 	var text = name+':'+value;
                            // 	if (text.length > 7){
                            // 		text = text.substring(0,7)+"\n"+text.substring(7,text.length);
                            // 	}
                            // 	return text
                            // },
                            rich: {
                                b: {
                                    color: '#ec972c',
                                    fontWeight: 600
                                },
                                c: {
                                    color: '#fff',
                                    align: 'center',
                                    fontWeight: 600
                                }
                            }
                        },
                        labelLine: {
                            show: true,
                            // length: 40,
                            lineStyle: {
                               width: 2
                            }
                        }
                    }
                },
                data:seriesData
            }
        ]
    };
    return option;
}

//带线的柱状图
function creatChart_line_bar(id, itemArr, dataArr) {
	echarts.dispose(document.getElementById(id));
	var myChart = echarts.init(document.getElementById(id));
	var option = creatChart_line_bar_option(itemArr, dataArr);
	myChart.setOption(option);
}

//带线的柱状图-option
function creatChart_line_bar_option(itemArr, dataArr){
	var option = {
		tooltip: { //鼠标悬浮时显示的信息
			show: true,
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(122,154,227,0.5)'
					}, {
						offset: 0.5,
						color: 'rgba(115,207,218,0.5)'
					}], false),
					width: 1
				}
			},
			textStyle: {
				fontSize: _fontSize,
				color: '#fff'
			},
			padding: 12,
			borderWidth: 2,
			borderColor: 'rgba(110,138,203,0.5)',
			borderRadius: 10,
			formatter:function(item){
					var sb = [];
					var t = item[1];
					sb.push(t.name);
					var color = t.color;
					//sb.push('<br/>');
					//sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
					sb.push(t.seriesName + ":" + t.value);
					//sb.push('<br/>');
					return sb.join('');
			}
		},
		legend: { //图例
			show: false
		},
		grid: { //边框
			top: '15%',
			left: '2%',
			right: '2%',
			bottom: '3%',
			containLabel: true,
			show: true,
			borderWidth: 0,
			borderColor: 'rgba(255,255,255,.3)'
		},
		xAxis: {
			type: 'category',
			boundaryGap: true,
			axisLabel: {
				margin: 15,
				textStyle: {
					color: '#fff',
					fontSize: _fontSize
				},
				interval:0
			},
			axisLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			data: itemArr
			
		},
		yAxis: {
			type: 'value',
//			name: "警种数/种",
//			nameTextStyle: {
//				color: '#869bf5',
//				padding: 10,
//				fontSize: 30,
//				fontWeight: 'bold'
//			},
			axisTick: {
				show: false
			},
			axisLabel: {
				margin: 15,
				formatter: '{value}',
				textStyle: {
					color: '#fff',
					fontSize: _fontSize
				}
			},
			axisLine: {
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			},
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		series: [{
			name: '',
			type: 'line',
			smooth: true,
			/*symbol: 'circle',*/
			symbolSize: 8,
			showSymbol: true,
//			yAxisIndex: 1,
			lineStyle: {
				normal: {
					width: 2,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(128,101,33,.5)'
					}, {
						offset: 0.5,
						color: 'rgba(254,240,137,.5)'
					}], false)
				}
			},
			itemStyle: {
				normal: {
					color: '#fff',
					borderColor: '#f7be33',
					borderWidth: 2

				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(128, 101, 33, 0.2)'
					}, {
						offset: 0.6,
						color: 'rgba(254,240,137, 0.5)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			data: dataArr
		}, {
			name: '',
			type: 'bar',
			barWidth: '40%',
			itemStyle: {
				normal: {
					color: '#869bf5'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					//distance: 40,
					textStyle: {
						color: '#fff',
						fontSize: _fontSize,
						fontFamily: 'Microsoft Yahei',
						fontWeight: 600
						//fontFamily:'MagistralBlackC'
					}
				}
			},
			data: dataArr
		}],
		animationEasing:'quadraticIn'
	};
	return option;
}

//单独的柱状图
function creatChart_bar(id, itemData, valData) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width: 1
                }
            },
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            padding: 6,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5,
            formatter: '{b}：{c1}'
        },
        grid: {
            top: '10%',
            left: '17%',
            right:'5%',
            bottom:'15%'
        },
        xAxis: [{
            type: 'category',
            data: itemData,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: _fontSize
                }
                // ,
                // formatter: function(value) {
                //     return value.split("").join("\n");
                // }
            },
			axisLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			}
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
				show: false
			},
			axisLabel: {
				margin: 15,
				formatter: '{value}',
				textStyle: {
					color: '#fff',
					fontSize: _fontSize
				}
			},
			axisLine: {
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.3)'
				}
			},
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			}
        }],
        series: [{
            type: 'bar',
//			symbol: spirit,
//			symbolRepeat: false,
            animation:true,
//			symbolMargin: '10%', //图形的两边间隔（『两边』是指其数值轴方向的两边）
            itemStyle: {
                normal: {
                    color: 'rgba(53,124,157,0.2)'
                }
            },
            silent: true,
            barWidth: '50%',
            barGap: '-100%', // Make series be overlap
            data: [1000, 1000, 1000, 1000, 1000, 1000]
        }, {
            type: 'bar',
            barWidth: '50%',
            z: 10,
            data: valData,
            itemStyle: {
                normal: {
//					barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#88f3e8'
                            },
                            {
                                offset: 1,
                                color: '#44d4c5'
                            }
                        ]
                    )

                }
            }
        }],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    /*
     * 设置浮动框轮播
     */
    var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = 11;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count % num
        });
        count++;
    }, 3000);
}

//数据湖
function initDataRiverChart(id, itemData, legendData, valData1, valData2) {
	echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = initDataRiverChart_option(itemData, legendData,valData1, valData2);
    myChart.setOption(option);
}

//数据湖option 
function initDataRiverChart_option(itemData, legendData,valData1, valData2){
	var localPath = window.location.href;
    var spirit = "image://" + localPath.substring(0, localPath.indexOf("/LYGDP/")) + "/LYGDP/img/pic8.svg";
    var spirit1 = "image://" + localPath.substring(0, localPath.indexOf("/LYGDP/")) + "/LYGDP/img/pic7.svg";
    var itemFontsize = _fontSize;
    var lableSize = _fontSize;
    var symbolSize = [50, 20];
    var symbolColor = ["#0DAC5D"];
    var fontColor = '#fff';
    var option = {
        tooltip: { //鼠标悬浮时显示的信息
            show: true,
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: 'rgba(122,154,227,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(115,207,218,0.5)'
                    }], false),
                    width: 1
                }
            },
            textStyle: {
                fontSize: lableSize,
                color: '#fff'
            },
            padding: 8,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5,
            formatter:function(item){
                var circle = '';
                var sb=[];
                var colorArr=['#1383e0','#06caa8'];
                for(var i=0;i<item.length;i++){
                    var t = item[i];
                    if(i==0){
                        sb.push(t.name);
                    }
                    var color = colorArr[i];
                    sb.push('<br/>');
                    sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:'+color+';border-radius:50%;"></span>');
                    sb.push(t.seriesName+"："+t.value+"人");
                }
                return sb.join('');
            }
        },
        grid: {
            top: '30%',
            left: '12%',
            right: '5%',
            bottom: '18%'
        },
        legend: {
            top: 10,
            right: '2%',
            orient: 'vertical',
            textStyle: {
                color: fontColor,
                fontSize: lableSize,
                fontFamily: 'Microsoft YaHei',
            },
            data: legendData   //['出入境登记数', '宾馆登记数']
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width:2,
                    color: 'rgba(255,255,255,.3)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: fontColor,
                    fontSize: itemFontsize,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data: itemData
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    width:2,
                    color: 'rgba(255,255,255,.3)'
                }
            },
            axisLabel: {
                margin:10,
                textStyle:{
                    color: fontColor,
                    fontSize: itemFontsize
                }
            }
        },
        series: [{
            name: legendData[0],  //'出入境登记数',
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: true,
            symbolClip: true,
            symbolMargin: '-12%',
            symbolSize: [30, 20],
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: 0,
                    textStyle: {
                        // color: '#1383e0',
                        color: '#fff',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei'
                    }
                }
            },
            data: valData1,
            z: 10
        }, {
            name: legendData[1],  //'宾馆登记数',
            type: 'pictorialBar',
            barGap: '-60%',
            barCategoryGap: '50%',
            symbol: spirit1,
            symbolRepeat: true,
            symbolMargin: '-12%',
            symbolClip: true,
            symbolSize: [30, 20],
            data: valData2,
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: 0, // 距离图形元素的距离
                    textStyle: {
                        // color: '#06caa8',
                        color: '#fff',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei'
                    }
                }
            },
            z: 11
        }],
        animationEasing:'quadraticIn'
    };
    return option;
}


//横向柱状图
function create_hx_Bar(id, itemData, valData, valData2){
	echarts.dispose(document.getElementById(id));
	var myChart = echarts.init(document.getElementById(id));
	var option = create_hx_Bar_option(itemData, valData, valData2);
	myChart.setOption(option);
}

//横向柱状图option
function create_hx_Bar_option(itemData, valData, valData2){
	var option = {
		tooltip: { //鼠标悬浮时显示的信息
			show: true,
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 1,
						color: 'rgba(122,154,227,0.5)'
					}, {
						offset: 0.5,
						color: 'rgba(115,207,218,0.5)'
					}], false),
					width: 1
				}
			},
			textStyle: {
				fontSize: _fontSize,
				color: '#fff'
			},
			padding: 12,
			borderWidth: 2,
			borderColor: 'rgba(110,138,203,0.5)',
			borderRadius: 10,
			formatter: function(item) {
				var circle = '';
				var sb = [];
				for(var i = 1; i < item.length; i++) {
					var t = item[i];
					if(i == 1) {
						sb.push(t.name);
					}
					var color = t.color.colorStops[1].color;
					//sb.push('<br/>');
					//sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
					//sb.push(t.seriesName + "：" + t.value);
					sb.push("：" + t.value);
				}
				return sb.join('');
			}
		},
		grid: {
			left: '12%',
			right: '8%',
			bottom: '0%',
		},
		xAxis: [{
			type: 'value',
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: false,
			},
			axisLine: {
				show: false,
			}
		}],
		yAxis: [{
			type: 'category',
			splitArea: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#ffffff',
                    fontFamily : 'Microsoft YaHei',
					fontSize: _fontSize
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(77,77,77,0.85)'
				}
			},
			data: itemData
		},{
			type: 'category',
			splitArea: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#ffffff',
                    fontFamily : '锐字锐线怒放黑简1.0',
                    fontSize: _fontSize
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(77,77,77,0.85)'
				}
			},
			data: valData
		}],
		series: [
            { //阴影
				type: 'bar',
				itemStyle: {
					normal: {
						color: 'rgba(38,39,51,0.5)',
						borderColor: '#2d93be',
						borderWidth: 1,
						barBorderRadius: 20
					}
				},
				barWidth: '60%',
				barGap: '-85%',
				//data: [4000, 4000, 4000, 4000, 4000, 4000, 4000],
				data: valData2,
				animation: false
			}, {
				name: '地区',
				type: 'bar',
				barWidth: '40%',
				stack: '显示地区',
				data: valData,
				itemStyle: {
					normal: {
						barBorderRadius: 5,
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#66f3ea'
								},
								{
									offset: 1,
									color: '#7284fa'
								}
							]
						)

					}
				}
			}
		],
		animationEasing:'quadraticIn'
	};
	return option;
}

