import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { Investment, Transaction, User } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
import { useNavigation } from "@react-navigation/core";

export const NewInvestmentDetailsPage = ({ route }) => {
	const { item } = route.params;
	const { auth } = UseAuth();
	const navigation = useNavigation();
	const [loading, setLoading] = React.useState(false);

	const setForm = async () => {
		const form = {
			id: auth.id,
			product: item.product,
			transactionType: "Investment",
			amount: item.minimum_invest,
			roi: item.roi,
			duration: item.duration,
		};
		return form;
	};

	const handleInvest = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			let isMounted = true;
			const controller = new AbortController();
			const form = await setForm();
			const res = await Transaction(isMounted, form, controller, auth, "post");
			if (res?.status === 200) {
				const updateRes = await Transaction(isMounted, { OrderID: res.data, completed: true, refund: false }, controller, auth, "patch");
				isMounted = false;
				controller.abort();
				alert(updateRes?.data.message);
				navigation.navigate("NewUserDashboard");
			} else {
				alert(res?.data.message);
				isMounted = false;
				controller.abort();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.addNewCard}>
				<Text style={styles.enterYourCardNumberWrapper}>Product: {item.product}</Text>
				<Text style={styles.enterYourCardNumberWrapper}>Harvest period: {item.duration}</Text>
				<Text style={styles.enterYourCardNumberWrapper}>Geo location: {item.geo_location}</Text>
				<Text style={styles.enterYourCardNumberWrapper}>Minimum invest: {item.minimum_invest}</Text>
				<Text style={styles.enterYourCardNumberWrapper}>ROI: {item.roi}</Text>
				<Text style={styles.enterYourCardNumberWrapper}>Invest: {item.info}</Text>

				<Pressable style={styles.proceedButton} onPress={handleInvest}>
					<Text style={styles.proceedButtonText}>{loading ? "Loading..." : "Proceed"}</Text>
				</Pressable>
			</View>
		</View>
	);
};

const NewInvestmentPage = ({ navigation }) => {
	const { auth } = UseAuth();
	const [users, setUsers] = React.useState([]);
	const [investment, setInvestment] = React.useState([]);

	React.useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		User(isMounted, setUsers, controller, auth, "get");
		setInvest();
		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [auth.id]);

	const setInvest = async () => {
		try {
			const bank = await Investment("", new AbortController(), "get");
			setInvestment(bank.data);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<GestureHandlerRootView>
			<ScrollView>
				{investment.map((item, index) => {
					return (
						<View style={styles.addNewCard} key={index}>
							<Pressable onPress={() => navigation.navigate("NewInvestmentDetails", { item: item })}>
								<Text style={[styles.enterYourCardNumberWrapper]}>Product: {item.product}</Text>
								<Text style={[styles.enterYourCardNumberWrapper]}>Havest period:: {item.duration} </Text>
								<Text style={[styles.enterYourCardNumberWrapper]}>Geo location: {item.geo_location} </Text>
								<Text style={[styles.enterYourCardNumberWrapper]}>Minimum invest: {item.minimum_invest} </Text>
								<Text style={[styles.enterYourCardNumberWrapper]}>ROI: {item.roi}</Text>
								<Text style={[styles.enterYourCardNumberWrapper]}>Invest: {item.info}</Text>
							</Pressable>
						</View>
					);
				})}
			</ScrollView>
		</GestureHandlerRootView>
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
});

export default NewInvestmentPage;
