import * as React from "react";
import { Image, Pressable, Alert, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImageComponent = () => {
  const [imageUri, setImageUri] = useState(users[0].avatar);
  const [users, setUsers] = React.useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  const showOptions = () => {
    Alert.alert(
      "Select Image",
      "Choose an action",
      [
        {
          text: "Select Image",
          onPress: pickImage,
        },
        {
          text: "Delete Image",
          onPress: () => setImageUri(null),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Pressable onPress={showOptions}>
      <Image
        style={styles.newUserDashboardChild}
        contentFit="cover"
        source={
          imageUri ? { uri: imageUri } : require("../assets/adaptive-icon.png")
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  newUserDashboardChild: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ImageComponent;
