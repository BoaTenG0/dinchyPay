import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import * as Animatable from "react-native-animatable";

const WelcomePage = () => {
  return (
    <SafeAreaView>
      <Animatable.View animation='fadeInUp' duration={1000}>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/cuate.png")}
            style={styles.image}
          />
          <BottomBar
            btnText='Next'
            content='Send and Receive Money with Pay Mobile
'
            onPress='WelcomePage1'
          />
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};
export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#0D0973",
    display: "flex",
    alignItems: "center",
    gap: 1,
    // justifyContent: "space-between",
    // paddingHorizontal: "5%",
    // paddingVertical: "5%",
    // marginVertical: "10%",
    height: "100%",
    position: "relative",
  },
  image: {
    width: "80%",
    height: "60%",
    resizeMode: "contain",
  },
  bottomBar: {
    width: "100%",
    height: "40%",
    backgroundColor: "#fff",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    position: "absolute",
    bottom: 0,
  },
});
