import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
  /*Create inital state */
	initialState: [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
	],
  /* Reducer - applying dispatched actions type, payload */
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
      /* pust change state to store */
			state.push(todo);
		},
    toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
    },
	},
});

/*making the state and actions avialable to other components */

/*dispactched */
export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;