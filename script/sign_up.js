/**
 *Created by tomot on 2020/10/6.
 */

'use strict';

function checkUsername(e) {
    let username = e.target.value.trim();
    //用户名你由数字, 字母, 下划线, 点号, 横线, 中文字符, 但只能由字母或数字开头, 长度3-14
    let reg = /^[\da-z][\u4E00-\u9FA5\d\w.-]{2,13}$/i;
    if (!reg.test(username)) {
        document.getElementById("usernameInfo").innerHTML = "用户名你由数字, 字母, 下划线, 点号, 横线, 中文字符, 但只能由字母或数字开头, 长度3-14";
        document.getElementById("usernameInfo").className = "error";
        return false;
    } else {
        document.getElementById("usernameInfo").innerHTML = "ok";
        document.getElementById("usernameInfo").className = "success";
        return true;
    }
}

function checkPwd(e) {
    let pwd = e.target.value.trim();
    //密码只能由数字和字母组成, 长度为6-10位.
    let reg = /^[\da-z]{6,10}$/;
    if (!reg.test(pwd)) {
        document.getElementById("pwdInfo").innerHTML = "密码只能由数字和字母组成, 长度为6-10位.";
        document.getElementById("pwdInfo").className = "error";
        return false;
    } else {
        document.getElementById("pwdInfo").innerHTML = "ok";
        document.getElementById("pwdInfo").className = "success";
        return true;
    }

}

function checkRepwd(e) {
    let pwd = document.getElementById("pwd").value.trim();
    let repwd = e.target.value.trim();
    if (repwd != pwd) {
        document.getElementById("repwdInfo").innerHTML = "两次输入的密码不一致";
        document.getElementById("repwdInfo").className = "error";
        return false;
    } else {
        document.getElementById("repwdInfo").innerHTML = "ok";
        document.getElementById("repwdInfo").className = "success";
        return true;
    }
}

function checkPhone(e) {
    let phone = document.getElementById("phone").value.trim();
    let reg = /^1[3-9]\d{9}$/;
    if (!reg.test(phone)) {
        document.getElementById("phoneInfo").innerHTML = "手机号必须为11位";
        document.getElementById("phoneInfo").className = "error";
        return false;
    } else {
        document.getElementById("phoneInfo").innerHTML = "ok";
        document.getElementById("phoneInfo").className = "success";
        return true;
    }
}

function checkEmail(e) {
    let email = document.getElementById("email").value.trim();
    let reg = /^\w+@\w+(\.[\da-z]{2,4}){1,2}$/i;
    if (!reg.test(email)) {
        document.getElementById("emailInfo").innerHTML = "邮箱格式不正确";
        document.getElementById("emailInfo").className = "error";
        return false;
    } else {
        document.getElementById("emailInfo").innerHTML = "ok";
        document.getElementById("emailInfo").className = "success";
        return true;
    }
}

function checkAll() {

    return checkUsername() && checkPwd() && checkRepwd() && checkPhone() && checkEmail();
}

document.getElementById("username").addEventListener("blur", checkUsername);
document.getElementById("pwd").addEventListener("blur", checkPwd);
document.getElementById("repwd").addEventListener("blur", checkRepwd);
document.getElementById("phone").addEventListener("blur", checkPhone);
document.getElementById("email").addEventListener("blur", checkEmail);
