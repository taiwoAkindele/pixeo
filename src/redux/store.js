import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
  devTools:
    import.meta.env.REACT_APP_ENV !== "development" ||
    import.meta.env.REACT_APP_ENV !== "production",
});
