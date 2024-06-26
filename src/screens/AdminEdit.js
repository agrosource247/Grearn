import React from "react";
import { Image, StyleSheet, Text, View, TextInput, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { User } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

export const AdminUserEdit = ({ route, navigation }) => {
	const { user } = route.params;
	const { auth } = UseAuth();
	const [firstname, setFirstname] = React.useState("");
	const [lastname, setLastname] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [country, setCountry] = React.useState("");
	const [dob, setDob] = React.useState("");
	const [roles, setRoles] = React.useState([]);
	const [loading, setLoading] = React.useState(false);

	const setForm = async () => {
		const form = {
			id: user._id,
			firstname: firstname,
			lastname: lastname,
			username: username,
			phone: phone,
			email: email,
			password: password,
			country: country,
			dob: dob,
		};
		return form;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			let isMounted = true;
			const controller = new AbortController();
			const form = await setForm();
			const res = await User(isMounted, form, controller, auth, "patch");
			if (res?.status === 200) {
				isMounted = false;
				controller.abort();
				alert("Update Successful");
				navigation.navigate("Admin");
			} else alert(res?.data.message);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<GestureHandlerRootView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.profile}>
					<StatusBar style="auto" />
					<Text style={styles.profileTitle}>Profile: {user && user.username}</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Firstname</Text>
						<TextInput style={styles.input} placeholder="Firstname" onChangeText={setFirstname} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Lastname</Text>
						<TextInput style={styles.input} placeholder="Lastname" onChangeText={setLastname} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Username</Text>
						<TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Country Code</Text>
						<TextInput style={styles.input} placeholder="Country" onChangeText={setCountry} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Phone number</Text>
						<TextInput style={styles.input} placeholder="Phone" onChangeText={setPhone} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Email address</Text>
						<TextInput style={styles.input} placeholder="Email address" onChangeText={setEmail} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Password</Text>
						<TextInput style={styles.input} placeholder="****" onChangeText={setPassword} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Date of birth</Text>
						<TextInput style={styles.input} placeholder="Date of birth" onChangeText={setDob} />
					</View>
					<View style={styles.pickerContainer}>
						<Picker selectedValue={roles} style={styles.picker} onValueChange={(itemValue) => setRoles(itemValue)}>
							<Picker.Item label="User" value="User" />
							<Picker.Item label="Admin" value="Admin" />
						</Picker>
					</View>

					<Pressable style={styles.button} onPress={handleSubmit} disabled={loading}>
						<Text style={styles.buttonText}>{loading ? "Loading" : "Proceed"}</Text>
					</Pressable>
				</View>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContent: {
		flexGrow: 1,
		justifyContent: "center",
	},
	profile: {
		padding: 20,
	},
	profileTitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
	},
	pickerContainer: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		marginBottom: 15,
	},
	picker: {
		height: 50,
	},
	button: {
		backgroundColor: "blue",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
});

export default AdminUserEdit;
