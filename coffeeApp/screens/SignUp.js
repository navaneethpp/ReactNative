import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
