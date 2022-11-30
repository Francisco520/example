input.onButtonPressed(Button.A, function () {
    if (varA + varB < 5) {
        basic.showNumber(varA + varB)
        basic.showIcon(IconNames.House)
    } else {
        basic.showNumber(varA + varB)
        basic.showIcon(IconNames.StickFigure)
    }
})
input.onButtonPressed(Button.B, function () {
    if (varA - varB < 1) {
        basic.showString("Isabella Marquez Tapia")
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("1A")
        basic.showIcon(IconNames.SmallDiamond)
    }
})
let varB = 0
let varA = 0
varA = randint(1, 5)
varB = randint(1, 7)
