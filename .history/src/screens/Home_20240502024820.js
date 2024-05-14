// import * as React from "react";
// import {
//   Image,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import FrameComponent from "/src/components/FrameComponent";
// import SlideScreen from "/src/screens/SlideScreen";
// import { Color, FontSize, FontFamily, Border } from "/GlobalStyles";

// const Home = () => {
//   return (
//     <GestureHandlerRootView>
//       <ScrollView>
//         <View style={styles.home}>
//           <StatusBar style={styles.upBars1} contentFit="cover" />
//           <Image
//             style={styles.homeChild}
//             contentFit="cover"
//             source={require("../assets/ellipse-3.png")}
//           />
//           <Text style={styles.goodMorning}>Good Morning</Text>
//           <Text style={styles.omitoyinDavid}>Omitoyin David</Text>
//           <Image
//             style={[styles.iconamoonnotification, styles.homeChildLayout2]}
//             contentFit="cover"
//             source={require("../assets/iconamoonnotification.png")}
//           />
//           <View
//             style={[styles.investmentPackageParent, styles.newChildLayout2]}
//           >
//             <Text style={[styles.investmentPackage, styles.maizeFlexBox]}>
//               Investment package
//             </Text>
//             <Text style={styles.grearn}>Grearn</Text>
//             <Text style={styles.totalAssets}>Total Assets</Text>
//             <View style={[styles.vuesaxlinearhashtag, styles.iconChildLayout]}>
//               <View style={styles.wrapper}>
//                 <Text style={styles.text}>#140,000.08</Text>
//               </View>
//             </View>
//             <View style={styles.maizeWrapper}>
//               <Text style={[styles.maize, styles.maizeFlexBox]}>Maize</Text>
//             </View>

//             <Image
//               // This is the eye on the
//               style={[styles.vuesaxlineareyeIcon, styles.iconChildLayout]}
//               contentFit="cover"
//               source={require("../assets/vuesaxlineareye.png")}
//             />
//             <Image
//               /* This is for the white lineimage you are seeing above on the card */
//               style={styles.groupIcon}
//               contentFit="cover"
//               source={require("../assets/group-23.png")}
//             />
//             <Image
//               /* This is for the white lineimage you are seeing below on the card */
//               style={styles.frameChild1}
//               contentFit="cover"
//               source={require("../assets/group-241.png")}
//             />
//           </View>
//           <Image
//             style={styles.homeChild11}
//             contentFit="cover"
//             source={require("../assets/group-26.png")}
//           />
//           <FrameComponent />
//           <Text style={[styles.liveStocks, styles.topTypo]}>Live stocks</Text>
//           <SlideScreen />
//           <Image
//             style={[styles.homeItem, styles.homeLayout1]}
//             contentFit="cover"
//             source={require("../assets/frame-25.png")}
//           />
//           <Image
//             style={[styles.homeInner, styles.homeLayout]}
//             contentFit="cover"
//             source={require("../assets/frame-38.png")}
//           />
//           <Image
//             style={[styles.frameIcon, styles.frameIconLayout]}
//             contentFit="cover"
//             source={require("../assets/frame-34.png")}
//           />
//           <Image
//             style={[styles.homeChild1, styles.homeChildLayout1]}
//             contentFit="cover"
//             source={require("../assets/frame-36.png")}
//           />
//           <Image
//             style={[styles.homeChild2, styles.homeLayout1]}
//             contentFit="cover"
//             source={require("../assets/frame-26.png")}
//           />
//           <Image
//             style={[styles.homeChild3, styles.homeLayout]}
//             contentFit="cover"
//             source={require("../assets/frame-33.png")}
//           />
//           <Image
//             style={[styles.homeChild4, styles.frameIconLayout]}
//             contentFit="cover"
//             source={require("../assets/frame-35.png")}
//           />
//           <Image
//             style={[styles.homeChild5, styles.homeChildLayout1]}
//             contentFit="cover"
//             source={require("../assets/frame-37.png")}
//           />

//           <Text style={[styles.topGainers, styles.topTypo]}>Top Gainers</Text>
//           <Text style={[styles.topLosers, styles.topTypo]}>Top Losers</Text>

//           <Text style={[styles.maize1, styles.maize1Layout]}>Maize</Text>
//           <Text style={[styles.guineaCorn, styles.soyaBeansTypo]}>
//             Guinea corn
//           </Text>
//           <Text style={[styles.soyaBeans, styles.pepperPosition]}>
//             Soya Beans
//           </Text>
//           <Text style={[styles.honey, styles.honeyTypo]}>Honey</Text>
//           <Text style={[styles.millet, styles.melonTypo]}>Millet</Text>
//           <Text style={[styles.ginger, styles.gingerTypo]}>Ginger</Text>
//           <Text style={[styles.pepper, styles.honeyTypo]}>Pepper</Text>
//           <Text style={[styles.melon, styles.melonTypo]}>Melon</Text>
//           <Text style={[styles.southEastRegion, styles.southLayout]}>
//             South-east region
//           </Text>
//           <Text style={[styles.southEastRegion1, styles.southTypo2]}>
//             South-east region
//           </Text>
//           <Text style={[styles.southEastRegion2, styles.southTypo1]}>
//             South-east region
//           </Text>
//           <Text style={[styles.southEastRegion3, styles.southTypo]}>
//             South-east region
//           </Text>
//           <Text style={[styles.southWestRegion, styles.southTypo3]}>
//             South-west region
//           </Text>
//           <Text style={[styles.southWestRegion1, styles.southTypo2]}>
//             South-west region
//           </Text>
//           <Text style={[styles.southWestRegion2, styles.southTypo1]}>
//             South-west region
//           </Text>
//           <Text style={[styles.southWestRegion3, styles.southTypo]}>
//             South-west region
//           </Text>
//           <Text style={[styles.text1, styles.textTypo1]}>+59%</Text>
//           <Text style={[styles.text2, styles.textPosition2]}>+59%</Text>
//           <Text style={[styles.text3, styles.textPosition1]}>+59%</Text>
//           <Text style={[styles.text4, styles.textPosition]}>+59%</Text>
//           <Text style={[styles.text5, styles.textLayout]}>-45%</Text>
//           <Text style={[styles.text6, styles.textLayout]}>-45%</Text>
//           <Image
//             style={[styles.homeChild6, styles.homeChildLayout2]}
//             contentFit="cover"
//             source={require("../assets/frame-30.png")}
//           />
//           <Text style={[styles.text7, styles.textLayout]}>-45%</Text>
//           <Text style={[styles.text8, styles.textLayout]}>-45%</Text>

//           <Image
//             style={[styles.homeChild7, styles.homeChildLayout2]}
//             contentFit="cover"
//             source={require("../assets/frame-31.png")}
//           />
//         </View>
//       </ScrollView>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   card1: {
//     top: 150,
//     left: 20,
//     borderRadius: Border.br_8xs,
//     backgroundColor: Color.colorLimegreen_100,

//     width: 400,
//     height: 100,
//     position: "absolute",
//   },
//   grearn: {
//     left: 15,
//     width: 66,
//     fontSize: FontSize.size_base,
//     color: Color.colorWhite,
//     top: 20,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   totalAssets: {
//     top: 44,
//     color: Color.colorGainsboro_300,
//     width: 82,
//     fontSize: FontSize.size_xs,
//     left: 16,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   vuesaxlinearhashtag: {
//     top: 92,
//     left: 48,
//     height: 24,
//     position: "absolute",
//   },
//   iconChildLayout: {
//     height: 24,
//     width: 24,
//   },
//   wrapper: {
//     top: -24,
//     left: -33,
//     width: 107,
//     height: 24,
//     position: "absolute",
//   },
//   text: {
//     top: 4,
//     fontSize: FontSize.size_base,
//     color: Color.colorWhite,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//   },
//   maizeWrapper: {
//     top: 56,
//     left: 290,
//     borderRadius: Border.br_7xs,
//     backgroundColor: Color.colorGreen_200,
//     width: 70,
//     height: 30,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   maize: {
//     marginTop: -10,
//     marginLeft: -20,
//     top: "50%",
//     left: "50%",
//     color: Color.colorWhite,
//     fontSize: FontSize.size_smi,
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//   },
//   maizeFlexBox: {
//     color: Color.colorWhite,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },

//   investmentPackage: {
//     left: 230,
//     fontSize: FontSize.size_2xs,
//     width: 118,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     top: 20,
//     color: Color.colorWhite,
//   },
//   newChildLayout2: {
//     borderRadius: Border.br_8xs,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   investmentPackageParent: {
//     top: 160,
//     backgroundColor: Color.colorYellowgreen_100,
//     width: 400,
//     height: 102,
//     left: 20,
//     borderRadius: Border.br_8xs,
//   },
//   homeChildLayout2: {
//     height: 24,
//     width: 24,
//     position: "absolute",
//   },
//   horizontalScrollView: {},
//   parentFlexBox: {
//     flexDirection: "row",
//     overflow: "hidden",
//   },
//   maizeFlexBox: {
//     color: Color.colorWhite,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   frameLayout: {
//     display: "none",
//     height: 189,
//     width: 179,
//     position: "absolute",
//   },
//   topTypo: {
//     color: Color.colorDarkslategray_500,
//     fontSize: FontSize.size_base,
//     lineHeight: 20,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   homeLayout1: {
//     height: 59,
//     width: 72,
//     borderRadius: Border.br_9xs,
//     top: 577,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   homeLayout: {
//     top: 660,
//     height: 59,
//     width: 72,
//     borderRadius: Border.br_9xs,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   frameIconLayout: {
//     top: 743,
//     height: 59,
//     width: 72,
//     borderRadius: Border.br_9xs,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   homeChildLayout1: {
//     top: 826,
//     width: 72,
//     borderRadius: Border.br_9xs,
//     height: 65,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   maize1Layout: {
//     top: 581,
//   },
//   soyaBeansTypo: {
//     width: 91,
//     fontSize: FontSize.size_sm,
//     left: 107,
//     color: Color.colorDarkslategray_500,

//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   pepperPosition: {
//     top: 747,
//     height: 17,
//   },
//   honeyTypo: {
//     width: 55,
//     fontSize: FontSize.size_sm,
//     color: Color.colorDarkslategray_500,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   gingerTypo: {
//     marginTop: -10,
//     fontSize: FontSize.size_sm,
//     color: Color.colorDarkslategray_500,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   melonTypo: {
//     width: 46,
//     left: 310,
//     fontSize: FontSize.size_sm,
//     color: Color.colorDarkslategray_500,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   southLayout: {
//     width: 85,
//     left: 107,
//   },
//   southTypo2: {
//     top: 680,
//     color: Color.colorDarkslategray_400,
//     fontSize: FontSize.size_4xs,
//     height: 17,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     lineHeight: 11,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   southTypo1: {
//     top: 763,
//     color: Color.colorDarkslategray_400,
//     fontSize: FontSize.size_4xs,
//     height: 17,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     lineHeight: 11,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   southTypo: {
//     top: 848,
//     color: Color.colorDarkslategray_400,
//     fontSize: FontSize.size_4xs,
//     height: 19,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     lineHeight: 11,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   vuesaxlineareyeIcon: {
//     top: 68,
//     left: 75,
//     height: 24,
//     marginHorizontal: 50,
//     position: "relative",
//   },

//   southTypo3: {
//     color: Color.colorDarkslategray_400,
//     fontSize: FontSize.size_4xs,
//     top: 597,
//     height: 17,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     lineHeight: 11,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     position: "absolute",
//   },
//   textTypo1: {
//     width: 37,
//     color: Color.colorLimegreen_100,
//     left: 107,
//     fontSize: FontSize.size_xs,

//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   textPosition2: {
//     top: 700,
//     height: 14,
//   },
//   textPosition1: {
//     top: 783,
//     height: 14,
//   },
//   textPosition: {
//     top: 870,
//     height: 15,
//   },
//   textLayout: {
//     width: 35,
//     position: "absolute",
//   },
//   parentLayout: {
//     height: 36,
//     top: 11,
//   },
//   cardsLayout: {
//     width: 31,
//     position: "absolute",
//   },
//   cardsTypo: {
//     color: Color.colorGray_600,
//     height: 12,
//     left: 0,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     lineHeight: 28,
//     fontSize: FontSize.size_3xs,
//   },
//   profileLayout: {
//     width: 36,
//     position: "absolute",
//   },
//   investmentLayout: {
//     width: 59,
//     position: "absolute",
//   },
//   homeChildLayout: {
//     height: 100,
//     width: 133,
//     top: 400,
//     borderRadius: Border.br_9xs,
//   },
//   upBars1: {
//     left: 47,
//     width: 337,
//     height: 37,
//     top: 0,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   homeChild: {
//     top: 69,
//     left: 20,
//     width: 65,
//     height: 65,
//     position: "absolute",
//   },
//   goodMorning: {
//     top: 70,
//     color: Color.colorDimgray_400,
//     width: 75,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     lineHeight: 28,
//     fontSize: FontSize.size_3xs,
//     left: 89,
//     // position: "absolute",
//   },
//   omitoyinDavid: {
//     top: 97,
//     color: Color.colorDarkslategray_200,
//     width: 103,
//     lineHeight: 15,
//     fontSize: FontSize.size_smi,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     left: 89,
//     position: "absolute",
//   },
//   iconamoonnotification: {
//     top: 72,
//     left: 400,
//     overflow: "hidden",
//   },
//   topGainers: {
//     width: 101,
//     left: 30,
//     top: 531,
//   },
//   liveStocks: {
//     top: 365,
//     width: 97,
//     left: 30,
//   },
//   topLosers: {
//     width: 87,
//     left: 230,
//     top: 531,
//   },
//   homeItem: {
//     left: 30,
//   },
//   homeInner: {
//     left: 30,
//   },
//   frameIcon: {
//     left: 30,
//   },
//   homeChild1: {
//     left: 30,
//   },
//   homeChild2: {
//     left: 230,
//   },
//   homeChild3: {
//     left: 230,
//   },
//   homeChild4: {
//     left: 230,
//   },
//   homeChild5: {
//     left: 230,
//   },
//   maize1: {
//     width: 49,
//     fontSize: FontSize.size_sm,
//     left: 107,
//     top: 581,
//     color: Color.colorDarkslategray_500,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   guineaCorn: {
//     top: 664,
//     height: 17,
//   },
//   soyaBeans: {
//     width: 91,
//     fontSize: FontSize.size_sm,
//     left: 107,
//     color: Color.colorDarkslategray_500,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   honey: {
//     top: 830,
//     height: 19,
//     left: 107,
//     width: 55,
//   },
//   millet: {
//     top: 581,
//     width: 46,
//   },
//   ginger: {
//     left: 310,
//     top: 670,
//   },
//   pepper: {
//     left: 310,
//     top: 747,
//     height: 17,
//   },
//   melon: {
//     top: 830,
//     height: 19,
//   },
//   southEastRegion: {
//     color: Color.colorDarkslategray_400,
//     fontSize: FontSize.size_4xs,
//     top: 597,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//     alignItems: "center",
//     display: "flex",
//     position: "absolute",
//   },
//   southEastRegion1: {
//     width: 85,
//     left: 107,
//   },
//   southEastRegion2: {
//     width: 85,
//     left: 107,
//   },
//   southEastRegion3: {
//     width: 85,
//     left: 107,
//   },
//   southWestRegion: {
//     left: 310,
//     width: 87,
//   },
//   southWestRegion1: {
//     left: 310,
//     width: 87,
//   },
//   southWestRegion2: {
//     left: 310,
//     width: 87,
//   },
//   southWestRegion3: {
//     left: 310,
//     width: 87,
//   },
//   text1: {
//     top: 617,
//   },
//   text2: {
//     width: 37,
//     color: Color.colorLimegreen_100,
//     left: 107,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   text3: {
//     width: 37,
//     color: Color.colorLimegreen_100,
//     left: 107,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   text4: {
//     width: 37,
//     color: Color.colorLimegreen_100,
//     left: 107,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   text5: {
//     color: Color.colorRed_100,
//     width: 35,
//     left: 310,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     top: 617,
//   },
//   text6: {
//     color: Color.colorRed_100,
//     width: 35,
//     left: 310,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     top: 700,
//   },
//   homeChild6: {
//     left: 144,
//     top: 531,
//     borderRadius: Border.br_8xs,
//     overflow: "hidden",
//   },
//   text7: {
//     color: Color.colorRed_100,
//     width: 35,
//     left: 310,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     top: 783,
//   },
//   text8: {
//     color: Color.colorRed_100,
//     width: 35,
//     left: 310,
//     fontSize: FontSize.size_xs,
//     alignItems: "center",
//     display: "flex",
//     textAlign: "left",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     top: 870,
//   },
//   homeChild7: {
//     left: 376,
//     top: 531,
//     borderRadius: Border.br_8xs,
//     overflow: "hidden",
//   },
//   homeChild8: {
//     left: 30,
//   },
//   homeChild9: {
//     left: 174,
//   },
//   homeChild10: {
//     left: 318,
//   },
//   homeChild11: {
//     top: 272,
//     left: 205,
//     width: 20,
//     height: 9,
//     position: "absolute",
//   },
//   home: {
//     borderRadius: Border.br_smi,
//     backgroundColor: Color.colorMintcream,
//     flex: 1,
//     width: "100%",
//     height: 932,
//   },
// });

// export default Home;
