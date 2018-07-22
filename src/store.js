import {createStore,combineReducers} from 'redux'
import reducervote from './reducer/votereducer'
const store=createStore(combineReducers({
 reducervote
}))
store.subscribe(()=>{
      
    console.log('state is updated',store.getState())
  })
export default store