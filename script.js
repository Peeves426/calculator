let equation = "";

(function onstart() {

})();
function updateScreen() {
    document.getElementById("screenText").innerText = equation;
};
function typeCharacter(requestedNum) {
    equation += requestedNum;
    updateScreen()
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