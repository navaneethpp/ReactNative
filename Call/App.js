import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert } from "react-native";

import UserDetailsScreen from "./screens/UserDetailsScreen";
import ContactListScreen from "./screens/ContactListScreen";
import users from "./data/users";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    Alert.alert("Information", `${users.length} contacts added`);
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ContactListScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
