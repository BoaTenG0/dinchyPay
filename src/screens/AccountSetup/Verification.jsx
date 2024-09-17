import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import PhoneInput from "react-native-international-phone-number";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../reducers/phoneNumberSlice";
const Verification = () => {
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("GH");
  const toastRef = useRef(null);
  const dispatch = useDispatch();

  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }
  const handlePhoneChange = (value) => {
    setPhone(value);
    dispatch(setPhoneNumber(value));
  };
  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }
  const handleNextPress = () => {
    if (!phone) {
      showError("Please fill the field.");
      return;
    }
    navigate("OTPCode");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={Platform.OS == "ios" ? 50 : 60} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Animatable.View animation='fadeInUp' duration={1000}>
            <View style={styles.header}>
              <Button onPress={() => navigate("DetailPage")}>
                <AntDesign name='arrowleft' size={20} color='#000' />
              </Button>
            </View>
            {/* <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 80 }}
          > */}
            <View style={[styles.imageContainer, { gap: 13 }]}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    width: 300,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={styles.ImageText}>Verification</Text>
                <Text style={styles.ImageSubText}>
                  Enter your phone number, we will send you OTP to verify{" "}
                </Text>
              </View>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/pana.png")}
                  style={styles.image}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.label, { marginBottom: 10 }]}>
                Phone number
              </Text>
              <PhoneInput
                value={phone}
                onChangePhoneNumber={handlePhoneChange}
                defaultCountry='GH'
                disableCountryChange={true}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                // style={{ borderColor: "#C7C7C7" }}
              />
            </View>

            {/* </ScrollView> */}
          </Animatable.View>
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={[styles.imageContainer, { width: "100%", gap: 10 }]}>
              <Button
                style={styles.button}
                mode='contained'
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Send Via SMS</Text>
              </Button>
              <Button
                style={styles.button}
                mode='contained'
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Send Via Email</Text>
              </Button>
            </View>
            <View style={[styles.terms, styles.imageContainer]}>
              <Text style={styles.termsText}>
                By creating and /or using an account, you agree to our
              </Text>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Text
                  style={[
                    styles.termsText,
                    { color: "#0D0973", fontWeight: "bold" },
                  ]}
                >
                  Terms and Conditions.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default Verification;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ImageText: {
    color: "#150E6E",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 27,
    letterSpacing: 5,
  },
  ImageSubText: {
    // color: "#150E6E",
    fontSize: 17,
    lineHeight: 27,
    textAlign: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    marginVertical: 40,
    width: "90%",
    alignSelf: "center",
  },
  label: {
    // marginBottom: 5,
    fontSize: 14,
    color: "#000",
  },
  input: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 13,
    // marginVertical: 10,
    // width: "90%",
    // alignSelf: "center",
  },

  button: {
    // marginTop: 50,
    width: "80%",
    backgroundColor: "#031EAA",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  terms: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 10,
  },
});
