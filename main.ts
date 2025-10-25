/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alex
 * Created on: Oct 2025
 * This program shows the colour red if closer than 10 cm and green if not.
*/


// variables
let distanceToObject: number = 0
const strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//setup
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)

// shows red if too close and shows green if it's not
    if (distanceToObject >= 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(3000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(3000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
        