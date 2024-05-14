import axios from "axios";

// Assuming BASE_URL is defined somewhere in your code
const BASE_URL = "https://grearn.com.ng/api";

export const signUp = async (userData) => {
  try {
    // Make a POST request to the signup endpoint with userData
    const response = await axios.post(`${BASE_URL}/signup`, userData);

    // Return the response data
    return response.data;
  } catch (error) {
    // If an error occurs, throw a new error with a custom message
    throw new Error("An error occurred while signing up");
  }
};
