import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import TransferInput from "../../components/TransferInput";
import * as Animatable from "react-native-animatable";
import DepositCard from "../../components/DepositCard";
import AppBar from "../../components/AppBar";

const WithdrawPage = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <AppBar title='Withdraw' />
        <View style={styles.container}>
          <DepositCard
            withdraw
            style='260'
            btnText='Confirm'
            status='Confirm Withdraw'
            statusText='Withdrawal Network'
          />

          {/* <TransferInput /> */}
        </View>
      </View>
    </Animatable.View>
  );
};
export default WithdrawPage;
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
    padding: 20,
  },
});
