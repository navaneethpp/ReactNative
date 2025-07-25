import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/GlobalColors";
import InputBox from "../components/UI/InputBox";
import { use, useEffect, useState } from "react";
import Button from "../components/Login/Button";
import { getItemFor, storeData } from "../util/StorageHelper";

function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberValidation, setPhoneNumberValidation] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState();

  useEffect(() => {
    const isNameValid = /^[a-zA-Z]+$/.test(name);
    let isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
      email
    );
    let isPhoneNumberValid = /^[0-9]{2,}$/.test(phoneNumber);

    if (email.length < 3) {
      isEmailValid = true;
    }

    setNameValidation(name == "" ? true : isNameValid);
    setEmailValidation(email == "" ? true : isEmailValid);
    setPhoneNumberValidation(phoneNumber == null ? true : isPhoneNumberValid);
    setConfirmPasswordValidation(password === confirmPassword ? true : false);
  }, [name, email, phoneNumber, password, confirmPassword]);

  const signUpButtonHandler = () => {
    if (email.length < 3) {
      Alert.alert("Validation Error", "Fill the fields carefully.");
    } else {
      storeData("email", email);
      storeData("name", name);
      storeData("HAS_LAUNCHED", "true");
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" color="white" size={24} />
        </Pressable>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.curvedContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.formContainer}>
                <InputBox
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                  validationMessage="Enter a valid name"
                  validation={nameValidation}
                >
                  Name
                </InputBox>

                <InputBox
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                  validationMessage="Enter a valid Email"
                  validation={emailValidation}
                >
                  Email
                </InputBox>

                <InputBox
                  keyboardType="number-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  validationMessage="Enter a valid Indian Number"
                  validation={phoneNumberValidation}
                >
                  Phone Number
                </InputBox>

                <InputBox
                  isPassword={true}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                >
                  Password
                </InputBox>

                <InputBox
                  isPassword={true}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  validationMessage="Oops! Your passwords don’t match. Please check and try again."
                  validation={confirmPasswordValidation}
                >
                  Confirm Password
                </InputBox>

                <Button
                  style={{ width: "100%" }}
                  navigation={signUpButtonHandler}
                >
                  Sign Up
                </Button>

                <Pressable
                  style={({ pressed }) => [
                    styles.login,
                    pressed && styles.pressed,
                  ]}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={{ textAlign: "center" }}>
                    Already have an account?{" "}
                    <Text style={{ color: "blue" }}>Log in</Text>
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SignUp;

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.signUpBG,
  },
  header: {
    width: "100%",
    height: screenHeight / 5,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 30,
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    overflow: "hidden",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: screenHeight / 20,
    paddingVertical: screenHeight / 15,
  },
  pressed: {
    opacity: 0.75,
  },
  login: {
    paddingVertical: 16,
  },
});
