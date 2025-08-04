import { Pressable, StyleSheet, Text } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 5,
  },
  pressed: {
    opacity: 0.5,
  },

  text: {
    fontSize: 18,
  },
});
