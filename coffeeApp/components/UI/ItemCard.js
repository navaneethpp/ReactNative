import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import IconButton from "./IconButton";
import Colors from "../../constants/GlobalColors";

function ItemCard({ title, image, description, price, rating }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.row}>
          <Text style={styles.title}>$ {price}</Text>
          <IconButton
            name="add"
            color="white"
            bgColor={Colors.buttonBG}
            size={24}
          />
        </View>
      </View>
      <View style={styles.rating}>
        <Ionicons name="star" color="#f1b621" size={24} />
        <Text style={[styles.title, { color: "white" }]}>{rating}</Text>
      </View>
    </View>
  );
}

export default ItemCard;

const screenHeight = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 230,
    borderRadius: 24,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
    borderRadius: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    color: "#9b9b9bff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dataContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  rating: {
    position: "absolute",
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#00000062",
    gap: 8,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});
