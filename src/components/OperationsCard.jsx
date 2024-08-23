import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const OperationsCard = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.operation}
        onPress={() => navigate("TransferPage")}
      >
        <Image source={require("../../assets/pay.png")} style={styles.image} />
        <Text style={styles.ImageText}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.operation}
        onPress={() => navigate("WithdrawPage")}
      >
        <Image
          source={require("../../assets/withdraw.png")}
          style={styles.image}
        />
        <Text style={styles.ImageText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.operation}
        onPress={() => navigate("DepositPage")}
      >
        <Image
          source={require("../../assets/deposit.png")}
          style={styles.image}
        />
        <Text style={styles.ImageText}>Deposit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OperationsCard;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 1.81,
    elevation: 2,
  },
  operation: {
    width: "30%",
    height: 85,
    backgroundColor: "#031EAA",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
    marginBottom: 10,
  },
  ImageText: {
    color: "#F8D10E",
    fontWeight: "bold",
  },
});
