import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { ModalTypes } from 'shared/enums'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modal: ModalTypes.NONE,
  },
  reducers: {
    toggleModal(state, action) {
      state.modal = action.payload
    },
  },
  extraReducers: { [HYDRATE]: (state, action) => action.payload.ui },
})

const { actions, reducer } = uiSlice
export const { toggleModal } = actions
export default reducer
