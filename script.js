let equation = "";

(function onstart() {

})();
function updateScreen() {
    document.getElementById("screenText").innerText = equation;
};
function add0() {
    equation += "0";
    updateScreen();
    console.log(equation);
};
function add1() {
    equation += "1";
    updateScreen();
    console.log(equation);
};
function add2() {
    equation += "2";
    updateScreen();
    console.log(equation);
};
function add3() {
    equation += "3";
    updateScreen();
    console.log(equation);
};
function add4() {
    equation += "4";
    updateScreen();
    console.log(equation);
};
function add5() {
    equation += "5";
    updateScreen();
    console.log(equation);
};
function add6() {
    equation += "6";
    updateScreen();
    console.log(equation);
};
function add7() {
    equation += "7";
    updateScreen();
    console.log(equation);
};
function add8() {
    equation += "8";
    updateScreen();
    console.log(equation);
};
function add9() {
    equation += "9";
    updateScreen();
    console.log(equation);
};
function addPlus() {
    equation += "+";
    updateScreen();
    console.log(equation);
};
function addMinus() {
    equation += "-";
    updateScreen();
    console.log(equation);
};
function addTimes() {
    equation += "*";
    updateScreen();
    console.log(equation);
};
function addDivide() {
    equation += "/";
    updateScreen();
    console.log(equation);
};
function addDecimal() {
    equation += ".";
    updateScreen();
    console.log(equation);
};
function addOpenP() {
    equation += "(";
    updateScreen();
    console.log(equation);
};
function addCloseP() {
    equation += ")";
    updateScreen();
    console.log(equation);
};
function addPercent() {
    equation += "%";
    updateScreen();
    console.log(equation);
};
function clearScreen() {
        equation = "";
        updateScreen();
        console.log(equation);
};
function calculate() {
    equation = eval(equation);
    updateScreen()
}