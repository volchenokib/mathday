import { nodList } from "./nodList.js"
import { day } from "../utils/index.js"

const id = day - 1
const value = nodList[id]

export const nodData = {
  id,
  value,
  content: {
    infoRu: [],
  },
}
