import axios from "axios";

const BASE_URL = "https://example.com/api"; // Replace 'example.com' with your actual backend URL

const sendDataToBackend = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/endpoint`, userData);
    // Handle successful response from backend
    console.log("Data sent successfully:", response.data);
    return response.data; // Optional: Return any data received from the backend
  } catch (error) {
    // Handle error if request fails
    console.error("Error sending data to backend:", error.message);
    throw new Error("Failed to send data to backend");
  }
};

// Example usage:
const userData = {
  // Populate with user input data
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  // Add other fields as needed
};

sendDataToBackend(userData)
  .then((responseData) => {
    // Handle successful response from backend
    console.log("Response from backend:", responseData);
  })
  .catch((error) => {
    // Handle error if request fails
    console.error("Error:", error.message);
  });
