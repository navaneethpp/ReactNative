import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState("0");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => setCount(count - 1)}
        >
          <Ionicons name="remove-outline" size={34} color={"white"} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => setCount(count + 1)}
        >
          <Ionicons name="add" size={34} color={"white"} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 250,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 150,
    color: "white",
  },
  buttonContainer: {
    flex: 4,
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-around",
    gap: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingVertical: 35,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
