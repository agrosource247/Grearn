import { Image } from "expo-image";
import React from "react";
import { Assets } from "@react-navigation/elements";
const images = [
  require("../assets/group-7@3x.png"), //assets/group-7@3x.png
  require("../assets/group-71@3x.png"), //assets/group-71@3x.png
  require("../assets/group-72@3x.png"), //assets/group-72@3x.png
];
const ImageSwitcher = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); //change image every two seconds
    return () => clearInterval(intervalId); //cleanup function to clear interval on mount
  }, []); //[ensure this is run once after component launch]
  return (
    <View>
      <Image source={images[currentIndex]} />
    </View>
  );
};
export default ImageSwitcher;
