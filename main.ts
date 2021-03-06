input.onGesture(Gesture.Shake, function () {
    bluetooth.uartWriteString("Button A")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Button A")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash)))
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("Button B")
})
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteString("" + ("" + input.acceleration(Dimension.X) + ("," + ("" + input.acceleration(Dimension.Y) + ("," + ("" + input.acceleration(Dimension.Z) + ("," + input.acceleration(Dimension.Strength))))))))
    basic.pause(1)
})
