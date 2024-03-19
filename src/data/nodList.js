import { deterministicShuffle } from "./shuffle"
// import { sequences } from "./sequenceList"

// create array of numbers from 2 to 368
const everyDayNumbers = Array.from({ length: 367 }, (_, i) => i + 2)
export const nodList = deterministicShuffle(everyDayNumbers, 12345)
