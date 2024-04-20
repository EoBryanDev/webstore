import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TUserType } from '../../../shared/types/userType'
import { IGlobalModalType } from '../../../shared/components/Modal/GlobalModal'


interface GlobalStore {
  modal: IGlobalModalType
}
const initialState: GlobalStore = {
    modal: {
        visible: false,
        text: '',
        title: ''
    }
}

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<IGlobalModalType>) => {
      state.modal = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setModalAction } = globalSlice.actions

export default globalSlice.reducer