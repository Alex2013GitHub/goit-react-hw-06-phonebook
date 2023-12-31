import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['contacts'],
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
