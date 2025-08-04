import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

function IconButton({ name, color, size, bgColor }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Ionicons name={name} color={color} size={size} />
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
