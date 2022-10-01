// JavaScript source code

var divimg1 = document.getElementsByClassName("divimg1")[0];
divimg1.onclick = function divimg1() {
    alert("🖐️ 你会记得我吗");
}
//var himg = document.getElementsByClassName("himg")[0];
//himg.onclick = function himg() {
//    alert("🙄 瞎点什么");
//}
var headtext = document.getElementsByClassName("headtext")[0];
headtext.onclick = function headtext() {
   alert("😶 村鱼是作者，SK？就只是SK而已。");
}
var indb = document.getElementsByClassName("indb")[0];
indb.onclick = function indb() {
    alert("🤡 我就知道你会点这里");
}


// 获取弹窗
var modal = document.getElementById('myModal');

// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.getElementById('himg');
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    captionText.innerHTML = this.alt;
}

// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];

// 当点击 (x), 关闭弹窗
span.onclick = function () {
    modal.style.display = "none";
}
 