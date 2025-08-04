import { Animated, Text, StyleSheet, Pressable, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "react-native";

const DateAndTime = () => {
  // Time state
  const [currentHour, setCurrentHour] = useState("00");
  const [currentMinutes, setCurrentMinutes] = useState("00");
  const [currentSeconds, setCurrentSeconds] = useState("00");

  // Theme and default gradient
  const colorScheme = useColorScheme();
  const defaultStart = colorScheme === "dark" ? "#B15B86" : "#61F4DE";
  const defaultEnd = colorScheme === "dark" ? "#4A148C" : "#6E78FF";

  // Font size animations
  const hourFontAnim = useRef(new Animated.Value(48)).current;
  const minutesFontAnim = useRef(new Animated.Value(48)).current;
  const secondsFontAnim = useRef(new Animated.Value(48)).current;

  // Gradient crossfade animation
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  // Update time every second
  const updateTime = () => {
    const now = new Date();
    setCurrentHour(now.getHours().toString().padStart(2, "0"));
    setCurrentMinutes(now.getMinutes().toString().padStart(2, "0"));
    setCurrentSeconds(now.getSeconds().toString().padStart(2, "0"));
  };

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const animateFontSize = (animRef, isLarge) => {
    Animated.timing(animRef, {
      toValue: isLarge ? 144 : 48,
      duration: 800,
      useNativeDriver: false,
    }).start(() => {
      checkAllLarge();
    });
  };

  const checkAllLarge = () => {
    const isHourLarge = Math.round(hourFontAnim._value) === 144;
    const isMinutesLarge = Math.round(minutesFontAnim._value) === 144;
    const isSecondsLarge = Math.round(secondsFontAnim._value) === 144;

    Animated.timing(overlayOpacity, {
      toValue: isHourLarge && isMinutesLarge && isSecondsLarge ? 1 : 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Default Gradient */}
      <LinearGradient
        colors={[defaultStart, defaultEnd]}
        start={{ x: 0.1, y: 0.11 }}
        end={{ x: 1, y: 0.7 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Overlay Gradient (golden-pink) with animated opacity */}
      <Animated.View
        style={[StyleSheet.absoluteFill, { opacity: overlayOpacity }]}
      >
        <LinearGradient
          colors={["#F5E6AD", "#F13C77"]}
          start={{ x: 0.1, y: 0.11 }}
          end={{ x: 1, y: 0.7 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      {/* Time Text */}
      <Pressable
        onPress={() =>
          animateFontSize(hourFontAnim, Math.round(hourFontAnim._value) === 48)
        }
      >
        <Animated.Text style={[styles.timeText, { fontSize: hourFontAnim }]}>
          {currentHour}
        </Animated.Text>
      </Pressable>
      <Pressable
        onPress={() =>
          animateFontSize(
            minutesFontAnim,
            Math.round(minutesFontAnim._value) === 48
          )
        }
      >
        <Animated.Text style={[styles.timeText, { fontSize: minutesFontAnim }]}>
          {currentMinutes}
        </Animated.Text>
      </Pressable>
      <Pressable
        onPress={() =>
          animateFontSize(
            secondsFontAnim,
            Math.round(secondsFontAnim._value) === 48
          )
        }
      >
        <Animated.Text style={[styles.timeText, { fontSize: secondsFontAnim }]}>
          {currentSeconds}
        </Animated.Text>
      </Pressable>
    </View>
  );
};

export default DateAndTime;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  timeText: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
});
