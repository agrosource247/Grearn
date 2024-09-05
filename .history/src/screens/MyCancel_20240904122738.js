import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/SecondSignUpstyles";
import { Dimensions } from "react-native";
import { verticalScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");
// Component: MyCancel
const MyCancel = ({ navigation }) => (
	<View
		style={{
			justifyContent: "space-between",
			alignContent: "center",
			flexDirection: "row",
			width: width * 0.9,
			marginTop:verticalScale(20)
		}}
	>
		<Text style={[styles.cancelPosition]} onPress={() => navigation.navigate("Onboarding")}>
			Cancel
		</Text>

		<View style={[styles.haveAnAccountContainer]}>
			<Text style={styles.haveAnAccount}>
				<Text style={styles.haveAnAccount1}>Have an account?</Text>
				<Text style={styles.logIn} onPress={() => navigation.navigate("SignIn")}>
					Log in
				</Text>
			</Text>
		</View>
	</View>
);
export default MyCancel;
