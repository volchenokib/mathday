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

export function describeHarshadNumber(n) {
  // Преобразовываем число в массив его цифр
  const digits = n.toString().split("").map(Number)
  // Вычисляем сумму цифр
  const sum = digits.reduce((acc, val) => acc + val, 0)
  // Формируем и возвращаем результат в нужном формате
  return `${digits.join(" + ")} = ${sum}`
}

export function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}
