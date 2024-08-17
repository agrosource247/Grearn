// ImageSelector.js
import React, { useState } from "react";
import { View, Image, Pressable, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PropTypes from "prop-types";
import styles from "../styles/ImageSelectorStyles";

const ImageSelector = ({ avatar, setAvatar }) => {
  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.uri);
    }
  };

  const handleDeleteImage = () => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to delete this image?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => setAvatar(""), // Clear the avatar
        },
      ],
      { cancelable: true }
    );
  };

  const handleImagePress = () => {
    Alert.alert(
      "Change Profile Picture",
      "Choose an option",
      [
        { text: "Select Image", onPress: handleSelectImage },
        { text: "Delete Image", onPress: handleDeleteImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
      <Image
        style={styles.avatar}
        source={
          avatar ? { uri: avatar } : require("../assets/adaptive-icon.png")
        }
      />
    </Pressable>
  );
};

ImageSelector.propTypes = {
  avatar: PropTypes.string,
  setAvatar: PropTypes.func.isRequired,
};

export default ImageSelector;
