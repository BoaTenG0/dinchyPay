import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";

const stories = [
  {
    id: 1,
    name: "Jane",
    image: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    phone: "+62898023450",
  },
  {
    id: 2,
    name: "John",
    image: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    phone: "+62898023450",
  },
  {
    id: 3,
    name: "Katie",
    image: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
    phone: "+62898023450",
  },
  {
    id: 4,
    name: "Michael",
    image: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
    phone: "+62898023450",
  },
  {
    id: 5,
    name: "Sarah",
    image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    phone: "+62898023450",
  },
  {
    id: 6,
    name: "Sarah",
    image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    phone: "+62898023450",
  },
  {
    id: 7,
    name: "Sarah",
    image: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    phone: "+62898023450",
  },
  {
    id: 8,
    name: "Sarah",
    image: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    phone: "+62898023450",
  },
  {
    id: 9,
    name: "Sarah",
    image: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
    phone: "+62898023450",
  },
];

const StoryList = () => {
  return (
    <View style={styles.storyList}>
      <Text style={styles.storyListText}>Recent contact</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 20 }}
      >
        {stories.map((story) => (
          <View style={styles.storyContainer} key={story.id}>
            <Image style={styles.storyImage} source={{ uri: story.image }} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const ContactsCard = () => {
  const Initials = (str) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: "#D4E3FD",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4B60C4" }}>
          {Initials(item.name)}
        </Text>
        {/* <Image style={styles.image} source={{ uri: item.image }} /> */}
      </View>
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{item.name}</Text>
        {item.phone && (
          <Text style={styles.notificationDescription}>{item.phone}</Text>
        )}
      </View>
    </View>
  );
  const renderHeader = () => (
    <View>
      <Text style={styles.sectionTitle}>All contacts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList
        data={stories}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: 40,
  //   },
  sectionTitle: {
    // fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 20,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  storyList: {
    marginTop: 20,
    marginBottom: 10,
    // paddingHorizontal: 20,
    gap: 15,
  },
  storyListText: {
    // lineHeight: 27,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 20,
    alignItems: "center",
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    // fontWeight: "bold",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,

    // justifyContent: "space-between",
    gap: 20,
  },
  icon: {
    width: 40,
    height: 20,
    borderRadius: 30,
    marginRight: 15,
    // padding: 30,
  },
  notificationText: {
    flex: 1,
    gap: 3,
    // color: "#4B60C4",
  },
  notificationTitle: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
    color: "#4B60C4",
  },
  notificationDescription: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#000000",
    lineHeight: 21,
  },
});

export default ContactsCard;
