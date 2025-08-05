import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const TopNavigation = ({ navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" color="black" size={24} />
      </TouchableOpacity>

      <View style={styles.rightSideContainer}>
        <TouchableOpacity>
          <MaterialIcons name="edit" color="black" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialIcons
            name={!isFavorite ? "star-outline" : "star"}
            color={!isFavorite ? "black" : "#fcd12a"}
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="settings" color="black" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  rightSideContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
