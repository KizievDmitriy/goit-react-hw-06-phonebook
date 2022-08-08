import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contacts = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, action) => {
                const isAdded = state.find(
                    item =>
                        item.name.toLowerCase() ===
                        action.payload.name.toLowerCase()
                );

                if (isAdded) {
                    alert(
                        `${action.payload.name} is already in your contacts!`
                    );
                    return;
                }

                state.push(action.payload);
            },
            prepare: (name, number) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contacts.actions;