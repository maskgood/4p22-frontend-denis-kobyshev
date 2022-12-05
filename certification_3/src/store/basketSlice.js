import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		basket: []
	},
	reducers: {

	},
});

export const { onShowItem } = basketSlice.actions;
export default basketSlice.reducers;