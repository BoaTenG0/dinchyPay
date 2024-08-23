import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { setOnboarding } from "../reducers/OnBoarding";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const BottomBar3 = ({ onPress }) => {
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
  function show() {
    toastRef.current?.hide(() => {
      toastRef.current?.show("Posting...", "info", 400);
    });
  }
  function showError() {
    toastRef.current?.hide(() => {
      toastRef.current?.show("Ops, something is wrong!", "error", 400);
    });
  }
  function handleHide() {
    console.log("toast is hidden");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How will you use Pay Mobile?</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            selected === "Profile" && styles.selectedButton,
          ]}
          onPress={() => handleSelect("Profile")}
        >
          <Button onPress={() => handleSelect("Profile")}>
            <AntDesign
              name='user'
              size={20}
              color={selected === "Profile" ? "#F8D10E" : "#0D0973"}
            />
          </Button>
        </TouchableOpacity>
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
      </View>
      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigate("DetailPage")}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Button>
    </View>
  );
};
export default BottomBar3;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
    paddingTop: 30,
  },

  header: {
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
