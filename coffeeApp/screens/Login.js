import {
  Alert,
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
import { useEffect, useState } from "react";
import Button from "../components/Login/Button";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  useEffect(() => {
    // Email validation
    let isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
      email
    );

    if (email.length < 3) {
      isEmailValid = true;
    }

    setEmailValidation(email == "" ? true : isEmailValid);
  }, [email]);

  const loginHandler = () => {
    if (email.length === 0 && password.length === 0) {
      Alert.alert("Login Failed", "You need to fill email and password field");
    } else if (email.length === 0 && password.length > 0) {
      Alert.alert("Login Failed", "You need to fill the email field.");
    } else if (email.length > 0 && password.length === 0) {
      Alert.alert("Login Failed", "You ned to fill the password field.");
    } else if (!emailValidation) {
      Alert.alert("Login Failed", "You need to enter valid email id.");
    } else if (emailValidation && password.length > 0) {
      navigation.navigate("HomeScreen");
    }
  };

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
            validationMessage="Enter a valid email"
            validation={emailValidation}
            autoCapitalize="none"
          >
            Email
          </InputBox>
          <InputBox
            isPassword={true}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          >
            Password
          </InputBox>
          <Button navigation={loginHandler}>Login</Button>

          <Pressable
            style={({ pressed }) => [styles.signUp, pressed && styles.pressed]}
            onPress={() => navigation.navigate("SignUp")}
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
    height: screenHeight / 5,
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
  pressed: {
    opacity: 0.75,
  },
});
