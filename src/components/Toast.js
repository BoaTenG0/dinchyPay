import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Toast = React.forwardRef(({ duration = 400, onHide, left = 0 }, ref) => {
  const [textLength, setTextLength] = useState(0);
  const [toastHeight, setToastHeight] = useState(0);
  const [config, setConfig] = useState({
    text: undefined,
    type: undefined,
    duration: 0,
  });
  const visibleState = useRef(false);
  const timer = useRef(null);

  const transY = useRef(new Animated.Value(-80)).current;
  const transX = useRef(new Animated.Value(0)).current;

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  useEffect(() => {
    if (textLength && toastHeight && config.text) {
      transX.setValue(textLength + 12);
      showToast();
      timer.current = setTimeout(() => {
        hideToast();
      }, 4000);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [config, toastHeight, textLength]);

  const containerStyle = {
    transform: [{ translateY: transY }],
    opacity: transY.interpolate({
      inputRange: [-toastHeight, 80],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  const outerContainerStyle = {
    transform: [{ translateX: Animated.multiply(transX, -0.5) }],
  };

  const innerContainerStyle = {
    transform: [{ translateX: transX }],
  };

  const textStyle = {
    opacity: transX.interpolate({
      inputRange: [0, textLength],
      outputRange: [1, 0],
    }),
  };

  return (
    <Animated.View
      onLayout={handleViewLayout}
      style={[styles.container, containerStyle, { left }]}
    >
      <Animated.View style={[styles.outerContainer, outerContainerStyle]}>
        <Animated.View
          style={[
            styles.innerContainer,
            innerContainerStyle,
            { backgroundColor: generateBackgroundColor() },
          ]}
        >
          <Image source={generateImage()} style={styles.image} />
          <Animated.Text
            onLayout={handleTextLayout}
            style={[styles.text, textStyle]}
          >
            {config?.text}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );

  function show(text, type, duration) {
    setConfig({ text, type, duration });
  }

  function hide(callback) {
    hideToast(callback);
  }

  function generateImage() {
    if (config?.type === "success") {
      return require("../../assets/success.png");
    } else if (config?.type === "error") {
      return require("../../assets/errorX.png");
    } else {
      return require("../../assets/info.png");
    }
  }

  function generateBackgroundColor() {
    if (config?.type === "success") {
      return "#1f8503";
    } else if (config?.type === "error") {
      return "#f00a1d";
    } else {
      return "#0077ed";
    }
  }

  function showToast() {
    if (!visibleState.current) {
      visibleState.current = true;
      Animated.timing(transY, {
        toValue: 80,
        duration: config.duration,
        useNativeDriver: true,
      }).start();

      Animated.timing(transX, {
        toValue: 0,
        duration: config.duration,
        delay: config.duration,
        useNativeDriver: true,
      }).start();
    }
  }

  function hideToast(callback) {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    Animated.timing(transX, {
      toValue: textLength + 12,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(transY, {
      toValue: -toastHeight,
      duration: config.duration,
      easing: Easing.bezier(0.36, 0, 0.66, -0.56), // Use Easing.bezier for a similar effect
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        handleOnFinish(callback);
      }
    });
  }

  function handleOnFinish(callback) {
    setConfig({
      text: undefined,
      type: undefined,
      duration: 0,
    });
    if (onHide) {
      onHide();
    }
    if (callback) {
      setTimeout(() => {
        callback();
      }, 100);
    }
    visibleState.current = false;
  }

  function handleTextLayout(event) {
    if (textLength !== event.nativeEvent.layout.width) {
      setTextLength(Math.floor(event.nativeEvent.layout.width));
    }
  }

  function handleViewLayout(event) {
    if (toastHeight !== event.nativeEvent.layout.height) {
      setToastHeight(event.nativeEvent.layout.height);
    }
  }
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    zIndex: 100,
    marginHorizontal: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  outerContainer: {
    overflow: "hidden",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 40,
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 12,
    textAlign: "center",
  },
});

export default Toast;
