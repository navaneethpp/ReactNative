import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalColors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

function Header({ backButton = false }) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <View style={styles.sideContainer}>
        {backButton && (
          <Pressable
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.pressed,
            ]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </Pressable>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TodoRama</Text>
      </View>
      <View style={styles.sideContainer}></View>
    </View>
  );
}

export default Header;

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: screenHeight * 0.12,
    backgroundColor: GlobalColors.Colors.primaryBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  pressed: {
    opacity: 0.6,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  sideContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    paddingHorizontal: 10,
  },
});
