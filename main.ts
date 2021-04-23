radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    music.playMelody("E B C5 A B G A F ", 120)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(107)
basic.forever(function () {
	
})
