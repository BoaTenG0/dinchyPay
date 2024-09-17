import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";

import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TransactionsCard from "../../components/TransactionsCard";
import OperationsCard from "../../components/OperationsCard";
import { BottomSheet } from "../../components/BottomSheetRN";
const TransactionScreen = () => {
  const bottomSheetRef = useRef(null);
  const { navigate } = useNavigation();
  const [isBottomSheetExpanded, setIsBottomSheetExpanded] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const toggleShowBalance = () => setShowBalance((prev) => !prev);

  const handleSheetChanges = (expanded) => {
    console.log("Bottom sheet expanded state:", expanded);
    setIsBottomSheetExpanded(expanded);
    if (!expanded) {
      setTimeout(() => {
        console.log("Re-opening sheet after collapse");
        bottomSheetRef.current?.expand();
      }, 1000);
    }
  };

  useEffect(() => {
    console.log("Component mounted, presenting bottom sheet");
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <BottomSheetModalProvider> */}
      <DashboardContainer>
        <View style={{ position: "relative" }}>
          <View style={[styles.section, styles.sectionMain]}>
            <View style={styles.row}>
              <View style={styles.wrapper}>
                <Image
                  source={require("../../../assets/Avatar.png")}
                  style={styles.userPhoto}
                />
                <TouchableOpacity onPress={() => navigate("Profile")}>
                  <Text style={{ fontSize: 18, color: "#fff" }}>
                    Welcome Back,
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#F8D10E",
                      fontWeight: "bold",
                    }}
                  >
                    James Arthur
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name='notifications-outline'
                  size={20}
                  color='#fff'
                  onPress={() => navigate("NotificationsPage")}
                />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.row,
              { paddingHorizontal: 20, zIndex: 1000 },
            ]}
          >
            <Text style={styles.buttonText}>Available Balance</Text>
            <View style={[styles.row, { gap: 10 }]}>
              <Text style={styles.buttonText}>
                {showBalance ? "GHS 400" : "GHS ***"}
              </Text>
              <MaterialCommunityIcons
                name={showBalance ? "eye-off" : "eye"}
                size={24}
                color='#aaa'
                style={styles.icon}
                onPress={toggleShowBalance}
              />
            </View>
          </View>
          <BottomSheet
            ref={bottomSheetRef}
            onOpen={() => handleSheetChanges(true)}
            onClose={() => handleSheetChanges(false)}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                gap: 20,
              }}
              style={{
                marginBottom: 80,
              }}
            >
              {/* <BottomSheetView style={styles.contentContainer}> */}
              {/* <Text>Awesome 🎉</Text> */}
              <OperationsCard />
              <View style={styles.bar}>
                <Text style={styles.ImageText}>Loan / Insurance</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.newsText, { fontSize: 20 }]}>
                    Recent Transactions
                  </Text>
                  <Button mode='text' onPress={() => navigate("Transactions")}>
                    <Text style={styles.newsText}>See all</Text>
                  </Button>
                </View>
                <View style={styles.newsCard}>
                  <TransactionsCard
                    network='Paypal'
                    number='*** *** 2878'
                    date='24 Mar 2022'
                  />
                  <TransactionsCard
                    network='Stripe'
                    number='*** *** 3678'
                    date='25 May 2022'
                  />
                </View>
              </View>
              {/* </BottomSheetView> */}
            </ScrollView>
          </BottomSheet>
        </View>
      </DashboardContainer>
      {/* </BottomSheetModalProvider> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionMain: {
    paddingTop: Platform.OS === "ios" ? 50 : 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ImageText: {
    color: "#F8D10E",
    fontWeight: "bold",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#E5EDFD",
    height: 45,
  },

  buttonText: {
    fontSize: 15,
    // color: "#031EAA",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  balanceText: {},
  contentContainer: {
    width: "100%",
    flex: 1,
    padding: 20,
    gap: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  cardImage: {
    width: 40,
    height: 24,
    marginRight: 8,
  },
  dropdown: {
    backgroundColor: "#E5EDFD",

    borderRadius: 20,
    // paddingHorizontal: 10,
  },

  bar: {
    width: "100%",
    height: 30,
    borderRadius: 8,
    backgroundColor: "#031EAA",
    justifyContent: "center",
    alignItems: "center",
  },

  newsText: {
    color: "#000",
    fontWeight: "bold",
  },
  dollar: {
    width: "100%",
    // height: "100%",
    resizeMode: "cover",
  },
  newsCard: {
    width: "100%",
    // paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 10,
    // width: "100%",
    // flexDirection: "row",
    justifyContent: "center",
  },
});
export default TransactionScreen;
