import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Profile1 = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.profile}>
          <StatusBar style={styles.upBars1} />
          <Text style={[styles.profile1, styles.profile1FlexBox]}>Profile</Text>
          <View style={styles.profileItem} />
          <Image
            style={styles.profileInner}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Text style={styles.omitoyinDavid}>{`Omitoyin David `}</Text>
          <View style={styles.room39mayeHostelParent}>
            <Text style={[styles.room39mayeHostel, styles.textTypo]}>
              Room 39,Maye Hostel
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout2]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Text style={[styles.text, styles.textTypo]}>+234 904 973 3613</Text>
          <Text
            style={[
              styles.annacflmbjeasley5678gmailcom,
              styles.profile1FlexBox,
            ]}
          >
            Annacflmbjeasley5678@gmail.com
          </Text>
          <Text style={[styles.general, styles.generalTypo]}>General</Text>
          <Text style={[styles.support, styles.generalTypo]}>Support</Text>
          <View style={[styles.rectangleView, styles.profileChildShadowBox]} />
          <View style={[styles.profileChild1, styles.profileChildShadowBox]} />
          <View style={[styles.profileChild2, styles.profileChildShadowBox]} />
          <View style={[styles.profileChild3, styles.profileChildShadowBox]} />
          <Text style={[styles.managePassword, styles.reportScamTypo]}>
            Manage Password
          </Text>
          <Text style={[styles.notifications, styles.contactUsTypo]}>
            Notifications
          </Text>
          <Text style={[styles.contactUs, styles.contactUsTypo]}>
            Contact Us
          </Text>
          <Text style={[styles.reportScam, styles.reportScamTypo]}>
            Report Scam
          </Text>
          <Text style={[styles.languages, styles.contactUsTypo]}>
            Languages
          </Text>
          <Text style={styles.english}>English</Text>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout2]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  profile1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  generalTypo: {
    width: 61,
    color: Color.colorDimgray_900,
    left: 31,
    fontFamily: FontFamily.interBold,

    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  profileChildShadowBox: {
    height: 57,
    elevation: 5.7,
    shadowRadius: 5.7,
    shadowColor: "#d9d9d9",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  reportScamTypo: {
    color: Color.colorDimgray_300,
    left: 43,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    height: 12,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  contactUsTypo: {
    left: 44,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_3xs,
    height: 12,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "82.00%",
    right: "11.08%",
    width: "2%",
    height: "1.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    left: "82.00%",
    width: "2%",
    height: "1.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upBars1: {
    left: 26,
    width: 337,
    height: 37,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profile1: {
    marginLeft: -164,
    top: 84,
    fontSize: FontSize.size_xl,
    color: "#454545",
    width: 65,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
  },
  profileItem: {
    top: 132,
    borderRadius: 3,
    shadowColor: "rgba(214, 214, 214, 0.23)",
    shadowRadius: 6,
    elevation: 6,
    width: 326,
    height: 147,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    left: 32,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  profileInner: {
    top: 147,
    left: 168,
    width: 56,
    height: 56,
    position: "absolute",
  },
  omitoyinDavid: {
    marginLeft: -42,
    top: 210,
    color: "#5b5b5b",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  room39mayeHostel: {
    marginLeft: -47.5,
    color: "#b4b4b4",
    width: 105,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    top: 0,
  },
  vectorIcon: {
    height: "80%",
    width: "6.09%",
    top: 3,
    right: "93.91%",
    bottom: "20%",
    left: "0%",
  },
  room39mayeHostelParent: {
    marginLeft: -47,
    top: 259,
    width: 115,
    height: 10,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 228,
    left: 156,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#6c6c6c",
  },
  annacflmbjeasley5678gmailcom: {
    top: 244,
    left: 153,
    fontSize: 6,
    fontFamily: FontFamily.poppinsRegular,
    color: "#818181",
  },
  general: {
    top: 301,
  },
  support: {
    top: 596,
  },
  rectangleView: {
    top: 423,
    width: 327,
    height: 57,
    elevation: 5.7,
    shadowRadius: 5.7,
    shadowColor: "#d9d9d9",
    borderRadius: Border.br_5xs,
    left: 32,
  },
  profileChild1: {
    top: 643,
    width: 327,
    height: 57,
    elevation: 5.7,
    shadowRadius: 5.7,
    shadowColor: "#d9d9d9",
    borderRadius: Border.br_5xs,
    left: 32,
  },
  profileChild2: {
    top: 719,
    width: 328,
    height: 57,
    elevation: 5.7,
    shadowRadius: 5.7,
    shadowColor: "#d9d9d9",
    borderRadius: Border.br_5xs,
    left: 31,
  },
  profileChild3: {
    top: 505,
    width: 327,
    height: 57,
    elevation: 5.7,
    shadowRadius: 5.7,
    shadowColor: "#d9d9d9",
    borderRadius: Border.br_5xs,
    left: 32,
  },
  managePassword: {
    top: 365,
    width: 95,
  },
  notifications: {
    top: 446,
    width: 67,
  },
  contactUs: {
    top: 666,
    width: 59,
  },
  reportScam: {
    top: 742,
    width: 73,
  },
  languages: {
    top: 528,
    width: 63,
  },
  english: {
    top: 529,
    left: 317,
    fontSize: FontSize.size_4xs,
    color: "#06cb31",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon1: {
    top: "43.13%",
    bottom: "55.37%",
  },
  vectorIcon2: {
    top: "52.84%",
    bottom: "45.65%",
  },
  vectorIcon3: {
    top: "78.79%",
    right: "10.56%",
    bottom: "19.7%",
    left: "87.44%",
  },
  vectorIcon4: {
    top: "87.8%",
    right: "10.82%",
    bottom: "10.7%",
    left: "87.18%",
  },
  vectorIcon5: {
    height: "3.08%",
    width: "6.67%",
    top: "9.6%",
    right: "7.95%",
    bottom: "87.32%",
    left: "85.38%",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
  },
});

export default Profile1;
