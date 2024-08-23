// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// function FirstScreen() {
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>This is First Screen</Text>
//   </View>;
// }
// function SecondScreen() {
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>This is Second Screen</Text>
//   </View>;
// }
// function ThirdScreen() {
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>This is Third Screen</Text>
//   </View>;
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='First' component={FirstScreen} />
//         <Tab.Screen name='Second' component={SecondScreen} />
//         <Tab.Screen name='Settings' component={ThirdScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";

// Plus...
import plus from "../../assets/plus.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../screens/WelcomeScreens/WelcomePage";
import HomeScreen from "../screens/Dashboard/HomeScreen";
import TransactionScreen from "../screens/Dashboard/TransactionScreen";
import TransferPage from "../screens/Dashboard/TransferPage";
import TransferOTP from "../screens/Dashboard/TransferOTP";
import WithdrawPage from "../screens/Dashboard/WithdrawPage";
import DepositPage from "../screens/Dashboard/DepositPage";
import NotificationsPage from "../screens/Dashboard/NotificationsPage";
import ProfilePage from "../screens/Dashboard/ProfilePage";
import ContactPage from "../screens/Dashboard/ContactPage";
import Transactions from "../screens/Dashboard/Transactions";
import WalletScreen from "../screens/Dashboard/WalletScreen";
import NewsBuzz from "../screens/Dashboard/NewsBuzz";
import NewsDetail from "../components/NewsDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Hiding Tab Names...
export default function BottomNavigation() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeProfile' component={HomeScreen} />
        <Stack.Screen name='TransferPage' component={TransferPage} />
        <Stack.Screen name='TransferOTP' component={TransferOTP} />
        <Stack.Screen name='WithdrawPage' component={WithdrawPage} />
        <Stack.Screen name='DepositPage' component={DepositPage} />
        <Stack.Screen name='NotificationsPage' component={NotificationsPage} />
        <Stack.Screen name='ProfilePage' component={ProfilePage} />
        <Stack.Screen name='Transactions' component={Transactions} />
        <Stack.Screen name='NewsBuzz' component={NewsBuzz} />
        <Stack.Screen name='NewsDetail' component={NewsDetail} />
      </Stack.Navigator>
    );
  };
  const ProfileStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SettingsProfile' component={ProfilePage} />
        <Stack.Screen name='TransferPage' component={TransferPage} />
        {/* <Stack.Screen name='TransferOTP' component={TransferOTP} /> */}
        <Stack.Screen name='NotificationsPage' component={NotificationsPage} />
        <Stack.Screen name='ContactPage' component={ContactPage} />
        <Stack.Screen name='Transactions' component={Transactions} />
      </Stack.Navigator>
    );
  };
  const TransactionsStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TransactionProfile' component={TransactionScreen} />
        <Stack.Screen name='TransferPage' component={TransferPage} />
        <Stack.Screen name='DepositPage' component={DepositPage} />
        <Stack.Screen name='WithdrawPage' component={WithdrawPage} />
        <Stack.Screen name='NotificationsPage' component={NotificationsPage} />
        <Stack.Screen name='Transactions' component={Transactions} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer independent>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            // bottom: 20,
            bottom: 0,
            // marginHorizontal: 20,
            height: 70,
            // borderRadius: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={HomeStack}
          options={{
            title: "HomeProfile",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <Foundation
                  name='home'
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
            headerShown: false,
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        <Tab.Screen
          name={"Search"}
          component={TransactionsStack}
          options={{
            title: "TransactionProfile",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <Feather
                  name='bar-chart-2'
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
            headerShown: false,
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        {/* <Tab.Screen
          name={"ActionButton"}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "red",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "android" ? 50 : 30,
                  }}
                >
                  <Image
                    source={plus}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        /> */}

        <Tab.Screen
          name={"Notifications"}
          component={WalletScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name='wallet-outline'
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
            headerShown: false,
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          }}
        />

        <Tab.Screen
          name={"Settings"}
          component={ProfileStack}
          options={{
            title: "SettingsProfile",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: 20,
                }}
              >
                <AntDesign
                  name='user'
                  size={20}
                  color={focused ? "red" : "gray"}
                />
              </View>
            ),
            headerShown: false,
          }}
          listeners={{
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          }}
        />
      </Tab.Navigator>

      {/* <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 80,
          // bottom: 98,
          left: 50,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      /> */}
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80;
  return width / 5;
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
