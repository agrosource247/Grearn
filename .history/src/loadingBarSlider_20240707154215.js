import { Color, FontFamily } from "../../GlobalStyles";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
const LoadingBarSlider = () => {
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0);
  const loadingImages = [
    require("../assets/gr"),
    require("../assets/Group 7.png"),
    require("../assets/Group 8.png"),
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
