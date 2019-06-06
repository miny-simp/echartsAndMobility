var _fontSize = 28;
//统计图背景图片
var barBgimg=[
//蓝色
'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAxCAYAAAC27tuNAAACQ0lEQVRYhc2YIWwUQRSGv7s0JJ0gEDUIqlB1uLpBMQqDqsBAEA0JTQkCg7gE26QXSJoKkpqSoDCoqWIcDkFShcLUVFQ006QhHOJ2m+Ox1+7Mm9ve53Z239svf/Z+cb3BYEBpjHVvgTeKFd/6pWRqjHWLwLpyzXZxMeAxsKSY/wV8LipmrOsBm8o172Pwv0sn9gBYUcyfAh8ASou9VM7vxeBPoKCYsW6FcWK5/AHe1RclE9sEeor5LzH4n/VFETFj3RLjX6OG4eRFqcTWgUXF/PcY/NfJA7WYse4G8Fy5ZigPSiS2BtxWzB8Bn+RhCTFtoe7E4M/loUrMWHcfuKdYcQrsNt3QJvZaOb8Xgz9uupEtVhWqy1YShSrRJFa0UCVZYrMoVEluYsULVZIsNqtCleQkNpNCleSIzaRQJUliBQr1jCmFKklNTJvW/rRClbQWM9bdBR5mK8GIFh99TUpiG4nPSw5i8IdtH271ImPdLeBJttKY7ZSH2ybwDLiZ7nLBD+AgZeBKsapQN3KNKrZi8KOUgTaJrQF38nyAloUqaSPWSaFKLhXrslAlVyXWWaFKpop1XaiSyxLrtFAljS++jkKVTEtEW6iHJBaq5D8xY90C8EKzFBimFqqkKbFHwLJi5zGwr5gHmsW0/wruxuDPlDv+FTPWrQKrin3nwI7KqEImpk3rYwz+SLkDmBAz1i0z/r5yGQFbaqOKycReAQuKXapClfTholCfKnepClVSJ3bthSrpz0uhSvrMSaFK+sxJoUr+AqgimzmxofkcAAAAAElFTkSuQmCC',
//绿色
'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA+CAYAAABtCJj3AAADAElEQVRogc2asUsjQRyFP4MrHFhY2NhYWVmN1QnTWF11NgcHFtcIV8iBh3dwvf+BoodYCDYWVjZ2VjYD6dzKysrGxsJCEBzRK2JkM9nE7M6b5b4um8ybvHnJvhB+Y5ubmzSFM74NfBRKtltCsaE445fQvnmArcYMABtivWvgpBEDzvg5YFksu2vz7KmpBH4Cyr3ugQPEoqU446eAVbHsoc2zO2jAAPAdmBTqPQM73QdJDTjjx4F1seypzbOr7oPUCXwBZsWa28UHqQ38Eutd2Dw7L15IZsAZvwgsimW3wwspE1Cf/g1wHF5MYsAZP0vn869kz+bZY3gxVQLrwLhQ7x7YL3tCbsAZP0nn3q/k0ObZbdkTKRJYBaaEej3FFSI14Ixv0fndo6SnuELUCSwDc2LNvltnEbUB9W/+vuIKkRlwxi8ASyq9V4aePmgTUJ9+aXGFSAw442eAFYVWgdLiClEl8AOYEGkBPDCguEKiDTjjPwBrsToBR4OKK0SRwDdgWqDT5YURvrxdogw448fQf3nPbJ5djvri2AQ+A/ORGiFbVV4ca+B35PqQS+CsyoLaBlIVl82zlyoLYhJQf/ZvgaOqi2oZSFRc+zbPHqouqpuAurgegb06CysbSFRcxzbPbuosrJOAurigQnGFVDKQqLjObZ5d1F1cNYFP6Iur9ulDdQPqP6uugNMYgZENOOPn6SSgZMfm2XOMQJUENoCxmM0C7oDDWJGRDDjjp+ncfZT8tXl2HysyagJrwIfYzQrULq6Qdw044yfoNK+S2sUVMkoCK8CMYrMCUbfOIqMY+K+KK2SogdfxgAXVZq/ITh/eT0B9+tHFFTLQQKLxgOjiChmWgHo8QFJcIaVvMNF4wIGiuEIGnbB6POAJ2BXqvdFnINF4wInNs2uxJlCewFf04wGV/qyqQpmBP+I92jbP2mLNN3oMJCquZKcP/QkkmWsTa/bwZiDlXJtYs4diAsnm2lLSgvRzbSnpnnjSubaUtJqYa0tJiwbm2lLSooG5tpT8A9fBw7myVpqyAAAAAElFTkSuQmCC'
]
//9色圆环
var peiColorArr=['247,193,67','31,80,149','50,122,162','98,175,129','152,113,19','201,90,56','165,202,76','97,64,111','50,153,218'];
//5色圆环-圆环和饼状图中的圆环
var peiColorArr2=['97,64,111','165,202,76','31,80,149','201,90,56','50,153,218'];
//计算背景值
//dataArr:[[12,324,123,412],[654,234,12,54]]
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
        //console.log("计算值",ss);
    }else{
        for(var i=0;i<data.length;i++){
            shadow = parseInt(data[i])>shadow?parseInt(data[i]):shadow;
        }
    }
    var arr = [];
    for(var i=0;i<dataArr[0].length;i++){
        arr.push(shadow*1.2);
    }
    //console.log("计算值",arr);    
    return  arr;
}

var gy_areaArr =[
    {name: '同兴', value:'123', selected: false ,code:"320723640000"},
    {name: '伊山', value:'432', selected: false ,code:"320723510000"},
    {name: '杨集', value:'1234', selected: false ,code:"320723520000"},
    {name: '燕尾港', value:'2', selected: false ,code:"320723530000"},
    {name: '四队', value:'', selected: false ,code:"320723620000"},
    {name: '龙苴', value:'', selected: false ,code:"320723770000"},
    {name: '图河', value:'', selected: false ,code:"320723660000"},
    {name: '仲集', value:'', selected: false ,code:"320723710000"},
    {name: '东王集', value:'', selected: false ,code:"320723690000"},
    {name: '侍庄', value:'', selected: false ,code:"320723740000"},
    {name: '小伊', value:'', selected: false ,code:"320723720000"},
    {name: '南岗', value:'', selected: false ,code:"320723750000"},
    {name: '临港', value:'', selected: false ,code:"320723560000"},
    {name: '洋桥', value:'', selected: false ,code:"320723790000"},
    {name: '圩丰', value:'', selected: false ,code:"320723610000"}
];
var gyChart=null;
//灌云县echart地图
/*function initChartMap(){
    gyChart = echarts.init(document.getElementById('GYmap'));
    gyChart.setOption(mapoption);
    mapInterval(gyChart);
}*/
var mapoption = {
    title : {
        show:false,
        text: '灌云县',
        subtext: '区划图',
        x:'center'
    },
    tooltip : {
        show:false,
        trigger: 'item'
    },
    /*geo: {
        map: '灌云县',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    }, */                             
    series : [
        {
            name: '',
            type: 'map',
            map: '灌云县',
            hoverable:false,//鼠标hover事件
            selectedMode:'single',//鼠标点击事件：单击
            roam: false,
            zoom:1.2,//缩放倍数，放大1.2倍
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fff',
                            fontFamily:'Microsoft YaHei',
                            fontSize:_fontSize
                        }
                    },
                    borderColor:'#2EC7F5',
                    borderWidth:'3',
                    areaColor:'rgba(17,50,97,0.5)'                                                         
                },
                emphasis:{
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fff',
                            fontFamily:'Microsoft YaHei',
                            fontSize:_fontSize
                        }
                    },
                    areaColor:'#d88e31'
                }
            },
            data:gy_areaArr
        }
        /*{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:[],
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }*/               
    ]
};


//类温度计刻度样式统计图
function creatChart1(id, itemData, valData,style) {
    var opt={
        "len":0,
        "left": '0%',
        "right": '0%',
        "bottom": '10%',
        "rotate":0,
        "margin":20,
        "labelSize":_fontSize
    };
    $.extend(true, opt, style);
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
            padding: 8,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5,
            formatter: '{b}：{c1}'
        },
        grid: {
            left: opt.left,
            right: opt.right,
            bottom: opt.bottom
            //containLabel: true
        },
        xAxis: [{
            type: 'category',
            splitArea: {
                show: false
            },
            axisLabel: {
                rotate:opt.rotate,
                margin:opt.margin,
                textStyle: {
                    color: '#ffffff',
                    fontSize: opt.labelSize
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
                lineStyle: {
                    width:4,
                    color: '#667888'
                }
            },
            data: itemData
        }],
        yAxis: [{
            type: 'value',
            max: 'dataMax',
            splitLine: {
                show:false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#b2b2b2',
                    fontSize: _fontSize
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    width:4,
                    color: '#667888'
                }
            },
        }],
        series: [{ //阴影
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(38,39,51,0.01)',
                    borderColor: '#2d93be',
                    borderWidth: 2,
                    barBorderRadius: 20
                }
            },
            barWidth: '42%',
            barGap: '-85%',
            data: getShadowData([valData]),
            animation: false
        }, {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'true',
            symbolClip: true,
            symbolMargin: '20%',
            symbolSize: [45, 10], //标记的大小， 表示标记宽为20，高为10。
            itemStyle: {
                normal: {
                    color: '#27a9e3'
                }
            },
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    color: '#ec972c',
                    fontWeight:600,
                    fontSize: _fontSize
                }
            },
            symbolOffset: [0, -10], //标记相对于原本位置的偏移
            data: valData,
            z: 10
        }],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    /*
     * 设置浮动框轮播
     */
    /*var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = 6;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % num
        });
        count++;
    }, 3000);*/
}
//两条面积折线图
function createChart2(id,itemArr,dataArr1,dataArr2,style){
    var opt = {
            "showTitle":false,
            "title":"",
            "legend":["今日","昨日"],
            "showLegend":false
        };
    $.extend(true, opt, style);
    var myChart = echarts.init(document.getElementById(id));
    var option = {
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
            borderWidth:4,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius:8,
            formatter:function(item){
                var sb = [];
                for(var i = 0; i < item.length; i++) {
                    var t = item[i];
                    if(i == 0) {
                        sb.push(t.name);
                    }
                    var color = t.color;
                    sb.push('<br/>');
                    sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
                    sb.push(t.seriesName + ":" + t.value);
                }
                var v = parseInt((item[0].value-item[1].value)/item[1].value*100);
                sb.push('<br/>');
                sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:#f4717d;border-radius:50%;"></span>');
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
            left: '0%',
            right: '2%',
            bottom: '3%',
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
            symbolSize: 20,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 4,
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
            symbolSize: 20,
            showSymbol: true,
            lineStyle: {
                normal: {
                    width: 4,
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
    /*var timeTicket = null;
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
    }, 3000);*/
}
//斜线横向统计图
function createChart3(id,imgtype,styleObj,itemData,valData){
    var itemFontsize=_fontSize;
    var lableSize = _fontSize;
    var gridLeft = 200;
    var gridRight = 120;
    var symbolSize = [24, 30];
    var max = 0;
    for(var i=0;i<itemData.length;i++){
        if(valData[i]>max){
            max = valData[i];
        }
    }
    max = max*1.2;
    if(styleObj&&styleObj.itemFontsize){
        itemFontsize=styleObj.itemFontsize;
    }
    if(styleObj&&styleObj.lableSize){
        lableSize=styleObj.lableSize;
    }
    if(styleObj&&styleObj.gridLeft){
        gridLeft=styleObj.gridLeft;
    }
    if(styleObj&&styleObj.gridRight){
        gridRight=styleObj.gridRight;
    }
    if(styleObj&&styleObj.symbolSize){
        symbolSize=styleObj.symbolSize;
    }
    var height = $("#"+id).height();
    var maxData = max;
    var spirit = barBgimg[imgtype];
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: {
            show:false
        },
        xAxis: {
            max: maxData,
            splitLine: {show: false},
            offset: 10,
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {show: false},
            axisLabel: {show:false}
        },
        yAxis: {
            data: itemData,
            inverse: true,
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: itemFontsize,
                    fontFamily:'Microsoft YaHei',
                    fontWeight:600
                }
            }
        },
        grid: {
            top: 'center',
            height:height,
            left: gridLeft,
            right: gridRight
        },
        series: [{
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: 'fixed',
            symbolMargin: '-10%',
            symbolClip: true,
            symbolSize: symbolSize,
            symbolBoundingData: maxData,
            data: valData,
            z: 10
        }, {
            type: 'pictorialBar',
            //color:['#94bdc5'],
            itemStyle: {
                normal: {
                    opacity: 0.2
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{c}',
                    position: 'right',
                    align:'right',
                    offset: [gridRight-20, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: lableSize,
                        fontFamily:'Microsoft YaHei'
                    }
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '-10%',
            symbol: spirit,
            symbolSize: symbolSize,
            symbolBoundingData: maxData,
            data: valData,
            z: 5
        }]
    };
    myChart.setOption(option);
}
//3D柱状图
function create3DChart(id, itemData, valData1, valData2,style) {
    var opt={
        "len":0
    };
    $.extend(true, opt, style);
    var localPath = window.location.href;
    var spirit = "image://" + localPath.substring(0, localPath.indexOf("/GYDP/")) + "/GYDP/img/pic8.svg";
    var spirit1 = "image://" + localPath.substring(0, localPath.indexOf("/GYDP/")) + "/GYDP/img/pic7.svg";
    var itemFontsize = 25;
    var lableSize = _fontSize;
    var symbolSize = [50, 20];
    var symbolColor = ["#0DAC5D"];
    var fontColor = '#fff';
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
                    sb.push(t.seriesName+"："+t.value);
                }
                return sb.join('');
            }
        },
        grid: {
            top: '20%',
            left: '0%',
            right: '2%',
            bottom:'0%',
            containLabel: true
        },
        legend: {
            show:false
        },
        xAxis: [{
            type: 'category',
            axisLabel:{
                margin:20,
                textStyle:{
                    color:'#fff',
                    fontSize:itemFontsize
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
            data: itemData
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
            name: '上月',
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: true,
            symbolClip: true,
            symbolMargin: '-12%',
            symbolSize: [80, 20],
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#1383e0',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 600
                    }
                }
            },
            data: valData1,
            z: 10
        }, {
            name: '本月',
            type: 'pictorialBar',
            barGap: '-60%',
            barCategoryGap: '50%',
            symbol: spirit1,
            symbolRepeat: true,
            symbolMargin: '-12%',
            symbolClip: true,
            symbolSize: [80, 20],
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
                    textStyle: {
                        color: '#06caa8',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 600
                    }
                }
            },
            z: 11
        }],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    /*
     * 设置浮动框轮播
     */
    /*var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = valData1.length;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count % num
        });
        count++;
    }, 3000);*/
}
//横向堆叠柱状图
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
            show:false,
            top: 20,
            right: 15,
            z: 2,
            textStyle: {
                color: '#ffffff',
                fontSize: itemFontsize
            },
            data: ["今日", "昨日"]
        },
        grid: {
            left: '2%',
            right: '0%',
            bottom: '-5%',
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
                lineStyle: {
                    color: 'rgba(77,77,77,0.85)'
                }
            },
            data: itemData
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
                data: getShadowData([seriesData]),
                animation: false
            }, {
                name: '',
                type: 'bar',
                barWidth: '40%',
                stack: '江苏',
                data: seriesData,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#0a53f7'
                                },
                                {
                                    offset: 1,
                                    color: '#01ffe0'
                                }
                            ]
                        )

                    }
                }
            }
            /*,{
                name: '',
                type: 'bar',
                stack: '江苏',
                data: seriesData.zr,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#f49f2b'
                                },
                                {
                                    offset: 1,
                                    color: '#ffe649'
                                }
                            ]
                        )
                    }
                }
            }*/
        ],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    return;
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
//带背景的柱状图
function creatChart5(id,style,itemData,valData){
    var opt = {
            left:'0%',
            right:'0%',
            top:'15%',
            bottom:'0%',
            shadowBarColor:'#0d2f3f',//作为背景柱子的颜色
            barWidth:'40%',//柱子宽度
            startColor:"#8df4e9",
            endColor:'#4ad4c5',
            fontsize:_fontSize
        };
    $.extend(true, opt, style);
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
            top:opt.top,
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
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
            data: itemData
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
        /*xAxis: [{
            type: 'category',
            data:itemData,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: opt.fontsize
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
        }],*/
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
            data:getShadowData([valData])
        }, {
            type: 'bar',
            barWidth: opt.barWidth,
            z: 10,
            data: valData,
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





// 柱状图
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
			symbolSize: 16,
			showSymbol: true,
//			yAxisIndex: 1,
			lineStyle: {
				normal: {
					width: 4,
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
					borderWidth: 4

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
/**
 * 带阴影的圆环统计图 显示类目数值和百分比的
 * @param {String} id 容器id
 * @param {Array} dataArr 外圈数据
 * @param {Array} dataArr2 内圈阴影数据及样式
 **/
function createRingChartWithNum(id,dataArr,dataArr2,style){
    var opt = {
            "center":['50%','50%'],
            "showTitle":false,
            "title":"",
            "showLegend":true,
            "seriesName1":"占比统计",
            "seriesName2":"人员标签",
            "lb":true    //轮播
        };
    $.extend(true, opt, style);
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title:{
            show:opt.showTitle,
            text:opt.title,
            right:'10%',
            textStyle:{
                fontSize:_fontSize,
                color:'#e08f2c',
                align:'center'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            textStyle: {
                fontSize: 30,
                color: '#fff'
            },
            padding: 12,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 10
        },
        legend: {
        	show:opt.showLegend,
            orient: 'vertical',
            x: 'left',
            data:[dataArr2[0].name,dataArr2[1].name],
            textStyle: {
                fontSize: _fontSize,
                color: '#ffffff'
            }    
        },
        series: [
            {
                name:opt.seriesName1,
                type:'pie',
                center:opt.center,
                selectedMode: 'single',
                radius: [0, '25%'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{d}%',
                        fontSize: _fontSize
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:dataArr2
            },
            {
                name:opt.seriesName2,
                type:'pie',
                center:opt.center,
                radius: ['40%', '50%'],
                avoidLabelOverlap: true,
                hoverAnimation:true,
                hoverOffset:8,
                itemStyle :　{
                    normal : {
                        label : {
                            show : true,
                            textStyle : {
                                color : '#fff',
                                align : 'center',
                                baseline : 'bottom',
                                fontFamily : 'Microsoft YaHei',
                                fontSize : _fontSize
                            },
                            formatter: "{per|{d}%} \n{hr|}{b|{b}}",
                            rich: {
                                per: {//百分比
                                    color: '#fff',
                                    fontSize: _fontSize,
                                    fontFamily : 'Microsoft YaHei',
                                    lineHeight: 40,
                                    align: 'left'
                                },
                                hr: {
                                    backgroundColor: '#62af81',
                                    width: 24,
                                    height: 24,
                                    align: 'left'
                                },
                                b: {
                                    color: '#fff',
                                    fontSize: _fontSize,
                                    fontFamily : 'Microsoft YaHei',
                                    lineHeight: 34,
                                    padding:[0,0,0,5],
                                    align: 'left'
                                }
                            }
                        },
                        labelLine : {
                            show : true,
                            length : 15,
                            length2 : 45,
                            lineStyle : {
                                color : 'rgba(255,255,255,0.5)',
                                width : 4,
                                type : 'solid'
                            }
                        }
                    }
                },
                data:dataArr
            }
        ]
    };
    myChart.setOption(option);
    if (opt.lb){
    	/*
        * 设置浮动框轮播
        */
	    var timeTicket = null;
	    timeTicket && clearInterval(timeTicket);
	    var count=0;
	    var num = dataArr.length;
	    timeTicket = setInterval(function() {
	        myChart.dispatchAction({
	            type: 'downplay',
	            seriesIndex: 2
	        });
	        myChart.dispatchAction({
	            type: 'highlight',
	            seriesIndex: 2,
	            dataIndex: count % num
	        });
	        /* myChart.dispatchAction({
	            type: 'showTip',
	            seriesIndex: 0,
	            dataIndex: count % num
	        });*/
	        count++;
	    }, 3000);
    }
    
}
/**
 * 获取外圈数据数及样式
 * @param {Array} itemArr 类目数据
 * @param {Array} dataArr 数据值
 * @param {Array} colorArr 颜色
 */
function getDataArr(itemArr,dataArr,colorArr){
    var sb = [];
    var c = colorArr.length;
    for(var i=0;i<itemArr.length;i++){
        var obj = {};
        obj.value=dataArr[i];
        obj.name=itemArr[i];
        var n = i%c;
        obj.itemStyle={
            normal:{
                color:'rgba('+colorArr[n]+',1)',
                label:{
                    rich:{
                        hr:{
                            backgroundColor:'rgba('+colorArr[n]+',1)'
                        }
                    }
                }
            }
        }
        sb.push(obj);
    }
    return sb;
}
/**
 * 获取内圈数据及样式
 * @param {Array} itemArr 类目数据
 * @param {Array} dataArr 数据值
 * @param {Array} colorArr 颜色
 */
function getDataArr2(itemArr,dataArr,colorArr){
    var sb = [];
    var c = colorArr.length;
    for(var i=0;i<itemArr.length;i++){
        var obj = {};
        obj.value=dataArr[i];
        obj.name=itemArr[i];
        var n = i%c;
        obj.itemStyle={
            normal:{
                color:'rgba('+colorArr[n]+',0.8)'
            }
        }
        sb.push(obj);
    }
    return sb;
}

// 带背景的堆叠柱状图
function create_DT_Bar(id,itemData, valData, style){
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = create_DT_Bar_option(itemData, valData, style);
    myChart.setOption(option);
}

//生成堆叠柱状图option对象
function create_DT_Bar_option(itemData, valData, style){
    var opt={
        "len":0,
        "showTitle":false,
        "title":"",
        "legend":[],
        "barWidth":'30%',
        "showLegend":false,
        "dd":true,//是否堆叠
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
                fontSize: 30,
                color:'#ffffff'
            },
            right: '1%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
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



// 多数据对比柱状图
function creatBarChart(id,itemArr,dataArr1,dataArr2,style){
    var opt={
        "showTitle":true,
        "title":"2019年暂住人口年龄段统计图",
        "legend":['男', '女'],
        "showLegend":true,
        "interval":0
    };
    $.extend(true, opt, style);
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var labelColor = '#fff';
    var option = {
        //设置图表标题
        title:{
            show:opt.showTitle,
            text:opt.title,
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
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
            // icon: 'circle',
            // itemWidth: 10,
            // itemHeight: 10,
            // itemGap: 100,
            data: opt.legend,
            right: '4%',
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#f7be33',
                    borderWidth: 2
                }
            }
        },
        grid: {//边框
            top:'8%',
            left: '3%',
            right: '4%',
            bottom: '3%',
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
                    fontSize:_fontSize
                },
                interval:opt.interval
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
//		        name: '单位（%）',
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
            name: '男',
            type: 'bar',
            barWidth : '30%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#8695f5'},
                            {offset: 0, color: '#89f8fc'}
                        ]
                    )
                }
              },
            data: dataArr1
        },{
            name: '女',
            type: 'bar',
            barWidth : '30%',
            barGap:'0%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#eaab11'},
                            {offset: 0, color: '#fef089'}
                        ]
                    )
                }
           },
            data: dataArr2
        }]
    };
    myChart.setOption(option);
    /**
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    */
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
    var spirit = "image://" + localPath.substring(0, localPath.indexOf("/GYDP/")) + "/GYDP/img/pic8.svg";
    var spirit1 = "image://" + localPath.substring(0, localPath.indexOf("/GYDP/")) + "/GYDP/img/pic7.svg";
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
            top: '12%',
            left: '8%',
            right: '2%'
        },
        legend: {
            // top: '25%',
            right: '1%',
            // orient: 'vertical',
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
            symbolSize: [80, 20],
            itemStyle: {
                normal: {
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#1383e0',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 600
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
            symbolSize: [80, 20],
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
                    textStyle: {
                        color: '#06caa8',
                        fontSize: lableSize,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 600
                    }
                }
            },
            z: 11
        }],
        animationEasing:'quadraticIn'
    };
    return option;
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
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: "{b} : {c} ({d}%)",
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
            top: '0px',
            data: legendData,
            textStyle: {
                fontSize: _fontSize,
                color: '#ffffff'
            } 
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : ['20%', '75%'],
                center : ['50%', '55%'],
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
                            //formatter: '{b}\n {c}',
                            formatter: function(item){
                            	var name = item.data.name;
                            	var value = item.data.value;
                            	var text = name+':'+value;
                            	if (text.length > 7){
                            		text = text.substring(0,7)+"\n"+text.substring(7,text.length);
                            	}
                            	return text
                            },
                            rich: {
                                b: {
                                    color: '#ec972c',
                                },
                                c: {
                                    color: '#fff',
                                }
                            }
                        },
                        labelLine: {
                            show: true,
                            // length: 40,
                            lineStyle: {
                               width: 4
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

//横向柱状图 ---- 一组数据
function creatChart9(id, itemData, valData, valData2){
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
	myChart.setOption(option);
	setInterval(function(){
		echarts.dispose(document.getElementById(id));
		var c = echarts.init(document.getElementById(id));
		c.setOption(option);
	},5000);
	return;
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


function createChartJT(id,itemArr,dataArr1,dataArr2,chartTitle){
	var myChart = echarts.init(document.getElementById(id));
	var option = {
			title: {
					text: chartTitle,
					textStyle: {
						fontSize: 30,
						color: '#ffffff'
					},
					left: '35%'
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
					borderWidth:4,
					borderColor: 'rgba(110,138,203,0.5)',
					borderRadius:8,
					formatter:function(item){
							var sb = [];
							for(var i = 0; i < item.length; i++) {
									var t = item[i];
									if(i == 0) {
											sb.push(t.name);
									}
									var color = t.color;
									sb.push('<br/>');
									sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
									sb.push(t.seriesName + ":" + t.value);
							}
							var v = parseInt((item[0].value-item[1].value)/item[1].value*100);
							sb.push('<br/>');
							sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:#f4717d;border-radius:50%;"></span>');
							if(v<0){
									sb.push("同比: ↓ " +Math.abs(v)+"%");
							}else{
									sb.push("同比: ↑ " +Math.abs(v)+"%");
							}
							return sb.join('');
					}
			},
			legend: {//图例
				  data:['今日','昨日'],
					right: '1%',
					textStyle: {
							fontSize: 30,
							color: '#ffffff'
					}
			},
			grid: {//边框
					top:'10%',
					left: '0%',
					right: '2%',
					bottom: '1%',
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
					name: '今日',
					type: 'line',
					smooth: true,
					symbol:'circle',
					symbolSize: 20,
					showSymbol: true,
					lineStyle: {
							normal: {
									width: 4,
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
					name: '昨日',
					type: 'line',
					smooth: true,
					symbol:'circle',
					symbolSize: 20,
					showSymbol: true,
					lineStyle: {
							normal: {
									width: 4,
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
	setInterval(function(){
		echarts.dispose(document.getElementById(id));
		var c = echarts.init(document.getElementById(id));
		c.setOption(option);
	},5000);
}
// 横向柱状图 ---- 一组数据  横向渐变
function creatChart10(id, itemData, valData, shadowData){
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
					sb.push('<br/>');
					sb.push('<span style="display:inline-block;width:10px;height:10px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
					sb.push(t.seriesName + "：" + t.value);
				}
				return sb.join('');
			}
		},
		grid: {
			left: '20%',
			right: '8%',
			top: '1%',
			bottom: '2%'
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
				show: false,
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
				show: false,
				lineStyle: {
					color: 'rgba(77,77,77,0.85)'
				}
			},
			//data: valData
			data: shadowData
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
				//data:shadowData,
				data: getShadowData([shadowData]),
				animation: false
			}, {
				name: '在线数量',
				type: 'bar',
				barWidth: '40%',
				stack: '显示地区',
				data: valData,
				itemStyle: {
					normal: {
						barBorderRadius: 5,
						color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0, [{
									offset: 0,
									color: '#79d8ca'
								},
								{
									offset: 1,
									color: '#c6a13f'
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
	setInterval(function(){
		echarts.dispose(document.getElementById(id));
		var c = echarts.init(document.getElementById(id));
		c.setOption(option);
	},5000);
	return;
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

//类温度计刻度样式统计图 2
function creatChart11(id, itemData, valData) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        //设置图表标题
        title:{
            text:"本周定位汇聚统计图",
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
                color:'#ffffff',
                align:'center'
            }
        },
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
            padding: 8,
            borderWidth: 2,
            borderColor: 'rgba(110,138,203,0.5)',
            borderRadius: 5,
            formatter: '{b}：{c1}'
        },
        grid: {
            left: '10%',
            right: '0%',
            bottom: '10%'
            //containLabel: true
        },
        xAxis: [{
            type: 'category',
            splitArea: {
                show: false
            },
            axisLabel: {
                margin:15,
                textStyle: {
                    color: '#ffffff',
                    fontSize: _fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    width:4,
                    color: '#667888'
                }
            },
            data: itemData
        }],
        yAxis: [{
            type: 'value',
            max: 'dataMax',
            splitLine: {
                show:false
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                // show: false,
                textStyle: {
                    color: '#ffffff',
                    fontSize: _fontSize
                }
            },
            axisLine: {
                // show:false,
                lineStyle: {
                    width:4,
                    color: '#667888'
                }
            },
        }],
        series: [{ //阴影
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(38,39,51,0.01)',
                    borderColor: '#2d93be',
                    borderWidth: 2,
                    barBorderRadius: 20
                }
            },
            barWidth: '42%',
            barGap: '-85%',
            data: getShadowData([valData]),
            animation: false
        }, {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'true',
            symbolClip: true,
            symbolMargin: '20%',
            symbolSize: [45, 10], //标记的大小， 表示标记宽为20，高为10。
            itemStyle: {
                normal: {
                    color: '#27a9e3'
                }
            },
            label: { //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    color: '#ec972c',
                    fontWeight:600,
                    fontSize: _fontSize
                }
            },
            symbolOffset: [0, -10], //标记相对于原本位置的偏移
            data: valData,
            z: 10
        }],
        animationEasing:'quadraticIn'
    };
    myChart.setOption(option);
    setInterval(function(){
        echarts.dispose(document.getElementById(id));
        var c = echarts.init(document.getElementById(id));
        c.setOption(option);
    },5000);
    /*
     * 设置浮动框轮播
     */
    /*var timeTicket = null;
    timeTicket && clearInterval(timeTicket);
    var count = 0;
    var num = 6;
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % num
        });
        count++;
    }, 3000);*/
}


//堆积面积图
function create_multi_area(id,legendData,itemArr,data1,dataArr1,data2,dataArr2,dataArr3,interval){
	if (isNull(interval)){
		interval = 0;
	}
	echarts.dispose(document.getElementById(id));
	var myChart = echarts.init(document.getElementById(id));
	var option = create_multi_area_option(legendData,itemArr,data1,dataArr1,data2,dataArr2,dataArr3,interval);
	myChart.setOption(option);
}

//堆积面积图option 
function create_multi_area_option(legendData,itemArr,data1,dataArr1,data2,dataArr2,dataArr3,interval){
	var option = {
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
					borderWidth:4,
					borderColor: 'rgba(110,138,203,0.5)',
					borderRadius:8,
					formatter:function(item){
							var sb = [];
							for(var i = 0; i < item.length; i++) {
									var t = item[i];
									if(i == 0) {
											sb.push(t.name);
									}
									var color = t.color;
									sb.push('<br/>');
									sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:' + color + ';border-radius:50%;"></span>');
									sb.push(t.seriesName + ":" + t.value);
							}
							sb.push('<br/>');
							sb.push('<span style="display:inline-block;width:15px;height:15px;margin-right:10px;background:#f4717d;border-radius:50%;"></span>');
							var dataIndex = item[0].dataIndex;
						    var tbz = dataArr3[dataIndex];   //同比值
						    var str = "";
						    var v = "";
							if (tbz.indexOf("-")>-1){
							    str = tbz.substring(1,tbz.length);
							    v = parseFloat(str)*100;
							    sb.push("同比: ↓ " +v+"%");
							}else{
								str = tbz;
							    v = parseFloat(str)*100;
							    sb.push("同比: <span style='color:red;'>↑ " +Math.abs(v)+"%</span>");
							}
							
							return sb.join('');
					}
			},
			legend: {//图例
				    data:legendData,  //['今年','昨年'],
					right: '1%',
					textStyle: {
							fontSize: 30,
							color: '#ffffff'
					}
			},
			grid: {//边框
					top:'10%',
					left: '3%',
					right: '4%',
					bottom: '1%',
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
							},
							interval:interval
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
					name: data1,
					type: 'line',
					smooth: true,
					symbol:'circle',
					symbolSize: 20,
					showSymbol: true,
					lineStyle: {
							normal: {
									width: 4,
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
					name: data2,
					type: 'line',
					smooth: true,
					symbol:'circle',
					symbolSize: 20,
					showSymbol: true,
					lineStyle: {
							normal: {
									width: 4,
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
			symbolSize: 16,
			showSymbol: true,
//			yAxisIndex: 1,
			lineStyle: {
				normal: {
					width: 4,
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
					borderWidth: 4

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



// 多数据对比柱状图
function creatChart_multi_bar(id,itemArr,dataArr1,dataArr2,style){
    echarts.dispose(document.getElementById(id));
    var myChart = echarts.init(document.getElementById(id));
    var option = creatChart_multi_bar_option(itemArr,dataArr1,dataArr2,style)
    myChart.setOption(option);
}

// 多数据对比柱状图option
function creatChart_multi_bar_option(itemArr,dataArr1,dataArr2,style){
	var opt={
        "showTitle":true,
        "title":"2019年暂住人口年龄段统计图",
        "legend":['男', '女'],
        "showLegend":true,
        "colors1":['rgb(200,159,62)','rgb(117,216,203)'],  //第一根柱子渐变色
        "colors2":['rgb(191,68,101)','rgb(252,166,132)']   //第二根柱子渐变色
    };
    $.extend(true, opt, style);
    var labelColor = '#fff';
    var option = {
        //设置图表标题
        title:{
            show:opt.showTitle,
            text:opt.title,
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
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
            // icon: 'circle',
            // itemWidth: 10,
            // itemHeight: 10,
            // itemGap: 100,
            data: opt.legend,
            right: '4%',
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#f7be33',
                    borderWidth: 2
                }
            }
        },
        grid: {//边框
            top:'8%',
            left: '3%',
            right: '4%',
            bottom: '3%',
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
//		        name: '单位（%）',
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
            type: 'bar',
            barWidth : '30%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: opt.colors1[0]},
                            {offset: 0, color: opt.colors1[1]}
                        ]
                    )
                }
              },
            data: dataArr1
        },{
            name: opt.legend[1],
            type: 'bar',
            barWidth : '30%',
            barGap:'0%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: opt.colors2[0]},
                            {offset: 0, color: opt.colors2[1]}
                        ]
                    )
                }
           },
            data: dataArr2
        }]
    };
    return option;
}
// 多数据对比柱状图
function creatBarChart2(id,itemArr,dataArr,style){
    var opt={
        "animation":true,
        "len":0,
        "top":'8%',
        "left": '3%',
        "right": '4%',
        "bottom": '3%',
        "showTitle":false,//是否显示标题
        "title":"",//标题
        "legend":[],//图例
        "showLegend":false,
        "barWidth":'30%',
        "colorArr":[
            ["#8695f5","#89f8fc"],
            ["#eaab11","#fef089"],
            ["#2dc6b2","#fdf189"]
        ]
    };
    $.extend(true, opt, style);
    var myChart = echarts.init(document.getElementById(id));
    var labelColor = '#fff';
    var option = {
        //设置图表标题
        title:{
            show:opt.showTitle,
            text:opt.title,
            left:'38%',
            textStyle:{
                fontSize:_fontSize,
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
            // icon: 'circle',
            // itemWidth: 10,
            // itemHeight: 10,
            // itemGap: 100,
            data: opt.legend,
            right: '4%',
            textStyle: {
                fontSize: _fontSize,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#f7be33',
                    borderWidth: 2
                }
            }
        },
        grid: {//边框
            top:opt.top,
            left: opt.left,
            right: opt.right,
            bottom: opt.bottom,
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
                textStyle:{
                    color:'#fff',
                    fontSize:_fontSize
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
        series: getBarSeries(dataArr,opt)
    };
    myChart.setOption(option);
    if(opt.animation){
        setInterval(function(){
            echarts.dispose(document.getElementById(id));
            var c = echarts.init(document.getElementById(id));
            c.setOption(option);
        },5000);
    }
    
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