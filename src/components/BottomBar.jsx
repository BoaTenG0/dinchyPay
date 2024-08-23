import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles";
const BottomBar = ({ btnText, onPress, content, extra, style }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={[styles.header, globalStyles.poppins]}>
          Welcome to Pay Mobile!
        </Text>
        <Text style={[styles.content, globalStyles.proxima, { width: style }]}>
          {content}
          {extra}
        </Text>
      </View>
      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigate(onPress)}
      >
        <Text style={styles.buttonText}>{btnText}</Text>
      </Button>
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
export default BottomBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
  contents: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  terms: {
    // marginTop: 20,
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
  content: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    width: 200,
    color: "#0D0973",
  },
  button: {
    width: "80%",
    backgroundColor: "#031EAA",
    //   paddingVertical: 5
  },
  buttonText: {
    color: "#F8D10E",
  },
});
