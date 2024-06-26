import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UseAuth from "../services/hooks/UseAuth";
import { AdminUsersCall, User } from "../services/api";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/core";

const Admin = ({ navigation }) => {
	const { auth } = UseAuth();
	const [users, setUsers] = React.useState([]);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		AdminUsersCall(setUsers, new AbortController(), "get");
	}, [auth.id]);

	useFocusEffect(
		React.useCallback(() => {
			setLoading(true);
			setUsers([]); // Clear previous data
			AdminUsersCall(setUsers, new AbortController(), "get");
			setLoading(false);
		}, [])
	);

	return (
		<View style={styles.container}>
			{loading ? (
				<Text style={styles.proceedButtonText}>Loading...</Text>
			) : (
				<View style={styles.addNewCard}>
					<Text style={styles.enterYourCardNumberWrapper}>ADMIN PANEL</Text>
					<Pressable style={styles.proceedButton} onPress={() => navigation.navigate("AdminUsers", { users: users })}>
						<Text style={styles.proceedButtonText}>ALL USERS</Text>
					</Pressable>
					<Pressable style={styles.proceedButton} onPress={() => navigation.navigate("AdminInvestments")}>
						<Text style={styles.proceedButtonText}>ADD INVESTMENTS</Text>
					</Pressable>
					<Pressable style={styles.proceedButton} onPress={() => navigation.navigate("AdminUpdateInvestments")}>
						<Text style={styles.proceedButtonText}>UPDATE INVESTMENTS</Text>
					</Pressable>
					<Pressable style={styles.proceedButton} onPress={() => navigation.navigate("AdminTransactions")}>
						<Text style={styles.proceedButtonText}>VIEW TRANSACTIONS</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};

export const AdminUsers = ({ route, navigation }) => {
	const { users } = route.params;
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.addNewCard}>
						<Text style={styles.enterYourCardNumberWrapper}> ALL USERS</Text>
						<Text style={styles.enterYourCardNumberWrapper}> TOTAL USERS: {users.length}</Text>
						<View>
							{users.map((user, index) => {
								return (
									<Text style={styles.addNewCard} key={index} onPress={() => navigation.navigate("AdminUserEdit", { user: user })}>
										<Text>Username: {user.username}</Text>
										<Text>Email: {user.email}</Text>
										<Text>Walletbalance: {user.Walletbalance}</Text>
										<Text>firstname: {user.firstname}</Text>
										<Text>lastname: {user.lastname}</Text>
										<Text>roles: {user.roles}</Text>
										<Text>Date Created: {new Date(user.createdAt).toLocaleDateString()}</Text>
									</Text>
								);
							})}
						</View>
					</View>
				</View>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

export const AdminInvestments = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.addNewCard}>
				<Text style={styles.enterYourCardNumberWrapper}> ALL TRANSACTION</Text>
				{/* <Text style={styles.enterYourCardNumberWrapper}> TOTAL TRANSACTION: {users.length}</Text> */}
				<View>
					{/* {users.map((user, index) => {
						return (
							<Text style={styles.addNewCard} key={index} onPress={() => navigation.navigate("AdminUserEdit", { user: user })}>
								<Text>Username: {user.username}</Text>
								<Text>Email: {user.email}</Text>
								<Text>Walletbalance: {user.Walletbalance}</Text>
								<Text>firstname: {user.firstname}</Text>
								<Text>lastname: {user.lastname}</Text>
								<Text>roles: {user.roles}</Text>
								<Text>Date Created: {new Date(user.createdAt).toLocaleDateString()}</Text>
							</Text>
						);
					})} */}
				</View>
			</View>
		</View>
	);
};

export const AdminUpdateInvestments = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.addNewCard}>
				<Text style={styles.enterYourCardNumberWrapper}> UPDATE INVESTMENTS</Text>
				<Pressable style={styles.proceedButton} onPress={() => setLoading(true)}>
					<Text style={styles.proceedButtonText}>{loading ? "Loading..." : "ADD USER"}</Text>
				</Pressable>
			</View>
		</View>
	);
};

export const AdminTransactions = ({ navigation }) => {
	const [loading, setLoading] = React.useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.addNewCard}>
				<Text style={styles.enterYourCardNumberWrapper}> ALL TRANSACTIONS</Text>
				<Pressable style={styles.proceedButton} onPress={() => setLoading(true)}>
					<Text style={styles.proceedButtonText}>{loading ? "Loading..." : "ADD USER"}</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	proceedButton: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginVertical: 10,
	},
	proceedButtonText: {
		color: "white",
		fontSize: 16,
	},
	addNewCard: {
		marginBottom: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "lightgray",
		borderRadius: 5,
	},
	enterYourCardNumberWrapper: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},

	tableRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	tableCell: {
		flex: 1,
		marginVertical: 5,
	},
	buttonRow: {
		flexDirection: "row",
		marginTop: 10,
	},
	actionButton: {
		backgroundColor: "#ff6347",
		padding: 10,
		borderRadius: 5,
		marginRight: 10,
	},
	addButton: {
		backgroundColor: "#1e90ff",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Admin;
