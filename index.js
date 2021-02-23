const checkPin = (pin, length = 4) => {
    if (typeof pin != 'string' || typeof length != 'number') {
        throw new TypeError('Please pass in the pin as either an integer or a string.');
    }

    if (pin.length == length) {
        return /\D/.test(pin) == false ? true : false;
    } else {
        return false
    }
}

module.exports = checkPin
