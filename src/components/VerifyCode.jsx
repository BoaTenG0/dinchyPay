import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  //   SafeAreaView,
  //   Text,
  //   TouchableOpacity,
} from "react-native";

const VerifyCode = ({ value, onChangeText, styleOp }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  //   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    onChangeText(newOtp.join(""));
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspacePress = (index) => {
    // Move focus to the previous box if Backspace is pressed on an empty box
    if (!otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  //   const handleOtpSubmit = () => {
  //     console.log(otp.join('')); // Concatenate the OTP digits and log them
  //   };

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={[styles.box, styleOp]}
          maxLength={1}
          keyboardType='numeric'
          onChangeText={(value) => handleOtpChange(value, index)}
          value={digit}
          ref={(input) => {
            inputs.current[index] = input;
          }}
          // onSubmitEditing={
          //   index === otp.length - 1 ? handleOtpSubmit : undefined
          // }
          onKeyPress={({ nativeEvent: { key } }) =>
            key === "Backspace" ? handleBackspacePress(index) : null
          }
        />
      ))}
    </View>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    // marginBottom: 40,
    // marginTop: 40,
  },
  box: {
    borderWidth: 1,
    borderColor: "#C7C7C7",
    width: "16%",
    height: "80%",
    margin: 8,
    textAlign: "center",
    fontSize: "20%",
    borderRadius: 20,
    borderStyle: "solid",
    padding: "5%",
  },
  signUpWrapperFlexBox: {
    marginTop: 40,
    justifyContent: "center",
    flexDirection: "row",
  },
  notReceivedA: {
    color: "#7a7a7a",
  },
  resendCodeTypo: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 24,
    fontSize: 14,
  },
  resendCode: {
    color: "#1ed5e1",
  },
  resendCodeWrapper: {
    marginLeft: 5,
    flexDirection: "row",
  },
});

export default VerifyCode;
