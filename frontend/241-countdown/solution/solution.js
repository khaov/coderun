function createCountdown(n) {
  return () => {
    if (typeof n !== 'number' || n <= 0) {
      return 0;
    }
    return n--
  }
}

module.exports = createCountdown

const countdownFrom2 = createCountdown(2)

// countdownFrom2() // 2
// countdownFrom2() // 1
// countdownFrom2() // 0
// countdownFrom2() // 0
