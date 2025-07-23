import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/GlobalColors";

function Button({ children, navigation }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={navigation}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    marginTop: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  container: {
    width: "90%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
