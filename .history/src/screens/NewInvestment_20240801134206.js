import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.sideBySideContainer}>
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "center", // Center the inner container vertically
    alignItems: "center", // Center the inner container horizontally
  },
  sideBySideContainer: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Space between the child elements
    width: "80%", // Adjust as needed
  },
  box1: {
    flex: 1, // Adjust flex as needed
    backgroundColor: "lightblue",
    margin: 10, // Add margin to create space between boxes
    alignItems: "center", // Center content horizontally within the box
    justifyContent: "center", // Center content vertically within the box
  },
  box2: {
    flex: 1, // Adjust flex as needed
    backgroundColor: "lightgreen",
    margin: 10, // Add margin to create space between boxes
    alignItems: "center", // Center content horizontally within the box
    justifyContent: "center", // Center content vertically within the box
  },
});

export default App;
