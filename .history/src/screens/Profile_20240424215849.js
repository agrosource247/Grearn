import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.profile}>
      <View style={styles.editIconParent}>
        <StatusBar style={styles.editIcon} />
        <Pressable
          onPress={() => {
            navigation.navigate("NewUserDashboard");
          }}
        >
          <Image
            style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft1.png")}
          />
        </Pressable>

        <Text style={styles.profile2}>Profile</Text>
      </View>
      <View
        style={[styles.vuesaxlineararrowRightParent, styles.parentShadowBox]}
      >
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
        <Text style={[styles.managePassword, styles.englishTypo]}>
          Manage Password
        </Text>
      </View>
      <View style={[styles.languageParent, styles.parentShadowBox]}>
        <Text style={[styles.language, styles.englishTypo]}>Language</Text>
        <Text style={[styles.english, styles.englishTypo]}>English</Text>
      </View>
      <Text style={styles.general}>General</Text>
      <Text style={styles.omitoyinDavidAyomide}>Omitoyin David Ayomide</Text>
      <Image
        style={[styles.profileChild, styles.upBars1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    left: 0,
  },
  cardsLayout: {
    width: 31,
    position: "absolute",
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  investmentLayout: {
    width: 59,
    position: "absolute",
  },
  upBars1Position: {
    left: "50%",
    position: "absolute",
  },
  parentShadowBox: {
    height: 57,
    width: 370,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "#ececec",
    borderRadius: Border.br_7xs,
    left: 30,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  englishTypo: {
    fontSize: FontSize.size_2xs,
    top: "50%",

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  editIcon: {
    top: 128,
    left: 337,
    height: 80,
    width: 24,
    position: "absolute",
  },
  upBars1: {
    marginLeft: -169,
    top: -7,
    width: 337,
    height: 37,
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    top: 50,
    left: 28,
  },
  profile2: {
    top: 52,
    left: 63,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 53,
    height: 20,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  editIconParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorYellowgreen_100,
    height: 167,
    left: 0,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  vuesaxlineararrowRightIcon: {
    marginTop: -11.5,
    left: 338,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  managePassword: {
    width: 105,
    color: Color.colorDimgray_700,
    left: 8,
    marginTop: -4.5,

    fontSize: FontSize.size_2xs,
  },
  vuesaxlineararrowRightParent: {
    top: 293,
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 370,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "#ececec",
    borderRadius: Border.br_7xs,
  },
  language: {
    width: 57,
    color: Color.colorDimgray_700,
    left: 8,
    marginTop: -4.5,

    fontSize: FontSize.size_2xs,
  },
  english: {
    marginTop: -5.5,
    left: 316,
    color: "#57dc00",
    width: 40,

    fontSize: FontSize.size_2xs,
  },
  languageParent: {
    top: 358,
  },
  general: {
    top: 262,
    fontSize: FontSize.size_sm,
    color: "#3f3f3f",
    left: 30,
    height: 20,

    width: 59,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  omitoyinDavidAyomide: {
    marginLeft: -96,
    top: 200,
    fontSize: 15,
    color: "#585858",
    width: 191,
    height: 16,

    left: "50%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  profileChild: {
    marginLeft: -43,
    top: 115,
    width: 84,
    height: 84,
  },
  profile: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
