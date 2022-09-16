basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (input.temperature() <= 8) {
            basic.showString("Kalt")
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (input.temperature() > 20) {
            basic.showString("Hais")
        }
    }
})
