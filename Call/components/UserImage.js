import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const UserImage = ({ image, size = 200 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: image }}
          style={styles.image}
          width={size}
          height={size}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserImage;

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    borderRadius: screenHeight * 0.5,
  },
  container: {
    alignItems: "center",
    paddingVertical: 24,
  },
});
