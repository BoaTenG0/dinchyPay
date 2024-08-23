import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Avatar, Layout, Tab, TabView, Text } from "@ui-kitten/components";
import { View } from "react-native-animatable";
import TodayTransaction from "./TodayTransactions";

// const TodayComponent = () => (
//   <View style={styles.transactionCard}>
//     {/* Your Today tab content goes here */}
//     <Text>Today's Transactions</Text>
//   </View>
// );

const YesterdayComponent = () => (
  <View style={styles.transactionCard}>
    <Text>Yesterday's Transactions</Text>
  </View>
);

const LastWeekComponent = () => (
  <View style={styles.transactionCard}>
    <Text>Last Week's Transactions</Text>
  </View>
);

const LastMonthComponent = () => (
  <View style={styles.transactionCard}>
    <Text>Last Month's Transactions</Text>
  </View>
);

export const RecentTransactionTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;

  const tabs = ["Today", "Yesterday", "Last Week", "Last Month"];

  const renderTabContent = (tab) => {
    switch (tab) {
      case "Today":
        return <TodayTransaction />;
      case "Yesterday":
        return <TodayTransaction />;
      case "Last Week":
        return <TodayTransaction />;
      case "Last Month":
        return <TodayTransaction />;
      default:
        return null;
    }
  };

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
      tabBarStyle={styles.tabBar}
      indicatorStyle={{ height: 0 }}
    >
      {tabs.map((tab, index) => (
        <Tab key={index} title={tab} titleStyle={styles.tabTitle}>
          <Layout style={styles.tabContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {renderTabContent(tab)}
            </ScrollView>
          </Layout>
        </Tab>
      ))}
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tabBar: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitle: {
    // fontSize: 5,
    // padding: 5,
  },
});
