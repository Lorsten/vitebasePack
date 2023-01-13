import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authReducer";
import MenuReducer from "../reducer/MenuReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: MenuReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
