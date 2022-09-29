// JavaScript source code


window.onload = function () {

    var letter = document.getElementsByClassName("letter")[0];
    letter.onclick = function letter() {
        alert("这是我的联系方式\n✉️ cunfish@qq.com\n🧐有什么坏点子都可以告诉我哦");
    }

    var divimg1 = document.getElementsByClassName("divimg1")[0];
    divimg1.onclick = function divimg1() {
        alert("🖐️ 你会记得我吗");
    }

    var divimg2 = document.getElementsByClassName("divimg2")[0];
    divimg2.onclick = function divimg2() {
        alert("🖐️ 我想你，给我打电话吧");
    }

    var himg = document.getElementsByClassName("himg")[0];
    himg.onclick = function divimg1() {
        alert("🙄 瞎点什么");
    }
}
/*为什么上面已经有window.onload这里还需要
 *，是为了防止上面单击绑定没运行，而下面的时间计算也没运行
 * 因为时间计算是一直在运行，为了防止中断，故两个function并行
 */
window.onload = function () {

    /*计算日期，年月日 一秒钟刷新一次*/
    var tday = null;
    function daytime() {
        clearTimeout(tday);
        var weekDayLabels = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;//获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
        var day = now.getDate();
        return  '<span class="special">' + year + '年' + month + '月' + day + '日' + weekDayLabels[now.getDay()] + '</span><br>';
 
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

}