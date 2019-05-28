import {combineReducers} from 'redux'
import globalReducer from './global'

const rootReducer = combineReducers({
    global: globalReducer
})

export default rootReducer