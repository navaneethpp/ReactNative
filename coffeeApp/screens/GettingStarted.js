import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../constants/GlobalColors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GettingStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/image_3.png")}
        style={styles.bgImage}
      >
        <Text style={styles.title} numberOfLines={3}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          The best grain, the finest roast, the powerful flavour.
        </Text>

        <PrimaryButton navigation={() => navigation.navigate("Login")}>
          Get Started
        </PrimaryButton>
      </ImageBackground>
    </View>
  );
}

export default GettingStarted;

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: screenHeight / 1.6,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingBottom: screenHeight / 12,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    paddingHorizontal: 32,
    textAlign: "center",
  },
  subtitle: {
    color: Colors.subtitle,
    fontSize: 20,
    paddingHorizontal: 40,
    textAlign: "center",
  },
});
