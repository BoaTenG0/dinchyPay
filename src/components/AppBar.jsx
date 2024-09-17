import { Image, Platform, StyleSheet, Text, View } from "react-native";
import DashboardContainer from "./DashboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
const AppBar = ({ title, height = "15%" }) => {
  const navigation = useNavigation();
  return (
    <View style={{ height }}>
      <DashboardContainer>
        <View style={styles.appbar}>
          <Button onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={20} color='#fff' />
          </Button>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/PayMLogo.png")}
              style={styles.image}
            />
          </View>
        </View>
      </DashboardContainer>
    </View>
  );
};
export default AppBar;
const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 15 : 50,
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
});
