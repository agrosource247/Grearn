import { StyleSheet, View } from "react-native";
import { Color, Border } from "../../GlobalStyles";

const LoadingBar = () => {
	return (
		<View style={styles.frame6}>
			<View style={styles.frameChild} />
			<View style={[styles.frameItem, styles.frameLayout]} />
			<View style={[styles.frameInner, styles.frameLayout]} />
			<View style={[styles.frameView, styles.frameLayout]} />
		</View>
	);
};
const styles = StyleSheet.create({
	frameLayout: {
		width: 16,

		backgroundColor: Color.colorYellowgreen_400,

		borderRadius: Border.br_2xs,
		height: 5,
		top: 0,
		position: "absolute",
		overflow: "hidden",
	},

	frameChild: {
		left: 2,
		width: 26,

		backgroundColor: Color.colorYellowgreen_100,
		borderRadius: Border.br_2xs,
		height: 5,

		top: 0,
		position: "absolute",
	},
	frameItem: {
		left: 30,
	},
	frameInner: {
		left: 50,
	},
	frameView: {
		left: 70,
	},

	frame6: {
		left: 310,
		height: 10,
		width: 83,
		top: 18,
		position: "absolute",
		overflow: "hidden",
	},
});

export default LoadingBar;
