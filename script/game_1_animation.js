/**
 *Created by haipinHu(tomo) on 2020/10/7.
 */

'use strict';

//通过动画移动数字
function showNumberWithAnimation(i, j, randNumber) {
    let numberCell = $("#number-cell-" + i + "-" + j);
    numberCell.css({
        "background-color": getNumberBackgroundColor(randNumber),
        "color": getNumberColor(randNumber)

    }).text(randNumber).animate({
        "width": "100px",
        "height": "100px",
        "top": getPosTop(i),
        "left": getPosLeft(j)
    }, 500);
}

//通过动画移动单元格
function showMoveAnimation(fromX, fromY, toX, toY) {
    let numberCell = $("#number-cell-"+fromX+"-"+fromY);
    numberCell.animate({
        "top":getPosTop(toX),
        "left":getPosLeft(toY)
    },200);
}
