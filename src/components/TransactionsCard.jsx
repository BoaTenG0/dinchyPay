import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TransactionsCard = ({ network, number, date }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={require("../../assets/Avatar.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{network}</Text>
        <Text style={styles.description}>{number}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: 335,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 1.81,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 12,
    letterSpacing: -0.3,
    lineHeight: 18,
    color: "#000000",
    marginTop: 8,
  },
  description: {
    fontSize: 10,
    lineHeight: 13,
    color: "#aaa",
    // marginTop: 8,
  },
  arrowIcon: {
    width: 24.37,
    height: 12,
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default TransactionsCard;
