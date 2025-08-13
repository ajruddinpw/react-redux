import { configureStore } from '@reduxjs/toolkit'
 import counterReducer from '../features/counter/counterSlice'
 import {Provider} from 'react-redux'

export const store = configureStore({
  reducer: {

    counter: counterReducer,
  },
})

//steps:
// create store
// wrap app component under provider
// create Slice
// register reducer in store