import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

const WelcomePage1 = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Animatable.View animation='fadeInUp' duration={1000}> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Button onPress={() => navigate("WelcomePage")}>
            <AntDesign name='arrowleft' size={20} color='#fff' />
          </Button>
          <Button mode='outlined' onPress={() => navigate("GetStarted")}>
            <Text style={{ color: "#fff" }}>Skip</Text>
          </Button>
        </View>
        <Image
          source={require("../../../assets/cuata.png")}
          style={styles.image}
        />
        <BottomBar
          btnText='Next'
          content='International funds transfer 
'
          extra='(Transfer funds from  everywhere to everywhere)'
          onPress='WelcomePage2'
          //   style='500'
        />
      </View>
      {/* </Animatable.View> */}
    </SafeAreaView>
  );
};
export default WelcomePage1;
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
    width: "80%",
    height: "50%",
    resizeMode: "contain",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});
