import { StyleSheet, Text, View } from "react-native";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
