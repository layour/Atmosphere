/**
 * 设备操作JS
 */
   var gizwitsws;

   function newObj()
   {
       var apiHost = "api.gizwits.com";
       var commType = "attrs_v4";
       var gizwitsAppId = "093af0d92ff740c1b478329d45108219";
       gizwitsws = new GizwitsWS(apiHost, wechatOpenId, gizwitsAppId, commType);

       gizwitsws.onInit = onInit;
       gizwitsws.onConnected = onConnected;
       gizwitsws.onOnlineStatusChanged = onOnlineStatusChanged;
       gizwitsws.onReceivedRaw = onReceivedRaw;
       gizwitsws.onReceivedAttrs = onReceivedAttrs;
       gizwitsws.onError = onError;

       showScreen("初始化对象成功!");
   }

   function init()
   {
       gizwitsws.init();
   }

   function connect(did)
   {
       gizwitsws.connect(did);
   }

   function read(did)
   {
       gizwitsws.read(did);
   }

   function writeCommand(did)
   {
       var attrs = $('#command').val();
       gizwitsws.write(did, JSON.parse(attrs));
   }

   function clearLog()
   {
       $('#log').html("");
   }

   //=========================================================
   // callback functions
   //=========================================================
   function onInit(devices)
   {
       showScreen("onInit!");
       if (devices.length == 0)
       {
           showScreen("没有绑定的设备");
       }
       else
       {
           for (var i = 0; i < devices.length; i++)
           {
               showScreen("==================================================");
               showScreen("已绑定设备，did=" + devices[i].did);
               showScreen("已绑定设备，mac=" + devices[i].mac);
               showScreen("已绑定设备，product_key=" + devices[i].product_key);
               showScreen("已绑定设备，is_online=" + devices[i].is_online);
               showScreen("已绑定设备, dev_alias=" + devices[i].dev_alias);
               showScreen("已绑定设备，remark=" + devices[i].remark);
           }
           
           initCallback();
       }
   }

   function onConnected()
   {
       showScreen("websocket连接成功!");
   }

   function onOnlineStatusChanged(value)
   {
       showScreen("设备上下线通知，did=" + value.did);
       showScreen("设备上下线通知，is_online=" + value.is_online);
   }

   function onReceivedRaw(value)
   {
   	console.log("Raw", value);
       showScreen("设备Raw，did=" + value.did);
       var str = "";
       for (var i = 0; i < value.raw.length; i++)
       {
           str = str + value.raw[i] + " ";
       }
       showScreen("设备Raw，raw=" + str);
   }

   function onError(value)
   {
       showError(value.toString());
   }

   //=========================================================
   // inner functions
   //=========================================================
   function showScreen(txt)
   {
       $('#log').prepend('<p style="color: blue">' + txt + '</p>');
       console.log(txt);
   }

   function showError(txt)
   {
       $('#log').prepend('<p style="color: red">' + txt + '</p>');
       console.log(txt);
   }
	
	function onReceivedAttrs(value)
	{
		console.log("attrs", value);
	    showScreen("设备Attrs，did=" + value.did);
	    for (var key in value.attrs)
	    {
	        showScreen("设备Attrs，" + key + ": " + value.attrs[key]);
	    }
	}