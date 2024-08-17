import React, { useState } from "react";
import { View, Image, Pressable, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PropTypes from "prop-types";

const CustomAlert = ({ visible, onClose, onSelectImage, onDeleteImage }) => (
  <Modal transparent={true} visible={visible} animationType="fade">
    <View style={styles.modalBackground}>
      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>Change Profile Picture</Text>
        <TouchableOpacity style={styles.alertButton} onPress={onSelectImage}>
          <Text style={styles.alertButtonText}>Select Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButton} onPress={onDeleteImage}>
          <Text style={styles.alertButtonText}>Delete Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButton} onPress={onClose}>
          <Text style={styles.alertButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const ImageSelector = ({ avatar, setAvatar }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.uri);
      setModalVisible(false);
    }
  };

  const handleDeleteImage = () => {
    setAvatar("");
    setModalVisible(false);
  };

  const handleImagePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
        <Image
          style={styles.avatar}
          source={
            avatar ? { uri: avatar } : require("../assets/adaptive-icon.png")
          }
        />
      </Pressable>
      <CustomAlert
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectImage={handleSelectImage}
        onDeleteImage={handleDeleteImage}
      />
    </View>
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  alertButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  alertButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ImageSelector;
