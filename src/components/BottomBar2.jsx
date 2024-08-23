import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles";

const BottomBar2 = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={[styles.header, globalStyles.poppins]}>Get Started</Text>
        <Text style={styles.content}>
          Transfer, add, track expenses and make payments with Pay Mobile.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => navigate("AccountSetting1")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
        <Button
          style={styles.button1}
          mode='contained'
          onPress={() => navigate("Login")}
        >
          <Text style={styles.buttonText1}>Sign In</Text>
        </Button>
      </View>
      <View style={styles.terms}>
        <Text style={styles.termsText}>
          By creating and /or using an account, you agree to our
        </Text>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={[styles.termsText, { color: "#0D0973", fontWeight: "bold" }]}
          >
            Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomBar2;

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
    gap: 35,
    paddingTop: 30,
  },
  terms: {
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    // lineHeight: 24,
  },
  contents: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 17,
    textAlign: "center",
    lineHeight: 24,
    // width: 200,
    color: "#0D0973",
  },
  button: {
    width: "80%",
    backgroundColor: "#031EAA",
  },
  button1: {
    width: "80%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#031EAA",
  },
  buttonText: {
    color: "#F8D10E",
  },
  buttonText1: {
    color: "#031EAA",
  },
});
