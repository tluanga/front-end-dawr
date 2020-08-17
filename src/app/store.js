import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import inventory from '../features/inventory/store'

export default configureStore({
  reducer: {
    inventory
  },
});
