import { deterministicShuffle } from "./shuffle"
import { sequences } from "./sequenceList"

// создаем массив уникальных чисел из всех последовательностей
const arrays = Array.from(sequences.values())
const flatArray = [].concat(
  ...arrays.map((arr) => (Array.isArray(arr[0]) ? arr.flat() : arr))
)
const uniqueArray = [...new Set(flatArray)]
// создаем перемешанный массив, результат будет одинаковым при каждом вызове
export const nodList = deterministicShuffle(uniqueArray, 12345)
