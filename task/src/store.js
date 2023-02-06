import {configureStore} from "@reduxjs/toolkit"
import useReducer from './reducer/userSlice'
import likeReducer from './reducer/likeSlice'
const store= configureStore({
reducer:{
   user:useReducer ,
   like:likeReducer
}
})
export default store;
