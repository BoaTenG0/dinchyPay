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
import { Button, Modal, Portal } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ResetPassword = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       setKeyboardVisible(true);
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setKeyboardVisible(false);
  //     }
  //   );
  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const toastRef = useRef(null);
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
    const { password, confirmPassword } = user;

    if (!password || !confirmPassword) {
      showError("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    showModal();
  };
  const NextPage = () => {
    navigate("Login");
    hideModal();
  };
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 40,
    height: "80%",
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />

      <View style={styles.container}>
        <Animatable.View animation="fadeInUp" duration={1000}>
          <View style={styles.header}>
            <Button onPress={() => navigate("Login")}>
              <AntDesign name="arrowleft" size={20} color="#000" />
            </Button>
          </View>
          {/* <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 80 }}
          > */}
          <KeyboardAwareScrollView>
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
                  password
                </Text>
              </View>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/pana.png")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text
              style={[
                styles.label,
                { paddingHorizontal: 20, marginVertical: 10 },
              ]}
            >
              New Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                value={user.password}
                placeholder="Please type your password here..."
                onChangeText={(text) => handleChange("password", text)}
                style={styles.passwordInput}
                placeholderTextColor="grey"
                secureTextEntry={!showPassword}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            </View>
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
                placeholder="Please confirm your password..."
                onChangeText={(text) => handleChange("confirmPassword", text)}
                style={styles.passwordInput}
                placeholderTextColor="grey"
                secureTextEntry={!showConfirmPassword}
              />
              <MaterialCommunityIcons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowConfirmPassword}
              />
            </View>
          </KeyboardAwareScrollView>
          {/* </ScrollView> */}
        </Animatable.View>

        {/* {!isKeyboardVisible && ( */}
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
                mode="contained"
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Reset Password</Text>
              </Button>
            </View>
          </View>
        {/* )} */}
      </View>
      <View style={styles.imageContainer}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View
              style={[styles.imageContainer, { gap: 20, position: "relative" }]}
            >
              <View
                style={[
                  styles.imageContainer,
                  {
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  },
                ]}
              >
                <Text style={[styles.ImageText, { fontSize: 20 }]}>
                  Congratulations
                </Text>
                <Text style={styles.ImageSubText}>
                  Your password has successfully been changed. Proceed to login
                </Text>
              </View>
              <View style={styles.imageWrapperModal}>
                <Image
                  source={require("../../../assets/congratsX.png")}
                  style={styles.imageInModal}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={NextPage}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;
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
    marginVertical: 20,
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
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: "#000",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapperModal: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  imageInModal: {
    width: 200,
    height: 200,
    resizeMode: "contain",
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
