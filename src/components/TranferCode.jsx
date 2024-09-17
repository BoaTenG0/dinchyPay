import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import globalStyles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import TransferSuccess from "./TransferSuccess";
import Toast from "./Toast";

const TransferCode = () => {
  const { navigate } = useNavigation();
  const [pin, setPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [transferStatus, setTransferStatus] = useState(null);
  const correctPin = "1234";
  const toastRef = useRef(null);
  const inputRefs = useRef([]);
  const handlePinChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const enteredPin = pin.join("");
      if (enteredPin === correctPin) {
        setTransferStatus("success");
      } else {
        setTransferStatus("failed");
      }
    }, 2000);
  };

  if (transferStatus === "success") {
    return (
      <TransferSuccess
        title={"Payment Successful"}
        link='HomeProfile'
        status='SUCCESSFUL'
        restart='Thank you for using Pay Mobile!'
        btnText='Dashboard'
      />
    );
  }

  if (transferStatus === "failed") {
    return (
      <TransferSuccess
        title={"Payment UnSuccessful"}
        link='TransferPage'
        status='UNSUCCESSFUL'
        restart='Please restart transfer process again.
Thank you!'
        btnText='Restart'
      />
    );
  }
  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };

  const handleNextPress = () => {
    const enteredPin = pin.join("");
    if (enteredPin.length !== 4) {
      showError("Please enter pin!");
      return;
    }
    handleConfirm();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Toast
        ref={toastRef}
        onHide={() => console.log("toast is hidden")}
        left={50}
      />
      {loading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator
            size='large'
            color='#031eaaff'
            style={styles.spinner}
          />
        </View>
      ) : (
        <>
          <View>
            <Text style={[styles.title, globalStyles.poppins]}>Enter Pin</Text>
            <Text style={[styles.subtitle, globalStyles.poppins]}>
              Enter your 4 digit pin code to approve the transaction.
            </Text>

            <View style={styles.pinContainer}>
              {pin.map((p, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={p}
                  onChangeText={(text) => handlePinChange(text, index)}
                  maxLength={1}
                  style={styles.pinInput}
                  keyboardType='numeric'
                  autoFocus={index === 0}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={[styles.buttonText]}>
              Confirm
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 30,
    // position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 27,
    textAlign: "center",
    color: "#606570",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 12,
    // fontWeight: "300",
    textAlign: "center",
    lineHeight: 18,
    color: "#606570",
    marginBottom: 30,
  },

  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 50,
  },
  pinInput: {
    width: 50,
    borderRadius: 8,
    height: 50,
    borderWidth: 2,
    borderColor: "#031eaaff",
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    backgroundColor: "#031eaaff",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 14,
    // fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 14,
  },
  spinnerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
  },
  failedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  failedText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
  },
});

export default TransferCode;
