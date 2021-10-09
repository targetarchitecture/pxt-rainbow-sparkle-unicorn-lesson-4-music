input.onButtonPressed(Button.A, function () {

    RainbowSparkleUnicorn.Sound.playTrack(70)
    RainbowSparkleUnicorn.Light.turnOff(lightPins.P12)
    basic.showNumber(3)

})
RainbowSparkleUnicorn.start()
RainbowSparkleUnicorn.Sound.setVolume(10)
basic.showNumber(1)
input.onButtonPressed(Button.B, function () {

    RainbowSparkleUnicorn.Sound.playTrack(10)
    RainbowSparkleUnicorn.Light.turnOn(lightPins.P12)

    basic.showNumber(2)
})
