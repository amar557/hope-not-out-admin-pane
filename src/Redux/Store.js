import { configureStore } from "@reduxjs/toolkit";
import overAllData from "./data";
import Edit from "./Edit";
export const store = configureStore({
  reducer: {
    data: overAllData,
    edit: Edit,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
