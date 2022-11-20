huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("S7", 80)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("S8", 80)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("S9", 80)
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("S10", 80)
    } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("SUn", 80)
    } else if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("SOb", 80)
    } else if (huskylens.isAppear(7, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("SKö", 80)
    } else if (huskylens.isAppear(8, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xffff00)
        basic.showString("SAs", 80)
    } else if (huskylens.isAppear(9, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("R7", 80)
    } else if (huskylens.isAppear(10, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("R8", 80)
    } else if (huskylens.isAppear(11, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("R9", 80)
    } else if (huskylens.isAppear(12, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showString("R10", 80)
        basic.setLedColor(0xff0000)
    } else if (huskylens.isAppear(13, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("RUn", 80)
    } else if (huskylens.isAppear(14, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("ROo", 80)
    } else if (huskylens.isAppear(15, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("RKö", 80)
    } else if (huskylens.isAppear(16, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0xff0000)
        basic.showString("RAs", 80)
    } else if (huskylens.isAppear(17, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("G7", 80)
    } else if (huskylens.isAppear(18, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("G8", 80)
    } else if (huskylens.isAppear(19, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("G9", 80)
    } else if (huskylens.isAppear(20, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("G10", 80)
    } else if (huskylens.isAppear(21, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("GUn", 80)
    } else if (huskylens.isAppear(22, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("GOb", 80)
    } else if (huskylens.isAppear(23, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("GKö", 80)
    } else if (huskylens.isAppear(24, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x00ff00)
        basic.showString("GAs", 80)
    } else if (huskylens.isAppear(25, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("E7", 80)
    } else if (huskylens.isAppear(26, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("E8", 80)
    } else if (huskylens.isAppear(27, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("E9", 80)
    } else if (huskylens.isAppear(28, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("E10", 80)
    } else if (huskylens.isAppear(29, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("EUn", 80)
    } else if (huskylens.isAppear(30, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("EOb", 80)
    } else if (huskylens.isAppear(31, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("EKö", 80)
    } else if (huskylens.isAppear(32, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.setLedColor(0x65471f)
        basic.showString("EAs", 80)
    } else {
        basic.clearScreen()
        basic.turnRgbLedOff()
    }
})
