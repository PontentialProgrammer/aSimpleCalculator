const screen = document.querySelector(".screen");
const resetButton = document.querySelector(".reset-button");
const deleteKey = document.querySelector(".delete");
const divide = document.querySelector(".divide")
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
const equalTo = document.querySelector(".equalTo");

let calculated = false;
const numberButtons = [one, two, three, four, five, six, seven, eight, nine, zero, point];
const buttons = [minus, plus, divide, multiply]
resetButton.addEventListener('click', () => {
    screen.value = ""
})
deleteKey.addEventListener('click', () => {
    newScreen = screen.value.split("")
    newScreen.pop();
    screen.value = newScreen.join("")
})

const inputValue = (button) => {
    button.addEventListener('click', () => {
        if(calculated){
            screen.value = "";
            calculated = false;
            screen.value += button.innerText

        }else{
            screen.value += button.innerText
        }
    })
}
const arithmetic = (button) => {
    button.addEventListener('click', () => {
        newScreen = screen.value.split("");        
        if(newScreen != "" ){
            newScreen.join("")
            screen.value += button.innerText
            calculated = false;
        }
        
    })
}

//Install the mathJS library
console.log(multiply.value)
const calculate = (button) => {
    screen.value = screen.value.toUpperCase().replace("X", "*")

    try {
        screen.value = math.evaluate(screen.value)
        calculated = true;
    } catch (error) {
        screen.value = "Syntax Error"
        calculated = true;
    }
}
equalTo.addEventListener('click', calculate)
equalTo.addEventListener('click', calculate)
for (let i = 0; i< buttons.length; i++) {
    arithmetic(buttons[i])
}
for(let i = 0; i < numberButtons.length; i++){
    inputValue(numberButtons[i])
}

const inputCalculate = (e) => {
    e.preventDefault();
    
}
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    calculate()
})
