import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice'

export default configureStore({
	reduser: {
		baskets: basketSlice,
	}
});