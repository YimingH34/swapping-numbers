input.onButtonPressed(Button.A, function () {
    number_on_A += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number_on_B)
    basic.showNumber(number_on_A)
})
input.onButtonPressed(Button.B, function () {
    number_on_B += 1
})
let number_on_A = 0
let number_on_B = 0
number_on_B = 0
number_on_A = 0
basic.forever(function () {
	
})
