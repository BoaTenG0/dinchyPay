import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
  BackHandler,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import NewsCard from "../../components/NewsCard";
import OperationsCard from "../../components/OperationsCard";
import { BottomSheet } from "../../components/BottomSheetRN";
const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [isBottomSheetExpanded, setIsBottomSheetExpanded] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const toggleShowBalance = () => setShowBalance((prev) => !prev);
  const bottomSheetRef = useRef(null);

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

  const handleBackPress = () => {
    Alert.alert("Exit App", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
      };
    })
  );
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
                <TouchableOpacity onPress={() => navigate("ProfilePage")}>
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
              { paddingHorizontal: 20, marginTop: 10, zIndex: 1000 },
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
                // width: "100%",
                // flex: 1,
                gap: 20,
              }}
              style={{
                marginBottom: 80,
              }}
            >
              {/* <BottomSheetView style={styles.contentContainer}> */}
              <OperationsCard />

              <View style={styles.bar}>
                <Text style={styles.ImageText}>Loan / Insurance</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.newsText, { fontSize: 20 }]}>
                    News Buzz
                  </Text>
                  <Button mode='text' onPress={() => navigate("NewsBuzz")}>
                    <Text style={styles.newsText}>See all</Text>
                  </Button>
                </View>
                <View style={styles.newsCard}>
                  <NewsCard extra />
                  <NewsCard extra />
                  <NewsCard extra />
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
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  operation: {
    width: "30%",
    height: 85,
    backgroundColor: "#031EAA",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
    marginBottom: 10,
  },
  ImageText: {
    color: "#F8D10E",
    fontWeight: "bold",
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
    gap: 10,
    paddingVertical: 10,
    // width: "100%",
    // flexDirection: "row",
    // justifyContent: "center",
  },
});
export default HomeScreen;
