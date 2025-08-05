import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AboutContainer = ({ address, job, anniversary, birthday }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>More Info</Text>

      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <MaterialIcons name="home" color="black" size={24} />
        </TouchableOpacity>

        <View style={styles.centerConsole}>
          <Text>{address}</Text>
          <Text style={styles.subtitle}>Address</Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <MaterialIcons name="business-center" color="black" size={24} />
        <View>
          <Text>{job}</Text>
          <Text style={styles.subtitle}>Job</Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <MaterialIcons name="cake" color="black" size={24} />
        <View>
          <Text>{birthday}</Text>
          <Text style={styles.subtitle}>Birthday</Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <MaterialIcons name="today" color="black" size={24} />
        <View>
          <Text>{anniversary}</Text>
          <Text style={styles.subtitle}>Anniversary</Text>
        </View>
      </View>
    </View>
  );
};

export default AboutContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c4e7ffc2",
    padding: 12,
    borderRadius: 4,
    gap: 12,
    marginVertical: 24,
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
});
