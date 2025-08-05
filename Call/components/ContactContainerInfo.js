import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ContactContainerInfo = ({ phoneNumber, email }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Info</Text>

      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <MaterialIcons name="call" color="black" size={24} />
        </TouchableOpacity>

        <View style={styles.centerConsole}>
          <Text>{phoneNumber}</Text>
          <Text style={styles.subtitle}>Mobile</Text>
        </View>

        <View style={styles.rightConsole}>
          <TouchableOpacity>
            <MaterialIcons name="videocam" color="black" size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="chat" color="black" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <MaterialIcons name="email" color="black" size={24} />
        <View>
          <Text>{email}</Text>
          <Text style={styles.subtitle}>Personal</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactContainerInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c4e7ffc2",
    padding: 12,
    borderRadius: 4,
    gap: 12,
  },
  title: {
    fontSize: 20,
  },
  innerContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  centerConsole: {
    flex: 2,
  },
  subtitle: {
    fontWeight: 300,
  },
  rightConsole: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 8,
  },
});
