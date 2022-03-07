function validatePIN (pin) {
    if (pin.length === 4 && Number.isNan(pin)){
      return true
    } else {
      return false
    }
  }

console.log(validatePIN("0123"))