import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardComponent = () => {
  return (
    <View style={styles.bgblue}>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestiae explicabo placeat atque praesentium, dolorum corporis amet
          non, aliquid quasi voluptate delectus nulla exercitationem eius eum,
          ducimus architecto dolores suscipit!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgblue: {
    backgroundColor: "#fffffff5",
    padding: 1,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 10,
    maxWidth: 300,
    background: "linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98)",
  },
  card: {
    fontSize: 16,
    color: "#bec4cf",
    backgroundColor: "#0d1120",
    padding: 20,
    borderRadius: 12,
    background:
      "linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)",
  },
  cardText: {
    color: "#bec4cf",
  },
});

export default CardComponent;
