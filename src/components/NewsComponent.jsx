import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    time: "2 hours ago",
    title: "Tullow Oil ",
    description: "Stocks Falling Dracstoically",
    image: require("../../assets/stats.png"),
  },
  {
    id: 2,
    title: "Join Pi Network",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // image: require('./assets/unsplash-WyxqQpyFNk8.png'),
  },
  {
    id: 3,
    title: "Bitcoin has dropped",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // image: require('./assets/unsplash-WyxqQpyFNk8.png'),
  },
  {
    id: 4,
    title: "USD Rate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // image: require('./assets/unsplash-WyxqQpyFNk8.png'),
  },
];
const navItems = [
  "All News",
  "Investments",
  "Money Tips",
  "Savings",
  "Saved News",
];
const DynamicDescription = ({ description }) => {
  const words = description.split(" ");
  const thirdWord = words[2];
  const restOfDescription = words.slice(3).join(" ");

  return (
    <Text>
      {words.slice(0, 2).join(" ")}{" "}
      <Text style={{ color: "#fff" }}>{thirdWord}</Text> {restOfDescription}
    </Text>
  );
};
const NewsComponent = () => {
  const [currentTab, setCurrentTab] = useState("All News");

  const renderContent = () => {
    switch (currentTab) {
      case "All News":
        return (
          <>
            <Card style={styles.topNewsCard}>
              <Image source={newsData[0]?.image} style={styles.mainImage} />
              <View style={styles.overlayTextContainer}>
                <Text style={styles.overlayText}>{newsData[0]?.title}</Text>
                <DynamicDescription description={newsData[0].description} />
              </View>
              <View style={styles.top}>
                <Text style={styles.time}>{newsData[0]?.time}</Text>
                <Feather name='bookmark' size={18} />
              </View>
            </Card>
            <ScrollView
              showsVerticalScrollIndicator={false}
              //   style={{ marginBottom: 92000 }}
              contentContainerStyle={{ paddingBottom: 750 }}
            >
              <Text style={styles.sectionTitle}>Latest News</Text>

              <View style={{ width: "100%", paddingHorizontal: 10, gap: 10 }}>
                <NewsCard link='NewsDetail' />
                <NewsCard />
                <NewsCard />
              </View>
            </ScrollView>
          </>
        );
      case "Investments":
        return <Text style={styles.noDataText}>Investments Content</Text>;
      case "Money Tips":
        return <Text style={styles.noDataText}>Money Tips Content</Text>;
      case "Savings":
        return <Text style={styles.noDataText}>Savings Content</Text>;
      case "Saved News":
        return (
          <>
            <Text style={styles.sectionTitle}>Saved News</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              //   style={{ marginBottom: 92000 }}
              contentContainerStyle={{ paddingBottom: 50 }}
            >
              <View style={{ width: "100%", paddingHorizontal: 10, gap: 10 }}>
                <NewsCard link='NewsDetail' saved />
                <NewsCard link='NewsDetail' saved />
                <NewsCard link='NewsDetail' saved />
              </View>
            </ScrollView>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.navBar}
        >
          {navItems.map((item) => (
            <TouchableOpacity key={item} onPress={() => setCurrentTab(item)}>
              <Text
                style={[
                  styles.navItem,
                  currentTab === item && styles.activeNav,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
  },
  navBar: {
    flexDirection: "row",
    // flex: 1,
  },
  navItem: {
    fontSize: 10,
    color: "#606570",
    padding: 10,
    fontWeight: "bold",
  },
  activeNav: {
    color: "#000",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  topNewsCard: {
    marginHorizontal: 10,
    marginBottom: 20,
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  overlayTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 5,
    // gap: 10,
    // width: 100,
  },
  overlayText: {
    color: "#000",
    // fontSize: 16,
    // fontWeight: "600",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    padding: 10,
  },
  time: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
  //   time: {
  //     fontSize: 12,
  //     color: "gray",
  //     marginTop: 5,
  //     paddingHorizontal: 20,
  //   },
  sectionTitle: {
    fontSize: 18,
    // fontWeight: "600",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  newsCard: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  newsContent: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 14,
    // fontWeight: "600",
  },
  description: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
  icon: {
    marginLeft: "auto",
  },
  noDataText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
});

export default NewsComponent;
