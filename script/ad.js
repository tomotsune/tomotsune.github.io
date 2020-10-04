/**
 *Created by tomot on 2020/10/4.
 */

'use strict';
const imgs = ["images/BG_A_Default_1.jpg", "images/BG_A_Default_2.jpg", "images/BG_A_Default_3.jpg", "images/Home_TopBg0.jpg"];
let i = 0;
let timer;
function show(index) {
    if (index) {
        i = index-1;
      /*  clearInterval(timer);
        timer=setInterval(show,2000);*/
        clearTimeout(timer);
    }

    document.querySelector("#img").src = imgs[i];

    document.querySelectorAll("span").forEach(function (item) {
        item.classList.remove("active");
    });
    document.querySelector('.d2 span:nth-child(' + (i + 1) + ')').classList.add("active");
    ++i;
    if (i > 3) {
        i = 0;
    }
    //计时器函数中调用计时器, 实现周期调用
    timer=setTimeout(show,2000);
}
onload=function () {
    //timer=setInterval(show,2000);
    show();
};
