function navSwitch(pageId){
	$(pageId).addClass("active");
	$(pageId).siblings().removeClass("active");
	/*处理导航栏mask部分*/
	if(pageId === "#lianxi-page"){
		dispContactPage();
	}
}

function dispContactPage(){
	if ($(".mask").css("left") === "100%") {
		//$(".mask").css("left","0%");
		$(".mask").show();
		$(".mask").animate({ left: "70%" }, 1500);
	} else {
		$(".mask").animate({ left: "100%" }, 1500, function(){
			$(".mask").hide();
		});
	}
}

//收藏本站
function addFavorite(url, title) {
	try {
		window.external.addFavorite(url, title);
	} catch (e){
		try {
			window.sidebar.addPanel(title, url, '');
		} catch (e) {
			alert("请按 Ctrl+D 键添加到收藏夹", 'notice');
		}
	}
}

// //根据参数名获得该参数  pname等于想要的参数名  这个是获取页面锚
// function getParam(pname) {   
//     var params = location.search.substr(1); //  获取参数 平且去掉？  
//     var ArrParam = params.split('&');  
//     if (ArrParam.length == 1) {  
//    //只有一个参数的情况  
//         return params.split('=')[1];  
//     }  
//     else {  
//         //多个参数参数的情况  
//         for (var i = 0; i < ArrParam.length; i++) {  
//             if (ArrParam[i].split('=')[0] == pname) {  
             
//                 return ArrParam[i].split('=')[1];  
//             }  
//         }  
//     }  
// }  

//  // function moveToPageAnchor() {  
//     var anchor = $("#" + getParam("m")); //获得锚点  m是www.1.com/1.html?m=1中的m
//     if (anchor.length > 0) {//判断对象是否存在  
//         var pos = anchor.offset().top;  
//         var poshigh = anchor.height();  
//         $("html,body").animate({ scrollTop: pos-poshigh-30 }, 1000);  
//     }  
// }

function moveToAnchor(anchorId) {  	//锚移动
     var anchor = $(anchorId);//document.getElementById(anchorId);
     if (anchor.length > 0 && anchor.offset().top!=document.body.scrollTop) {//判断对象是否存在以及是否需要滚动  
         var pos = anchor.offset().top;   
         //var poshigh = anchor.height();  
         $("html,body").animate({ scrollTop: pos}, 1500); 
     }  
 }