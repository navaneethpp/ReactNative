import { StyleSheet, Text, View } from "react-native";

function ColorBox({ color, children, selection }) {
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.container,
          { backgroundColor: color },
          selection && styles.selection,
        ]}
      ></View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default ColorBox;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  container: {
    height: 40,
    width: 100,
  },
  selection: {
    borderWidth: 5,
    borderColor: "grey",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
