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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const DetailPage = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toastRef = useRef(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
    const { name, email, password, confirmPassword } = user;

    if (!name || !email || !password || !confirmPassword) {
      showError("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    navigate("Verification");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={styles.imageContainer}> */}
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
      {/* </View> */}
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
      <View style={styles.container}>
        <Animatable.View animation='fadeInUp' duration={1000}>
          <View style={styles.header}>
            <Button onPress={() => navigate("AccountSetting1")}>
              <AntDesign name='arrowleft' size={20} color='#000' />
            </Button>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 80 }}
          >
            <View style={[styles.imageContainer, { gap: 13 }]}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/PayMLogo.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.imageContainer}>
                <Text style={styles.ImageText}>Welcome!</Text>
                <Text style={styles.ImageSubText}>
                  Please put in your details below;
                </Text>
              </View>
            </View>
            <KeyboardAwareScrollView>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  value={user.name}
                  placeholder='Please type your name here...'
                  onChangeText={(text) => handleChange("name", text)}
                  style={styles.input}
                  placeholderTextColor='grey'
                  autoCapitalize='words'
                />
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
              {/* </View> */}
              {/* <View style={styles.inputContainer}> */}
              <Text
                style={[
                  styles.label,
                  { paddingHorizontal: 20, marginVertical: 10 },
                ]}
              >
                Confirm Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={user.confirmPassword}
                  placeholder='Please confirm your password...'
                  onChangeText={(text) => handleChange("confirmPassword", text)}
                  style={styles.passwordInput}
                  placeholderTextColor='grey'
                  secureTextEntry={!showConfirmPassword}
                />
                <MaterialCommunityIcons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={24}
                  color='#aaa'
                  style={styles.icon}
                  onPress={toggleShowConfirmPassword}
                />
              </View>
              {/* </View> */}
            </KeyboardAwareScrollView>
            <View style={styles.imageContainer}>
              <Button
                style={styles.button}
                mode='contained'
                onPress={() => navigate("Verification")}
                // onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Continue</Text>
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
          </ScrollView>
        </Animatable.View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};
export default DetailPage;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
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
    // shadowColor: "#000",
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
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
  },

  buttonText: {
    color: "#F8D10E",
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
});
