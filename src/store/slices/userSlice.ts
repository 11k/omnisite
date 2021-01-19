import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    username: '',
  },
  reducers: {
    hydrateFromJwt(state, action) {
      state.id = action.payload.userId
      state.email = action.payload.email
      state.username = action.payload.username
    },
  },
  extraReducers: { [HYDRATE]: (state, action) => action.payload.user },
})

const { actions, reducer } = userSlice
export const { hydrateFromJwt } = actions
export default reducer
