import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import UseAuth from "../services/hooks/UseAuth";
import { User } from "../services/api";
import { useFocusEffect } from "@react-navigation/core";

const NewUserDashboard = ({ navigation }) => {
	const { auth, setAuth } = UseAuth();
	const [users, setUsers] = React.useState([]);
	const [time, setTime] = React.useState("");
	const [loading, setLoading] = React.useState("");

	const handleLogout = async (e) => {
		e.preventDefault();
		setAuth({});
	};

	const displayGreeting = () => {
		const timer = new Date().getHours();

		if (timer >= 1 && timer < 12) setTime("Good morning!");
		else if (timer >= 12 && timer < 16) setTime("Good afternoon!");
		else if (timer >= 16 && timer < 19) setTime("Good evening!");
		else setTime("Good night!");
	};

	// To make a get request to the users API with jsonwebtokens
	React.useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();
		displayGreeting();

		User(isMounted, setUsers, controller, auth, "get");

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [auth.id]);

	useFocusEffect(
		React.useCallback(() => {
			setLoading(true);
			setUsers([]); // Clear previous data
			displayGreeting();
			User(true, setUsers, new AbortController(), auth, "get");
			setLoading(false);
		}, [])
	);

	return (
		<GestureHandlerRootView>
			<ScrollView>
				{users.length > 0 ? (
					<View style={styles.newUserDashboard}>
						<StatusBar style={styles.upBars1} />
						<Image style={styles.newUserDashboardChild} contentFit="cover" source={{ uri: users[0].avatar }} />
						<Text style={styles.goodMorning}>{time}</Text>
						<Text style={styles.omitoyinDavid}>
							{users[0].firstname} {users[0].lastname}
						</Text>
						<Image style={[styles.iconamoonnotification, styles.iconChildLayout]} contentFit="cover" source={require("../assets/iconamoonnotification.png")} />
						<View style={[styles.investmentPackageParent, styles.newChildLayout2]}>
							<Text style={[styles.investmentPackage, styles.nilFlexBox]}>Investment package</Text>
							<Text style={styles.grearn}>Grearn</Text>
							<Text style={styles.totalAssets}>Total Assets</Text>
							<View style={[styles.vuesaxlinearhashtag, styles.iconChildLayout]}>
								<View style={styles.wrapper}>
									<Text style={styles.text}># {users[0].walletbalance}</Text>
								</View>
							</View>
							<Image
								// This is the eye on the
								style={[styles.vuesaxlineareyeIcon, styles.iconChildLayout]}
								contentFit="cover"
								source={require("../assets/vuesaxlineareye.png")}
							/>
							<View style={styles.nilWrapper}>
								<Text style={[styles.nil, styles.nilFlexBox]}>NIL</Text>
							</View>

							<Image
								/* This is for the white lineimage you are seeing above on the card */
								style={styles.groupIcon}
								contentFit="cover"
								source={require("../assets/group-23.png")}
							/>
							<Image
								/* This is for the white lineimage you are seeing below on the card */
								style={styles.frameChild1}
								contentFit="cover"
								source={require("../assets/group-241.png")}
							/>
						</View>
						<FrameComponent />
						<SlideScreen />
						<Text style={[styles.topGainers, styles.topTypo]}>Top Gainers</Text>
						<Text style={[styles.liveStocks, styles.topTypo]}>Live stocks</Text>
						<Text style={[styles.topLosers, styles.topTypo]}>Top Losers</Text>
						<Image
							//Thsi the Zmaize image
							style={[styles.newUserDashboardItem, styles.newLayout1]}
							contentFit="cover"
							source={require("../assets/frame-25.png")}
						/>
						<Image
							//This is the Guinea corn image
							style={[styles.newUserDashboardInner, styles.newLayout]}
							contentFit="cover"
							source={require("../assets/frame-38.png")}
						/>
						<Image
							//This is the Soya bean Image
							style={[styles.frameIcon, styles.frameIconLayout]}
							contentFit="cover"
							source={require("../assets/frame-34.png")}
						/>
						<Image
							//This is the honey Image
							style={[styles.newUserDashboardChild1, styles.newChildLayout1]}
							contentFit="cover"
							source={require("../assets/frame-36.png")}
						/>
						<Image
							//This is the millet image
							style={[styles.newUserDashboardChild2, styles.newLayout1]}
							contentFit="cover"
							source={require("../assets/frame-26.png")}
						/>
						<Image
							//This is the ginger image
							style={[styles.newUserDashboardChild3, styles.newLayout]}
							contentFit="cover"
							source={require("../assets/frame-33.png")}
						/>
						<Image
							//This is the pepper image
							style={[styles.newUserDashboardChild4, styles.frameIconLayout]}
							contentFit="cover"
							source={require("../assets/frame-35.png")}
						/>
						<Image
							//This is the melon image
							style={[styles.newUserDashboardChild5, styles.newChildLayout1]}
							contentFit="cover"
							source={require("../assets/frame-37.png")}
						/>
						<Text style={[styles.maize, styles.maizeLayout]}>Maize</Text>
						<Text style={[styles.guineaCorn, styles.soyaBeansTypo]}>Guinea corn</Text>
						<Text style={[styles.soyaBeans, styles.pepperPosition]}>Soya Beans</Text>
						<Text style={[styles.honey, styles.honeyLayout]}>Honey</Text>
						<Text style={[styles.millet, styles.melonTypo]}>Millet</Text>
						<Text style={[styles.ginger, styles.honeyTypo]}>Ginger</Text>
						<Text style={[styles.pepper, styles.honeyTypo]}>Pepper</Text>
						<Text style={[styles.melon, styles.melonTypo]}>Melon</Text>
						<Text style={[styles.southEastRegion, styles.southLayout]}>South-east region</Text>
						<Text style={[styles.southEastRegion1, styles.southTypo2]}>South-east region</Text>
						<Text style={[styles.southEastRegion2, styles.southTypo1]}>South-east region</Text>
						<Text style={[styles.southEastRegion3, styles.southTypo]}>South-east region</Text>
						<Text style={[styles.southWestRegion, styles.southTypo3]}>South-west region</Text>
						<Text style={[styles.southWestRegion1, styles.southTypo2]}>South-west region</Text>
						<Text style={[styles.southWestRegion2, styles.southTypo1]}>South-west region</Text>
						<Text style={[styles.southWestRegion3, styles.southTypo]}>South-west region</Text>
						<Text style={[styles.text1, styles.textTypo1]}>+59%</Text>
						<Text style={[styles.text2, styles.textPosition2]}>+59%</Text>
						<Text style={[styles.text3, styles.textPosition1]}>+59%</Text>
						<Text style={[styles.text4, styles.textPosition]}>+59%</Text>
						<Text style={[styles.text5, styles.textLayout]}>-45%</Text>
						<Text style={[styles.text6, styles.textLayout]}>-45%</Text>
						<Image style={[styles.newUserDashboardChild6, styles.newChildLayout2]} contentFit="cover" source={require("../assets/frame-30.png")} />
						<Text style={[styles.text7, styles.textLayout]}>-45%</Text>
						<Text style={[styles.text8, styles.textLayout]}>-45%</Text>
						<Image style={[styles.newUserDashboardChild7, styles.newChildLayout2]} contentFit="cover" source={require("../assets/frame-31.png")} />

						<Image style={styles.newUserDashboardChild11} contentFit="cover" source={require("../assets/group-26.png")} />
					</View>
				) : loading ? (
					<View style={styles.newUserDashboard}>
						<Text style={styles.omitoyinDavid}>Loading...</Text>
					</View>
				) : (
					<View style={styles.newUserDashboard}>
						<Text style={styles.omitoyinDavid}>Loading...</Text>
					</View>
				)}
			</ScrollView>
			<BottomNavigation />
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	upBars1Position: {
		top: 0,
		position: "absolute",
	},
	iconChildLayout: {
		height: 24,
		width: 24,
		position: "absolute",
	},
	newChildLayout2: {
		borderRadius: Border.br_8xs,
		position: "absolute",
		overflow: "hidden",
	},
	nilFlexBox: {
		color: Color.colorWhite,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	frameLayout: {
		display: "none",
		height: 189,
		width: 179,
		position: "absolute",
	},
	topTypo: {
		color: Color.colorDarkslategray_500,
		fontSize: FontSize.size_base,
		alignItems: "center",
		display: "flex",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	newLayout1: {
		height: 59,
		width: 72,
		borderRadius: Border.br_9xs,
		top: 577,
		position: "absolute",
		overflow: "hidden",
	},
	newLayout: {
		top: 660,
		height: 59,
		width: 72,
		borderRadius: Border.br_9xs,
		position: "absolute",
		overflow: "hidden",
	},
	frameIconLayout: {
		top: 743,
		height: 59,
		width: 72,
		borderRadius: Border.br_9xs,
		position: "absolute",
		overflow: "hidden",
	},
	newChildLayout1: {
		top: 826,
		width: 72,
		borderRadius: Border.br_9xs,
		height: 65,
		position: "absolute",
		overflow: "hidden",
	},
	maizeLayout: {
		height: 17,
		top: 581,
	},
	soyaBeansTypo: {
		width: 91,
		fontSize: FontSize.size_sm,
		left: 107,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	pepperPosition: {
		top: 747,
		height: 17,
	},
	honeyLayout: {
		height: 19,
		top: 830,
	},
	melonTypo: {
		width: 46,
		left: 320,
		fontSize: FontSize.size_sm,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	honeyTypo: {
		width: 55,
		fontSize: FontSize.size_sm,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	southLayout: {
		width: 85,
		left: 107,
	},
	southTypo2: {
		top: 680,
		color: Color.colorDarkslategray_400,
		fontSize: FontSize.size_4xs,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	southTypo1: {
		top: 763,
		color: Color.colorDarkslategray_400,
		fontSize: FontSize.size_4xs,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	southTypo: {
		top: 848,
		color: Color.colorDarkslategray_400,
		fontSize: FontSize.size_4xs,
		height: 19,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	southTypo3: {
		color: Color.colorDarkslategray_400,
		fontSize: FontSize.size_4xs,
		top: 597,
		height: 17,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	textTypo1: {
		width: 37,
		color: Color.colorLimegreen_100,
		left: 107,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	textPosition2: {
		top: 700,
		height: 14,
	},
	textPosition1: {
		top: 783,
		height: 14,
	},
	textPosition: {
		top: 870,
		height: 15,
	},
	textLayout: {
		width: 35,
		position: "absolute",
	},
	parentLayout: {
		height: 36,
		top: 11,
	},
	cardsLayout: {
		width: 31,
		position: "absolute",
	},
	cardsTypo: {
		color: Color.colorGray_600,
		left: 0,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		fontSize: FontSize.size_3xs,
	},
	profileLayout: {
		width: 36,
		position: "absolute",
	},
	investmentLayout: {
		width: 59,
		position: "absolute",
	},
	newChildLayout: {
		height: 100,
		width: 133,
		top: 401,
		borderRadius: Border.br_9xs,
	},
	upBars1: {
		left: 47,
		width: 337,
		overflow: "hidden",
	},
	newUserDashboardChild: {
		top: 69,
		width: 65,
		height: 65,
		left: 20,
		position: "absolute",
	},
	goodMorning: {
		top: 81,
		color: Color.colorDimgray_400,
		width: 75,
		alignItems: "center",
		display: "flex",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		fontSize: FontSize.size_3xs,
		left: 89,
		position: "absolute",
	},
	omitoyinDavid: {
		top: 97,
		color: Color.colorDarkslategray_200,
		fontSize: FontSize.size_smi,
		alignItems: "center",
		display: "flex",
		flexDirection: "row",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		left: 89,
		position: "absolute",
	},
	iconamoonnotification: {
		top: 72,
		left: 400,
		overflow: "hidden",
	},
	investmentPackage: {
		left: 230,
		fontSize: FontSize.size_2xs,
		width: 118,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		top: 20,
		color: Color.colorWhite,
	},
	grearn: {
		left: 15,
		width: 66,
		fontSize: FontSize.size_base,
		color: Color.colorWhite,
		top: 20,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	totalAssets: {
		top: 44,
		color: Color.colorGainsboro_300,
		width: 82,
		fontSize: FontSize.size_xs,
		left: 16,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	text: {
		top: 4,
		width: 54,
		left: 0,
		fontSize: FontSize.size_base,
		color: Color.colorWhite,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	wrapper: {
		top: -24,
		left: -33,
		width: 107,
		height: 24,
		position: "absolute",
	},
	vuesaxlinearhashtag: {
		top: 92,
		left: 48,
		height: 24,
		position: "absolute",
	},
	nil: {
		left: 15,
		width: 22,
		color: Color.colorWhite,
		fontSize: FontSize.size_smi,
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		marginHorizontal: 10,
		marginVertical: 5,
	},
	nilWrapper: {
		top: 56,
		left: 290,
		borderRadius: Border.br_7xs,
		backgroundColor: Color.colorGreen_200,
		width: 70,
		height: 30,
	},
	frameChild: {
		top: 75,
		left: 228,
	},
	frameItem: {
		top: 104,
		left: -75,
	},
	frameInner: {
		top: 116,
		left: 60,
	},
	groupIcon: {
		top: -109,
		left: 245,
		width: 259,
		height: 257,
		position: "absolute",
	},
	frameChild1: {
		top: -1,
		left: 201,
		width: 251,
		height: 254,
		position: "absolute",
	},
	vuesaxlineareyeIcon: {
		top: 68,
		left: 86,
		height: 24,
		position: "absolute",
	},
	investmentPackageParent: {
		top: 160,
		backgroundColor: Color.colorYellowgreen_100,
		width: 400,
		height: 102,
		left: 20,
		borderRadius: Border.br_8xs,
	},
	topGainers: {
		width: 101,
		left: 30,
		top: 531,
	},
	liveStocks: {
		top: 365,
		width: 97,
		left: 30,
	},
	topLosers: {
		width: 87,
		left: 230,
		top: 531,
	},
	newUserDashboardItem: {
		left: 30,
	},
	newUserDashboardInner: {
		left: 30,
	},
	frameIcon: {
		left: 30,
	},
	newUserDashboardChild1: {
		left: 30,
	},
	newUserDashboardChild2: {
		left: 240,
	},
	newUserDashboardChild3: {
		left: 240,
	},
	newUserDashboardChild4: {
		left: 240,
	},
	newUserDashboardChild5: {
		left: 240,
	},
	maize: {
		width: 49,
		fontSize: FontSize.size_sm,
		left: 107,
		top: 581,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	guineaCorn: {
		top: 664,
	},
	soyaBeans: {
		width: 91,
		fontSize: FontSize.size_sm,
		left: 107,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	honey: {
		width: 55,
		fontSize: FontSize.size_sm,
		color: Color.colorDarkslategray_500,
		alignItems: "center",
		display: "flex",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
		left: 107,
		top: 830,
	},
	millet: {
		top: 581,
	},
	ginger: {
		left: 320,
		top: 664,
	},
	pepper: {
		left: 320,
		top: 747,
	},
	melon: {
		top: 830,
		left: 320,
	},
	southEastRegion: {
		color: Color.colorDarkslategray_400,
		fontSize: FontSize.size_4xs,
		top: 597,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		alignItems: "center",
		display: "flex",
		position: "absolute",
	},
	southEastRegion1: {
		width: 85,
		left: 107,
	},
	southEastRegion2: {
		width: 85,
		left: 107,
	},
	southEastRegion3: {
		width: 85,
		left: 107,
	},
	southWestRegion: {
		left: 320,
		width: 87,
	},
	southWestRegion1: {
		left: 320,
		width: 87,
	},
	southWestRegion2: {
		left: 320,
		width: 87,
	},
	southWestRegion3: {
		left: 320,
		width: 87,
	},
	text1: {
		top: 617,
	},
	text2: {
		width: 37,
		color: Color.colorLimegreen_100,
		left: 107,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	text3: {
		width: 37,
		color: Color.colorLimegreen_100,
		left: 107,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	text4: {
		width: 37,
		color: Color.colorLimegreen_100,
		left: 107,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	text5: {
		color: Color.colorRed_100,
		width: 35,
		left: 320,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		top: 617,
	},
	text6: {
		color: Color.colorRed_100,
		width: 35,
		left: 320,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		top: 700,
	},
	newUserDashboardChild6: {
		left: 144,
		top: 531,
		height: 24,
		width: 24,
	},
	text7: {
		color: Color.colorRed_100,
		width: 35,
		left: 320,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		top: 783,
	},
	text8: {
		color: Color.colorRed_100,
		width: 35,
		left: 320,
		fontSize: FontSize.size_xs,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		top: 870,
	},
	newUserDashboardChild7: {
		left: 376,
		top: 531,
		height: 24,
		width: 24,
	},
	newUserDashboardChild8: {
		left: 30,
	},
	newUserDashboardChild9: {
		left: 174,
	},
	newUserDashboardChild10: {
		left: 318,
	},
	newUserDashboardChild11: {
		top: 272,
		left: 205,
		width: 20,
		height: 9,
		position: "absolute",
	},
	newUserDashboard: {
		borderRadius: Border.br_smi,
		backgroundColor: Color.colorMintcream,
		width: "100%",
		height: 932,
	},
});

export default NewUserDashboard;
