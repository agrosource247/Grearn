import React, { useEffect } from "react";
import { View, Image, Pressable, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImageSelector = ({ avatar, setAvatar }) => {
  // Load the avatar URI from AsyncStorage when the component mounts
  useEffect(() => {
    const loadAvatar = async () => {
      const storedAvatar = await AsyncStorage.getItem("avatar");
      if (storedAvatar) {
        setAvatar(storedAvatar);
      }
    };
    loadAvatar();
  }, [setAvatar]);

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newAvatarUri = result.assets[0].uri;
      setAvatar(newAvatarUri);
      await AsyncStorage.setItem("avatar", newAvatarUri); // Save the avatar URI to AsyncStorage
    }
  };

  const handleDeleteImage = async () => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to delete this image?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            setAvatar(""); // Clear the avatar
            await AsyncStorage.removeItem("avatar"); // Remove the avatar URI from AsyncStorage
          },
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
        key={avatar} // Use key to force re-render when avatar changes
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

const styles = StyleSheet.create({
  avatar: {
    alignSelf: "flex-start",
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Adjust border radius as needed
  },
});

export default ImageSelector;
