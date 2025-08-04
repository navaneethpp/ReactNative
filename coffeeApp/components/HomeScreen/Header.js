import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const locationList = [
  { key: "1", value: "Paris, France" },
  { key: "2", value: "New York City, USA" },
  { key: "3", value: "Tokyo, Japan" },
  { key: "4", value: "Cairo, Egypt" },
  { key: "5", value: "Sydney, Australia" },
  { key: "6", value: "Rio de Janeiro, Brazil" },
  { key: "7", value: "Cape Town, South Africa" },
  { key: "8", value: "Rome, Italy" },
  { key: "9", value: "Istanbul, Turkey" },
  { key: "10", value: "Kochi, Kerala, India" },
];

function Header() {
  const getRandomLocation = () => {
    const randomIndex = Math.floor(Math.random() * locationList.length);
    return locationList[randomIndex].value;
  };

  const [selectedLocation, setSelectedLocation] = useState(getRandomLocation());

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white" }}>Location</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{selectedLocation}</Text>
          <Ionicons name="chevron-down-outline" color="white" size={16} />
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/img/profile.jpg")}
          style={styles.profilePicture}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  location: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 16,
  },
});
