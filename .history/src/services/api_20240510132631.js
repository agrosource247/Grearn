import { ToastAndroid } from "react-native";

// Using FETCH API
const BASE_URL = "https://grearn.com.ng/api"; // Grearn API base URL

export const signUp = async (userData, navigation, setLoading) => {
  try {
    // Make a POST request using fetch with the appropriate options
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Check if the response is successful
    if (!response.ok) {
      // Handle authentication error
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    // Successful sign-up, return user data
    const data = await response.json();
    if (data.status === "success") {
      // Show success toast message
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      // Navigate to SignUp2 screen
      navigation.navigate("SignUp2");
    } else {
      // Show error toast message
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
    }
    return data;
  } catch (error) {
    // Log the error and throw a new error with a custom message
    console.error("Error signing up:", error.message);
    throw new Error("Failed to sign up: " + error.message);
  } finally {
    // Set loading state to false
    setLoading(false);
  }
};
