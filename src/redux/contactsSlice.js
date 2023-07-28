import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './fetch';

const pending = state => {
  state.contacts.isLoading = true;
};

const rejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const fetchContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.items = action.payload;
};

const addContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(action.payload);
  console.log(state.contacts.items);
};

const deleteContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  const index = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, fetchContactFulfilled)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addCase(deleteContact.rejected, rejected),
});

export const contactReducer = contactSlice.reducer;
