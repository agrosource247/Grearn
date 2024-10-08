import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { Border } from "../../GlobalStyles";
import { scale } from "react-native-size-matters";

const data = [
	{ id: "1", imageSource: require("../assets/frame-39.png") },
	{ id: "2", imageSource: require("../assets/frame-40.png") },
	{ id: "3", imageSource: require("../assets/frame-41.png") },
	{ id: "4", imageSource: require("../assets/frame-39.png") },
	{ id: "5", imageSource: require("../assets/frame-40.png") },
	{ id: "6", imageSource: require("../assets/frame-41.png") },
];

const SlideScreen = () => {
	return (
		<FlatList
			// style={{ width: "90%" }}
			contentContainerStyle={{ alignItems: "flex-end" }}
			horizontal
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <Image style={[styles.newChildLayout]} contentFit="cover" source={item.imageSource} />}
			showsHorizontalScrollIndicator={false}
		/>
	);
};

const styles = StyleSheet.create({
	newChildLayout: {
		marginTop: scale(16),
		width: 100, // Set the width of each image as needed
		height: 100, // Set the height of each image as needed
		marginHorizontal: scale(11), // Adjust as needed for spacing between images
		borderRadius: Border.br_8xs,
	},
});

export default SlideScreen;
