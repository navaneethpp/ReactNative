import { ActivityIndicator, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import GettingStarted from "./screens/GettingStarted";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import { getItemFor, storeData } from "./util/StorageHelper";

const Stack = createNativeStackNavigator();

const HAS_LAUNCHED = "HAS_LAUNCHED";

export default function App() {
  const [hasLaunched, setHasLaunched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const hasLaunched = await getItemFor(HAS_LAUNCHED);

      if (hasLaunched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, "true");
        console.log("stored");
      }
    };

    getData().catch((error) => {
      console.log(error);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      <NavigationContainer>
        {isLoading && <ActivityIndicator size="large" color="red" />}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {hasLaunched ? (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          ) : (
            <Stack.Screen name="GettingStarted" component={GettingStarted} />
          )}

          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
