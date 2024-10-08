import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import DashboardContainer from "../../components/DashboardContainer";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import NotificationCard from "../../components/NotificationCard";
import { AntDesign } from "@expo/vector-icons";
const NotificationsPage = () => {
  const { navigate } = useNavigation();

  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <View style={{ height: "15%" }}>
          <DashboardContainer>
            <View style={styles.appbar}>
              <Button onPress={() => navigate("HomeProfile")}>
                <AntDesign name='arrowleft' size={20} color='#fff' />
              </Button>
              <Text style={styles.text}>Notifications</Text>
              <View style={styles.imageWrapper}>
                <Image
                  source={require("../../../assets/PayMLogo.png")}
                  style={styles.image}
                />
              </View>
            </View>
          </DashboardContainer>
        </View>
        <NotificationCard />
        <View style={styles.container}></View>
      </View>
    </Animatable.View>
  );
};
export default NotificationsPage;
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
    paddingHorizontal: 20,

    // padding: 20,
  },
});
