import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const DashboardContainer = ({ children }) => {
  return (
    <LinearGradient
      colors={["#0f1c9a", "#1f1d41"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default DashboardContainer;
