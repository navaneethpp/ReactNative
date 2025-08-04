import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../constants/Colors";

function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.placeholder}>Search</Text>
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SearchBar;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  searchBar: {
    width: screenWidth * 0.8,
    height: 60,
    backgroundColor: GlobalColors.Colors.lightBlue,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  placeholder: {
    color: "white",
    fontSize: 18,
    flex: 1,
  },
  searchButton: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  searchText: {
    color: GlobalColors.Colors.primaryBlue,
    fontSize: 16,
    fontWeight: "500",
  },
});
