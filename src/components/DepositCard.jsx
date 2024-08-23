import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
// import { Checkbox } from "react-native-paper";
import globalStyles from "../../styles";
import { Checkbox, Modal, Portal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
const amounts = ["C05", "C10", "C15", "C20", "C50", "C100", "C500", "C1k"];

const DepositCard = ({
  deposit,
  withdraw,
  style,
  btnText,
  status,
  statusText,
}) => {
  const { navigate } = useNavigation();
  const [selectedAmount, setSelectedAmount] = React.useState("C20");
  const [selectedWallet, setSelectedWallet] = React.useState(null);
  const [amount, setAmount] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [visibleSecond, setVisibleSecond] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModalSecond = () => setVisibleSecond(true);
  const hideModalSecond = () => setVisibleSecond(false);
  const containerStyle = {
    backgroundColor: "#F3F7FF",
    padding: 25,
    marginHorizontal: 20,
    borderRadius: 20,
    gap: 50,
  };
  const handleCheckboxChange = (wallet) => {
    setSelectedWallet(wallet);
  };
  const handleSecondModal = () => {
    hideModal();
    showModalSecond();
  };
  const handleChange = (field, value) => {
    setAmount((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {deposit && <Text style={styles.amountText}>Amount</Text>}
        <Text style={styles.priceText}>Ghc78.00</Text>
        <Text style={styles.balanceText}>Your Balance GHC 2000</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: parseInt(style) }}
      >
        {/* Amounts Selection */}
        <View style={styles.amountsContainer}>
          {amounts.map((amount) => (
            <TouchableOpacity
              key={amount}
              style={[
                styles.amountBox,
                selectedAmount === amount && styles.selectedAmountBox,
              ]}
              onPress={() => setSelectedAmount(amount)}
            >
              <Text
                style={[
                  styles.amountBoxText,
                  selectedAmount === amount && styles.selectedAmountBoxText,
                ]}
              >
                {amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {withdraw && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount to withdraw</Text>
            <TextInput
              value={amount}
              placeholder='Enter amount'
              onChangeText={(text) => handleChange("amount", text)}
              style={styles.input}
              placeholderTextColor='grey'
              keyboardType='decimal-pad'
            />
          </View>
        )}
        {/* Wallet Type */}
        <View style={styles.walletContainer}>
          <Text style={styles.walletText}>Wallet Type</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.walletOption}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              source={require("../../assets/voda.png")}
              style={styles.walletIcon}
            />
            <View>
              <Text style={styles.walletTitle}>Vodafone</Text>
              <Text style={styles.walletDetail}>**** *** 2878</Text>
            </View>
          </View>
          <Checkbox
            status={selectedWallet === "Vodafone" ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange("Vodafone")}
            uncheckedColor='#CFCFCFs'
            // color='#CFCFCF'
            style={[
              styles.radioIcon,
              selectedWallet === "Vodafone" ? styles.checked : styles.unchecked,
            ]}
          />
        </View>
        <View style={styles.walletOption}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              source={require("../../assets/mtn.png")}
              style={styles.walletIcon}
            />
            <View>
              <Text style={styles.walletTitle}>Mobile Money</Text>
              <Text style={styles.walletDetail}>**** *** 2878</Text>
            </View>
          </View>
          <Checkbox
            status={selectedWallet === "MTN" ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange("MTN")}
            uncheckedColor='#CFCFCF'
            style={[
              styles.radioIcon,
              selectedWallet === "MTN" ? styles.checked : styles.unchecked,
            ]}
          />
        </View>
        <TouchableOpacity style={styles.bottomAddButton} onPress={showModal}>
          <Text style={styles.bottomAddButtonText}>{btnText}</Text>
        </TouchableOpacity>
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            ...containerStyle,
          }}
        >
          <KeyboardAwareScrollView contentContainerStyle={{ gap: 20 }}>
            <View
              style={{
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <SimpleLineIcons
                name='shield'
                size={24}
                color='#FF8A65'
                onPress={hideModal}
              />
            </View>
            <View style={styles.center}>
              <Text style={styles.modalText}>{status}</Text>
            </View>
            <View style={styles.center}>
              <View style={styles.row}>
                <Text style={styles.title}>Amount</Text>
                <Text style={styles.subTitle}>Ghc20.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>{statusText}</Text>
                <Text style={styles.subTitle}>Vodaphone</Text>
              </View>
              {deposit && (
                <View style={styles.row}>
                  <Text style={styles.title}>Transaction ID</Text>
                  <Text style={styles.subTitle}>234795-7456-0008</Text>
                </View>
              )}
              <View style={styles.row}>
                <Text style={styles.title}>Time & Date</Text>
                <Text style={styles.subTitle}>01/03/22 , 11:00 AM</Text>
              </View>
              {withdraw && (
                <View style={styles.inputContainer}>
                  <TextInput
                    value={pin}
                    placeholder='Enter pin'
                    onChangeText={(text) => setPin(text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                    keyboardType='decimal-pad'
                  />
                </View>
              )}
            </View>
            <View style={[styles.row, { gap: 10 }]}>
              <Ionicons
                name='shield-checkmark-outline'
                size={32}
                color='#aaa'
              />
              <Text style={styles.text}>
                All your transactions are safe and fast, By continuing this
                transaction, you agree to our
                <Text
                  style={{
                    color: "#198646",
                  }}
                >
                  {"\u00A0 Terms & Conditions."}
                </Text>
              </Text>
            </View>

            {deposit && (
              <TouchableOpacity
                style={[styles.bottomAddButton, { marginTop: 0 }]}
                onPress={handleSecondModal}
              >
                <Text style={styles.bottomAddButtonText}>Top Up</Text>
              </TouchableOpacity>
            )}
            {withdraw && (
              <TouchableOpacity
                style={[styles.bottomAddButton, { marginTop: 0 }]}
                onPress={handleSecondModal}
              >
                <Text style={styles.bottomAddButtonText}>Withdraw</Text>
              </TouchableOpacity>
            )}
          </KeyboardAwareScrollView>
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={visibleSecond}
          onDismiss={hideModalSecond}
          //   contentContainerStyle={containerStyle}
          contentContainerStyle={{
            ...containerStyle,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 50,
            // gap: 30,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <SimpleLineIcons
              name='shield'
              size={24}
              color='#FF8A65'
              onPress={() => navigate("HomeProfile")}
            />
          </View>
          <View
            style-={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.imageWrapper}>
              <Image
                source={require("../../assets/TopUp.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.center}>
            <Text style={styles.subTitle}>Top Up Successful</Text>
            <Text style={[styles.title, { textAlign: "center" }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu dolor,
              bibendum purus eu mi, purus lorem.
            </Text>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
    position: "relative",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalText: {
    color: "#011A51",
    fontSize: 22,
    lineHeight: 33,
    fontWeight: "600",
  },
  title: {
    color: "#aaa",
    lineHeight: 18,
    // fontWeight: "400",
  },
  subTitle: {
    // fontWeight: "600",
    lineHeight: 18,
  },
  text: {
    color: "#aaa",
    // fontWeight: "500",
    lineHeight: 18,
    width: "80%",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  amountText: {
    fontFamily: "Poppins",
    fontSize: 16,
    // fontWeight: "500",
    color: "#000000",
    textAlign: "center",
  },
  priceText: {
    fontFamily: "Poppins",
    fontSize: 25,
    // fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
  balanceText: {
    fontFamily: "Poppins",
    fontSize: 10,
    // fontWeight: "400",
    color: "#000000",
    opacity: 0.3,
    textAlign: "center",
  },
  amountsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  amountBox: {
    width: 61,
    height: 60,
    borderRadius: 12,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FCFCFC",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  selectedAmountBox: {
    backgroundColor: "#008000",
  },
  amountBoxText: {
    fontFamily: "Poppins",
    fontSize: 16,
    // fontWeight: "500",
    color: "#000",
  },
  selectedAmountBoxText: {
    color: "#FFF",
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  walletText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  addButton: {
    justifyContent: "center",
  },
  addButtonText: {
    fontFamily: "Poppins",
    fontSize: 11,
    // fontWeight: "400",
    color: "#011a51",
  },
  walletOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    paddingHorizontal: 10,
  },
  walletIcon: {
    width: 52,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    // marginRight: 20,
  },
  walletTitle: {
    fontFamily: "Poppins",
    fontSize: 13,
    // fontWeight: "400",
    color: "#000000",
  },
  walletDetail: {
    fontFamily: "Poppins",
    fontSize: 10,
    // fontWeight: "400",
    color: "#000000",
    opacity: 0.5,
  },
  radioIcon: {
    width: 21,
    height: 21,
    borderWidth: 1,
    borderRadius: 50,
  },
  checked: {
    backgroundColor: "#031EAA",
    borderColor: "#031EAA",
  },
  unchecked: {
    // backgroundColor: "#CFCFCF",
    borderColor: "#CFCFCF",
  },
  bottomAddButton: {
    backgroundColor: "#031EAA",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  bottomAddButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  inputContainer: {
    marginVertical: 20,
    width: "100%",
    alignSelf: "center",
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: "#000",
  },
  input: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 17,
    // marginVertical: 10,
    // width: "90%",
    // alignSelf: "center",
  },
});

export default DepositCard;
