// api.js

const BASE_URL = "https://example.com/api"; // Your API base URL

// Function to handle user sign-in
export const signIn = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Handle authentication error
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign in");
    }

    // Successful sign-in, return user data
    return await response.json();
  } catch (error) {
    // Handle network errors or other exceptions
    throw new Error("Failed to sign in: " + error.message);
  }
};

// Other API functions for different endpoints (e.g., signUp, resetPassword, etc.) can be added similarly
