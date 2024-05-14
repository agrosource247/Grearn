import axios from "axios";

const BASE_URL = "https://grearn.com.ng/api";

export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while signing up");
  }
};
