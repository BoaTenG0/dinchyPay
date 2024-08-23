import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from ".";
import WelcomePage from "../screens/WelcomeScreens/WelcomePage";
import WelcomePage1 from "../screens/WelcomeScreens/WelcomePage1";
import WelcomePage2 from "../screens/WelcomeScreens/WelcomePage2";
import GetStarted from "../screens/AccountSetup/GetStarted";
import AccountSetting1 from "../screens/AccountSetup/AccountSetting1";
import DetailPage from "../screens/AccountSetup/DetailPage";
import Verification from "../screens/AccountSetup/Verification";
import OTPCode from "../screens/AccountSetup/OTPCode";
import Login from "../screens/AccountSetup/Login";
import ForgotPassword from "../screens/AccountSetup/ForgotPassword";
import ResetPassword from "../screens/AccountSetup/ResetPassword";
import SignUpScreen from "../screens/AccountSetup/SignUpScreen";
import TransferPage from "../screens/Dashboard/TransferPage";
import TransferOTP from "../screens/Dashboard/TransferOTP";
import WithdrawPage from "../screens/Dashboard/WithdrawPage";
import DepositPage from "../screens/Dashboard/DepositPage";
import NotificationsPage from "../screens/Dashboard/NotificationsPage";
import ProfilePage from "../screens/Dashboard/ProfilePage";
import Transactions from "../screens/Dashboard/Transactions";
import WalletScreen from "../screens/Dashboard/WalletScreen";
import NewsBuzz from "../screens/Dashboard/NewsBuzz";
import NewsDetail from "../components/NewsDetails";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WelcomePage' component={WelcomePage} />
      <Stack.Screen name='WelcomePage1' component={WelcomePage1} />
      <Stack.Screen name='WelcomePage2' component={WelcomePage2} />
      <Stack.Screen name='GetStarted' component={GetStarted} />
      <Stack.Screen name='AccountSetting1' component={AccountSetting1} />
      <Stack.Screen name='DetailPage' component={DetailPage} />
      <Stack.Screen name='Verification' component={Verification} />
      <Stack.Screen name='OTPCode' component={OTPCode} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />

      <Stack.Screen name='Main' component={BottomNavigation} />
      <Stack.Screen name='TransferPage' component={TransferPage} />
      <Stack.Screen name='TransferOTP' component={TransferOTP} />
      <Stack.Screen name='WithdrawPage' component={WithdrawPage} />
      <Stack.Screen name='DepositPage' component={DepositPage} />
      <Stack.Screen name='NotificationsPage' component={NotificationsPage} />
      <Stack.Screen name='ProfilePage' component={ProfilePage} />
      <Stack.Screen name='Transactions' component={Transactions} />
      <Stack.Screen name='WalletScreen' component={WalletScreen} />
      <Stack.Screen name='NewsBuzz' component={NewsBuzz} />
      <Stack.Screen name='NewsDetail' component={NewsDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
