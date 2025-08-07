import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserDetailsScreen from "./screens/UserDetailsScreen";
import ContactListScreen from "./screens/ContactListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ContactListScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
