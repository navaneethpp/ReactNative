import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CircularIcon({ icon, label }) {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", marginHorizontal: 8, marginBottom: 50 }}
    >
      <View style={styles.mainContainer}>
        <MaterialIcons name={icon} color="white" size={32} />
      </View>
      <Text numberOfLines={2}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: "50%",
    height: 60,
    width: 60,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
