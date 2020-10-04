/**
 *Created by tomot on 2020/10/4.
 */

'use strict';
var r = 0, l = 0;
var timer;
document.getElementById("btn_start").addEventListener("click", function (e) {
    e.target.disabled = true;
    document.getElementById("btn_stop").disabled = false;
    timer = setInterval(function () {
        ++r;
        if (r > 9) {
            r = 0;
            ++l;
        }
        if (l > 9) {
            r = 0;
            l = 0;
        }
        document.getElementById("img_right").src = "images/figure" + r + ".svg";
        document.getElementById("img_left").src = "images/figure" + l + ".svg";
    }, 100);
});
document.getElementById("btn_stop").addEventListener("click", function (e) {
    document.getElementById("btn_start").disabled=false;
    e.target.disabled=true;
    clearInterval(timer);
});