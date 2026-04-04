import {combineReducers} from 'redux'

//from reducers
import { counter } from '@/redux/reducers/testReducer'

export const allReducer = combineReducers({
    counter
})