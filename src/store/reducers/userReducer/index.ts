import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TUserType } from '../../../shared/types/userType'


interface UserStore {
  user?: TUserType
}
const initialState: UserStore = {
    user: undefined
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<TUserType>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  setUserAction } = userSlice.actions

export default userSlice.reducer