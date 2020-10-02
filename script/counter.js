function calculate(flag) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    switch (flag) {
        case '+':
            document.getElementById('result').value=num1+num2;
            break;
        case '-':
            document.getElementById('result').value=num1-num2;
            break;
        case '*':
            document.getElementById('result').value=num1*num2;
            break;
        case '/':
            document.getElementById('result').value=num1/num2;
            break;
    }
}