import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CIRCLE_RADIUS = 100; // Base radius
const CENTER_X = width / 2;
const CENTER_Y = 300;

const CircularTextAnimation = () => {
  const [currentTime, setCurrentTime] = useState("");
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current; // Opacity animation
  // const characters = [
  //   "あ",
  //   "い",
  //   "う",
  //   "え",
  //   "お",
  //   "か",
  //   "き",
  //   "く",
  //   "け",
  //   "こ",
  // ];
  const characters = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
  ];
  const circleCount = 3; // Number of concentric circles

  useEffect(() => {
    // Update the time every second
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const timerId = setInterval(updateTime, 1000);
    updateTime(); // Initial call

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      // Rotate and fade animation
      Animated.loop(
        Animated.parallel([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 6000, // Duration for a full rotation
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: 3000, // Fade in for the first half of the rotation
              useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
              toValue: 0,
              duration: 3000, // Fade out for the second half
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    };

    startAnimation();
  }, [rotateAnim, opacityAnim]);

  const renderCharacters = () => {
    const renderedCharacters = [];
    for (let i = 0; i < circleCount; i++) {
      const radius = CIRCLE_RADIUS + i * 30; // Increase radius for each circle
      const baseOpacity = 1 - i * 0.3; // Reduce base opacity for inner circles
      const fontSize = 24 - i * 4; // Reduce font size for inner circles

      characters.forEach((char, index) => {
        const angle = (index / characters.length) * 2 * Math.PI;
        const x = CENTER_X + radius * Math.cos(angle);
        const y = CENTER_Y + radius * Math.sin(angle);

        const rotateInterpolate = rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [`${angle}rad`, `${angle + 2 * Math.PI}rad`],
        });

        const animatedOpacity = opacityAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [baseOpacity * 0.5, baseOpacity], // Adjust fade range based on base opacity
        });

        renderedCharacters.push(
          <Animated.View
            key={`${i}-${index}`}
            style={[
              styles.charContainer,
              {
                transform: [
                  { translateX: x - CENTER_X },
                  { translateY: y - CENTER_Y },
                  { rotate: rotateInterpolate },
                ],
              },
            ]}
          >
            <Animated.Text
              style={[styles.char, { opacity: animatedOpacity, fontSize }]}
            >
              {char}
            </Animated.Text>
          </Animated.View>
        );
      });
    }
    return renderedCharacters;
  };

  return (
    <View style={styles.container}>
      {renderCharacters()}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  charContainer: {
    position: "absolute",
  },
  char: {
    fontWeight: "bold",
  },
  timeContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default CircularTextAnimation;
