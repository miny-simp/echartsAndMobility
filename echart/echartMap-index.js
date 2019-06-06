/*初始化-三情总览-淮安地图*/
$(function(){
    initMap();
});
function initMap(){
    var myChart = echarts.init(document.getElementById('HAmap'));
    myChart.setOption(mapoption);
    initMapClick(myChart);
    mapInterval(myChart);
}
var areaArr =[
    {name: '开发区', value:'', selected: true },
    {name: '清江浦', value:'', selected: false },
    {name: '淮阴区', value:'', selected: false },
    {name: '淮安区', value:'', selected: false },
    {name: '洪泽区', value:'', selected: false },
    {name: '涟水县', value:'', selected: false },
    {name: '金湖县', value:'', selected: false },
    {name: '盱眙县', value:'', selected: false }
];
var mapoption = {
        title : {
            show:false,
            text: '淮安市',
            subtext: '区划图',
            x:'center'
        },
        tooltip : {
            show:false,
            trigger: 'item'
        },                              
        series : [
            {
                name: '',
                type: 'map',
                map: '淮安市',
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
                                fontSize:16
                            }
                        },
                        borderColor:'#142353',
                        borderWidth:'3',
                        areaColor:'#263984'                                                         
                    },
                    emphasis:{
                        label:{
                            show:true,
                            textStyle:{
                                color:'#fff',
                                fontFamily:'Microsoft YaHei',
                                fontSize:16
                            }
                        },
                        areaColor:'#d3a22b'
                    }
                },
                data:areaArr
            }               
        ]
    }; 
//地图点击事件
function initMapClick(myChart){
    myChart.on('click', function (params) {
        var name = params.name;
        setList(name);
    });
}
//设置地图轮播选中事件
function mapInterval(myChart){
    var n=0;
    var mapInter = setInterval(function(){
        var i = n%8;
        for(var k=0;k<areaArr.length;k++){
            areaArr[k].selected=false;
        }
        areaArr[i].selected=true;
        myChart.setOption(mapoption);
        setList(areaArr[i].name);
        n++;
    },5000);
}
//设置列表的选中状态
function setList(name){
    $("#rank-list li[name="+name+"]").addClass("on").siblings().removeClass("on");
}
