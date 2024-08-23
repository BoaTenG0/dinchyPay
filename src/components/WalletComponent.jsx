import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { MD3Colors, ProgressBar } from "react-native-paper";

const transactions = [
  {
    id: 1,
    transaction: "Provisions",
    status: "red",
    amount: "Ghc 500.00",
    amountColor: "#ef1717",
  },
  {
    id: 2,
    transaction: "Top up",
    status: "green",
    amount: "Ghc 700.00",
    amountColor: "#198646",
  },
  {
    id: 3,
    transaction: "Toiletries",
    status: "red",
    amount: "Ghc 500.00",
    amountColor: "#ef1717",
  },
  {
    id: 4,
    transaction: "Provisions",
    status: "red",
    amount: "Ghc 500.00",
    amountColor: "#ef1717",
  },
  {
    id: 5,
    transaction: "Top up",
    status: "green",
    amount: "Ghc 700.00",
    amountColor: "#198646",
  },
  {
    id: 6,
    transaction: "Provisions",
    status: "red",
    amount: "Ghc 500.00",
    amountColor: "#ef1717",
  },
  {
    id: 7,
    transaction: "Top up",
    status: "green",
    amount: "Ghc 700.00",
    amountColor: "#198646",
  },
  // More transactions can be added here
];

const BalanceIndicator = () => (
  <View style={styles.balanceContainer}>
    <ProgressBar
      progress={0.3}
      color={MD3Colors.error50}
      style={styles.progressBar}
    />
    <View style={styles.balancePercentageContainer}>
      <Text style={[styles.percentageText, { color: "#00cb53" }]}>88.3%</Text>
      <Text style={[styles.percentageText, { color: "#ef1717" }]}>24.7%</Text>
    </View>
  </View>
);

const TransactionItem = ({ item }) => (
  <View style={styles.transactionRow}>
    <Text style={styles.transactionText}>{item.transaction}</Text>
    <View style={[styles.statusIndicator, { backgroundColor: item.status }]} />
    <Text style={[styles.amountText, { color: item.amountColor }]}>
      {item.amount}
    </Text>
  </View>
);

export default function WalletComponent() {
  return (
    <View>
      <View style={styles.container}>
        <BalanceIndicator />
        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#ffffff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  balanceContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
  balanceText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#606570",
    lineHeight: 15,
  },
  balancePercentageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  percentageText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    letterSpacing: -0.3,
    textAlign: "center",
    lineHeight: 15,
  },
  transactionRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 2,
    borderColor: "#e2e8f0",
    borderWidth: 1,
  },
  transactionText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#606570",
    lineHeight: 18,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  amountText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 18,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
