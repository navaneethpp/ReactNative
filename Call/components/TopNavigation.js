import { View, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";

const TopNavigation = ({ navigation, name }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (isFavorite) {
      ToastAndroid.show(`${name} is added to favorites`, ToastAndroid.BOTTOM);
    } else {
      ToastAndroid.show(
        `${name} is removed from favorites`,
        ToastAndroid.BOTTOM
      );
    }
  }, [isFavorite]);

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
