import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import AppBar from "../../components/AppBar";
import { Card, Chip, DataTable, MD3Colors } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const CustomChip = ({ icon, backgroundColor }) => {
  return <View style={[styles.customChip, { backgroundColor }]}>{icon}</View>;
};

const WalletScreen = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      id: 1,
      transaction: "Provisions",
      status: "send",
      amount: "Ghc 500.00",
      icon: <Feather name='arrow-up-right' size={20} />,

      amountColor: "#EF1717",
    },
    {
      id: 2,
      transaction: "Top up",
      status: "deposit",
      amount: "Ghc 700.00",
      icon: <Feather name='arrow-down-left' size={20} />,

      amountColor: "#1FD368",
    },
    {
      id: 3,
      transaction: "Toiletries",
      status: "send",
      amount: "Ghc 500.00",
      icon: <Feather name='arrow-up-right' size={20} />,

      amountColor: "#EF1717",
    },
    {
      id: 4,
      transaction: "Provisions",
      status: "send",
      amount: "Ghc 500.00",
      icon: <Feather name='arrow-up-right' size={20} />,
      amountColor: "#EF1717",
    },
    {
      id: 5,
      transaction: "Top up",
      status: "deposit",
      amount: "Ghc 700.00",
      icon: <Feather name='arrow-down-left' size={20} />,

      amountColor: "#1FD368",
    },
    {
      id: 6,
      transaction: "Provisions",
      status: "send",
      amount: "Ghc 500.00",
      icon: <Feather name='arrow-up-right' size={20} />,
      amountColor: "#EF1717",
    },
    {
      id: 7,
      transaction: "Top up",
      status: "deposit",
      amount: "Ghc 700.00",
      icon: <Feather name='arrow-down-left' size={20} />,
      amountColor: "#1FD368",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1, position: "relative" }}>
        <AppBar height='30%' />
        <View style={styles.container}>
          <Text style={styles.title}> Available Balance</Text>
          <Text style={styles.subtitle}> GHC 2,000.00</Text>
          <View style={styles.cardComponent}>
            <View style={styles.card}>
              <Text style={styles.BalanceTitle}>Remaining Balance</Text>
              <Text style={[styles.BalanceTitle, styles.BalanceSubTitle]}>
                Ghc 1325
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.DebitTitle}>Amount Used</Text>
              <Text style={[styles.DebitTitle, styles.DebitSubTitle]}>
                Ghc 725
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 17,
              marginTop: 80,
              marginBottom: 30,
            }}
          >
            <Card style={{ width: "100%", padding: 20 }}>
              <View
                style={[
                  styles.balancePercentageContainer,
                  { marginTop: 0, marginBottom: 10 },
                ]}
              >
                <Text
                  style={[
                    styles.percentageText,
                    { color: "#00cb53", fontSize: 13 },
                  ]}
                >
                  Remaining Balance
                </Text>
                <Text
                  style={[
                    styles.percentageText,
                    { color: "#ef1717", fontSize: 13 },
                  ]}
                >
                  Amount Used
                </Text>
              </View>
              <Progress.Bar
                progress={0.6}
                color='#00CB53'
                width={300}
                height={20}
                borderRadius={20}
                style={{ backgroundColor: "red", borderWidth: 0 }}
              />
              <View style={styles.balancePercentageContainer}>
                <Text style={[styles.percentageText, { color: "#00cb53" }]}>
                  60%
                </Text>
                <Text style={[styles.percentageText, { color: "#ef1717" }]}>
                  40%
                </Text>
              </View>
            </Card>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 17,
              // paddingTop: 100,
            }}
          >
            <Card style={{ width: "100%" }}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Transaction</DataTable.Title>
                  <DataTable.Title numeric>Status</DataTable.Title>
                  <DataTable.Title numeric>Amount</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                  <DataTable.Row key={item.id} style={{ alignItems: "center" }}>
                    <DataTable.Cell>{item.transaction}</DataTable.Cell>
                    <DataTable.Cell numeric>
                      <CustomChip
                        icon={item.icon}
                        backgroundColor={
                          item.amountColor === "#EF1717" ? "#EF1717" : "#1FD368"
                        }
                      />
                    </DataTable.Cell>
                    <DataTable.Cell numeric>{item.amount}</DataTable.Cell>
                  </DataTable.Row>
                ))}

                <DataTable.Pagination
                  page={page}
                  numberOfPages={Math.ceil(items.length / itemsPerPage)}
                  onPageChange={(page) => setPage(page)}
                  label={`${from + 1}-${to} of ${items.length}`}
                  numberOfItemsPerPageList={numberOfItemsPerPageList}
                  numberOfItemsPerPage={itemsPerPage}
                  onItemsPerPageChange={onItemsPerPageChange}
                  showFastPaginationControls
                  selectPageDropdownLabel={"Rows per page"}
                />
              </DataTable>
            </Card>
          </View>
        </ScrollView>
      </View>
    </Animatable.View>
  );
};
export default WalletScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    position: "absolute",
    top: "10%",
    zIndex: 999,
  },
  cardComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 80,
    gap: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 12,
  },
  title: {
    color: "#F8D10E",
    fontSize: 15,
  },
  subtitle: {
    color: "#F8D10E",
    fontSize: 20,
    fontWeight: "bold",
  },
  DebitTitle: {
    color: "#EF1717",
    fontWeight: "bold",
  },
  DebitSubTitle: {
    fontSize: 20,
  },
  BalanceTitle: {
    color: "#00CB53",
    fontWeight: "bold",
  },
  BalanceSubTitle: {
    fontSize: 20,
  },
  customChip: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  balanceContainer: {
    width: "100%",
    alignItems: "center",
    marginHorizontal: 17,

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
    // width: "100%",
    marginTop: 10,
  },
  percentageText: {
    // fontFamily: "Poppins-Regular",
    fontSize: 10,
    letterSpacing: -0.3,
    textAlign: "center",
    lineHeight: 15,
    fontWeight: "bold",
  },
});
