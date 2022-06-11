import ObjectParser from './ObjectParser'
import InputObjectParser from './ObjectParser'

const composeWithJson = ObjectParser.createTC.bind(ObjectParser)
const composeInputWithJson = InputObjectParser.createTC.bind(InputObjectParser)

export default composeWithJson
export { composeWithJson, composeInputWithJson }
