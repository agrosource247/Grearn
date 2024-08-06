import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const NewInvestment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: Color.colorWhite }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar style={styles.statusBar} contentFit="cover" />
          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                style={styles.arrowIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investmentsText}>Investments</Text>
          </View>
          <View>
            <Text style={[styles.choosePackage, styles.roiLayout]}>
              Choose package
            </Text>
            <View style={[styles.frameParent, styles.frameLayout2]}>
              <Image
                style={[styles.frameChild, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/frame-56.png")}
              />
              <Text style={[styles.pepper, styles.infoLayout]}>Pepper</Text>
              <Text style={[styles.info, styles.roiPosition]}>Info</Text>
              <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
                Harvest period:
              </Text>
              <Text
                style={[styles.minimumInvest, styles.pepperPosition]}
              >{`Minimum invest: `}</Text>
              <Text style={[styles.geoLocation, styles.pepperPosition]}>
                Geo-location:
              </Text>
              <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
              <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
              <Text style={[styles.southWest, styles.textTypo]}>
                South-west
              </Text>
              <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
              <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
              <Text
                style={[styles.pepperOffersAContainer, styles.pepperPosition]}
              >
                <Text style={styles.pepperOffersAContainer1}>
                  <Text
                    style={styles.pepperOffersA}
                  >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.frameGroup, styles.frameLayout2]}>
              <Image
                style={[styles.frameChild, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/frame-561.png")}
              />
              <Text style={[styles.melon, styles.infoLayout]}>Melon</Text>
              <Text style={[styles.info, styles.roiPosition]}>Info</Text>
              <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
                Harvest period:
              </Text>
              <Text
                style={[styles.minimumInvest, styles.pepperPosition]}
              >{`Minimum invest: `}</Text>
              <Text style={[styles.geoLocation, styles.pepperPosition]}>
                Geo-location:
              </Text>
              <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
              <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
              <Text style={[styles.southWest, styles.textTypo]}>
                South-west
              </Text>
              <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
              <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
              <Text
                style={[styles.pepperOffersAContainer, styles.pepperPosition]}
              >
                <Text style={styles.pepperOffersAContainer1}>
                  <Text
                    style={styles.pepperOffersA}
                  >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.frameContainer, styles.frameLayout1]}>
              <Image
                style={[styles.frameChild, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/frame-562.png")}
              />
              <Text style={[styles.melon, styles.infoLayout]}>Honey</Text>
              <Text style={[styles.info, styles.roiPosition]}>Info</Text>
              <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
                Harvest period:
              </Text>
              <Text
                style={[styles.minimumInvest, styles.pepperPosition]}
              >{`Minimum invest: `}</Text>
              <Text style={[styles.geoLocation, styles.pepperPosition]}>
                Geo-location:
              </Text>
              <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
              <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
              <Text style={[styles.southWest, styles.textTypo]}>
                South-west
              </Text>
              <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
              <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
              <Text
                style={[styles.pepperOffersAContainer, styles.pepperPosition]}
              >
                <Text style={styles.pepperOffersAContainer1}>
                  <Text
                    style={styles.pepperOffersA}
                  >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </Text>
            </View>
          </View>
          ;
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 37,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 67,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  investmentsText: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exampleText: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_500,
  },
});

export default NewInvestment;
