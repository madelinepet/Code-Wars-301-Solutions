function validatePIN (pin) {
  if (/^([0-9]{4}|[0-9]{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}
validatePIN();