var dispDate = function disptime() {
	var calendisp = document.getElementsByClassName("calendar"); 
	var nowtime = new Date();	//Sat Dec 19 2015 21:24:52 GMT+0800 (中国标准时间)
	calendisp[0].children[0].innerText = (nowtime.toLocaleTimeString().length-2)==8?nowtime.toLocaleTimeString().substring(2,nowtime.toLocaleTimeString().length):"0"+nowtime.toLocaleTimeString().substring(2,nowtime.toLocaleTimeString().length);
	calendisp[0].children[1].innerText = nowtime.getFullYear().toString() + "-" + (((nowtime.getMonth() + 1).toString().length-0)==1?"0"+(nowtime.getMonth() + 1):(nowtime.getMonth() + 1)) + "-" + ((nowtime.getDate().toString().length-0)==1?"0"+nowtime.getDate().toString():nowtime.getDate().toString());//一个注意括号，二个注意-0，前者分清楚计算式，后者进行字符串与数字的转换
	setTimeout(dispDate,1000);
};