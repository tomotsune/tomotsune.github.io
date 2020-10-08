/**
 *Created by tomot on 2020/10/7.
 */

'use strict';

//获取距离上面的位置
function getPosTop(i) {
    return 20 + 120 * i;
}

//获取距离左边的位置
function getPosLeft(j) {
    return 20 + 120 * j;
}

function getNumberBackgroundColor(num) {
    switch (num) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
}

function getNumberColor(num) {
    if (num <= 4) {
        return "#776e65";
    } else {
        return "#fff";
    }
}

function noSpace(nums) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function canMoveLeft(nums) {
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            if (nums[i][j] != 0) {
                if (nums[i][j - 1] == 0 || nums[i][j - 1] == nums[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(nums) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (nums[i][j] != 0) {
                if (nums[i][j + 1] == 0 || nums[i][j + 1] == nums[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//判断水平方向上是否没有障碍物
function noBlockHorizontal(row, col1, col2, nums) {
    for (let i = col1+1; i < col2; i++) {
        if (nums[row][i] != 0) {
            return false;
        }
    }
    return true;
}

//更新分数
function updateScore(score) {
    $("#score").text(score);
}