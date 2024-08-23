import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TransferInput from "../../components/TransferInput";
import * as Animatable from "react-native-animatable";
import AppBar from "../../components/AppBar";

const TransferPage = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={{ width: "100%", flex: 1 }}>
        <AppBar title='Transfer' />
        <View style={styles.container}>
          <TransferInput />
        </View>
      </View>
    </Animatable.View>
  );
};
export default TransferPage;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
});
