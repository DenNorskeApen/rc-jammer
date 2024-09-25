radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        sender_id = 0
    } else if (receivedNumber == 7) {
        sender_id = 1
    } else if (receivedNumber == 8) {
        sender_id = 2
    } else if (receivedNumber == 9) {
        sender_id = 3
    } else if (receivedNumber == 10) {
        sender_id = 4
    } else if (receivedNumber == 11) {
        sender_id = 5
    }
})
input.onButtonPressed(Button.A, function () {
    sender_id += -1
    if (sender_id < 0) {
        sender_id = 5
    }
})
input.onButtonPressed(Button.B, function () {
    sender_id += 1
    if (sender_id > 5) {
        sender_id = 0
    }
})
let sender_id = 0
radio.setGroup(42)
sender_id = 5
basic.forever(function () {
    radio.sendNumber(sender_id)
    basic.showNumber(sender_id)
})
