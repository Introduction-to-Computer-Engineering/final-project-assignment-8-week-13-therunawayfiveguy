basic.forever(function () {
    for (let index = 950; index < (20000 * .05) * 19; index += (1000 * .05) * 19) { //increments of wave length by 5%
        pins.servoSetPulse(AnalogPin.P0, index)
        basic.pause(100)
    }
    for (let index = (20000 * .05) * 19; index > 950; index -= (1000 * .05) * 19) { // decrements of wave length by 5%
        pins.servoSetPulse(AnalogPin.P0, index)
        basic.pause(100)
    }
})
