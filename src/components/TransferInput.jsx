import { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "react-native-paper";
import Toast from "./Toast";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles";

const TransferInput = () => {
  const { navigate } = useNavigation();
  const [transfer, setTransfer] = useState({
    id: "",
    name: "",
    number: "",
    amount: "",
    category: "",
    reference: "",
  });
  const [isContinueClicked, setIsContinueClicked] = useState(false);
  const toastRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      // label: "MasterCard",
      value: "mastercard",
      icon: () => (
        <Image
          source={require("../../assets/master.png")}
          style={styles.cardImage}
        />
      ),
    },
    {
      // label: "Visa Card",
      value: "visa",
      icon: () => (
        <Image
          source={require("../../assets/visa.png")}
          style={styles.cardImage}
        />
      ),
    },
  ]);
  const handleChange = (field, value) => {
    setTransfer((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };

  const handleNextPress = () => {
    const { id, name, amount, reference, number } = transfer;
    if (!id || !name || !amount || !reference || !number) {
      showError("Please fill all the fields.");
      return;
    }
    setIsContinueClicked(true);
    // navigate("Main");
  };
  const handleCancelPress = () => {
    setIsContinueClicked(false);
  };
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <Toast
          ref={toastRef}
          onHide={() => console.log("toast is hidden")}
          left={10}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          style={{ marginBottom: 170 }}
        >
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Recipient Pay Mobile ID</Text>
              <TextInput
                value={transfer.id}
                placeholder='Enter ID here...'
                onChangeText={(text) => handleChange("id", text)}
                style={styles.input}
                placeholderTextColor='grey'
                autoCapitalize='none'
                keyboardType='text'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Recipient Name</Text>
              <TextInput
                value={transfer.name}
                placeholder='Enter recipient name here...'
                onChangeText={(text) => handleChange("name", text)}
                style={styles.input}
                placeholderTextColor='grey'
                //   autoCapitalize='none'
                keyboardType='text'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Recipient Number</Text>
              <TextInput
                value={transfer.number}
                placeholder='Enter recipient number here...'
                onChangeText={(text) => handleChange("number", text)}
                style={styles.input}
                placeholderTextColor='grey'
                //   autoCapitalize='none'
                keyboardType='phone-pad'
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount to be transferred</Text>
              <TextInput
                value={transfer.amount}
                placeholder='Enter pay amount here...'
                onChangeText={(text) => handleChange("amount", text)}
                style={styles.input}
                placeholderTextColor='grey'
                //   autoCapitalize='none'
                keyboardType='decimal-pad'
                // textContentType='number'
              />
            </View>
            {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <View style={{ zIndex: 1000 }}>
          <DropDownPicker
            open={open}
            value={transfer.category}
            items={items}
            setOpen={setOpen}
            setValue={(value) => handleChange("category", value)}
            setItems={setItems}
            placeholder='Select'
            //   containerStyle={{ backgroundColor: "transparent" }}
            style={[styles.input, { backgroundColor: "transparent" }]}
            dropDownContainerStyle={{ backgroundColor: "transparent" }}
            listItemLabelStyle={{ color: "#fff" }}
            listItemContainerStyle={{ backgroundColor: "#FFF" }}
            selectedItemContainerStyle={{ backgroundColor: "#E5EDFD" }}
            labelStyle={{ color: "#fff" }}
          />
        </View>
        <Box maxW='300'>
          <Select
            selectedValue={transfer.category}
            minWidth='350'
            accessibilityLabel='Select Network'
            placeholder='Select Network'
            style={{ backgroundColor: "#F7F9FC" }}
            size='large'
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size='5' />,
            }}
            mt={1}
            onValueChange={(itemValue) => handleChange("category", itemValue)}
          ></Select>
        </Box>
      </View> */}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Reference</Text>
              <TextInput
                value={transfer.reference}
                placeholder='Enter reference here...'
                onChangeText={(text) => handleChange("reference", text)}
                style={styles.input}
                placeholderTextColor='grey'
                //   autoCapitalize='none'
                keyboardType='text'
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            {!isContinueClicked ? (
              <Button
                style={styles.button}
                mode='contained'
                onPress={handleNextPress}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </Button>
            ) : (
              <View>
                <Text style={[styles.tittle, globalStyles.poppins]}>
                  Are you sure the details you have entered are correct?
                  Transferred moneys cannot be reversed so ensure the right
                  information has been entered. Thank you.
                </Text>
                <Text style={[styles.subtitle, globalStyles.poppins]}>
                  If you want to proceed with the transaction press “Next”, if
                  you want to Cancel press “Cancel”
                </Text>
                <View style={styles.nextButtonContainer}>
                  <Button
                    style={[styles.button, { width: "40%" }]}
                    mode='contained'
                    onPress={handleCancelPress}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </Button>
                  <Button
                    style={[styles.button, { width: "40%", marginLeft: 20 }]}
                    mode='contained'
                    onPress={() => navigate("TransferOTP")}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </Button>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default TransferInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
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
    padding: 13,
    // marginVertical: 10,
    // width: "90%",
    // alignSelf: "center",
  },
  cardImage: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 40,
    width: "90%",
    backgroundColor: "#031EAA",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  nextButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    paddingTop: 20,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: { lineHeight: 18, textAlign: "center" },
});
