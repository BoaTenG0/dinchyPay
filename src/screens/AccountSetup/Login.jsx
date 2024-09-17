import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import globalStyles from "../../../styles";

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const toastRef = useRef(null);

  const handleChange = (field, value) => {
    setUser((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleNextPress = () => {
    const { email, password } = user;
    if (!email || !password) {
      toastRef.current?.show("Please fill all the fields.", "error", 400);
      return;
    }
    navigation.navigate("Main");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Toast ref={toastRef} left={50} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        >
          <View style={styles.header}>
            <Button onPress={() => navigation.navigate("GetStarted")}>
              <AntDesign name="arrowleft" size={24} color="#000" />
            </Button>
          </View>

          <Animatable.View animation="fadeInUp" duration={1000} style={styles.content}>
            {/* Logo and Intro Text */}
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/PayMLogo.png")}
                style={styles.logo}
              />
              <Text style={[styles.title, globalStyles.poppins]}>Login</Text>
              <Text style={[styles.subtitle, globalStyles.poppins]}>
                Enter your Email and Password to access your Pay Mobile account
              </Text>
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={user.email}
                placeholder="Please type your email here..."
                onChangeText={(text) => handleChange("email", text)}
                style={styles.input}
                placeholderTextColor="grey"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={user.password}
                  placeholder="Please type your password here..."
                  onChangeText={(text) => handleChange("password", text)}
                  style={styles.passwordInput}
                  placeholderTextColor="grey"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#aaa"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={styles.forgotPassword}
            >
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <Button
              mode="contained"
              onPress={handleNextPress}
              style={styles.button}
              contentStyle={styles.buttonContent}
            >
              LOGIN
            </Button>
          </Animatable.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#150E6E",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#5C5C60",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 13,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#FFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgetText: {
    fontSize: 14,
    color: "#031EAA",
  },
  button: {
    backgroundColor: "#031EAA",
    borderRadius: 12,
  },
  buttonContent: {
    // paddingVertical: 12,
  },
});

