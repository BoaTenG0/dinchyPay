import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

const WelcomePage2 = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Animatable.View animation='fadeInUp' duration={1000}> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Button onPress={() => navigate("WelcomePage1")}>
            <AntDesign name='arrowleft' size={20} color='#fff' />
          </Button>
        </View>
        <Image
          source={require("../../../assets/rafiki.png")}
          style={styles.image}
        />
        <BottomBar
          btnText='Get Started'
          content='Organize your funds and track your 
expenses'
          onPress='GetStarted'
        />
      </View>
      {/* </Animatable.View> */}
    </SafeAreaView>
  );
};
export default WelcomePage2;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0973",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0973",
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
});
