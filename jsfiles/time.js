// JavaScript source code

 /*�������ڣ������� һ����ˢ��һ��*/
 var tday = null;
 function daytime() {
     clearTimeout(tday);
     var weekDayLabels = new Array("������", "����һ", "���ڶ�", "������", "������", "������", "������");
     var now = new Date();
     var year = now.getFullYear();
     var month = now.getMonth() + 1;//��ȡ�£��� Date ���󷵻��·� (0 ~ 11)�����ڴ˴�+1
     var day = now.getDate();
     return '<span class="special">' + year + '��' + month + '��' + day + '��' + weekDayLabels[now.getDay()] + '</span><br>';

 }
 setInterval(function () {
     document.querySelector(".report").innerHTML = daytime();
 }, 1000)


 /*����ʱ��Сʱ�������룬һ����ˢ��һ��*/
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
