const Stack = createNativeStackNavigator();
//all the screens
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import Onboarding1 from "./src/screens/Onboarding1";
import Onboarding2 from "./src/screens/Onboarding2";
import SecondSignUp from "./src/screens/SecondSignUp";
import SignUp1 from "./src/screens/SignUp1";
import SignUp2 from "./src/screens/SignUp2";
import SignIn from "./src/screens/SignIn";
import SplashScreen from "./src/screens/SplashScreen";
import NewUserDashboard from "./src/screens/NewUserDashboard";
import DashboardWith2Investment from "./src/screens/DashboardWith2Investment";
import Investment from "./src/screens/Investment";
import NewInvestment from "./src/screens/NewInvestment";
import NewInvestment1 from "./src/screens/NewInvestment1";
import AddNewCard from "./src/screens/AddNewCard";
import Profile from "./src/screens/Profile";
import ManageProfileText from "./src/screens/ManageProfileText";
import MyCards from "./src/screens/MyCards";
import Prompt1 from "./src/screens/Prompt1";
import Prompt2 from "./src/screens/Prompt2";
import Prompt3 from "./src/screens/Prompt3";
import Prompt4 from "./src/screens/Prompt4";
import VerifyCard from "./src/screens/VerifyCard";
import VerifyCard1 from "./src/screens/VerifyCard1";
import VerifyCard2 from "./src/screens/VerifyCard2";
import InvalidPin from "./src/screens/InvalidPin";
import NewInvestment2 from "./src/screens/NewInvestment2";
import Investing from "./src/screens/Investing";
import InsufficientFunds from "./src/screens/InsufficientFunds";
import AboveLimit from "./src/screens/AboveLimit";
import BelowLimit from "./src/screens/BelowLimit";
import Confirmation from "./src/screens/Confirmation";
import PackageInfo from "./src/screens/PackageInfo";
import Frame from "./src/screens/Frame";
import Frame1 from "./src/screens/Frame1";
import FrameScreen from "./src/screens/FrameScreen";
import Profile1 from "./src/screens/Profile1";
import Rectangle from "./src/screens/Rectangle";
import FirstSignUp from "./src/screens/FirstSignUp";
import NewInvestment3 from "./src/screens/NewInvestment3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MyCancel from "./src/screens/MyCancel";
import { AuthProvider } from "./src/services/hooks/AuthContext";

//forgot password screens
import ForgotPassword from "./src/screens/ForgotPassword";
import ResetPassword from "./src/screens/ResetPassword";

//flutterwave payment screen
import FlutterwaveDeposit from "./src/screens/FlutterwaveDeposit";
import Transactions, { TransactionsDetails } from "./src/screens/Transactions";
import Withdrawal from "./src/screens/Withdrawal";
import BankDetails from "./src/screens/BankDetails";
import NewInvestmentPage, {
  NewInvestmentDetailsPage,
} from "./src/screens/NewInvestmentPage";
import Admin, {
  AdminInvestments,
  AdminTransactions,
  AdminUsers,
} from "./src/screens/Admin ";
import AdminUserEdit, {
  AdminInvestmentEdit,
  AdminNewInvestment,
  AdminTransactionEdit,
} from "./src/screens/AdminEdit";

const App = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="MyCancel"
              component={MyCancel}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            {/* Add other screens to the stack here  */}
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SecondSignUp"
              component={SecondSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewUserDashboard"
              component={NewUserDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardWith2Investment"
              component={DashboardWith2Investment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Investment"
              component={Investment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestment"
              component={NewInvestment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestment1"
              component={NewInvestment1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard"
              component={AddNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageProfileText"
              component={ManageProfileText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCards"
              component={MyCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prompt1"
              component={Prompt1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prompt2"
              component={Prompt2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prompt3"
              component={Prompt3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prompt4"
              component={Prompt4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCard"
              component={VerifyCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCard1"
              component={VerifyCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCard2"
              component={VerifyCard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InvalidPin"
              component={InvalidPin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestment2"
              component={NewInvestment2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestment3"
              component={NewInvestment3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PackageInfo"
              component={PackageInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Investing"
              component={Investing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsufficientFunds"
              component={InsufficientFunds}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboveLimit"
              component={AboveLimit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BelowLimit"
              component={BelowLimit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameScreen"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FirstSignUp"
              component={FirstSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

            {/* NEWLY ADDED SCREEN  */}
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlutterwaveDeposit"
              component={FlutterwaveDeposit}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionsDetails"
              component={TransactionsDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Withdrawal"
              component={Withdrawal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankDetails"
              component={BankDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestmentPage"
              component={NewInvestmentPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewInvestmentDetails"
              component={NewInvestmentDetailsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Admin"
              component={Admin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminUsers"
              component={AdminUsers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminTransactions"
              component={AdminTransactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminInvestments"
              component={AdminInvestments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminUserEdit"
              component={AdminUserEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminNewInvestment"
              component={AdminNewInvestment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminInvestmentEdit"
              component={AdminInvestmentEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminTransactionEdit"
              component={AdminTransactionEdit}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};
export default App;
