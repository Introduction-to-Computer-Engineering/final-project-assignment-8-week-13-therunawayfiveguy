basic.forever(function () {
    for (let index = 0; index < (100); index += (10)) { // how much the duration is changed
        pins.servoWritePin(AnalogPin.P0, 90) // sets the pulse
        basic.pause(500)
        pins.servoSetPulse(AnalogPin.P0, 1000) // changes duration of pulse
        basic.pause(500)
    }
}) 
