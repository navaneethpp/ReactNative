import {
  Dimensions,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputBox from "../components/UI/InputBox";
import Colors from "../constants/GlobalColors";
import { useState } from "react";
import Button from "../components/Login/Button";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LOGO</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Login</Text>
          <InputBox
            keyboardType={"email-address"}
            isPassword={false}
            value={email}
            onChangeText={setEmail}
          >
            Email
          </InputBox>
          <InputBox
            keyboardType="default"
            isPassword={true}
            value={password}
            onChangeText={setPassword}
          >
            Password
          </InputBox>
          <Button>Login</Button>

          <Pressable
            style={styles.signUp}
            onPress={() =>
              navigation.reset({ index: 0, routes: [{ name: "SignUp" }] })
            }
          >
            <Text style={styles.signUpText}>
              Don't have account? <Text style={{ color: "blue" }}>Sign Up</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;

const screenHeight = Dimensions.get("screen").height;

const titleFontSize = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 50,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 4,
  },
  title: {
    color: "white",
    fontSize: titleFontSize,
    fontWeight: "bold",
  },
  sectionContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.formBG,
    borderTopLeftRadius: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  sectionTitle: {
    fontSize: titleFontSize,
  },
  signUp: {
    top: 50,
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
