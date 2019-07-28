import { createStore} from 'redux'
import reducer from './reducers/reducer'
 
const initialState = 'off'
 
export default createStore(
        reducer,
        initialState
    )