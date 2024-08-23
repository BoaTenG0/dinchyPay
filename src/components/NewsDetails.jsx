import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import dollarImage from "../../assets/dollar.png";

// Dummy data for demonstration
const newsData = {
  title: "Tullow Oil Ghana is experiencing a drastic fall in stock prices",
  image: require("../../assets/stats.png"),
  timeAgo: "2 hours ago",
  paragraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra bibendum orci, eu aliquam nisi lacinia blandit. Sed vitae nunc cursus, ultricies urna ac, accumsan mauris. Sed a ex quis orci vehicula ultrices quis ac orci.`,
    `Nullam condimentum enim a nulla consectetur ultrices in nec lacus. Proin tincidunt neque quis tempus bibendum. Ut a lectus vehicula, fermentum sapien eget, hendrerit ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lectus mi, viverra ut nunc ac, laoreet elementum risus. Sed vitae nunc cursus, ultricies urna ac, accumsan mauris.`,
    `Sed vitae nunc cursus, ultricies urna ac, accumsan mauris. Sed a ex quis orci vehicula ultrices quis ac orci. Nullam condimentum enim a nulla consectetur ultrices in nec lacus. Proin tincidunt neque quis tempus bibendum. Ut a lectus vehicula, fermentum sapien eget, hendrerit ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lectus mi, viverra ut nunc ac, laoreet elementum risus.`,
  ],
};

const NewsDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground source={newsData.image} style={styles.mainImage}>
        <View style={[styles.row, { marginTop: 20, paddingRight: 10 }]}>
          <Button onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={20} color='#000' />
          </Button>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Feather name='send' color='#000' size={18} />
            <Feather name='bookmark' size={18} />
          </View>
        </View>
        {/* <Image source={newsData.image} style={styles.mainImage} /> */}
      </ImageBackground>
      <Text style={styles.timeAgo}>{newsData.timeAgo}</Text>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.line} />
          <Text style={styles.mainTitle}>{newsData.title}</Text>
        </View>

        {newsData.paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.bodyText}>
            {paragraph}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  statusBar: {
    height: 300,
    width: "100%",
    // backgroundColor: "#fff",
  },
  mainImage: {
    width: "100%",
    height: 220,
    position: "relative",
    // resizeMode: "contain",
  },
  timeAgo: {
    fontSize: 10,
    // fontWeight: "500",
    color: "#000",
    marginTop: -30,
    padding: 10,
  },
  titleContainer: {
    marginBottom: 10,
    position: "relative",
  },
  line: {
    position: "absolute",
    // top: 12,
    width: 3,
    height: 50,
    backgroundColor: "#031EAA",
  },
  mainTitle: {
    marginLeft: 15,
    fontSize: 16,
    // fontWeight: "500",
    color: "#000",
    lineHeight: 24,
  },
  bodyText: {
    fontSize: 10,
    // fontWeight: "400",
    color: "#000",
    lineHeight: 16,
    marginBottom: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default NewsDetail;
