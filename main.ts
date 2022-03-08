let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let LED = 0
let B = 0
function Eteint_les_LEDs () {
    moveMotorZIP.clear()
    moveMotorZIP.show()
}
function Allume_les_LEDs (Couleur: string) {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    if (Couleur == "rouge") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    } else if (Couleur == "orange") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    } else if (Couleur == "jaune") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    } else if (Couleur == "vert") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    } else if (Couleur == "bleu") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    } else if (Couleur == "violet") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Violet))
    } else if (Couleur == "rose") {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Indigo))
    } else if (Couleur == "police") {
        LED = 0
        B = 0
        while (B != 1) {
            moveMotorZIP.setZipLedColor(LED % 4, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
            moveMotorZIP.setZipLedColor((LED + 1) % 4, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
            moveMotorZIP.setZipLedColor((LED + 2) % 4, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
            moveMotorZIP.setZipLedColor((LED + 3) % 4, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
            LED = LED + 1
            moveMotorZIP.show()
            basic.pause(200)
            if (input.buttonIsPressed(Button.B)) {
                B = 1
            }
        }
    } else if (Couleur == "aléatoire") {
        B = 0
        while (B != 1) {
            moveMotorZIP.showColor(Kitronik_Move_Motor.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            moveMotorZIP.show()
            basic.pause(500)
            if (input.buttonIsPressed(Button.B)) {
                B = 1
            }
        }
    } else {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    }
    moveMotorZIP.show()
}
