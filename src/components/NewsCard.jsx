import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../../styles";
import dollarImage from "../../assets/dollar.png";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({ link, saved, extra }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { navigate } = useNavigation();
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={link ? () => navigate(link) : undefined}
    >
      <Image
        source={dollarImage}
        style={[styles.image, imageLoaded ? {} : styles.placeholderImage]}
        onLoad={handleImageLoad}
      />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={[styles.title, globalStyles.poppins]}>USD Rate</Text>
          {saved ? (
            <MaterialCommunityIcons
              name='bookmark-check'
              size={18}
              color='black'
            />
          ) : (
            <Feather name='bookmark' size={18} />
          )}
        </View>
        <Text style={[styles.description, globalStyles.proxima]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.............
        </Text>
        <View style={[styles.row, { justifyContent: "flex-end" }]}>
          {extra ? (
            <AntDesign
              name='arrowright'
              size={20}
              color='#000'
              style={{ marginTop: -10 }}
            />
          ) : (
            <AntDesign name='arrowright' size={20} color='#000' />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 121,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 119,
    height: 101,
    borderRadius: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: -0.3,
    lineHeight: 18,
    color: "#000000",
    marginTop: 8,
  },
  description: {
    fontWeight: "400",
    fontSize: 10,
    letterSpacing: -0.3,
    lineHeight: 13,
    color: "#000000",
    marginTop: 8,
  },
  arrowIcon: {
    width: 24.37,
    height: 12,
    marginLeft: 10,
    alignSelf: "center",
  },
  placeholderImage: {
    backgroundColor: "#E0E0E0", // Placeholder background color
  },
});

export default NewsCard;
