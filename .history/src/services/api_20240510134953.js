export const signUp = async (userData, navigation) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Log the response status and data
    console.log("Response Status:", response.status);
    const responseData = await response.json();
    console.log("Response Data:", responseData);

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to sign up");
    }

    // Successful sign-up, return user data
    if (responseData.status === "success") {
      ToastAndroid.show(responseData.message, ToastAndroid.SHORT);
      navigation.navigate("SignUp2");
    } else {
      ToastAndroid.show(responseData.message, ToastAndroid.SHORT);
    }
    return responseData;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw new Error("Failed to sign up: " + error.message);
  }
};
