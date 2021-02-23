const checkPin = require('./')

it('takes a string as pin', () => {
    const result = checkPin('1111', 4)
    expect(result).toBe(true)
})

it('sets 4 as the default length', () => {
    const result = checkPin('1111')
    expect(result).toBe(true)
})

it('allows a pin length of 5', () => {
    const result = checkPin('12345', 5)
    expect(result).toBe(true)
})

it('allows a pin length of 20', () => {
    const result = checkPin('12345678901234567890', 20)
    expect(result).toBe(true)
})

it('returns false if actual length if different to specified length', () => {
    const result = checkPin('1234', 6)
    expect(result).toBe(false)
})

it('returns false if actual length if different to default length', () => {
    const result = checkPin('123456')
    expect(result).toBe(false)
})

it('throws a typeerror if the pin is an integer', () => {
    expect(() => checkPin('12345', '5')).toThrow(TypeError);
})

it('throws a typeerror if the length is a string', () => {
    expect(() => checkPin('12345', '5')).toThrow(TypeError);
})

it('doesn\'t allow spaces in the pin', () => {
    const result = checkPin('12 4')
    expect(result).toBe(false)
})

it('doesn\'t allow letters in the pin', () => {
    const result = checkPin('ab34')
    expect(result).toBe(false)
})

it('doesn\'t allow symbols in the pin', () => {
    const result = checkPin('12$%')
    expect(result).toBe(false)
})

it('allows an empty string if length is set to 0', () => {
    const result = checkPin('', 0)
    expect(result).toBe(true)
})