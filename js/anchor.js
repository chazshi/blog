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

function moveToAnchor(anchorId) {  
     //var anchor = $("#" + getParam("m")); //获得锚点  
     var anchor = $(anchorId);//document.getElementById(anchorId);
     if (anchor.length > 0 && anchor.offset().top!=document.body.scrollTop) {//判断对象是否存在以及是否需要滚动  
         var pos = anchor.offset().top;   
         var poshigh = anchor.height();  
         $("html,body").animate({ scrollTop: pos-poshigh+50}, 700); 
         //$("html,body").animate({ scrollTop: pos-poshigh+50 }, 300); 
     }  
 }

 // function moveToPageAnchor() {  
 //     var anchor = $("#" + getParam("m")); //获得锚点  m是www.1.com/1.html?m=1中的m
 //     if (anchor.length > 0) {//判断对象是否存在  
 //         var pos = anchor.offset().top;  
 //         var poshigh = anchor.height();  
 //         $("html,body").animate({ scrollTop: pos-poshigh-30 }, 1000);  
 //     }  
 // }



