import * as ntw from "number-to-words"
/**
 * @returns {number} day - The current day of the year
 * @example 70
 * */
const today = new Date()
const start = new Date(today.getFullYear(), 0, 0)
const diff = today - start
const oneDay = 1000 * 60 * 60 * 24
export const day = Math.floor(diff / oneDay)

export function checkOdd(num) {
  if (num % 2 == 0) {
    return "even"
  }
  return "odd"
}

export function checkCorrespondence(userAnswer, options) {
  const rightAnswer = options.find((item) => item.isRight)
  return userAnswer === rightAnswer.value
}

export function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function addAndToNumberString(numberString) {
  // We check whether the string contains the word "hundred" and whether it already contains "and"
  if (numberString.includes("hundred") && !numberString.includes("and")) {
    // Adding "and" after "hundred"
    return numberString.replace("hundred", "hundred and")
  }
  return numberString
}

export function isEngWordsValid(userAnswer, rightAnswer) {
  const rightAnswerWords = ntw.toWords(rightAnswer)
  const rightAnswerWordsWithAnd = addAndToNumberString(rightAnswerWords)
  const finalAnswer = [rightAnswerWordsWithAnd, rightAnswerWords]

  if (finalAnswer.includes(userAnswer.toLowerCase().trim())) {
    return true
  }
  return false
}
