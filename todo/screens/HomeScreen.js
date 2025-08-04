import { Dimensions, StyleSheet, View } from "react-native";

import Header from "../components/Header";
import { GlobalColors } from "../constants/Colors";
import FloatingButton from "../components/FloatingButton";
import SearchBar from "../components/Searchbar";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header backButton={false} />
      <SearchBar />
      <View style={styles.dataContainer}></View>
      <FloatingButton />
    </View>
  );
}

export default HomeScreen;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: GlobalColors.Colors.primaryBlue,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    borderTopLeftRadius: screenWidth * 0.1,
    borderTopRightRadius: screenWidth * 0.1,
    elevation: 4,
  },
});
