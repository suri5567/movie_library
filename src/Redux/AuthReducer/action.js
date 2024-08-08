import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const LOGIN_URL = "https://reqres.in/api/login";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Check if response is not OK
      const errorData = await response.json();
      console.error('Error response:', errorData);
      dispatch({ type: LOGIN_FAILURE });
      return false;
    }

    const data = await response.json();

    if (data.token) {
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
      return true;
    } else {
      dispatch({ type: LOGIN_FAILURE });
      return false;
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);
    dispatch({ type: LOGIN_FAILURE });
    return false;
  }
};
