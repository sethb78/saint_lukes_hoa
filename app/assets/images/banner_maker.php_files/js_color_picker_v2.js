/************************************************************************************************************
(C) www.dhtmlgoodies.com, October 2005

This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

Terms of use:
You are free to use this script as long as the copyright message is kept intact. However, you may not
redistribute, sell or repost it without our permission.

Thank you!

www.dhtmlgoodies.com
Alf Magne Kalleland

************************************************************************************************************/	

var imageBase = '/textspace/js/cp_dhtml_v2/';

var MSIE = navigator.userAgent.indexOf('MSIE')>=0?true:false;
var navigatorVersion = navigator.appVersion.replace(/.*?MSIE (\d\.\d).*/g,'$1')/1;

var color_picker_div = false;
var color_picker_active_tab = false;
var color_picker_form_field = false;
var color_picker_active_input = false;

function baseConverter (number,ob,nb) {
	number = number + "";
	number = number.toUpperCase();
	var list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var dec = 0;
	for (var i = 0; i <=  number.length; i++) {
		dec += (list.indexOf(number.charAt(i))) * (Math.pow(ob , (number.length - i - 1)));
	}
	number = "";
	var magnitude = Math.floor((Math.log(dec))/(Math.log(nb)));
	for (var i = magnitude; i >= 0; i--) {
		var amount = Math.floor(dec/Math.pow(nb,i));
		number = number + list.charAt(amount); 
		dec -= amount*(Math.pow(nb,i));
	}
	if(number.length==0)number=0;
	return number;
}

function colorPickerGetTopPos(inputObj)
{

  var returnValue = inputObj.offsetTop;
  while((inputObj = inputObj.offsetParent) != null){
	returnValue += inputObj.offsetTop;
  }
  return returnValue;
}

function colorPickerGetLeftPos(inputObj)
{
  var returnValue = inputObj.offsetLeft;
  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;
  return returnValue;
}

function cancelColorPickerEvent(){
	return false;
}

function createColorPickerTopRow(inputObj){
	var tabs = ['Color Picker'];
	var tabWidths = [37,90,70];
	var div = document.createElement('DIV');
	div.className='colorPicker_topRow';

	inputObj.appendChild(div);	
	var currentWidth = 0;
	for(var no=0;no<tabs.length;no++){			

		var tabDiv = document.createElement('DIV');
		tabDiv.onselectstart = cancelColorPickerEvent;
		tabDiv.ondragstart = cancelColorPickerEvent;
		if(no==0){
			suffix = 'active'; 
			color_picker_active_tab = this;
		}else suffix = 'inactive';

		tabDiv.id = 'colorPickerTab' + no;
		if(no==0)tabDiv.style.zIndex = 50; else tabDiv.style.zIndex = 1 + (tabs.length-no);
		tabDiv.style.left = currentWidth + 'px';
		tabDiv.style.position = 'absolute';
		tabDiv.className='colorPickerTab_' + suffix;
		var tabSpan = document.createElement('SPAN');
		tabSpan.innerHTML = tabs[no];
		tabDiv.appendChild(tabSpan);
		div.appendChild(tabDiv);
		if(navigatorVersion<6 && MSIE){	/* Lower IE version fix */
			tabSpan.style.position = 'relative';
			tabImg.style.position = 'relative';
			tabImg.style.left = '-3px';		
			tabDiv.style.cursor = 'hand';	
		}			
		currentWidth = currentWidth + tabWidths[no];

	}

	var closeButton = document.createElement('DIV');
	closeButton.className='colorPickerCloseButton';
	closeButton.innerHTML = 'x';
	closeButton.onclick = closeColorPicker;
	closeButton.onmouseover = closeColorPicker;
	closeButton.onmouseout = toggleOffCloseButton;
	div.appendChild(closeButton);
}

function toggleCloseButton()
{
	this.className = 'colorPickerCloseButtonHover';
}
function toggleOffCloseButton()
{
	this.className = 'colorPickerCloseButton';
}

function closeColorPicker()
{

	color_picker_div.style.display='none';
}

function createWebColors(inputObj){
	var webColorDiv = document.createElement('DIV');
	inputObj.appendChild(webColorDiv);

	var aCol = new Array('fff2f2','ffe5e5','ffd8d8','ffcbcb','ffbebe','ffb1b1','ffa4a4','ff9797','ff8a8a','ff7d7d','ff7070','ff6363','ff5656','ff4949','ff3c3c','ff2f2f','ff2222','ff1515','ff0808','ff0000','ee0000','dd0000','cc0000','bb0000','aa0000','990000','880000','770000','660000','550000','440000','330000','220000','110000','fff2f5','ffe5eb','ffd8e1','ffcbd7','ffbecd','ffb1c3','ffa4b9','ff97af','ff8aa5','ff7d9b','ff7091','ff6387','ff567d','ff4973','ff3c69','ff2f5f','ff2255','ff154b','ff0841','ff0033','ee0030','dd002d','cc002a','bb0027','aa0024','990021','88001e','77001b','660018','550015','440012','33000f','22000c','110009','fff2f7','ffe5ef','ffd8e7','ffcbdf','ffbed7','ffb1cf','ffa4c7','ff97bf','ff8ab7','ff7daf','ff70a7','ff639f','ff5697','ff498f','ff3c87','ff2f7f','ff2277','ff156f','ff0867','ff0066','ee005f','dd0058','cc0051','bb004a','aa0043','99003c','880035','77002e','660027','550020','440019','330012','22000b','110004','fff2fa','ffe5f5','ffd8f0','ffcbeb','ffbee6','ffb1e1','ffa4dc','ff97d7','ff8ad2','ff7dcd','ff70c8','ff63c3','ff56be','ff49b9','ff3cb4','ff2faf','ff22aa','ff15a5','ff08a0','ff0099','ee008f','dd0085','cc007b','bb0071','aa0067','99005d','880053','770049','66003f','550035','44002b','330021','220017','11000d','fff2fc','ffe5f9','ffd8f6','ffcbf3','ffbef0','ffb1ed','ffa4ea','ff97e7','ff8ae4','ff7de1','ff70de','ff63db','ff56d8','ff49d5','ff3cd2','ff2fcf','ff22cc','ff15c9','ff08c6','ff00cc','ee00be','dd00b0','cc00a2','bb0094','aa0086','990078','88006a','77005c','66004e','550040','440032','330024','220016','110008','fff2ff','ffe5ff','ffd8ff','ffcbff','ffbeff','ffb1ff','ffa4ff','ff97ff','ff8aff','ff7dff','ff70ff','ff63ff','ff56ff','ff49ff','ff3cff','ff2fff','ff22ff','ff15ff','ff08ff','ff00ff','ee00ee','dd00dd','cc00cc','bb00bb','aa00aa','990099','880088','770077','660066','550055','440044','330033','220022','110011','fcf2ff','f9e5ff','f6d8ff','f3cbff','f0beff','edb1ff','eaa4ff','e797ff','e48aff','e17dff','de70ff','db63ff','d856ff','d549ff','d23cff','cf2fff','cc22ff','c915ff','c608ff','cc00ff','be00ee','b000dd','a200cc','9400bb','8600aa','780099','6a0088','5c0077','4e0066','400055','320044','240033','160022','080011','faf2ff','f5e5ff','f0d8ff','ebcbff','e6beff','e1b1ff','dca4ff','d797ff','d28aff','cd7dff','c870ff','c363ff','be56ff','b949ff','b43cff','af2fff','aa22ff','a515ff','a008ff','9900ff','8f00ee','8500dd','7b00cc','7100bb','6700aa','5d0099','530088','490077','3f0066','350055','2b0044','210033','170022','0d0011','f7f2ff','efe5ff','e7d8ff','dfcbff','d7beff','cfb1ff','c7a4ff','bf97ff','b78aff','af7dff','a770ff','9f63ff','9756ff','8f49ff','873cff','7f2fff','7722ff','6f15ff','6708ff','6600ff','5f00ee','5800dd','5100cc','4a00bb','4300aa','3c0099','350088','2e0077','270066','200055','190044','120033','0b0022','040011','f5f2ff','ebe5ff','e1d8ff','d7cbff','cdbeff','c3b1ff','b9a4ff','af97ff','a58aff','9b7dff','9170ff','8763ff','7d56ff','7349ff','693cff','5f2fff','5522ff','4b15ff','4108ff','3300ff','3000ee','2d00dd','2a00cc','2700bb','2400aa','210099','1e0088','1b0077','180066','150055','120044','0f0033','0c0022','090011','f2f2ff','e5e5ff','d8d8ff','cbcbff','bebeff','b1b1ff','a4a4ff','9797ff','8a8aff','7d7dff','7070ff','6363ff','5656ff','4949ff','3c3cff','2f2fff','2222ff','1515ff','0808ff','0000ff','0000ee','0000dd','0000cc','0000bb','0000aa','000099','000088','000077','000066','000055','000044','000033','000022','000011','f2f5ff','e5ebff','d8e1ff','cbd7ff','becdff','b1c3ff','a4b9ff','97afff','8aa5ff','7d9bff','7091ff','6387ff','567dff','4973ff','3c69ff','2f5fff','2255ff','154bff','0841ff','0033ff','0030ee','002ddd','002acc','0027bb','0024aa','002199','001e88','001b77','001866','001555','001244','000f33','000c22','000911','f2f7ff','e5efff','d8e7ff','cbdfff','bed7ff','b1cfff','a4c7ff','97bfff','8ab7ff','7dafff','70a7ff','639fff','5697ff','498fff','3c87ff','2f7fff','2277ff','156fff','0867ff','0066ff','005fee','0058dd','0051cc','004abb','0043aa','003c99','003588','002e77','002766','002055','001944','001233','000b22','000411','f2faff','e5f5ff','d8f0ff','cbebff','bee6ff','b1e1ff','a4dcff','97d7ff','8ad2ff','7dcdff','70c8ff','63c3ff','56beff','49b9ff','3cb4ff','2fafff','22aaff','15a5ff','08a0ff','0099ff','008fee','0085dd','007bcc','0071bb','0067aa','005d99','005388','004977','003f66','003555','002b44','002133','001722','000d11','f2fcff','e5f9ff','d8f6ff','cbf3ff','bef0ff','b1edff','a4eaff','97e7ff','8ae4ff','7de1ff','70deff','63dbff','56d8ff','49d5ff','3cd2ff','2fcfff','22ccff','15c9ff','08c6ff','00ccff','00beee','00b0dd','00a2cc','0094bb','0086aa','007899','006a88','005c77','004e66','004055','003244','002433','001622','000811','f2ffff','e5ffff','d8ffff','cbffff','beffff','b1ffff','a4ffff','97ffff','8affff','7dffff','70ffff','63ffff','56ffff','49ffff','3cffff','2fffff','22ffff','15ffff','08ffff','00ffff','00eeee','00dddd','00cccc','00bbbb','00aaaa','009999','008888','007777','006666','005555','004444','003333','002222','001111','f2fffc','e5fff9','d8fff6','cbfff3','befff0','b1ffed','a4ffea','97ffe7','8affe4','7dffe1','70ffde','63ffdb','56ffd8','49ffd5','3cffd2','2fffcf','22ffcc','15ffc9','08ffc6','00ffcc','00eebe','00ddb0','00cca2','00bb94','00aa86','009978','00886a','00775c','00664e','005540','004432','003324','002216','001108','f2fffa','e5fff5','d8fff0','cbffeb','beffe6','b1ffe1','a4ffdc','97ffd7','8affd2','7dffcd','70ffc8','63ffc3','56ffbe','49ffb9','3cffb4','2fffaf','22ffaa','15ffa5','08ffa0','00ff99','00ee8f','00dd85','00cc7b','00bb71','00aa67','00995d','008853','007749','00663f','005535','00442b','003321','002217','00110d','f2fff7','e5ffef','d8ffe7','cbffdf','beffd7','b1ffcf','a4ffc7','97ffbf','8affb7','7dffaf','70ffa7','63ff9f','56ff97','49ff8f','3cff87','2fff7f','22ff77','15ff6f','08ff67','00ff66','00ee5f','00dd58','00cc51','00bb4a','00aa43','00993c','008835','00772e','006627','005520','004419','003312','00220b','001104','f2fff5','e5ffeb','d8ffe1','cbffd7','beffcd','b1ffc3','a4ffb9','97ffaf','8affa5','7dff9b','70ff91','63ff87','56ff7d','49ff73','3cff69','2fff5f','22ff55','15ff4b','08ff41','00ff33','00ee30','00dd2d','00cc2a','00bb27','00aa24','009921','00881e','00771b','006618','005515','004412','00330f','00220c','001109','f2fff2','e5ffe5','d8ffd8','cbffcb','beffbe','b1ffb1','a4ffa4','97ff97','8aff8a','7dff7d','70ff70','63ff63','56ff56','49ff49','3cff3c','2fff2f','22ff22','15ff15','08ff08','00ff00','00ee00','00dd00','00cc00','00bb00','00aa00','009900','008800','007700','006600','005500','004400','003300','002200','001100','f5fff2','ebffe5','e1ffd8','d7ffcb','cdffbe','c3ffb1','b9ffa4','afff97','a5ff8a','9bff7d','91ff70','87ff63','7dff56','73ff49','69ff3c','5fff2f','55ff22','4bff15','41ff08','33ff00','30ee00','2ddd00','2acc00','27bb00','24aa00','219900','1e8800','1b7700','186600','155500','124400','0f3300','0c2200','091100','f7fff2','efffe5','e7ffd8','dfffcb','d7ffbe','cfffb1','c7ffa4','bfff97','b7ff8a','afff7d','a7ff70','9fff63','97ff56','8fff49','87ff3c','7fff2f','77ff22','6fff15','67ff08','66ff00','5fee00','58dd00','51cc00','4abb00','43aa00','3c9900','358800','2e7700','276600','205500','194400','123300','0b2200','041100','fafff2','f5ffe5','f0ffd8','ebffcb','e6ffbe','e1ffb1','dcffa4','d7ff97','d2ff8a','cdff7d','c8ff70','c3ff63','beff56','b9ff49','b4ff3c','afff2f','aaff22','a5ff15','a0ff08','99ff00','8fee00','85dd00','7bcc00','71bb00','67aa00','5d9900','538800','497700','3f6600','355500','2b4400','213300','172200','0d1100','fcfff2','f9ffe5','f6ffd8','f3ffcb','f0ffbe','edffb1','eaffa4','e7ff97','e4ff8a','e1ff7d','deff70','dbff63','d8ff56','d5ff49','d2ff3c','cfff2f','ccff22','c9ff15','c6ff08','ccff00','beee00','b0dd00','a2cc00','94bb00','86aa00','789900','6a8800','5c7700','4e6600','405500','324400','243300','162200','081100','fffff2','ffffe5','ffffd8','ffffcb','ffffbe','ffffb1','ffffa4','ffff97','ffff8a','ffff7d','ffff70','ffff63','ffff56','ffff49','ffff3c','ffff2f','ffff22','ffff15','ffff08','ffff00','eeee00','dddd00','cccc00','bbbb00','aaaa00','999900','888800','777700','666600','555500','444400','333300','222200','111100','fffcf2','fff9e5','fff6d8','fff3cb','fff0be','ffedb1','ffeaa4','ffe797','ffe48a','ffe17d','ffde70','ffdb63','ffd856','ffd549','ffd23c','ffcf2f','ffcc22','ffc915','ffc608','ffcc00','eebe00','ddb000','cca200','bb9400','aa8600','997800','886a00','775c00','664e00','554000','443200','332400','221600','110800','fffaf2','fff5e5','fff0d8','ffebcb','ffe6be','ffe1b1','ffdca4','ffd797','ffd28a','ffcd7d','ffc870','ffc363','ffbe56','ffb949','ffb43c','ffaf2f','ffaa22','ffa515','ffa008','ff9900','ee8f00','dd8500','cc7b00','bb7100','aa6700','995d00','885300','774900','663f00','553500','442b00','332100','221700','110d00','fff7f2','ffefe5','ffe7d8','ffdfcb','ffd7be','ffcfb1','ffc7a4','ffbf97','ffb78a','ffaf7d','ffa770','ff9f63','ff9756','ff8f49','ff873c','ff7f2f','ff7722','ff6f15','ff6708','ff6600','ee5f00','dd5800','cc5100','bb4a00','aa4300','993c00','883500','772e00','662700','552000','441900','331200','220b00','110400','fff5f2','ffebe5','ffe1d8','ffd7cb','ffcdbe','ffc3b1','ffb9a4','ffaf97','ffa58a','ff9b7d','ff9170','ff8763','ff7d56','ff7349','ff693c','ff5f2f','ff5522','ff4b15','ff4108','ff3300','ee3000','dd2d00','cc2a00','bb2700','aa2400','992100','881e00','771b00','661800','551500','441200','330f00','220c00','110900','ffffff','f7f7f7','efefef','e7e7e7','dfdfdf','d7d7d7','cfcfcf','c7c7c7','bfbfbf','b7b7b7','afafaf','a7a7a7','9f9f9f','979797','8f8f8f','878787','7f7f7f','777777','6f6f6f','676767','5f5f5f','575757','4f4f4f','474747','3f3f3f','373737','2f2f2f','272727','1f1f1f','171717','0f0f0f','070707','000000','000000');
	for (i=0;i<aCol.length;i++) {
		color = aCol[i];
		var div = document.createElement('DIV');
		div.style.backgroundColor='#' + color;
		div.innerHTML = '<span></span>';
		div.className='colorSquare';
		div.title = '#' + color;	
		div.onclick = chooseColor;
		div.setAttribute('rgbColor',color);
		div.onmouseover = colorPickerShowStatusBarText;
		div.onmouseout = colorPickerHideStatusBarText;
		webColorDiv.appendChild(div);
	}
}

function colorPickerHideStatusBarText()
{
	document.getElementById('colorPicker_statusBarTxt').innerHTML = '&nbsp;';
}

function colorPickerShowStatusBarText()
{
	var txt = this.getAttribute('rgbColor');
	//if(this.title.indexOf('#')<0)txt = txt + " (" + this.title + ")";
	document.getElementById('colorPicker_statusBarTxt').innerHTML = '#' + txt;	
	document.getElementById('colorPicker_statusBar').style.backgroundColor = '#' + txt;	
}

function chooseColor()
{
	color_picker_form_field.value = this.getAttribute('rgbColor');
	color_picker_div.style.display='none';
	color_picker_active_input.style.backgroundColor = '#' + this.getAttribute('rgbColor');	
}

function createStatusBar(inputObj)
{
	var div = document.createElement('DIV');
	div.id = 'colorPicker_statusBar';
	div.className='colorPicker_statusBar';	
	var innerSpan = document.createElement('SPAN');
	innerSpan.id = 'colorPicker_statusBarTxt';
	div.appendChild(innerSpan);
	inputObj.appendChild(div);
}

function showColorPicker(inputObj,formField,cpOffX,cpOffY)
{
	if(!color_picker_div){
		color_picker_div = document.createElement('DIV');
		color_picker_div.id = 'dhtmlgoodies_colorPicker';
		color_picker_div.style.display='none';
		document.body.appendChild(color_picker_div);
		createColorPickerTopRow(color_picker_div);			
		var contentDiv = document.createElement('DIV');
		contentDiv.id = 'color_picker_content';
		color_picker_div.appendChild(contentDiv);			
		createWebColors(contentDiv);
		createStatusBar(color_picker_div);			
	}		
	if(color_picker_div.style.display=='none' || color_picker_active_input!=inputObj)color_picker_div.style.display='block'; else color_picker_div.style.display='none';		
	color_picker_div.style.left = colorPickerGetLeftPos(inputObj) + cpOffX + 'px';
	if (cpOffY == undefined) cpOffY = -220;
	color_picker_div.style.top = colorPickerGetTopPos(inputObj) + inputObj.offsetHeight + cpOffY + 'px';
	color_picker_form_field = formField;
	color_picker_active_input = inputObj;		
}

function setColorByRGB()
{
	var formObj = document.forms[0];	
	var r = document.getElementById('js_color_picker_red_color').value.replace(/[^\d]/,'');
	var g = document.getElementById('js_color_picker_green_color').value.replace(/[^\d]/,'');
	var b = document.getElementById('js_color_picker_blue_color').value.replace(/[^\d]/,'');		
	if(r/1>255)r=255;
	if(g/1>255)g=255;
	if(b/1>255)b=255;
	r = baseConverter(r,10,16) + '';
	g = baseConverter(g,10,16) + '';
	b = baseConverter(b,10,16) + '';
	if(r.length==1)r = '0' + r;
	if(g.length==1)g = '0' + g;
	if(b.length==1)b = '0' + b;

	document.getElementById('colorPreview').style.backgroundColor = '#' + r + g + b;
	document.getElementById('js_color_picker_color_code').value = '#' + r + g + b;		
}	