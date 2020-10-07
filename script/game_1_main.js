/**
 *Created by haipinHu(tomo) on 2020/10/7.
 */

'use strict';
let nums = [];

$(function () {
    newGame();
});

//开始新游戏
function newGame() {
    init();

    //在随机的两个单元格中生成数字.
    generateOneNumber();
    generateOneNumber();
}

//初始化页面
function init() {
    //初始化单元格的位置(下层单元格)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css({
                "top": getPosTop(i),
                "left": getPosLeft(j)
            });
        }
    }

    //初始化数组
    for (let i = 0; i < 4; i++) {
        nums[i] = [];
        for (let j = 0; j < 4; j++) {
            nums[i][j] = 0;
        }
    }

    //动态创建上层单元格并初始化
    updateView();
}

function updateView() {
    //清空所有上层单元格, 然后初始化创建.
    $(".number-cell").remove();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $("#grid-container")
                .append("<div class='number-cell' id='number-cell-"
                    + i
                    + "-"
                    + j
                    + "'></div>");
            let numberCell = $("#number-cell-" + i + "-" + j);
            if (nums[i][j] === 0) {
                numberCell.css({
                    "width": "0",
                    "height": "0",
                    "top": getPosTop(i) + 50,
                    "left": getPosLeft(j) + 50
                });
            } else {
                numberCell.css({
                    "width": "100px",
                    "height": "100px",
                    "top": getPosTop(i),
                    "left": getPosLeft(j),
                    "background-color": getNumberBackgroundColor(nums[i][j]),
                    "color": getNumberColor(nums[i][j])
                }).text(nums[i][j]);

            }
        }
    }
}

/*
*在随机的单元格中生成一个随机数.
*1. 在空余的单元格中随机找一个.
*2. 随机产生一个2或4.
*/
function generateOneNumber() {
    //判断是否还有空间, 如果没有空间则直接返回.
    if (noSpace(nums)) {
        return;
    }

    //随机一个位置
    let count = 0;
    let temp = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] === 0) {
                temp[count++] = i * 4 + j;
            }
        }
    }
    let pos = Math.floor(Math.random() * count);//[0,1)*6=[0,6)=[0,5]
    let randX = Math.floor(temp[pos] / 4);
    let randY = Math.floor(temp[pos] % 4);

    let randNum = Math.random() < 0.5 ? 2 : 4;

    nums[randX][randY] = randNum;
    showNumberWithAnimation(randX, randY, randNum);
}

//实现键盘相应
$(document).keydown(function (event) {
    console.log(event);
    switch (event.keyCode) {
        case 37://left
            //判断是否可以向左移动
            if (canMoveLeft(nums)) {
                moveLeft();
            }
            break;
        case 38://up
            break;
        case 39://right
            break;
        case 40://left
            break;
        default:
            break;
    }
});

/*
 *  向左移动
 * 需要对每一个数字的左边进行判断, 选中落脚点, 落脚点有两种情况
 *  1. 落脚点没有数字, 并且移动路径中没有障碍物.
 *  2. 落脚点数字相同, 路径无障碍.
 */
function moveLeft() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] != 0) {
                for (let k = 0; k < j; k++) {
                    if (nums[i][k] == 0 && noBlockHorizontal(i, k, j, nums)) {//第i行的第k-j列之间是否有障碍物.
                        //移动操作
                        showMoveAnimation(i, j, i, k);
                        nums[i][k] = nums[i][j];
                        nums[i][j] = 0;
                        break;
                    }
                }
            }
        }
    }
    setTimeout(updateView, 200);
}