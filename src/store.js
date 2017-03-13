import {createStore, applyMiddleware, bindActionCreators} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default function(initState = {}){
  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk)
  )
}