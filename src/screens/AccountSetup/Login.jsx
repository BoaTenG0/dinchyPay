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
  Switch,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import globalStyles from "../../../styles";

const Login = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [click, setClick] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const toastRef = useRef(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (field, value) => {
    setUser((prevState) => ({
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
    const { email, password } = user;
    if (!email || !password) {
      showError("Please fill all the fields.");
      return;
    }
    navigate("Main");
  };
  const handleNext = () => {
    console.log("Forgot Password pressed");
    navigate("ForgotPassword");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
      <View style={styles.container}>
        <Animatable.View animation='fadeInUp' duration={1000}>
          <View style={styles.header}>
            <Button onPress={() => navigate("GetStarted")}>
              <AntDesign name='arrowleft' size={20} color='#000' />
            </Button>
          </View>
          <KeyboardAwareScrollView>
            <View style={[styles.imageContainer, { gap: 13 }]}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/PayMLogo.png")}
                  style={styles.image}
                />
              </View>
              <View
                style={[
                  styles.imageContainer,
                  { paddingVertical: 10, width: 300, gap: 10 },
                ]}
              >
                <Text style={[styles.ImageText, globalStyles.poppins]}>
                  Login
                </Text>
                <Text style={[styles.ImageSubText, globalStyles.poppins]}>
                  Enter your Email and Password to open your account on Pay
                  Mobile
                </Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={user.email}
                placeholder='Please type your email here...'
                onChangeText={(text) => handleChange("email", text)}
                style={styles.input}
                placeholderTextColor='grey'
                autoCapitalize='none'
                keyboardType='email-address'
              />
            </View>
            {/* <View style={styles.inputContainer}> */}
            <Text
              style={[
                styles.label,
                { paddingHorizontal: 20, marginVertical: 10 },
              ]}
            >
              Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                value={user.password}
                placeholder='Please type your password here...'
                onChangeText={(text) => handleChange("password", text)}
                style={styles.passwordInput}
                placeholderTextColor='grey'
                secureTextEntry={!showPassword}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color='#aaa'
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            </View>
          </KeyboardAwareScrollView>
          {/* <View style={styles.rememberView}> */}
          {/* <View style={styles.switch}>
              <Switch
                value={click}
                onValueChange={setClick}
                trackColor={{ true: "green", false: "gray" }}
              />
              <Text style={styles.rememberText}>Remember Me</Text>
            </View> */}
          <View style={{ alignItems: "flex-end", padding: 20, zIndex: 100 }}>
            <TouchableOpacity onPress={() => navigate("ForgotPassword")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </Animatable.View>
        <View
          style={[
            styles.imageContainer,
            {
              width: "100%",
              position: "absolute",
              bottom: 0,
              marginBottom: 30,
            },
          ]}
        >
          <Button
            style={styles.button}
            mode='contained'
            onPress={handleNextPress}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
    // position: "relative",
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
    // lineHeight: 27,
    letterSpacing: 3,
  },
  ImageSubText: {
    color: "#5C5C60",
    fontSize: 15,
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
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  label: {
    marginBottom: 5,
    fontSize: 16,
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    marginTop: 50,
    width: "90%",
    backgroundColor: "#031EAA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  terms: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 10,
  },
  errorButton: {
    backgroundColor: "#f00a1d",
    borderRadius: 10,
    width: "80%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: "red",
  },
});
