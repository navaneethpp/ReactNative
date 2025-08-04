import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => setCount(count - 1)}>Decrement</Button>
        <Button onPress={() => setCount(count + 1)}>Increment</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 100,
  },
  title: {
    fontSize: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 30,
  },
});
