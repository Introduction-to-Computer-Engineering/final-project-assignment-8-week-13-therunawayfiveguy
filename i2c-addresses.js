
basic.forever(function () { // catures a moment in an address frame
    let value = pins.i2cReadNumber(0x1E, NumberFormat.Int32BE, false) // yellow represents data being sent to address
    // blue represents 32 bit block of binary
    basic.pause(250)
    basic.showNumber(value)
})
// Arbitary address does not show acknowledgement of data
// 0x1E = accelometer for variant 2, which does show acknowledgement in data recieval
