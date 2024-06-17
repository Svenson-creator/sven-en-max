input.onGesture(Gesture.Shake, function () {
    myhand = randint(1, 3)
    basic.showNumber(myhand)
})
let myhand = 0
let rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
let paperimage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
let scissorsimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
