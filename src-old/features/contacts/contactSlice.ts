import { createSlice } from "@reduxjs/toolkit";

export interface Contact {
  contactName: string;
  phoneNumber: string;
}

export interface PhoneBookState {
  contacts: Contact[];
}

const phoneBookInitialState : PhoneBookState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  reducers: {
    add: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    clear: (state) => {
      state.contacts = []
    }
  }
})

export default contactSlice.reducer
export const {add, clear} = contactSlice.actions
