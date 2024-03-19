import { sequences } from "./sequenceList.js"
import { nodList } from "./nodList.js"
import { day } from "../utils/index.js"

function findSequencesName(value) {
  let sequencesName = []
  sequences.forEach((v, k) => {
    if (v.includes(value)) {
      sequencesName.push(k)
    }
  })
  return sequencesName
}

const id = day - 1
const value = nodList[id]

export const nodData = {
  id,
  value,
  content: {
    sequences: findSequencesName(value),
    infoRu: [],
  },
}
