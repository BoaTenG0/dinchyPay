import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

// Notification Data
const notifications = [
  {
    id: "1",
    icon: (
      <Octicons
        name='arrow-switch'
        size={20}
        style={{
          transform: [{ rotate: "90deg" }],
        }}
      />
    ),
    title: "Transfer",
    description: "You have transferred an amount $876 to Jasson sterek",
    category: "Recent",
  },
  {
    id: "2",
    icon: <MaterialCommunityIcons name='wallet-plus' size={20} />,
    title: "Top Up",
    description: "You have top up an amount Ghc20 to your wallet",
    category: "Recent",
  },
  {
    id: "3",
    icon: <Feather name='shopping-cart' size={20} />,
    title: "Shopping",
    description: "You shop for shoes at Gema’s Parlour",
    category: "Yesterday",
  },
  {
    id: "4",
    icon: <Ionicons name='ticket-sharp' size={20} />,
    title: "Voucher",
    description: "You pay the electric voucher amount $10",
    category: "Yesterday",
  },
  {
    id: "5",
    icon: <FontAwesome name='gratipay' size={20} />,
    title: "Grab Pay",
    description: "You pay the Grab pay amount $15",
    category: "Yesterday",
  },
  {
    id: "6",
    icon: <FontAwesome name='gamepad' size={20} />,
    title: "Top Up",
    description: "You pay the Game top up amount $25",
    category: "Yesterday",
  },
  {
    id: "7",
    icon: <FontAwesome name='credit-card-alt' size={20} />,
    title: "Add card",
    description: "You have add card stela bank",
    category: "Yesterday",
  },
];

const NotificationCard = () => {
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
        {item.icon}
      </View>
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View>
      <Text style={styles.sectionTitle}>Recent</Text>
      {renderSection("Recent")}
      <Text style={styles.sectionTitle}>Yesterday</Text>
    </View>
  );

  const renderSection = (category) =>
    notifications
      .filter((notification) => notification.category === category)
      .map((notification) => (
        <View key={notification.id}>{renderItem({ item: notification })}</View>
      ));

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications.filter(
          (notification) => notification.category === "Yesterday"
        )}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 150 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FFFFFF',
    // alignItems: "center",
    padding: 20,
    // marginBottom: 100,
  },
  sectionTitle: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
    // fontWeight: "500",
    color: "#000000",
    lineHeight: 21,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EAEAEA",
  },
});

export default NotificationCard;
