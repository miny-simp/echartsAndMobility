/*!
 * echart3统计图表基本函数
 * 当前版本：1.0
 * 创建人：胡海莉
 * 创建时间：20190214
 * 需要引用echart脚本库配合使用
 */

/*
* 保留几位小数
* num:要处理的数
* n:保留小数的位数
* */
function parseFloatTo(num,n){//alert("num"+num+",n="+n);
    var r = '';
    if(!isNull(num)){
        var i = parseInt(n);
        r = parseFloat(num).toFixed(i);
    }
    if(num==0||num=="0"){
        r=0;
    }
    return r;
}
//判断变量是否为空
function isNull(inVariable){
	if(typeof inVariable=='undefined'||inVariable == "" || inVariable == "null" || inVariable == ""||inVariable==null){
		return true;
	}else{
		return false;
	}
}



/**
 * @author hhl
 * @dateTime 2019-02-14
 * @param    {String}   type      [统计图类型]
 * @param    {Object}   param     [对象属性]
 *     @param {[type]} [varname] [description]
 */
function ZdChart(type,param){
	this.type = type;
	this.param = param;
	this.param.fontsize = this.getFontSize();
}

ZdChart.prototype.init = function(){
	switch (this.type) {
		case 'shadowPie':
			this.creatShadowPie(this.param);
			break;
		case 'shadowBar':
			this.creatShadowBar(this.param);
			break;
	}
}
/**
 * 设置字体大小
 */
ZdChart.prototype.getFontSize = function(){
	var _this = this;
	var id = _this.param.id;
	var len = 0;
	var height = $("#"+id).height();
	var width = $("#"+id).width();
	len = height < width ? height:width;
	return parseInt(len/18)
}
/**
 * 创建带阴影的饼状图
 * @param    {Object}   param     [对象属性]
 *     @param {Array} data 数据 {"item":['名称1','名称2','名称3'],"value":[123,3341,432]} 不可缺省
 */
ZdChart.prototype.creatShadowPie = function(param){
	var _this = this;
	var opt = {
			center:['50%','50%'],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
			radius1:['25%', '25.5%'],//内圈线半径范围
			radius2:['30%', '40%'],//阴影圈半径范围
			radius3:['30%', '55%'],//数据圈半径范围
			radius1Color:'rgba(255,255,255,0.2)',//内圈线颜色
			radius2Color:'rgba(0,0,0,0.2)',//阴影圈颜色
			colors:['#62AF81','#327AA2','#1F5095','#F7C143']//整体颜色系列
		};
	$.extend(true, opt, param);
	var myChart = echarts.init(document.getElementById(param.id));
	var series_data = _this.getPieDataArr(1)[0];
	var option = {
		color:opt.colors,
		legend:_this.getLegendArr(),
	    series: [
	    	{
	            name:'内圈线',
	            type:'pie',
	            center:opt.center,
	            radius: opt.radius1,
	            avoidLabelOverlap: true,
	            hoverAnimation:false,
                itemStyle :　{
	                normal : {
	                    label : {
	                        show : false
	                    },
	                    labelLine : {
	                        show : false
	                    }
	                }
                },
	            data:[
	                {value:900, name:'内圈线',itemStyle:{normal:{color:opt.radius1Color}}},
	            ]
	        },
	        {
	            name:'阴影圈',
	            type:'pie',
	            center:opt.center,
	            radius: opt.radius2,
	            avoidLabelOverlap: true,
	            hoverAnimation:false,
	            z:2,
                itemStyle :　{
	                normal : {
	                    label : {
	                        show : false
	                    },
	                    labelLine : {
	                        show : false
	                    }
	                }
                },
	            data:[
	                {value:900, name:'阴影圈',itemStyle:{normal:{color:opt.radius2Color}}},
	            ]
	        },
	        {
	            name:'数据圈',
	            type:'pie',
	            center:opt.center,
	            radius: opt.radius3,
	            avoidLabelOverlap: true,
	            hoverAnimation:true,
	            hoverOffset:10,
	            z:1,
	            itemStyle :　{
	                normal : {
	                    label : {
	                        show : false
	                    },
	                    labelLine : {
	                        show : false
	                    }
	                }
                },
	            data:series_data
	        }
	    ]
	};
	myChart.setOption(option);
}
/**
 * 获取pie一类的统计图图例对象
 * @param {Object} legendObj 图例数据
 **/
ZdChart.prototype.getLegendArr = function(){
	var _this = this;
	var opt = {
			"legendType":"1",//1:单列,2:两列
			"orient":"vertical",//vertical:纵向排列，horizontal:横向排列
			"left":'auto',
			"right":'1%',
			"top":'middle',
			"bottom":'auto',
			"left1":'1%',
			"right1":'auto',
			"top1":'middle',
			"bottom1":'auto'
		};
	$.extend(true, opt, _this.param);
	var legendData = _this.getPieLegendObj(opt.legendType);
	var lData = _this.getPieDataArr(opt.legendType);
	//var legendArr = [];
	var legendArr = [{
			orient: opt.orient,
			left:opt.left,
			right:opt.right,
			top:opt.top,
			bottom:opt.bottom,
			data:lData[0],
			textStyle : {
                color : '#fff',
                fontFamily : 'Microsoft YaHei',
                fontSize : opt.fontsize,
                rich:{
                	name:{
                		color:'#fff',
                		fontSize:opt.fontsize,
                		padding:[opt.fontsize/3,0,0,0]
                	},
                	per:{
                		color:'#fff',
                		fontSize:opt.fontsize,
                		padding:[0,0,0,0]
                	},
                	val:{
                		color:'#eaab11',
                		fontSize:opt.fontsize,
                		fontWeight:600,
                		padding:[0,0,0,opt.fontsize/3*2]
                	}
                }	
            },
			itemWidth:opt.fontsize,
            itemHeight:opt.fontsize,
            formatter:function(name){
            	var val = legendData[0][name].val;
            	var per = legendData[0][name].per;
            	return '{name|'+name+'}\n{per|'+per+'}{val|'+val+'}'
            }
		},{
			orient: opt.orient,
			left:opt.left1,
			right:opt.right1,
			top:opt.top1,
			bottom:opt.bottom1,
			data:lData[1],
			textStyle : {
                color : '#fff',
                fontFamily : 'Microsoft YaHei',
                fontSize : opt.fontsize,
                rich:{
                	name:{
                		color:'#fff',
                		fontSize:opt.fontsize,
                		padding:[opt.fontsize/3,0,0,0]
                	},
                	per:{
                		color:'#fff',
                		fontSize:opt.fontsize,
                		padding:[0,0,0,0]
                	},
                	val:{
                		color:'#eaab11',
                		fontSize:opt.fontsize,
                		fontWeight:600,
                		padding:[0,0,0,opt.fontsize/3*2]
                	}
                }	
            },
			itemWidth:opt.fontsize,
            itemHeight:opt.fontsize,
            formatter:function(name){
            	if(!isNull(legendData[1])){
            		var val = legendData[1][name].val;
            		var per = legendData[1][name].per;
            		return '{name|'+name+'}\n{per|'+per+'}{val|'+val+'}';
            	}
            }
		}]
	//legendArr.push(legendObj);
	return legendArr;
}
/**
 * 获取pie类型的统计图数据数组
 * @param {Array} itemArr 类目数据
 * @param {Array} dataArr 数据值
 * @param {Array} colorArr 颜色
 */
 ZdChart.prototype.getPieDataArr = function(type){
	var arr = [];
	var itemArr0 = (this.param.data.item).slice(0);
	var itemArr1 = [];
	var dataArr0 = (this.param.data.value).slice(0);
	var dataArr1 = [];
	var len = parseInt(itemArr0.length/2);
	if(type=="2"){
		itemArr1 = itemArr0.splice(len);
		dataArr1 = dataArr0.splice(len);
	}
	arr[0]=this.creatPieDataArr(itemArr0,dataArr0);
	arr[1]=this.creatPieDataArr(itemArr1,dataArr1);
	return arr;
}
ZdChart.prototype.creatPieDataArr = function(itemArr,dataArr){
	var sb = [];
	for(var i=0;i<itemArr.length;i++){
		var obj = {};
		obj.value=dataArr[i];
		obj.name=itemArr[i];
		sb.push(obj);
	}
	return sb;
}
/**
 * 获取pie类型的图例数据对象
 * @param {Array} itemArr 类目数据
 * @param {Array} dataArr 数据值
 */
ZdChart.prototype.getPieLegendObj = function(type){
	var arr = [];
	var itemArr0 = (this.param.data.item).slice(0);
	var itemArr1 = [];
	var dataArr0 = (this.param.data.value).slice(0);
	var sum = 0;
	for(var i=0;i<dataArr0.length;i++){
		sum+=parseFloat(dataArr0[i]);
	}
	var dataArr1 = [];
	var len = parseInt(itemArr0.length/2);
	if(type=="2"){
		itemArr1 = itemArr0.splice(len);
		dataArr1 = dataArr0.splice(len);
	}
	arr[0]=this.createLegendObj(itemArr0,dataArr0,sum);
	arr[1]=this.createLegendObj(itemArr1,dataArr1,sum);
	return arr;
}
//
ZdChart.prototype.createLegendObj = function(itemArr,dataArr,sum){
	var obj = {};
	for(var i=0;i<itemArr.length;i++){
		obj[itemArr[i]]={};
		obj[itemArr[i]]["val"]=dataArr[i];
	}
	for(var j=0;j<itemArr.length;j++){
		obj[itemArr[j]]["per"] = parseFloatTo(100*dataArr[j]/sum,1)+"%";
	}
	return obj;
}
/**
 * 创建带阴影的柱状图
 * @param    {Object}   param     [对象属性]
 *     @param {Array} data 数据 不可缺省 {"item":['名称1','名称2','名称3'],"value":[123,3341,432]}
 */
ZdChart.prototype.creatShadowBar = function(param){
	var _this = this;
	var opt = {
			left:'0%',
			right:'0%',
			top:'15%',
			bottom:'20%',
			shadowBarColor:'rgba(53,124,157,0.2)',//作为背景柱子的颜色
			barWidth:'50%',//柱子宽度
			startColor:'#5ED4DA',
			endColor:'#357C9D'
			
		};
	$.extend(true, opt, param);
	var myChart = echarts.init(document.getElementById(param.id));
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
					width: opt.fontsize/8
				}
			},
			textStyle: {
				fontSize: opt.fontsize,
				color: '#fff'
			},
			padding: opt.fontsize/3,
			borderWidth: opt.fontsize/8,
			borderColor: 'rgba(110,138,203,0.5)',
			borderRadius: opt.fontsize/2,
			formatter: '{b}：{c1}'
		},
		grid: {
			left: opt.eft,
			right:opt.right,
			bottom:opt.bottom,
			top:opt.top
		},
		xAxis: [{
			type: 'category',
			data: param.data.item,
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff',
					fontSize: opt.fontsize
				},
				formatter: function(value) {
					return value.split("").join("\n");
				}
			},
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			}
		}],
		series: [{
			type: 'bar',
			animation:true,
			itemStyle: {
				normal: {
					color: opt.shadowBarColor
				}
			},
			silent: true,
			barWidth: opt.barWidth,
			barGap: '-100%', // Make series be overlap
			data: _this.getShadowData()
		}, {
			type: 'bar',
			barWidth: opt.barWidth,
			z: 10,
			data: param.data.value,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: opt.startColor
							},
							{
								offset: 1,
								color: opt.endColor
							}
						]
					)

				}
			}
		}],
		animationEasing:'quadraticIn'
	};
	myChart.setOption(option);
}
//计算背景值
ZdChart.prototype.getShadowData = function(){
	var data = (this.param.data.value).slice(0);
	var shadow = 0;
	for(var i=0;i<data.length;i++){
		shadow = data[i]>shadow?data[i]:shadow;
	}
	var arr = [];
	for(var i=0;i<data.length;i++){
		arr.push(shadow*1.2);
	}
	return  arr;
}