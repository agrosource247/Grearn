import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomNavigation from "./src/components/BottomNavigation";
import { AuthProvider } from "./src/services/hooks/AuthContext";
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
import Trade from "./src/screens/Trade";

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
// import Admin, {
//   AdminInvestments,
//   AdminTransactions,
//   AdminUsers,
// } from "./src/screens/Admin ";
import AdminUserEdit, {
  AdminInvestmentEdit,
  AdminNewInvestment,
  AdminTransactionEdit,
} from "./src/screens/AdminEdit";

//seperated all Admin,adminUser,adminInvestments,AdminTransaction for code readeability
import Admin from "./src/components/Admin ";
import AdminUsers from "./src/components/AdminUsers";
import AdminTransactions from "./src/components/AdminTransactions";
import AdminInvestments from "./src/components/AdminInvestments";

import { BottomNavigation } from "react-native-paper";
import AdminNotifications from "./src/screens/AdminNotifications";
import UserNotifications from "./src/screens/UserNotifications";

///
import SingleInvestment from "./src/screens/SingleInvestment";
const Stack = createNativeStackNavigator();

const App = () => {
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
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Onboarding1" component={Onboarding1} />
          <Stack.Screen name="Onboarding2" component={Onboarding2} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SecondSignUp" component={SecondSignUp} />
          <Stack.Screen name="SignUp1" component={SignUp1} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
          <Stack.Screen name="NewUserDashboard" component={NewUserDashboard} />
          <Stack.Screen
            name="DashboardWith2Investment"
            component={DashboardWith2Investment}
          />
          <Stack.Screen name="Investment" component={Investment} />
          <Stack.Screen name="NewInvestment" component={NewInvestment} />
          <Stack.Screen name="NewInvestment1" component={NewInvestment1} />
          <Stack.Screen name="AddNewCard" component={AddNewCard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="ManageProfileText"
            component={ManageProfileText}
          />
          <Stack.Screen name="MyCards" component={MyCards} />
          <Stack.Screen name="Prompt1" component={Prompt1} />
          <Stack.Screen name="Prompt2" component={Prompt2} />
          <Stack.Screen name="Prompt3" component={Prompt3} />
          <Stack.Screen name="Prompt4" component={Prompt4} />
          <Stack.Screen name="VerifyCard" component={VerifyCard} />
          <Stack.Screen name="VerifyCard1" component={VerifyCard1} />
          <Stack.Screen name="VerifyCard2" component={VerifyCard2} />
          <Stack.Screen name="InvalidPin" component={InvalidPin} />
          <Stack.Screen name="NewInvestment2" component={NewInvestment2} />
          <Stack.Screen name="NewInvestment3" component={NewInvestment3} />
          <Stack.Screen name="PackageInfo" component={PackageInfo} />
          <Stack.Screen name="Investing" component={Investing} />
          <Stack.Screen
            name="InsufficientFunds"
            component={InsufficientFunds}
          />
          <Stack.Screen name="AboveLimit" component={AboveLimit} />
          <Stack.Screen name="BelowLimit" component={BelowLimit} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="Frame" component={Frame} />
          <Stack.Screen name="Frame1" component={Frame1} />
          <Stack.Screen name="FrameScreen" component={FrameScreen} />
          <Stack.Screen name="Profile1" component={Profile1} />
          <Stack.Screen name="Rectangle" component={Rectangle} />
          <Stack.Screen name="FirstSignUp" component={FirstSignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen
            name="FlutterwaveDeposit"
            component={FlutterwaveDeposit}
          />
          <Stack.Screen name="Transactions" component={Transactions} />
          <Stack.Screen
            name="TransactionsDetails"
            component={TransactionsDetails}
          />
          <Stack.Screen name="Withdrawal" component={Withdrawal} />
          <Stack.Screen name="BankDetails" component={BankDetails} />
          <Stack.Screen
            name="NewInvestmentPage"
            component={NewInvestmentPage}
          />
          <Stack.Screen
            name="NewInvestmentDetails"
            component={NewInvestmentDetailsPage}
          />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="AdminUsers" component={AdminUsers} />
          <Stack.Screen
            name="AdminTransactions"
            component={AdminTransactions}
          />
          <Stack.Screen name="AdminInvestments" component={AdminInvestments} />
          <Stack.Screen name="AdminUserEdit" component={AdminUserEdit} />
          <Stack.Screen
            name="AdminNewInvestment"
            component={AdminNewInvestment}
          />
          <Stack.Screen
            name="AdminInvestmentEdit"
            component={AdminInvestmentEdit}
          />
          <Stack.Screen
            name="AdminTransactionEdit"
            component={AdminTransactionEdit}
          />
          <Stack.Screen name="Trade" component={Trade} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          {/* Added notification */}
          <Stack.Screen
            name="UserNotifications"
            component={UserNotifications}
          />
          <Stack.Screen
            name="AdminNotifications"
            component={AdminNotifications}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
