import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import userReducer from './slices/userSlice'
import uiReducer from './slices/uiSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default createWrapper(() =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
  })
)
