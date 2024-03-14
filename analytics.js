const Analytics = require("analytics-node")
const argumentsConverter = require("./utils/arguments_converter")

exports.handler = (event, context, callback) => {
  const analytics = new Analytics("J8353XCgGhMJlajCN3pbXru56SVZ12Qa") // it's a Write Key which you can find in Segment under your source settings

  let currentEvent
  let response = {
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    statusCode: null,
    body: "",
  }

  function isJSON(str) {
    try {
      return JSON.parse(str) && !!str
    } catch (e) {
      return false
    }
  }

  isJSON(event.body)
    ? (currentEvent = JSON.parse(event.body))
    : (currentEvent = event.body)

  // convert snake_case to camelCase
  currentEvent.arguments = argumentsConverter(currentEvent.arguments)

  const supportedEventType = ["identify", "page", "track"]
  if (supportedEventType.includes(currentEvent.type)) {
    analytics[currentEvent.type](currentEvent.arguments)
    response.statusCode = 200
    response.body = "event processed successfully"
  } else {
    response.statusCode = 422
    response.body = "unsupported event type"
  }
  callback(null, response)
}
