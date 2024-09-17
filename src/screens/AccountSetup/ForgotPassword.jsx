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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const ForgotPassword = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const toastRef = useRef(null);
  const handleChange = (field, value) => {
    setEmail((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }

  const handleNextPress = () => {
    if (!email) {
      showError("Please fill the field.");
      return;
    }
    navigate("ResetPassword");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Animatable.View animation='fadeInUp' duration={1000}>
            <View style={styles.header}>
              <Button onPress={() => navigate("Login")}>
                <AntDesign name='arrowleft' size={20} color='#000' />
              </Button>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 80 }}
            >
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
                  <Text style={styles.ImageText}>Forgot Password</Text>
                  <Text style={styles.ImageSubText}>
                    Enter your email address, we will send you an OTP to reset
                    password{" "}
                  </Text>
                </View>
                <View style={styles.imageWrapper}>
                  <Image
                    source={require("../../../assets/pana.png")}
                    style={styles.image}
                  />
                </View>
              </View>
              <View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email Address</Text>
                  <TextInput
                    value={email}
                    placeholder='Please type your email here...'
                    onChangeText={(text) => handleChange("email", text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                    autoCapitalize='none'
                    keyboardType='email-address'
                  />
                </View>
              </View>
            </ScrollView>
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
            <View
              style={[
                styles.imageContainer,
                { width: "100%", gap: 10, marginVertical: 30 },
              ]}
            >
              <Button
                style={styles.button}
                mode='contained'
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Reset Password</Text>
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;
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
    marginTop: 20,
    width: 150,
    height: 150,
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
    fontSize: 20,
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
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  label: {
    marginBottom: 5,
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
