/**地图 */
var mapArr = ["连云港市","赣榆分局","东海分局","连云分局","开发区分局","高新技术产业开发区分局","云台山风景区分局","海州分局","徐圩新区分局","灌云县局","灌南分局"];
var mapDataArr = ["lyg","ganyu","donghai","lianyun","kaifaqu","gaoxin","yuntaishan","haizhou","xuwei","gy","guannan"];
var mapChart=null;
var mapInterval = null;
//连云港echart地图
function initChartMap(mapName,qyname){
    var mapData = areaArr[qyname]
    echarts.dispose(document.getElementById('LYGMap'));
    mapChart = echarts.init(document.getElementById('LYGMap'));
    var mapOption = createMapOption(mapName,mapData);
    mapChart.setOption(mapOption);
    //点击分局切换地图
    mapChart.on('click', function (params) {
        var _name = params.name;
        var index = ifExit(_name,mapArr);
        if (index > -1){
            var _data = mapDataArr[index];
            initChartMap(_name,_data);
            $("#returnBtn").show();
        }
    });
    if (mapInterval != null){
        clearInterval(mapInterval);
        mapInterval = null;
    }
    //地图轮播
    var n = 0;
    mapInterval = setInterval(function(){
        var op = mapChart.getOption();
        var data = op.series[0].data;
        var length = data.length;
        for (var i = 0 ; i < length; i++){
            data[i].selected = false;
        }
        var j = n%length;
        data[j].selected = true;
        var code = data[j].code;
        var name = data[j].name;
        console.log(name+":"+code);
        //此处添加根据单位查询案件、重大事件、以及警情走势数据
        mapChart.setOption(op);
        n++;
    }, 3000);
}

/**
 * 生成地图option对象
 * @param {*} mapName 分局名称
 */
function createMapOption(mapName,mapData){
    var mapOption = {
        title : {
            show:false,
            text: mapName,
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
                map: mapName,
                hoverable:false,//鼠标hover事件
                selectedMode:'single',//鼠标点击事件：单击
                roam: true,
                zoom:1,//缩放倍数，放大1.2倍
                top: '100', //地图离上侧的距离。
                bottom: '0',//地图离上侧的距离。
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            textStyle:{
                                color:'#fff',
                                fontFamily:'Microsoft YaHei',
                                fontSize:_fontSize/* ,
                                width:'100px',
                                height:'100px',
                                backgroundColor:'red',
                                borderRadius:'50%',
                                padding:'20' */
                            }
                        },
                        borderColor:'#38799d',
                        borderWidth:'2',
                        areaColor:'rgba(16,52,95,1)'                                                         
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
                data:mapData
            }              
        ]
    };
    return mapOption;
}

//分局数据
var areaArr = [];
//连云港
areaArr["lyg"] = [
    {name: '赣榆分局', value:'', selected: false ,code:"320707000000"},
    {name: '连云分局', value:'', selected: false ,code:"320703000000"},
    {name: '灌云县局', value:'', selected: false ,code:"320723000000"},
    {name: '海州分局', value:'', selected: false ,code:"320706000000"},
    {name: '东海分局', value:'', selected: false ,code:"320722000000"},
    {name: '徐圩新区分局', value:'', selected: false ,code:"320792000000"},
    {name: '灌南分局', value:'', selected: false ,code:"320724000000"},
    {name: '云台山风景区分局', value:'', selected: false ,code:"320793000000"},
    {name: '高新技术产业开发区分局', value:'', selected: false ,code:"320790000000"},
    {name: '开发区分局', value:'', selected: false ,code:"320791000000"}
];
//赣榆分局
areaArr["ganyu"] =[
    {"code": "320707550000", "name": "三洋港边防派出所",    value:'', selected: false },
    {"code": "320707560000", "name": "罗阳派出所",          value:'', selected: false },
    {"code": "320707690000", "name": "沙河派出所",          value:'', selected: false },
    {"code": "320707540000", "name": "海头边防派出所",      value:'', selected: false },
    {"code": "320707550000", "name": "三洋港边防派出所",    value:'', selected: false },
    {"code": "320707700000", "name": "朱堵派出所",          value:'', selected: false },
    {"code": "320707590000", "name": "门河派出所",          value:'', selected: false },
    {"code": "320707730000", "name": "刘口边防派出所",      value:'', selected: false },
    {"code": "320707650000", "name": "九里边防派出所",      value:'', selected: false },
    {"code": "320707520000", "name": "赣马派出所",          value:'', selected: false },
    {"code": "320707580000", "name": "城头派出所",         value:'', selected: false },
    {"code": "320707610000", "name": "厉庄派出所",         value:'', selected: false },
    {"code": "320707660000", "name": "石桥派出所",         value:'', selected: false },
    {"code": "320707630000", "name": "龙河派出所",         value:'', selected: false },
    {"code": "320707670000", "name": "马站派出所",         value:'', selected: false },
    {"code": "320707600000", "name": "黑林派出所",         value:'', selected: false },
    {"code": "320707680000", "name": "柘汪边防派出所",     value:'', selected: false },
    {"code": "320707710000", "name": "班庄派出所",         value:'', selected: false },
    {"code": "320707570000", "name": "欢墩派出所",         value:'', selected: false },
    {"code": "320707640000", "name": "土城派出所",         value:'', selected: false },
    {"code": "320707750000", "name": "开发区派出所",       value:'', selected: false },
    {"code": "320707510000", "name": "下口边防派出所",     value:'', selected: false },
    {"code": "320707740000", "name": "青口派出所",         value:'', selected: false },
    {"code": "320707620000", "name": "金山派出所",         value:'', selected: false },
    {"code": "320707530000", "name": "墩尚派出所",         value:'', selected: false }
];
//东海分局
areaArr["donghai"] =[
    {"code": "320722600000",  "name": "横沟派出所",  value:'', selected: false },
    {"code": "320722520000",  "name": "石榴派出所",  value:'', selected: false },
    {"code": "320722530000",  "name": "驼峰派出所",  value:'', selected: false },
    {"code": "320722540000",  "name": "白塔埠派出所",value:'', selected: false },
    {"code": "320722570000",  "name": "黄川派出所",  value:'', selected: false },
    {"code": "320722580000",  "name": "青湖派出所",  value:'', selected: false },
    {"code": "320722590000",  "name": "梁河派出所",  value:'', selected: false },
    {"code": "320722610000",  "name": "温泉派出所",  value:'', selected: false },
    {"code": "320722620000",  "name": "南辰派出所",  value:'', selected: false },
    {"code": "320722630000",  "name": "双店派出所",  value:'', selected: false },
    {"code": "320722640000",  "name": "李埝派出所",  value:'', selected: false },
    {"code": "320722650000",  "name": "山左口派出所",value:'', selected: false },
    {"code": "320722660000",  "name": "桃林派出所",  value:'', selected: false },
    {"code": "320722680000",  "name": "洪庄派出所",  value:'', selected: false },
    {"code": "320722690000",  "name": "石湖派出所",  value:'', selected: false },
    {"code": "320722700000",  "name": "曲阳派出所",  value:'', selected: false },
    {"code": "320722710000",  "name": "安峰派出所",  value:'', selected: false },
    {"code": "320722720000",  "name": "房山派出所",  value:'', selected: false },
    {"code": "320722730000",  "name": "平明派出所",  value:'', selected: false },
    {"code": "320722740000",  "name": "张湾派出所",  value:'', selected: false },
    {"code": "320722750000",  "name": "牛山派出所",  value:'', selected: false },
    {"code": "320722510000",  "name": "西双湖派出所",value:'', selected: false }
];
//连云分局
areaArr["lianyun"] =[
    {"name": "边防派出所", "code": "320703580000",      value:'', selected: false },
    {"name": "西墅边防派出所", "code": "320703530000",  value:'', selected: false },
    {"name": "板桥边防派出所", "code": "320703590000",  value:'', selected: false },
    {"name": "连云派出所", "code": "320703610000",      value:'', selected: false },
    {"name": "陶庵派出所", "code": "320703520000",      value:'', selected: false },
    {"name": "高公岛边防派出所", "code": "320703550000",value:'', selected: false },
    {"name": "连岛边防派出所", "code": "320703540000",  value:'', selected: false },
    {"name": "云山派出所", "code": "320703570000",      value:'', selected: false },
    {"name": "宿城派出所", "code": "320703560000",      value:'', selected: false },
    {"name": "墟沟派出所", "code": "320703510000",      value:'', selected: false }
];
//开发区分局
areaArr["kaifaqu"] =[
    {"code": "320791520000", "name": "朝阳派出所",    value:'', selected: false },
    {"code": "320791560000", "name": "中云派出所",    value:'', selected: false },
    {"code": "320791540000", "name": "大浦派出所",    value:'', selected: false },
    {"code": "320791530000", "name": "猴嘴派出所",    value:'', selected: false },
    {"code": "320791570000", "name": "青口盐场派出所",value:'', selected: false },
    {"code": "320791550000", "name": "昌圩派出所",    value:'', selected: false },
    {"code": "320791510000", "name": "华盖山派出所",  value:'', selected: false }
];
//高新技术产业开发区分局
areaArr["gaoxin"] =[
    {"code": "320790530000", "name": "南城派出所",    value:'', selected: false },
    {"code": "320790510000", "name": "花果山派出所",    value:'', selected: false }
];
//云台山风景区分局
areaArr["yuntaishan"] =[
    {"code": "320793510000", "name": "云台派出所",    value:'', selected: false }
];
//海州分局
areaArr["haizhou"] =[
    {"name": "宁海派出所", "code": "320706560000"  ,      value:'', selected: false },           
    {"name": "板浦派出所", "code": "320706570000",       value:'', selected: false },
    {"name": "开发区派出所", "code": "320706550000",     value:'', selected: false },
    {"name": "锦屏派出所", "code": "320706520000",       value:'', selected: false },
    {"name": "新坝派出所", "code": "320706530000",       value:'', selected: false },
    {"name": "海州派出所", "code": "320706580000",       value:'', selected: false },
    {"name": "太平边防派出所", "code": "320706680000",   value:'', selected: false },
    {"name": "洪门派出所", "code": "320706510000",       value:'', selected: false },
    {"name": "朐阳派出所", "code": "320706540000",       value:'', selected: false },
    {"name": "包庄派出所", "code": "320706660000",       value:'', selected: false },
    {"name": "浦东派出所", "code": "320706600000",       value:'', selected: false },
    {"name": "经济开发区派出所", "code": "320706700000",  value:'', selected: false },
    {"name": "浦南派出所", "code": "320706670000",       value:'', selected: false },
    {"name": "路南派出所", "code": "320706610000",       value:'', selected: false },
    {"name": "新南派出所", "code": "320706620000",       value:'', selected: false },
    {"name": "新东派出所", "code": "320706690000",       value:'', selected: false },
    {"name": "浦西派出所", "code": "320706630000",       value:'', selected: false },
    {"name": "新海派出所", "code": "320706650000",       value:'', selected: false },
    {"name": "市东派出所", "code": "320706590000",       value:'', selected: false },
    {"name": "朐阳派出所", "code": "320706540000",       value:'', selected: false }
];
//徐圩新区分局
areaArr["xuwei"] =[
    {"name": "徐圩边防派出所", "code": "320792530000" ,       value:'', selected: false },           
    {"name": "东辛派出所", "code": "320792510000",       value:'', selected: false },
    {"name": "辛高圩边防派出所", "code": "320792520000",     value:'', selected: false },
    {"name": "徐圩派出所", "code": "320792540000",       value:'', selected: false }
];
//灌云
areaArr["gy"] =[
    {name: '同兴', value:'', selected: false ,code:"320723640000"},
    {name: '伊山', value:'', selected: false ,code:"320723510000"},
    {name: '杨集', value:'', selected: false ,code:"320723520000"},
    {name: '燕尾港', value:'', selected: false ,code:"320723530000"},
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
//灌南分局
areaArr["guannan"] =[
    {"name": "汤沟派出所", "code": "320724510000",    value:'', selected: false },  
    {"name": "田楼派出所", "code": "320724630000",    value:'', selected: false },  
    {"name": "李集派出所", "code": "320724590000",    value:'', selected: false },  
    {"name": "张店派出所", "code": "320724530000",    value:'', selected: false },  
    {"name": "孟兴庄派出所", "code": "320724600000",  value:'', selected: false },  
    {"name": "北陈集派出所", "code": "320724520000",  value:'', selected: false },  
    {"name": "堆沟边防派出所", "code": "320724550000", value:'', selected: false },  
    {"name": "新集派出所", "code": "320724700000",    value:'', selected: false },  
    {"name": "百禄派出所", "code": "320724560000",    value:'', selected: false },  
    {"name": "长茂派出所", "code": "320724540000",    value:'', selected: false },  
    {"name": "三口派出所", "code": "320724660000",    value:'', selected: false },  
    {"name": "堆沟派出所", "code": "320724640000",    value:'', selected: false },  
    {"name": "花园派出所", "code": "320724680000",    value:'', selected: false },  
    {"name": "新安派出所", "code": "320724710000",    value:'', selected: false },  
    {"name": "桥西派出所", "code": "320724570000",    value:'', selected: false },  
    {"name": "化工园派出所", "code": "320724650000",  value:'', selected: false }
];