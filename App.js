import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomSplashScreen from "./SplashScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PaperProvider } from "react-native-paper";
import { persistor, store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/BottomNavigation/AppNavigation";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { enableScreens } from "react-native-screens";
enableScreens();

const loadFonts = async () => {
  await Font.loadAsync({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    ProximaNova: require("./assets/fonts/proximanova-regular.otf"),
  });
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={eva.light}>
          {/* <NativeBaseProvider isSSR={false}> */}
          <PaperProvider>
            <NavigationContainer>
              {isLoading ? (
                <CustomSplashScreen onLoad={handleLoad} />
              ) : (
                <AppNavigator />
              )}
            </NavigationContainer>
          </PaperProvider>
          {/* </NativeBaseProvider> */}
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
