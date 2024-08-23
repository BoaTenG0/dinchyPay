import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import * as Animatable from "react-native-animatable";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const CustomSplashScreen = ({ onLoad }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: duration,
        easing: easing,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    return () => rotateAnimation.stop();
  }, [rotateAnim]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoad();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  const animatedStyle = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInUp' duration={1000}>
        <StatusBar hidden />
        <Animated.View style={[styles.box, animatedStyle]}>
          <ImageBackground
            source={require("./assets/PayMobile.png")}
            style={styles.imageBackground}
            imageStyle={styles.image}
          />
        </Animated.View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0973",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  box: {
    height: 120,
    width: 120,
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default CustomSplashScreen;
