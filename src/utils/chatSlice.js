import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice ({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages (state, action) {
            // If the messages array already has 25 messages, remove the oldest one
            if (state.messages.length >= 25) {
                state.messages.shift();
            }
            // Add the new message to the end of the array
            state.messages.push(action.payload);
        }
    }
})

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;