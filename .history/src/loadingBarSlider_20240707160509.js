import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles/Onboardingstyles";
const LoadingBarSlider = () => {
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0);
  const loadingImages = [
    require("../src/assets/group-7@3x.png"),
    require("../src/assets/Group 7.png"),
    require("../src/assets/Group 8.png"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoadingIndex(
        (prevIndex) => (prevIndex + 1) % loadingImages.length
      );
    }, 3000); // Change loading bar image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentLoadingImage = loadingImages[currentLoadingIndex];

  return (
    <Image
      style={styles.loadingbarStyle}
      source={currentLoadingImage}
      resizeMode="cover"
    />
  );
};
export default LoadingBarSlider;
