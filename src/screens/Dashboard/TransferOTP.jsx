import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import TransferCode from "../../components/TranferCode";
import { AntDesign } from "@expo/vector-icons";

const TransferOTP = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ width: "100%", flex: 1 }}>
          <View style={{ height: "15%" }}>
            <DashboardContainer>
              <View style={styles.appbar}>
                <Button onPress={() => navigate("TransferPage")}>
                  <AntDesign name='arrowleft' size={20} color='#fff' />
                </Button>
                <Text style={styles.text}>Transfer</Text>
                <View style={styles.imageWrapper}>
                  <Image
                    source={require("../../../assets/PayMLogo.png")}
                    style={styles.image}
                  />
                </View>
              </View>
            </DashboardContainer>
          </View>
          <View style={styles.container}>
            <TransferCode />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
};
export default TransferOTP;
const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  text: {
    color: "#F8D10E",
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    width: "100%",
    paddingVertical: 30,
    flex: 1,
  },
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 27,
  },
  subtitle: {
    textAlign: "center",
    lineHeight: 18,
  },
});
