import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const transactions = [
  {
    id: 1,
    name: "Jemima",
    time: "Today at 12:05pm",
    amount: "-Ghc 500.00",
    avatar: require("../../assets/mtn.png"),
  },
  {
    id: 2,
    name: "Jemima",
    time: "Today at 12:05pm",
    amount: "-Ghc 500.00",
    avatar: require("../../assets/voda.png"),
  },
  {
    id: 3,
    name: "Jemima",
    time: "Today at 12:05pm",
    amount: "-Ghc 500.00",
    avatar: require("../../assets/mtn.png"),
  },
  {
    id: 4,
    name: "Jemima",
    time: "Today at 12:05pm",
    amount: "-Ghc 500.00",
    avatar: require("../../assets/voda.png"),
  },
  {
    id: 5,
    name: "Jemima",
    time: "Today at 12:05pm",
    amount: "-Ghc 500.00",
    avatar: require("../../assets/mtn.png"),
  },
];

export default function TodayTransaction() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Recent Transactions</Text>
        <ScrollView>
          {transactions.map((transaction) => (
            <TouchableOpacity
              key={transaction.id}
              style={styles.transactionContainer}
            >
              <View style={styles.row}>
                <Image source={transaction.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{transaction.name}</Text>
                  <Text style={styles.time}>{transaction.time}</Text>
                </View>
              </View>
              <Text style={styles.amount}>{transaction.amount}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    // borderRadius: 40,
  },
  headerText: {
    // fontFamily: "Poppins",
    fontSize: 15,
    color: "#5c5c60",
    lineHeight: 18,
    marginVertical: 10,
    fontWeight: "bold",
    // borderBottomWidth: 2,
    // borderColor: "#000",
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 14,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  name: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 18,
  },
  time: {
    fontSize: 8,
    color: "#9caeb8",
    lineHeight: 12,
  },
  amount: {
    fontSize: 12,
    color: "#000000",
    lineHeight: 18,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 20,
    // marginRight: 10,
  },
});
