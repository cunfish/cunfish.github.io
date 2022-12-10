// JavaScript source code

var divimg1 = document.getElementsByClassName("divimg1")[0];
divimg1.onclick = function divimg1() {
    alert("🖐️ 你好，好久不见");
}

var headtext = document.getElementsByClassName("headtext")[0];
headtext.onclick = function headtext() {
   alert("😶 村鱼是作者哦。");
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
