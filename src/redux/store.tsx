import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./reducers/contactReducer";

const store = configureStore({
  reducer: {
    contact: ContactReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
