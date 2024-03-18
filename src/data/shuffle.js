// Функция для создания псевдослучайных чисел с фиксированным seed
function pseudoRandom(seed) {
  return function () {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
}

// Функция перемешивания массива с использованием псевдослучайного генератора
export function deterministicShuffle(array, seed = 1) {
  const random = pseudoRandom(seed)
  const shuffledArray = array.slice()

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}
