import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import utils from "./utils/utilsSlice";

export default configureStore({
  reducer: {
    auth,
    utils
  },
});
