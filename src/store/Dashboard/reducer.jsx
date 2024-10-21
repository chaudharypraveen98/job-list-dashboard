import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dashboardData: {},
};

export const dashboardData = createSlice({
  name: "dashboardData",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return { ...state, isLoading: action?.payload };
    },
    setDashBoardData: (state, action) => {
      const {
        activeJobs,
        totalApplicantsCount,
        recentJobApplicants,
        totalInterview,
        recentJobOpenings,
      } = action?.payload || {};

      const dashboardData = {
        total_jobs: activeJobs,
        total_applicants: totalApplicantsCount,
        ai_credits: 20000,
        applicant_reviewed: totalInterview,
        recentJobApplicants,
        recentJobOpenings,
      };

      return {
        ...state,
        dashboardData,
      };
    },
  },
});

export const { setLoading, setDashBoardData } = dashboardData.actions;

export default dashboardData.reducer;
