import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { touristPlaces } from "../data/touristPlaces";

export default function PlaceTile({ placeId, onPress }) {
  const place = touristPlaces.find((item) => item.id === placeId);

  if (!place) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: place.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.title}>
            {place.name}, {place.country}
          </Text>
          <Text>{place.description}</Text>
        </View>
        <View style={styles.endContainer}>
          <Text>
            {place.expense} {place.currency}
          </Text>
          <View style={styles.rowContainer}>
            <Ionicons name="star" color="#e0a639" size={24} />
            <Text>{place.userRating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  middleContainer: {
    flex: 2,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  endContainer: {
    flex: 1,
    alignItems: "flex-end",
    gap: 2,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
