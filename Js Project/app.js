
const buttonsEL = document.querySelectorAll("button");

const inputFieldEL = document.getElementById("result");

for(let i = 0;i<buttonsEL.length; i++){
    buttonsEL[i].addEventListener("click",
        () => {
            const buttonValue = buttonsEL[i].textContent;
            if(buttonValue === "C"){
                clearResult();
            }else if(buttonValue === "="){
                calculateResult();
            }else{
                appendValue(buttonValue)
            }
        }
    );
}

function clearResult(){
    inputFieldEL.value = "";
}

function calculateResult(){
    inputFieldEL.value = eval(inputFieldEL.value);
}

function appendValue(buttonValue){
    inputFieldEL.value += buttonValue;
    //inputField.value = inputField.value + buttonValue;
}