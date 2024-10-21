import { configureStore } from "@reduxjs/toolkit";
import dashboardData from "@/store/Dashboard/reducer";

export const store = configureStore({
  reducer: { dashboardData },
});
