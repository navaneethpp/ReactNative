import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

function CircularPlace({ image, title, country, navigation }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.75 }]}
    >
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={{ color: Colors.primary, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ color: "#ffffffc2" }}>{country}</Text>
    </Pressable>
  );
}

export default CircularPlace;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 8,
  },
});
