// JavaScript source code


window.onload = function () {
    alert("页面加载有点慢" + "\n" + "请耐心等待几秒☺️");
    var hit = document.getElementsByClassName("letter")[0];
    hit.onclick = function () {
        alert("✉️ cunfish@qq.com");
    }

    /*计算日期，年月日 一秒钟刷新一次*/
    var tday = null;
    tday = setTimeout(daytime,1000);
    function daytime() {
        clearTimeout(tday);
        var weekDayLabels = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;//获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
        var day = now.getDate();
        document.querySelector(".report").innerHTML = '<span class="special">' + year + '年' + month + '月' + day + '日' + weekDayLabels[now.getDay()] + '</span><br>';
        tday = setTimeout(daytime, 1000);
    }
    

    /*计算时间小时分钟与秒，一秒钟刷新一次*/
    var t = null;
    t = setTimeout(nowtime, 1000);
    function nowtime() {
        clearTimeout(t);
        var d = new Date();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        document.querySelector(".ntime").innerHTML = hour + ":" + min + ":" + sec;
        t = setTimeout(nowtime, 1000);

    }

}