/**
 *Created by tomot on 2020/10/7.
 */

'use strict';

//获取移动端尺寸
/*let screenWidth = window.screen.availWidth;//获取屏幕宽度.*/
let documentWith = document.documentElement.clientWidth;//页面DOM宽度
let containerWidth = documentWith*0.92;//容器宽度
let cellWidth = documentWith*0.18;//单元格宽度
let cellSpace = documentWith*0.04;//单元格间隔宽度


//获取距离上面的位置
function getPosTop(i) {
   /* return 20 + 120 * i;*/
    return cellSpace+(cellWidth+cellSpace)*i;/*适配移动端*/
}

//获取距离左边的位置
function getPosLeft(j) {
/*    return 20 + 120 * j;*/
    return cellSpace+(cellWidth+cellSpace)*j;/*适配移动端*/
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

//能否向左移动
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

//能否向右移动
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

//能否向上移动
function canMoveUp(nums) {
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] != 0) {
                if (nums[i - 1][j] == 0 || nums[i - 1][j] == nums[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//能否向下移动
function canMoveDown(nums) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] != 0) {
                if (nums[i + 1][j] == 0 || nums[i + 1][j] == nums[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

//能否向任意方向移动
function canMove(nums) {
    return canMoveLeft(nums) || canMoveRight(nums) || canMoveUp(nums) || canMoveDown(nums);
}

//判断水平方向上是否没有障碍物
function noBlockHorizontal(row, col1, col2, nums) {
    for (let i = col1 + 1; i < col2; i++) {
        if (nums[row][i] != 0) {
            return false;
        }
    }
    return true;
}

//判断垂直方向上是否没有障碍物
function noBlockVertical(col, row1, row2, nums) {
    for (let i = row1 + 1; i < row2; i++) {
        if (nums[i][col] != 0) {
            return false;
        }
    }
    return true;
}

//更新分数
function updateScore(score) {
    $("#score").text(score);
}

//判断游戏是否结束 1. 没有空的单元格 & 2. 不能移动.
function isGameOver() {
    if (noSpace(nums) && !canMove(nums)) {
        alert("Game Over!");
    }
}
