import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import DepositCard from "../../components/DepositCard";
import AppBar from "../../components/AppBar";

const DepositPage = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <AppBar title='Deposit' />

        <View style={styles.container}>
          <DepositCard
            deposit
            style='325'
            btnText='Continue'
            status='Top Up Details'
            statusText='Top up Type'
          />
        </View>
      </View>
    </Animatable.View>
  );
};
export default DepositPage;
const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  text: {
    color: "#F8D10E",
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,

    // padding: 20,
  },
});
