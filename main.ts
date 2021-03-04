// When the button A is pressed, the variable is increased by 1
input.onButtonPressed(Button.A, function () {
    number_on_A += 1
})
// When you press the button A and B, it will show the number on B and then A.
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number_on_B)
    basic.showNumber(number_on_A)
})
// When the button B is pressed, the Variable is increased by 1
input.onButtonPressed(Button.B, function () {
    number_on_B += 1
})
// when the machine turns on, you will want the 2 variables to s\be set to 0.
let number_on_A = 0
let number_on_B = 0
number_on_B = 0
number_on_A = 0
