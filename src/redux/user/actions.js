import { axiosInstance, baseURL } from "../../config";

import { LOADING, SAVE_ACCESS_TOKEN, SAVE_USER, STOP_LOADING } from "./slice";

export const signupUser = (payload) => async (dispatch, getState) => {
  dispatch(LOADING());
  try {
    const response = await axiosInstance.post(`${baseURL}user/signup`, payload);
    if (response.status === 201) {
      return true;
    }
  } catch (error) {
    const errorMessage =
      error?.data?.message || "An error occurred, please try again.";
    console.log(errorMessage);
  } finally {
    dispatch(STOP_LOADING());
  }
};

export const verifyEmailToken = (payload) => async (dispatch, getState) => {
  dispatch(LOADING());
  try {
    const response = await axiosInstance.patch(
      `${baseURL}user/verify-email`,
      payload
    );
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    const errorMessage =
      error?.data?.message || "An error occurred, please try again.";
    console.log(errorMessage);
  } finally {
    dispatch(STOP_LOADING());
  }
};

export const loginUser = (payload) => async (dispatch, getState) => {
  dispatch(LOADING());
  try {
    const response = await axiosInstance.post(`${baseURL}user/login`, payload);
    const token = response.data.token;
    if (response.status === 200) {
      dispatch(SAVE_USER(response.data.data));
      dispatch(SAVE_ACCESS_TOKEN(response.data.token));
      localStorage.setItem("token", token);
      return true;
    }
  } catch (error) {
    const errorMessage =
      error?.data?.message || "An error occurred, please try again.";
    console.log(errorMessage);
  } finally {
    dispatch(STOP_LOADING());
  }
};

export const resendVerificationEmail =
  (query) => async (dispatch, getState) => {
    dispatch(LOADING());
    try {
      const response = await axiosInstance.get(
        `${baseURL}user/resend/email-token?email=${query}`
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message || "An error occurred, please try again.";
      console.log(errorMessage);
    } finally {
      dispatch(STOP_LOADING());
    }
  };

export const sendResetPasswordEmail =
  (payload) => async (dispatch, getState) => {
    dispatch(LOADING());
    try {
      const response = await axiosInstance.post(
        `${baseURL}user/password-reset-token`,
        payload
      );
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message || "An error occurred, please try again.";
      console.log(errorMessage);
    } finally {
      dispatch(STOP_LOADING());
    }
  };

export const resetPassword = (payload) => async (dispatch, getState) => {
  dispatch(LOADING());
  try {
    const response = await axiosInstance.patch(
      `${baseURL}user/reset-password`,
      payload
    );
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    const errorMessage =
      error?.data?.message || "An error occurred, please try again.";
    console.log(errorMessage);
  } finally {
    dispatch(STOP_LOADING());
  }
};
