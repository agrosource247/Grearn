import { useNavigation } from "@react-navigation/core";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";
import React from "react";
import UseAuth from "../services/hooks/UseAuth";
import { generateRandomCode, Transaction } from "../services/api";
import { Image, Text } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Pressable, StyleSheet, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const SingleInvestment = ({ route }) => {
  const { auth } = UseAuth();
  const { investment } = route.params;
  const navigation = useNavigation();
  const [amount, setAmount] = React.useState(Number);
  const [loading, setLoading] = React.useState(true);
  const [tx_ref, setTx_ref] = React.useState("");

  const setForm = async () => {
    const form = {
      id: auth.id,
      product: investment.product,
      transactionType: "Investment",
      amount: amount,
      tx_ref: tx_ref,
    };
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) return alert("Amount field is required");
    if (amount < investment.minimum_invest)
      return alert(
        `Minimum invest must be greater than ${investment.minimum_invest}`
      );
    setLoading(true);
    const ref = await generateRandomCode();
    setTx_ref(ref);

    try {
      const controller = new AbortController();
      let isMounted = true;
      const form = await setForm();

      const res = Transaction(isMounted, form, controller, auth, "post");

      if (res?.status === 200) {
        isMounted = false;
        controller.abort();
        alert("Transaction succesfully placed");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <View>
            <View
              style={{ flexDirection: "row", marginTop: verticalScale(32) }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.vuesaxlineararrowLeftIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowleft.png")}
                />
              </Pressable>

              <Text style={styles.investments}>Investments</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(21),
                marginBottom: verticalScale(10),
              }}
            >
              <Text style={styles.activePackage}>Active package</Text>
            </View>
          </View>

          <View key={index}>
            <Image
              style={styles.investmentImage}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              {investment.description || "No description available."}
            </Text>
            <View
              style={{
                marginTop: verticalScale(24),
                marginBottom: verticalScale(34),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.principal}>
                  Principal:{" "}
                  <Text style={styles.amount}>
                    # {investment.minimum_invest}
                  </Text>
                </Text>
                <Text style={styles.profit}>
                  Profit:
                  <Text style={styles.amount}># {investment.profit}</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>{investment.roi}</Text>
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:
                  <Text style={styles.location}>{investment.geo_location}</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.harvestPeriod}>
                  Harvest period:{" "}
                  <Text style={styles.duration}>{investment.duration}</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.insurance}>Insurance:</Text>

                  <View style={styles.activeWrapper}>
                    <Text style={styles.active}>
                      {investment.completed ? "Active" : "Not Active"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                value={amount}
                onChangeText={setAmount}
              />
            </View>

            <Pressable
              style={styles.investMoreWrapper}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={styles.investMore}>
                {loading ? "Loading..." : "Proceed"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default SingleInvestment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
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
  scrollContainer: {
    padding: moderateScale(20),
  },
  investment: {
    backgroundColor: Color.colorWhite,
  },
  vuesaxlineararrowLeftIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
  investments: {
    fontSize: moderateScale(FontSize.size_base),
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackage: {
    fontSize: moderateScale(FontSize.size_xs),
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  investmentImage: {
    height: verticalScale(148),
    width: "100%",
    marginBottom: verticalScale(7),
    borderRadius: moderateScale(Border.br_8xs),
  },
  description: {
    fontSize: moderateScale(FontSize.size_3xs),
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  geoLocation: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  insurance: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  roi: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  profit: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  amount: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  monthly: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  location: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  duration: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  active: {
    fontSize: moderateScale(FontSize.size_6xs),
    color: Color.colorGreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  investMoreWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: moderateScale(Border.br_7xs),
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(35),
    bottom: 20,
  },
  activeWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: moderateScale(Border.br_mini),
    width: scale(29),
    height: verticalScale(12),
  },
  investMore: {
    fontSize: moderateScale(FontSize.size_xl),
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  loadingText: {
    fontSize: moderateScale(FontSize.size_xs),
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    marginTop: verticalScale(20),
  },
  noDataText: {
    fontSize: moderateScale(FontSize.size_xs),
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    marginTop: verticalScale(20),
  },
});
