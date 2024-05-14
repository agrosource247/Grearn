// api.js

const BASE_URL = "https://grearn.com.ng/api"; //Grearn API base URL

// Function to handle user sign-in
export const signIn = async (
  firstname,
  lastname,
  username,
  email,
  phone,
  password,
  cpassword
) => {
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
    // Handle network errors or other exceptions
    throw new Error("Failed to sign up: " + error.message);
  }
};

// Other API functions for different endpoints (e.g., signUp, resetPassword, etc.) can be added similarly
