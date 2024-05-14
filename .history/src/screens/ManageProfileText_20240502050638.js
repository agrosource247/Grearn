import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const ManageProfileText = () => {
  return <Text style={styles.manageProfile}>Manage profile</Text>;
};

const styles = StyleSheet.create({
  manageProfile: {
    fontSize: FontSize.size_smi,
    lineHeight: 11,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDimgray_600,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 103,
    height: 12,
  },
});

export default ManageProfileText;
