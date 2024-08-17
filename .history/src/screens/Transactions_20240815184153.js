import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import UseAuth from "../services/hooks/UseAuth";
import { Transaction } from "../services/api";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";

export const TransactionsDetails = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.addNewCard}>
        <Text style={styles.enterYourCardNumberWrapper}>
          TRANSACTION DETAILS
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Amount: {item.product}
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Transaction type: {item.transactionType}
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Date: {new Date(item.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Time: {new Date(item.createdAt).toLocaleTimeString()}
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Reference code: {item.tx_ref}
        </Text>
        <Text style={styles.enterYourCardNumberWrapper}>
          Status: {item.completed ? "Success" : "Failed"}
        </Text>
        {item.transactionType === "Investment" && (
          <Text style={styles.enterYourCardNumberWrapper}>
            Days Left: {item.duration}
          </Text>
        )}
      </View>
    </View>
  );
};

const Transactions = ({ navigation }) => {
  const { auth } = UseAuth();
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    Transaction(isMounted, setTransactions, controller, auth, "get");

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.profile}>
          <View style={styles.editIconParent}>
            {/* <StatusBar style={styles.editIcon} /> */}
            <Text style={styles.profile2}>Transactions History</Text>
          </View>
          <View style={{}}>
            {transactions ? (
              <DataTable style={[styles.frameCreate]}>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>Date</DataTable.Title>
                  <DataTable.Title>Time</DataTable.Title>
                  <DataTable.Title>Transaction type</DataTable.Title>
                  <DataTable.Title>Amount</DataTable.Title>
                  <DataTable.Title>Status</DataTable.Title>
                </DataTable.Header>
                {transactions
                  ?.slice()
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((item, index) => {
                    return (
                      <DataTable.Row
                        key={index}
                        onPress={() =>
                          navigation.navigate("TransactionsDetails", {
                            item: item,
                          })
                        }
                      >
                        <DataTable.Cell>
                          {new Date(item.createdAt).toLocaleDateString()}
                        </DataTable.Cell>
                        <DataTable.Cell>
                          {new Date(item.createdAt).toLocaleTimeString()}
                        </DataTable.Cell>
                        <DataTable.Cell>{item.transactionType}</DataTable.Cell>
                        <DataTable.Cell>{item.amount}</DataTable.Cell>
                        <DataTable.Cell>
                          {item.completed ? "Success" : "Failed"}
                        </DataTable.Cell>
                      </DataTable.Row>
                    );
                  })}
              </DataTable>
            ) : (
              <View style={styles.editIconParent}>
                <Text style={styles.profile2}>No Transactions found</Text>
              </View>
            )}
          </View>
        </View>
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
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  frameConfirm: {
    top: 130,
    left: 5,
  },
  frameCreate: {
    top: 160,
  },
  groupLayout: {
    backgroundColor: Color.colorYellowgreen_400,
    borderRadius: Border.br_2xs,
  },
  welcomePosition: {
    textAlign: "left",
    left: "50%",
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 30,
    left: "50%",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    textAlign: "left",
    left: "50%",
  },
  letsGetTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    textAlign: "left",
    left: "50%",
  },
  passwordWrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 40,
    left: 25,
  },
  confirmPasswordBorder: {
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 100,
    left: 20,
  },
  createWrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: 36,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    padding: 10,
  },
  passwordPosition: {
    color: Color.colorGray_300,
    top: 100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -160,
    left: 190,
  },
  createPosition: {
    color: Color.colorGray_300,
    top: 40,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    left: 200,
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
  },
  groupChild: {
    left: 45,
    width: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 19,
  },
  frameView: {
    left: 83,
  },
  frameParent: {
    top: 135,
    left: 290,
    width: 83,
  },
  welcome: {
    marginLeft: -200,
    top: 122,
    fontSize: FontSize.size_3xl,
    width: 110,
    height: 28,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cancel: {
    marginLeft: -200,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  haveAnAccount1: {
    color: Color.colorDimgray_200,
  },
  text: {
    color: Color.colorGray_700,
  },
  haveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
  },
  haveAnAccountContainer: {
    marginLeft: 45,
  },
  letsGetYou: {
    top: 164,
    color: Color.colorDimgray_200,
  },
  yourPasswordMust: {
    top: 220,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: 332,
    marginLeft: -179,
    left: 215,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  bySigningUpyouContainer: {
    top: 330,
    width: 349,
  },

  enterPasswordWrapper: {
    top: 268,
  },

  createPassword: {
    marginTop: 150,
    width: 119,
  },

  proceed: {
    marginTop: -15,
    marginLeft: -44,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    width: 89,
    height: 30,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  proceedWrapper: {
    top: 280,
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 25,
    backgroundColor: Color.colorYellowgreen_100,
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
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    height: 20,
    flex: 1,
    // display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  editIconParent: {
    backgroundColor: Color.colorYellowgreen_100,
    height: 167,
    // left: 0,
    // top: 0,
    // position: "absolute",
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
    // borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    // overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Transactions;
