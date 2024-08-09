import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
const PackageInfo = ({ navigation }) => {
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<View style={styles.packageInfo}>
					<StatusBar style={[styles.upBars1, styles.upBars1Position]} contentFit="cover" />
					<View style={[styles.packageInfoChild, styles.packagePosition]} />
					<ImageBackground style={[styles.packageInfoInner, styles.packagePosition]} resizeMode="cover" source={require("../assets/frame56.png")}>
						<View style={styles.frameChild} />
					</ImageBackground>
					<Text style={styles.pepper}>Pepper</Text>
					<Text style={[styles.info, styles.infoTypo]}>Info</Text>
					<Text style={[styles.ratings, styles.infoTypo]}>Ratings</Text>
					<Text style={[styles.harvestPeriod, styles.insuranceTypo]}>Harvest period:</Text>
					<Text style={[styles.minimumInvest, styles.insuranceTypo]}>{`Minimum invest: `}</Text>
					<Text style={[styles.insurance, styles.insuranceTypo]}>Insurance:</Text>
					<Text style={[styles.geoLocation, styles.roiTypo]}>Geo-location:</Text>
					<Text style={[styles.roi, styles.roiTypo]}>ROI:</Text>
					<Text style={[styles.months, styles.textTypo]}>4-Months</Text>
					<Text style={[styles.southWest, styles.textTypo]}>South-west</Text>
					<Text style={[styles.text, styles.textTypo]}>#25,000</Text>
					<Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
					<Text style={styles.pepperOffersA}>{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
					<View style={[styles.packageInfoItem, styles.packageLayout]} />
					<View style={[styles.lineView, styles.packageLayout]} />
					<View style={[styles.packageInfoChild1, styles.packageLayout]} />
					<View style={[styles.availableWrapper, styles.upBars1Position]}>
						<Text style={[styles.available, styles.availablePosition]}>Available</Text>
					</View>
					<Image style={[styles.vuesaxlinearstarIcon, styles.vuesaxlinearstarIconPosition]} contentFit="cover" source={require("../assets/vuesaxlinearstar.png")} />
					<Image style={[styles.vuesaxlinearstarIcon1, styles.vuesaxlinearstarIconPosition]} contentFit="cover" source={require("../assets/vuesaxlinearstar.png")} />
					<Image style={[styles.vuesaxlinearstarIcon2, styles.vuesaxlinearstarIconPosition]} contentFit="cover" source={require("../assets/vuesaxlinearstar.png")} />
					<Image style={[styles.vuesaxlinearstarIcon3, styles.vuesaxlinearstarIconPosition]} contentFit="cover" source={require("../assets/vuesaxlinearstar.png")} />
					<Image style={[styles.vuesaxlinearstarIcon4, styles.vuesaxlinearstarIconPosition]} contentFit="cover" source={require("../assets/vuesaxlinearstar1.png")} />
					<View style={styles.investNowWrapper}>
						<Text style={[styles.investNow, styles.availablePosition]}>Invest now</Text>
					</View>
				</View>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	upBars1Position: {
		position: "absolute",
	},
	packagePosition: {
		width: 430,
		left: 0,
		position: "absolute",
	},
	parentLayout: {
		height: 36,
		top: 11,
	},
	iconLayout: {
		height: 24,
		width: 24,
		position: "absolute",
	},
	homeTypo: {
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		color: Color.colorGray_600,
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		lineHeight: 28,
		fontSize: FontSize.size_3xs,
		top: 24,
		left: 0,
	},
	profileLayout: {
		width: 36,
		position: "absolute",
	},
	infoTypo: {
		fontSize: FontSize.size_smi,

		color: Color.colorDarkslategray_500,

		left: 13,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	insuranceTypo: {
		color: Color.colorDimgray_600,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",

		fontSize: FontSize.size_smi,
		left: 13,

		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	roiTypo: {
		left: 223,
		color: Color.colorDimgray_600,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",

		fontSize: FontSize.size_smi,

		alignItems: "center",
		display: "flex",
		textAlign: "left",
		position: "absolute",
	},
	textTypo: {
		fontSize: FontSize.size_sm,

		color: Color.colorYellowgreen_100,

		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	packageLayout: {
		height: 1,
		width: 431,
		borderTopWidth: 1,
		borderColor: Color.colorGainsboro_400,
		borderStyle: "solid",
		left: 0,
		position: "absolute",
	},
	availablePosition: {
		textAlign: "left",
	},
	vuesaxlinearstarIconPosition: {
		top: 613,
		height: 24,
		width: 24,
		position: "absolute",
	},
	upBars1: {
		left: 47,
		width: 337,
		height: 37,
		top: 0,
	},
	packageInfoChild: {
		backgroundColor: "rgba(34, 34, 34, 0.25)",
		height: 259,
		top: 0,
	},
	frameChild: {
		left: 159,
		borderRadius: Border.br_5xs,
		height: 5,
		width: 111,
		top: 23,
		position: "absolute",

		backgroundColor: Color.colorWhite,
	},
	packageInfoInner: {
		top: 73,
		// borderTopLeftRadius: Border.br_3xs,
		// borderTopRightRadius: Border.br_3xs,
		height: 272,
	},
	pepper: {
		top: 375,
		width: 76,

		color: Color.colorDarkslategray_500,

		fontSize: FontSize.size_xl,
		left: 13,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
		position: "absolute",
	},
	info: {
		top: 515,
		width: 28,
	},
	ratings: {
		top: 618,
		width: 53,
	},
	harvestPeriod: {
		width: 104,
		top: 414,
	},
	minimumInvest: {
		top: 444,
		width: 111,
		color: Color.colorDimgray_600,
	},
	insurance: {
		top: 474,
	},
	geoLocation: {
		width: 94,
		top: 413,
	},
	roi: {
		top: 443,
		width: 28,
	},
	months: {
		left: 120,
		width: 84,
		top: 414,
	},
	southWest: {
		left: 319,
		width: 99,
		top: 413,
	},
	text: {
		left: 123,
		width: 72,
		top: 444,
	},
	monthly: {
		left: 251,
		width: 97,
		top: 444,
	},
	pepperOffersA: {
		top: 532,
		fontFamily: FontFamily.poppinsRegular,
		color: Color.colorDimgray_500,
		width: 400,

		left: 13,
		alignItems: "center",
		display: "flex",
		textAlign: "left",
		fontSize: FontSize.size_3xs,
		position: "absolute",
	},
	packageInfoItem: {
		top: 505,
	},
	lineView: {
		top: 608,
	},
	packageInfoChild1: {
		top: 651,
	},
	available: {
		marginTop: -8,
		marginLeft: -24,
		color: Color.colorGreen_100,

		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		left: "50%",
		top: "50%",
		alignItems: "center",
		display: "flex",
		fontSize: FontSize.size_3xs,
		position: "absolute",
	},
	availableWrapper: {
		top: 470,
		left: 84,
		borderRadius: Border.br_mini,
		backgroundColor: Color.colorYellowgreen_200,
		width: 64,
		height: 21,
	},
	vuesaxlinearstarIcon: {
		left: 80,
	},
	vuesaxlinearstarIcon1: {
		left: 104,
	},
	vuesaxlinearstarIcon2: {
		left: 127,
	},
	vuesaxlinearstarIcon3: {
		left: 150,
	},
	vuesaxlinearstarIcon4: {
		left: 174,
	},
	investNow: {
		marginTop: -15,
		marginLeft: -56,
		color: Color.colorWhite,
		width: 112,
		height: 30,
		left: "50%",
		top: "50%",
		fontSize: FontSize.size_xl,
		fontFamily: FontFamily.poppinsSemiBold,
		fontWeight: "600",
	},
	investNowWrapper: {
		top: 782,
		borderRadius: Border.br_7xs,
		backgroundColor: Color.colorYellowgreen_100,
		width: 370,
		height: 60,
		left: 20,
	},
	packageInfo: {
		borderRadius: Border.br_smi,
		flex: 1,
		width: "100%",
		height: 932,

		backgroundColor: Color.colorWhite,
	},
});

export default PackageInfo;
