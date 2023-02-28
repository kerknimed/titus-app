import axios from "axios"

export const config = () => {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URI_PRODUCTION
      : process.env.REACT_APP_BASE_URI_DEVELOPEMENT;
};