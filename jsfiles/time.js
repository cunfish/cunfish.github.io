// JavaScript source code

 /*计算日期，年月日 一秒钟刷新一次*/
 var tday = null;
 function daytime() {
     clearTimeout(tday);
     var weekDayLabels = new Array("周日","周一","周二","周三","周四","周五","周六");
     var now = new Date();
     var year = now.getFullYear();
     var month = now.getMonth() + 1;//获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
     var day = now.getDate();
     return '<span class="special">' + year + '/' + month + '/' + day + '/' + weekDayLabels[now.getDay()] + '</span><br>';

 }
 setInterval(function () {
     document.querySelector(".report").innerHTML = daytime();
 }, 1000)


 /*计算时间小时分钟与秒，一秒钟刷新一次*/
 var t = null;
 function nowtime() {
     clearTimeout(t);
     var d = new Date();
     var hour = d.getHours();
     var min = d.getMinutes();
     min = min < 10 ? '0' + min : min;
     var sec = d.getSeconds();
     sec = sec < 10 ? '0' + sec : sec;
     return hour + ":" + min + ":" + sec;

 }
 setInterval(function () {
     document.querySelector(".ntime").innerHTML = nowtime();
 }, 1000)
