import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Button, Drawer, IconButton } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const ProfilePage = () => {
  const { navigate } = useNavigation();
  const [active, setActive] = useState("");

  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <View style={{ height: "15%" }}>
          <DashboardContainer>
            <View style={styles.appbar}>
              <Button onPress={() => navigate("HomeProfile")}>
                <AntDesign name='arrowleft' size={20} color='#fff' />
              </Button>
              <Text style={styles.text}>Profile</Text>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/PayMLogo.png")}
                  style={styles.image}
                />
              </View>
            </View>
          </DashboardContainer>
        </View>
        <View style={styles.container}>
          <View style={[styles.section, styles.sectionMain]}>
            <View style={styles.row}>
              <View style={styles.wrapper}>
                <Image
                  source={require("../../../assets/PayMLogo.png")}
                  style={styles.userPhoto}
                />
                <View style={{ gap: 2 }}>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}
                  >
                    James Arthur
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#000",
                    }}
                  >
                    +233 54 678 9879
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#C7C7C7",
                      fontWeight: "bold",
                    }}
                  >
                    Unique ID: 1234567
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name='edit' size={20} color='black' />
              </View>
            </View>
          </View>
          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 380 }}
            >
              <View style={{ gap: 10 }}>
                <Text
                  style={{
                    marginLeft: 15,
                    lineHeight: 40,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Settings
                </Text>
                <Drawer.Section showDivider={false} style={{ gap: 15 }}>
                  <Drawer.Item
                    label='Transaction History'
                    active={active === "first"}
                    icon='clipboard-text-outline'
                    rippleColor='#031EAA'
                    onPress={() => navigate("Transactions")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='Transfers'
                    active={active === "second"}
                    icon='swap-horizontal'
                    rippleColor='#031EAA'
                    onPress={() => navigate("TransferPage")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='Expense Tracker'
                    active={active === "third"}
                    icon='wallet-outline'
                    rippleColor='#031EAA'
                    // onPress={() => navigate("TransferPage")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='Contact List'
                    active={active === "fourth"}
                    icon='account'
                    rippleColor='#031EAA'
                    onPress={() => navigate("ContactPage")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='My Wallet'
                    active={active === "fifth"}
                    icon='wallet-giftcard'
                    rippleColor='#031EAA'
                    // onPress={() => navigate("AddDepartmental")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='Settings'
                    active={active === "sixth"}
                    icon='cog-outline'
                    rippleColor='#031EAA'
                    // onPress={() => navigate("AddDepartmental")}
                    right={(props) => (
                      <IconButton {...props} icon='chevron-right' />
                    )}
                  />
                  <Drawer.Item
                    label='Logout'
                    active={active === "seventh"}
                    icon='logout'
                    rippleColor='#031EAA'
                  />
                </Drawer.Section>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};
export default ProfilePage;
const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    // paddingTop: 15,
    paddingTop: Platform.OS == "ios" ? 15 : 50,

  },
  text: {
    color: "#F8D10E",
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    width: "100%",
    // paddingHorizontal: 20,

    // padding: 20,
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
    // paddingVertical: 20,
  },
  sectionMain: {
    paddingTop: Platform.OS === "ios" ? 30 : 40,
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
});
