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
  quiz: {
    correspondence: [
      {
        value: 1,
        description: "Объемом тюбика зубной пасты в миллилитрах",
        isRight: true,
      },
      {
        value: 2,
        description: "Размер обуви",
        isRight: false,
      },

      {
        value: 3,
        description: "Количество страниц в паспорте",
        isRight: false,
      },
    ],
  },
  content: {
    sequences: findSequencesName(value),
    infoRu: [],
  },
}
