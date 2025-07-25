import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getItemFor } from "../util/StorageHelper";

function HomeScreen() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const getData = async () => {
      const storedName = await getItemFor("name");
      console.log("Stored Name:", storedName);
      if (storedName) setUserName(storedName);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <Text>Welcome</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
