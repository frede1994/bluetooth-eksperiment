bluetooth.startUartService()
bluetooth.startAccelerometerService()
bluetooth.startLEDService()
basic.forever(function () {
    bluetooth.uartWriteValue("soundlevel", input.soundLevel())
    bluetooth.uartWriteValue("lightlevel", input.lightLevel())
})
