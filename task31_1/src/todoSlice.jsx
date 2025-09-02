import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodosRequest: (state) => { state.loading = true; },
        fetchTodosSuccess: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        fetchTodosFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        addTodoRequest: (state, action) => {},
        addTodoSuccess: (state, action) => { state.items.push(action.payload); },

        deleteTodoRequest: (state, action) => {},
        deleteTodoSuccess: (state, action) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },

        editTodoRequest: (state, action) => {},
        editTodoSuccess: (state, action) => {
            state.items = state.items.map((t) =>
                t.id === action.payload.id ? action.payload : t
            );
        },

        toggleTodoRequest: (state, action) => {},
        toggleTodoSuccess: (state, action) => {
            state.items = state.items.map((t) =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            );
        },

        clearTodosRequest: (state) => {},
        clearTodosSuccess: (state) => { state.items = []; },
    },
});

export const {
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodoRequest,
    addTodoSuccess,
    deleteTodoRequest,
    deleteTodoSuccess,
    editTodoRequest,
    editTodoSuccess,
    toggleTodoRequest,
    toggleTodoSuccess,
    clearTodosRequest,
    clearTodosSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
