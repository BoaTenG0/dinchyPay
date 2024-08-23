import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";

const loadFonts = () => {
  return Font.loadAsync({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    ProximaNova: require("../../assets/fonts/proximanova-regular.otf"),
  });
};

const TransferSuccess = ({ title, btnText, link, status, restart }) => {
  const { navigate } = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {status == "SUCCESSFUL" ? (
        <Image
          source={require("../../assets/successTransaction.png")}
          style={styles.successImage}
        />
      ) : (
        <Image
          source={require("../../assets/failedTransaction.png")}
          style={styles.failedImage}
        />
      )}

      <Text style={styles.mainText}>
        {`Your Transfer of Ghc 450.000 to
        Abigail Boateng was `}
        <Text
          style={[
            styles.statusText,
            status === "SUCCESSFUL" ? styles.success : styles.failed,
          ]}
        >
          {status}
        </Text>
        {` at 2:50pm
        on Monday 6th June, 2023`}
      </Text>

      <Text style={styles.thankYouText}>{restart}</Text>

      <Text style={styles.clickText}>
        Click here to go back to the Dashboard
      </Text>

      <Fontisto name='arrow-down-l' size={20} style={styles.lineImage} />

      <TouchableOpacity style={styles.button} onPress={() => navigate(link)}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    color: "#606570",
    marginBottom: 20,
  },
  successImage: {
    width: 213,
    height: 175.35,
    marginBottom: 20,
  },
  failedImage: {
    width: 80,
    height: 150,
    marginBottom: 20,
  },
  mainText: {
    fontFamily: "Poppins",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    color: "#606570",
    marginBottom: 20,
  },
  thankYouText: {
    fontFamily: "Poppins",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    color: "#606570",
    marginBottom: 10,
  },
  clickText: {
    fontFamily: "Poppins",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    color: "#606570",
    marginBottom: 10,
  },
  lineImage: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#031eaaff",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 32,
  },
  buttonText: {
    fontFamily: "Proxima Nova",
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 14,
  },
  statusText: {
    fontWeight: "bold",
  },
  success: {
    color: "#4CAF50",
  },
  failed: {
    color: "#F44336",
  },
});

export default TransferSuccess;
