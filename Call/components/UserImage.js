import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const UserImage = ({ image, size = 200, isBoarderShow = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={isBoarderShow && styles.innerContainer}>
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

  innerContainer: {
    width: 216,
    height: 216,
    borderRadius: 108,
    borderWidth: 5,
    borderColor: "#c4c4c4ff",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
