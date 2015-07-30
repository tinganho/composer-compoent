function getPlatform(userAgent) {
    var platform = 0;
    if (__dirname && __file) {
        platform |= 2 /* Server */;
        if (navigator) {
            if (/(android)/i.test(userAgent)) {
                platform |= 4 /* Android */;
            }
            if (/iPad|iPhone|iPod/.test(userAgent)) {
                platform |= 8 /* Ios */;
            }
            if (/iPad/.test(userAgent)) {
                platform |= 64 /* Tablet */;
            }
            if (/Windows Phone/.test(userAgent)) {
                platform |= 16 /* WindowsPhone */;
            }
        }
    }
    else if (window) {
        platform |= 1 /* Client */;
        if (navigator) {
            if (/(android)/i.test(navigator.userAgent)) {
                platform |= 4 /* Android */;
            }
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                platform |= 8 /* Ios */;
            }
            if (/iPad/.test(navigator.userAgent)) {
                platform |= 64 /* Tablet */;
            }
            if (/Windows Phone/.test(navigator.userAgent)) {
                platform |= 16 /* WindowsPhone */;
            }
        }
    }
    return platform;
}
exports.getPlatform = getPlatform;
