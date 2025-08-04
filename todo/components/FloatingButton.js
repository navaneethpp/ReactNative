import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { GlobalColors } from "../constants/Colors";

function FloatingButton() {
  return (
    <View style={styles.floatingButton}>
      <Ionicons name="add" size={24} color="white" />
    </View>
  );
}

export default FloatingButton;

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: GlobalColors.Colors.primaryBlue,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
