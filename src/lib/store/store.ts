import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { profileReducer } from 'features/Profile'
import { bitesReducer } from 'features/Bites'
import { uiReducer } from 'features/Navigation'
import { usersReducer } from 'features/Users'
import { musicReducer } from 'features/Music'
import { dialogsReducer } from 'features/Dialogs/model'

const initialState = {}
const middleware = [thunk]

const reducers = combineReducers({
    profile: profileReducer,
    bites: bitesReducer,
    ui: uiReducer,
    users: usersReducer,
    music: musicReducer,
    dialogs: dialogsReducer
})

export const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

type ReducersType = typeof reducers
export type StateType = ReturnType<ReducersType>
export type AppDispatch = typeof store.dispatch