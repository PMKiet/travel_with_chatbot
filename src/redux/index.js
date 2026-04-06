import { combineReducers } from 'redux'

//from reducers
import { authenReducer } from '@/redux/reducers/authReducer'


export const allReducer = combineReducers({
    auth: authenReducer
})