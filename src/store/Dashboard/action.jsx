import axios from "axios";
import { GET_DASHBOARD_DATA } from "../config/endpoints";
import toast from "react-hot-toast";
import { setDashBoardData, setLoading } from "./reducer";

export const getDashboardData = () => async (dispatch) => {
  dispatch(setLoading(true));
  await axios
    .get(GET_DASHBOARD_DATA)
    .then((res) => {
      if (res?.data?.status) {
        dispatch(setDashBoardData(res?.data?.data));
      }
    })
    .catch((err) => {
      toast.dismiss();
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong, please try again later."
      );
    });
};
