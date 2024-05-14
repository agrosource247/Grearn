import axios from "axios";

// Assuming BASE_URL is defined somewhere in your code
const BASE_URL = "https://grearn.com.ng/api";

export const signUp = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    if (!response.ok) {
      // Handle authentication error
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    // Successful sign-in, return user data
    return await response.json();
  } catch (error) {
    // If an error occurs, throw a new error with a custom message
    throw new Error("An error occurred while signing up");
  }
};
