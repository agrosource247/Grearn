import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/Onboardingstyles"; // Adjust the path based on your folder structure

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      source: require("../assets/undraw_invest_re_8jl5.png"),
      width: 290, // Replace with your desired width
      height: 163,
      text: (
        <Text style={styles.seamlessStyle}>
          Make seamless <Text style={{ color: "#6CBC37" }}>Investment</Text>{" "}
          with <Text style={{ color: "#6CBC37" }}>Grearn</Text>
        </Text>
      ),
    },
    {
      source: require("../assets/undraw_finance_re_gnv2.png"),
      width: 307, // Replace with your desired width
      height: 184,
      text: (
        <Text style={styles.seamlessStyle}>
          Trade between <Text style={{ color: "#6CBC37" }}>Crops</Text> at the
          best <Text style={{ color: "#6CBC37" }}>Market</Text> rate
        </Text>
      ),
    },
    {
      source: require("../assets/undraw_online_payments_re_y8f2 1.png"),
      width: 317, // Replace with your desired width
      height: 205,
      text: (
        <Text style={styles.seamlessStyle}>
          Withdraw your <Text style={{ color: "#6CBC37" }}>Funds</Text> easily
        </Text>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image and text every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <View style={styles.imageStyles}>
      <Image
        source={currentImage.source}
        style={{ width: currentImage.width, height: currentImage.height }}
        resizeMode="cover"
      />
      <View>{currentImage.text}</View>
    </View>
  );
};

export default ImageSlider;
