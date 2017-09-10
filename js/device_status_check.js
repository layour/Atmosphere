/*各数据点参数定义数组*/
var pm25Array = [35,75,115,150,250]; // pm2.5
var temperatureArray = [-20,-10,0,10,20,26,33,37,50]; // 温度
var humidityArray = [20,30,40,56,67,80]; // 湿度
var co2Array = [1500,2500]; // 二氧化碳
var tvocArray = [0.6,2,5]; // tvoc
var hchoArray = [0,0.08,0.3,0.5]; // 甲醛

//pm2.5
   function SetPM25Content(pm25) {
	    if(pm25 <= 35) {
	        return "空气质量优";
	    } else if(pm25 <= 75) {
	        return "空气质量良";
	    } else if(pm25 <= 115) {
	        return "轻度污染";
	    } else if(pm25 <= 150) {
	        return "中度污染";
	    } else if(pm25 <= 250) {
	        return "重度污染";
	    } else {
	        return "严重污染";
	    }
	}
var pm25PlotBands = [
{
	from: Number.NEGATIVE_INFINITY,
	to: 35,
	label: {
	    text: '空气质量优',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 35,
	to: 75,
	label: {
	    text: '空气质量良',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 75,
	to: 115,
	label: {
	    text: '轻度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 115,
	to: 150,
	label: {
	    text: '中度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 150,
	to: 250,
	label: {
	    text: '重度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 250,
	to: Number.POSITIVE_INFINITY ,
	label: {
	    text: '严重污染',
	    style: {
	        color: '#606060'
	    }
	}
},
]
// 判断pm2.5严重程度显示效果
   function checkPM25Class(pm25) {
   	    if(pm25 <= 35) {
   	        return "1";
   	    } else if(pm25 <= 75) {
   	        return "2";
   	    } else if(pm25 <= 115) {
   	        return "3";
   	    } else if(pm25 <= 150) {
   	        return "4";
   	    } else if(pm25 <= 250) {
   	        return "5";
   	    } else {
   	        return "6";
   	    }
   	}
	// 温度
	function SetTemperatureContent(temp) {
	    var result = "酷寒";
	    if (temp < -20) {
	        result = "酷寒";
	    } else if (temp < -10) {
	        result = "严寒";
	    } else if (temp < 0) {
	        result = "中寒";
	    } else if (temp < 10) {
	        result = "微寒";
	    } else if (temp < 20) {
	        result = "凉爽";
	    } else if (temp < 26) {
	        result = "舒适";
	    } else if (temp < 33) {
	        result = "微热";
	    } else if (temp < 37) {
	        result = "炎热";
	    } else {
	        result = "酷热";
	    }
	    return result;
	}
	
	function returnPlotBands(flag, data){
		var plotBands = [];
		switch (showTag) {
		case "Temperature": // 温度
			for (var i = 0; i < data.length; i++){
				if (data[i] == null) continue;
				if (data[i] < -20) {
					plotBands.push({
						from: Number.NEGATIVE_INFINITY,
						to: -20,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '酷寒',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > -20 && data[i] < -10) {
					plotBands.push({
						from: -20,
						to: -10,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '严寒',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > -10 && data[i] < 0) {
					plotBands.push({
						from: -10,
						to: 0,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '中寒',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > 0 && data[i] < 10) {
					plotBands.push({
						from: 0,
						to: 10,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '微寒',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > 10 && data[i] < 20) {
					plotBands.push({
						from: 10,
						to: 20,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '凉爽',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > 20 && data[i] < 26) {
					plotBands.push({
						from: 20,
						to: 26,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '舒适',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] >= 26 && data[i] < 33) {
					plotBands.push({
						from: 26,
						to: 33,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '微热',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] > 33 && data[i] < 37) {
					plotBands.push({
						from: 33,
						to: 37,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '炎热',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
				else if (data[i] >= 37 && data[i] < Number.POSITIVE_INFINITY) {
					plotBands.push({
						from: 37,
						to: Number.POSITIVE_INFINITY,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '酷热',
						    style: {
						        color: '#606060'
						    }
						}
					});
				}
			}
			break;
		case "HCHO": // 甲醛
			for (var i = 0; i < data.length; i++){
				if (data[i] == null) continue;
				if (data[i] <= 0.08 && data[i] >= 0) {
					plotBands.push({
						from: 0,
						to: 0.08,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '符合标准',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 0.08 && data[i] <= 0.3) {
					plotBands.push({
						from: 0.08,
						to: 0.3,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '轻度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 0.3 && data[i] <= 0.5) {
					plotBands.push({
						from: 0.3,
						to: 0.5,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '中度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 0.5) {
					plotBands.push({
						from: 0.5,
						to: Number.POSITIVE_INFINITY,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '重度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
			}
			break;
		case "PM25": // pm2.5
			for (var i = 0; i < data.length; i++){
				if (data[i] == null) continue;
				if (data[i] <= 35){
					plotBands.push({
						from: Number.NEGATIVE_INFINITY,
						to: 35,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '空气质量优',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 35 && data[i] <= 75){
					plotBands.push({
						from: 35,
						to: 75,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '空气质量良',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 75 && data[i] <= 115){
					plotBands.push({
						from: 75,
						to: 115,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '轻度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 115 && data[i] <= 150){
					plotBands.push({
						from: 115,
						to: 175,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '中度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 150 && data[i] <= 250){
					plotBands.push({
						from: 150,
						to: 250,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '重度污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 250){
					plotBands.push({
						from: 250,
						to: Number.POSITIVE_INFINITY,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '严重污染',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
			}
			break;
		case "CO2": // co2
			for (var i = 0; i < data.length; i++){
				if (data[i] == null) continue;
				if (data[i] <= 1500) {
					plotBands.push({
						from: Number.NEGATIVE_INFINITY,
						to: 1500,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '空气清新',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 1500 && data[i] <= 2500){
					plotBands.push({
						from: Number.NEGATIVE_INFINITY,
						to: 1500,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '轻度浑浊',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
				else if (data[i] > 2500){
					plotBands.push({
						from: 2500,
						to: Number.POSITIVE_INFINITY,
						borderWidth:0.1,
						borderColor:'white',
						label: {
						    text: '空气缺氧',
						    style: {
						        color: '#606060'
						    }
						}
					})
				}
			}
			break;
		case "VOC": // TVOC
			for (var i = 0; i < data.length; i++){
			if (data[i] == null) continue;
			if (data[i] <= 0.5) {
				plotBands.push({
					from: Number.NEGATIVE_INFINITY,
					to: 0.5,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '符合标准',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] > 0.5 && data[i] < 1) {
				plotBands.push({
					from: 0.5,
					to: 1,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '轻度污染',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			/*else if (data[i] > 2 && data[i] <= 5) {
				plotBands.push({
					from: 2,
					to: 5,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '中度污染',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}*/
			else if (data[i] >= 1) {
				plotBands.push({
					from: 1,
					to: Number.POSITIVE_INFINITY,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '重度污染',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}}
			break;
		case "Humidity": // 湿度
			for (var i = 0; i < data.length; i++){
			if (data[i] == null) continue;
			if (data[i] < 20) {
				plotBands.push({
					from: Number.NEGATIVE_INFINITY,
					to: 20,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '极干',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 20 && data[i] < 30){
				plotBands.push({
					from: 20,
					to: 30,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '干燥',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 30 && data[i] < 40){
				plotBands.push({
					from: 30,
					to: 40,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '略干',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 40 && data[i] < 56){
				plotBands.push({
					from: 40,
					to: 56,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '理想',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 56 && data[i] < 67){
				plotBands.push({
					from: 56,
					to: 67,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '湿润',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 67 && data[i] < 80){
				plotBands.push({
					from: 67,
					to: 80,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '潮湿',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			else if (data[i] >= 80){
				plotBands.push({
					from: 80,
					to: Number.POSITIVE_INFINITY,
					borderWidth:0.1,
					borderColor:'white',
					label: {
					    text: '潮湿',
					    style: {
					        color: '#606060'
					    }
					}
				})
			}
			}
			break;
		default:
			break;
		}
		return plotBands;
	}
	
	
	
var temPlotBands = [
{
	from: Number.NEGATIVE_INFINITY,
	to: -20,
	label: {
	    text: '酷寒',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: -20,
	to: -10,
	label: {
	    text: '严寒',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: -10,
	to: 0,
	color: 'rgba(68, 170, 213, 0.1)',
	label: {
	    text: '中寒',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 0,
	to: 10,
	color: 'rgba(0, 0, 0, 0)',
	label: {
	    text: '微寒',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 10,
	to: 20,
	color: 'rgba(68, 170, 213, 0.1)',
	lineWidth:2,
	label: {
	    text: '凉爽',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 20,
	to: 26,
	color: 'rgba(0, 0, 0, 0)',
	lineWidth:2,
	label: {
	    text: '舒适',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 26,
	to: 33,
	color: 'rgba(68, 170, 213, 0.1)',
	lineWidth:12,
	label: {
	    text: '微热',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 33,
	to: 37,
	color: 'rgba(0, 0, 0, 0)',
	lineWidth:12,
	label: {
	    text: '炎热',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 37,
	to: Number.POSITIVE_INFINITY,
	color: 'rgba(68, 170, 213, 0.1)',
	label: {
	    text: '酷热',
	    style: {
	        color: '#606060'
	    }
	}
},
]
	// 湿度
	function SetHumidityContent(humi) {
	    var result = "极干";
	    if (humi < 20) {
	        result = "极干";
	    } else if (humi < 30) {
	        result = "干燥";
	    } else if (humi < 40) {
	        result = "略干";
	    } else if (humi < 56) {
	        result = "理想";
	    } else if (humi < 67) {
	        result = "湿润";
	    } else if (humi < 80) {
	        result = "潮湿";
	    } else {
	        result = "极潮";
	    }
	    return result;
	}
var humidityPlotBands = [
{
	from: Number.NEGATIVE_INFINITY,
	to: 20,
	label: {
	    text: '极干',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 20,
	to: 30,
	label: {
	    text: '干燥',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 30,
	to: 40,
	label: {
	    text: '略干',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 40,
	to: 56,
	label: {
	    text: '理想',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 56,
	to: 67,
	label: {
	    text: '湿润',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 67,
	to: 80,
	label: {
	    text: '潮湿',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 80,
	to: Number.POSITIVE_INFINITY ,
	label: {
	    text: '极潮',
	    style: {
	        color: '#606060'
	    }
	}
},
]
	// 二氧化碳
	function SetCO2Content(co2) {
	    var result = "空气清新";
	    if (co2 <= 1500) {
	        result = "空气清新";
	    } else if (co2 <= 2500) {
	        result = "轻度浑浊";
	    }  else {
	        result = "空气缺氧";
	    }
	    return result;
	}
var co2PlotBands = [
{
	from: Number.NEGATIVE_INFINITY,
	to: 1500,
	label: {
	    text: '空气清新',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 1500,
	to: 2500,
	label: {
	    text: '轻度浑浊',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 2500,
	to: 3500,
	label: {
	    text: '空气缺氧',
	    style: {
	        color: '#606060'
	    }
	}
},
]
	// tvoc
	function SetTVOCContent(tvoc) {
	    var result = "符合标准";
	    if (tvoc <= 0.5) {
	        result = "符合标准";
	    } else if (tvoc < 1) {
	        result = "轻度污染";
	    } else {
	        result = "重度污染";
	    }
	    return result;
	}
var tvocPlotBands = [
{
	from: Number.NEGATIVE_INFINITY,
	to: 0.6,
	label: {
	    text: '符合标准',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 0.6,
	to: 2,
	label: {
	    text: '轻度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 2,
	to: 5,
	label: {
	    text: '中度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 5,
	to: Number.POSITIVE_INFINITY ,
	label: {
	    text: '重度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
]
	// 甲醛
	function SetPAContent(pa) {
	    if (pa >= 0 && pa <= 0.08) {
	        return "符合标准";
	    } else if (pa > 0.08 && pa <= 0.3) {
	        return "轻度污染";
	    } else if (pa > 0.3 && pa <= 0.5) {
	        return "中度污染";
	    } else if (pa > 0.5) {
	        return "重度污染";
	    } else {
	        return "--";
	    }
	}
var hchoPlotBands = [
{
	from: 0,
	to: 0.08,
	label: {
	    text: '符合标准',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 0.08,
	to: 0.3,
	label: {
	    text: '轻度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 0.3,
	to: 0.5,
	label: {
	    text: '中度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
{
	from: 0.5,
	to: Number.POSITIVE_INFINITY ,
	label: {
	    text: '重度污染',
	    style: {
	        color: '#606060'
	    }
	}
},
]
function getTips2(datas,outsidePm25){
	var value = "当前环境舒适";
	if( outsidePm25 && outsidePm25 <= 35) {
		value = "室外空气质量优良，建议开窗通风";
    }
	if( outsidePm25 && outsidePm25 > 115){
		value = "pm2.5浓度较高，建议开启净化器";
	}
	// 甲醛
	if( datas.HCHO > 0.08 )	{
		value = "甲醛污染较严重，建议开启净化器"
	}
	// 判断二氧化碳
	if( datas.co2 > 1500 )	{
		value = "空气较浑浊，建议开窗通风"
	}
	// 判断VOC
	if( datas.voc > 0.5 )	{
		value = "TVOC污染较严重，建议开启净化器"
	}
	// 判断温度
	if( datas.WenD < 10 )	{
		value = "温度较低，建议开启暖风"
	}
	if( datas.WenD > 33 )	{
		value = "温度较高，建议开启冷风"
	}
	
	// 判断湿度
	if( datas.ShiD < 30 )	{
		value = "空气湿度较小，建议开启加湿器"
	}
	if( datas.ShiD > 67 )	{
		value = "空气湿度较大，建议开启除湿器"
	}
	return value;
}
	// 设备最新状态页面提示取得方法 
	function getTips(datas,outsidePm25){
		// 定义表示位表示是否整体环境舒适
		var x = 0;
		// 建立数组装数据
		var dataArr = new Array(7);
		// 预设整体环境舒适 
		dataArr[6]=("当前环境舒适");
		// 判断室外pm2.5
		if(outsidePm25 <= 35) {
			dataArr[0]=("室外空气质量优良，建议开窗通风");
			dataArr[6]=("");
	    }
		else if(outsidePm25 > 115){
			dataArr[0]=("pm2.5浓度较高，建议开启净化器");
			dataArr[6]=("");
		}
		else{
			dataArr[0]=("");
			x++;
		}			
		// 循环便利数据集
		for(var i=0; i<datas.length; i++){
			   var value = datas[i][1];
			   // 判断甲醛
			   if(datas[i][3] == "HCHO"){
				   if(datas[i][1] > 0.08){
					   dataArr[1]=("甲醛污染较严重，建议开启净化器");
					   dataArr[6]=("");
				   }
				   else{
					   dataArr[1]=("");
					   x++;
				   }
			   }
			   // 判断二氧化碳
			   if(datas[i][3] == "CO2"){
				   if(datas[i][1] > 1500){
					   dataArr[2]=("空气较浑浊，建议开窗通风");
					   dataArr[6]=("");
				   }
				   else{
					   dataArr[2]=("");
					   x++;
				   }
			   }
			   // 判断VOC
			   if(datas[i][3] == "VOC"){
				   if(datas[i][1] > 0.5){
					   dataArr[3]=("TVOC污染较严重，建议开启净化器");
					   dataArr[6]=("");
				   }
				   else{
					   dataArr[3]=("");
					   x++;
				   }
			   }
			   // 判断温度
			   if(datas[i][3] == "Temperature"){
				   if(datas[i][1] < 10){
					   dataArr[4]=("温度较低，建议开启暖风");
					   dataArr[6]=("");
				   }
				   else if(datas[i][1] > 33){
					   dataArr[4]=("温度较高，建议开启冷风");
					   dataArr[6]=("");
				   }
				   else{
					   dataArr[4]=("");
					   x++;
				   }
			   }
			   // 判断湿度
			   if(datas[i][3] == "Humidity"){
				   if(datas[i][1] < 30){
					   dataArr[5]=("空气湿度较小，建议开启加湿器");
					   dataArr[6]=("");
				   }
				   else if(datas[i][1] > 67){
					   dataArr[5]=("空气湿度较大，建议开启除湿器");
					   dataArr[6]=("");
				   }
				   else{
					   dataArr[5]=("");
					   x++;
				   }
			   }
			   
		}
		if(x == 6){
			dataArr[6]=("当前环境舒适");
		}
		return dataArr;
		
	}