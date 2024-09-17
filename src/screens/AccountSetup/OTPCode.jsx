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
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Portal } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import { useSelector } from "react-redux";
import VerifyCode from "../../components/VerifyCode";
const OTPCode = () => {
  const phoneNumber = useSelector((state) => state.phonenumber.phoneNumber);

  const { navigate } = useNavigation();
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [visible, setVisible] = useState(false);

  const timerRef = useRef(null);
  const toastRef = useRef(null);

  useEffect(() => {
    if (isCodeSent) {
      startTimer();
    } else {
      resetTimer();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isCodeSent]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimerSeconds(10);

    timerRef.current = setInterval(() => {
      setTimerSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timerRef.current);
          setIsCodeSent(false);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimerSeconds(0);
  };

  const handleResendPress = () => {
    // Logic to resend code goes here
    showSuccess("OTP code sent");
    setIsCodeSent(true);
  };
  const showSuccess = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "success", 400);
    });
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
    if (!verificationCode) {
      showError("Please enter the code.");
      return;
    }
    showModal();
    // navigate("Congratulations");
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
      <Toast ref={toastRef} onHide={handleHide} left={Platform.OS == "ios" ? 50 : 80} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Animatable.View animation='fadeInUp' duration={1000}>
            <View style={styles.header}>
              <Button onPress={() => navigate("Verification")}>
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
                    width: 250,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={styles.ImageText}>Enter Code</Text>
                <Text style={styles.ImageSubText}>
                  {`Enter the 6-digit verification sent ${phoneNumber}`}
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
              <>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 50,
                    paddingHorizontal: 15,
                  }}
                >
                  {isCodeSent ? (
                    <Text style={[styles.InputTitle]}></Text>
                  ) : (
                    <Pressable
                      onPress={handleResendPress}
                      style={{ paddingHorizontal: 20 }}
                    >
                      <Text style={[styles.InputTitle, { color: "#000" }]}>
                        Didn’t get the code? Resend it
                      </Text>
                    </Pressable>
                  )}
                </View>

                <VerifyCode
                  value={verificationCode}
                  onChangeText={setVerificationCode}
                />

                {isCodeSent && (
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      gap: 10,
                    }}
                  >
                    <Text style={styles.InputTitle}>Resend code in</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View style={{ marginTop: -15 }}>
                        <AntDesign
                          name='clockcircleo'
                          size={20}
                          color='#E7EAEB'
                        />
                      </View>
                      <View>
                        {timerSeconds > 0 && (
                          <Text
                            style={[
                              styles.InputTitle,
                              {
                                color: "#E02351",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            {`${timerSeconds}s`}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                )}
              </>
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
            <View
              style={[
                styles.imageContainer,
                { width: "100%", marginVertical: 50 },
              ]}
            >
              <Button
                style={styles.button}
                mode='contained'
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
                  You can start using the app to send and receive money, track
                  expenses, and many more.
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
                  mode='contained'
                  onPress={NextPage}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </View>
    </SafeAreaView>
  );
};
export default OTPCode;
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
  ImageText: {
    color: "#150E6E",
    fontSize: 30,
    fontWeight: "bold",
    // lineHeight: 27,
    letterSpacing: 5,
  },
  ImageSubText: {
    // color: "#150E6E",
    fontSize: 15,
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

  button: {
    // marginTop: 50,
    width: "80%",
    backgroundColor: "#031EAA",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  InputTitle: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
});
