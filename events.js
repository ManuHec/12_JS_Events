/********  Variablen **********/

const btn = (document.getElementById("trigBtn"));




/********  Event-Listener **********/

window.addEventListener("load", toggleAppStatus);
btn.addEventListener("click", toggleAppStatus);
let appStatus = true;

/********  Business-Logic | Toggle **********/

function toggleAppStatus() {
    appStatus = !appStatus;
    updateView();

}

/********  Änderung in View-Schicht **********/
//switchClassName("night")
//switchClassName("day")

function updateView() {
    if (appStatus) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }

}

function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
//switchBtnTxt("night");
//switchBtnTxt("day");

function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}

/* Tools */
function output(outputData) {
    console.log(outputData);
}