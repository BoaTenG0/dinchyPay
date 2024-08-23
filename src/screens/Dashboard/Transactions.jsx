import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppBar from "../../components/AppBar";
import { RecentTransactionTabs } from "../../components/RecentTransactionTabs";
const Transactions = () => {
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <AppBar title='Transactions' />
        <View style={styles.container}>
          <RecentTransactionTabs />
          {/* <TransferInput /> */}
        </View>
      </View>
    </Animatable.View>
  );
};
export default Transactions;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "#fff",
    // padding: 20,
  },
});
