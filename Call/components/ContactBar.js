import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ContactBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonHolder}>
          <MaterialIcons name="call" color="black" size={24} />
        </TouchableOpacity>

        <Text>Call</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonHolder}>
          <MaterialIcons name="chat" color="black" size={24} />
        </TouchableOpacity>

        <Text>Message</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonHolder}>
          <MaterialIcons name="videocam" color="black" size={24} />
        </TouchableOpacity>

        <Text>Video</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonHolder}>
          <MaterialIcons name="mail" color="black" size={24} />
        </TouchableOpacity>

        <Text>Email</Text>
      </View>
    </View>
  );
};

export default ContactBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 28,
    paddingVertical: 16,
    justifyContent: "center",
  },
  buttonHolder: {
    backgroundColor: "#c4e7ff",
    padding: 12,
    borderRadius: "50%",
  },
  buttonContainer: {
    alignItems: "center",
    gap: 8,
  },
});
