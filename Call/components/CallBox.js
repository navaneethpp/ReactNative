import {
  Image,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import UserImage from "./UserImage";

function CallBox({ name, mobileNumber, id, navigation, image }) {
  function callHandler(phone) {
    let number = "";

    if (Platform.OS === "ios") {
      number = `telprompt:${mobileNumber}`;
    } else {
      number = `tel:${mobileNumber}`;
    }

    Linking.openURL(number);
  }

  return (
    <Pressable
      android_ripple={{ color: "#bfe0b6ff" }}
      style={styles.container}
      onPress={() => {
        navigation.navigate("UserDetail", { id: id });
      }}
    >
      {/* <Image source={{ uri: image }} style={styles.image} /> */}
      <UserImage image={image} size={70} />

      <View style={styles.subContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={[styles.phoneNumber, styles.text]}>{mobileNumber}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: "#ffffff7a" }}
        onPress={callHandler}
      >
        <Text style={styles.btnText}>Call</Text>
      </Pressable>
    </Pressable>
  );
}

export default CallBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 90,
    marginBottom: 8,
    elevation: 4,
  },
  subContainer: {
    flex: 2,
    paddingHorizontal: 12,
    gap: 10,
  },
  text: {
    fontSize: 20,
  },
  phoneNumber: {
    color: "#2ab807",
  },
  button: {
    height: 40,
    width: 70,
    backgroundColor: "#2ab807",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "cover",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "black",
  },
});
