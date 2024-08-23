import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import BottomBar2 from "../../components/BottomBar2";
import { AntDesign } from "@expo/vector-icons";

const GetStarted = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Animatable.View animation='fadeInUp' duration={1000}> */}
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/PayMLogo.png")}
          style={styles.image}
        >
          <View style={styles.header}>
            <Button onPress={() => navigate("WelcomePage2")}>
              <AntDesign name='arrowleft' size={20} color='#fff' />
            </Button>
          </View>
        </ImageBackground>
        <BottomBar2 />
      </View>
      {/* </Animatable.View> */}
    </SafeAreaView>
  );
};
export default GetStarted;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0973",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#0D0973",
  },
  image: {
    width: "100%",
    height: "70%",
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
