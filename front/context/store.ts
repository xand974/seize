import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app.slice";
import writeSlice from "./slices/write.slice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    write: writeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
