import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "models";
import {nullUser} from "nullables";

type State = {
  currentUser: User
  token: string
}

const initialState = {currentUser: {...nullUser, id: 5}, token: ''} as State

const authorizationSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    authorize(state, {payload}: PayloadAction<State>) {
      state.currentUser = payload.currentUser
      state.token = payload.token
    }
  }
})

export const authorizationReducer = authorizationSlice.reducer