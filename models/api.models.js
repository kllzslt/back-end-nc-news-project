const { readFile } = require("fs/promises")

exports.getJsonInfo = () => {
  return readFile("../endpoints.json")
  .then((res) => {
    return JSON.parse(res)
  })
}