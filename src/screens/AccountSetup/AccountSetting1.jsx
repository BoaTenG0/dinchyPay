import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../components/Toast";
import { setOnboarding } from "../../reducers/OnBoarding";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const AccountSetting1 = () => {
  const [selected, setSelected] = useState(null);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const { Onboarding } = useSelector((state) => state.onboard);
  console.log("🚀 ~ BottomBar3 ~ Onboarding:", Onboarding);

  const handleSelect = (option) => {
    if (selected === option) {
      setSelected(null);
      dispatch(setOnboarding(""));
    } else {
      setSelected(option);
      dispatch(setOnboarding(option));
    }
  };

  function showSuccess(message) {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "success", 400);
    });
  }
  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }
  const handleNextPress = () => {
    if (!selected) {
      showError("Please select an option before proceeding.");
    } else {
      showSuccess("Great Selection");
      navigate("DetailPage");
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} />
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/PayMLogo.png")}
          style={styles.image}
        >
          <View style={styles.header}>
            <Button onPress={() => navigate("GetStarted")}>
              <AntDesign name='arrowleft' size={20} color='#fff' />
            </Button>
          </View>
        </ImageBackground>
        <View style={styles.bottomBar}>
          <Text style={styles.headerX}>How will you use Pay Mobile?</Text>
          <View style={styles.row}>
            <View>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  selected === "Profile" && styles.selectedButton,
                ]}
                onPress={() => handleSelect("Profile")}
              >
                <AntDesign
                  name='user'
                  size={20}
                  color={selected === "Profile" ? "#F8D10E" : "#0D0973"}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Profile</Text>
            </View>
            <View style={styles.containerText}>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  selected === "Shop" && styles.selectedButton,
                ]}
                onPress={() => handleSelect("Shop")}
              >
                <FontAwesome5
                  name='shopping-bag'
                  size={24}
                  color={selected === "Shop" ? "#F8D10E" : "#0D0973"}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Shop</Text>
            </View>
          </View>
          <Button
            style={styles.button}
            mode='contained'
            onPress={handleNextPress}
          >
            <Text style={styles.buttonText}>Next</Text>
          </Button>
        </View>
      </View>
      {/* </Animatable.View> */}
    </SafeAreaView>
  );
};
export default AccountSetting1;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0973",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#0D0973",
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  bottomBar: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    paddingVertical: 40,
  },

  headerX: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    color: "#0D0973",
  },
  contents: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    paddingHorizontal: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 15,
    color: "#0D0973",
  },
  buttonContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#0D0973",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    // borderColor: "#F8D10E",
    backgroundColor: "#d7dbf1",
    borderWidth: 0,
  },
  button: {
    width: "80%",
    backgroundColor: "#031EAA",
  },

  buttonText: {
    color: "#F8D10E",
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
  successButton: {
    backgroundColor: "#1f8503",
    borderRadius: 10,
    width: "80%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
