import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/core";

import CallBox from "../components/CallBox";
import users from "../data/users";

export default function ContactListScreen({ navigation }) {
  const userData = [...users].sort((a, b) => a.name.localeCompare(b.name));

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Alert.alert("Information", `${users.length} contacts added`);
    }
  }, [isFocused]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Total Contacts: {userData.length}</Text> */}

        <FlatList
          data={userData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CallBox
              name={item.name}
              mobileNumber={item.phone}
              id={item.id}
              image={item.image}
              navigation={navigation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    marginBottom: 48,
    gap: 10,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
  },
});
