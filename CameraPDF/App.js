// App.js
// This is the main entry point of your Expo application.
// It sets up the navigation structure using React Navigation.

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text, StyleSheet } from "react-native";

// Import the screen components
// import PdfViewerScreen from "./screens/PdfViewerScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Create a Stack Navigator
const Stack = createStackNavigator();

// HomeScreen component: This is the initial screen where users can choose
// to navigate to the PDF Viewer or the User Profile.
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      {/* Button to navigate to the PDF Viewer screen */}
      {/* <Button
        title="View PDFs"
        // onPress={() => navigation.navigate("PdfViewer")}
      /> */}
      <View style={{ marginVertical: 10 }} /> {/* Spacer */}
      {/* Button to navigate to the User Profile screen */}
      <Button
        title="User Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

// Main App component: Wraps the entire application with NavigationContainer
// and defines the stack screens.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define the Home screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        {/* Define the PDF Viewer screen */}
        {/* <Stack.Screen
          name="PdfViewer"
          component={PdfViewerScreen}
          options={{ title: "PDF Viewer" }}
        /> */}
        {/* Define the User Profile screen */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "User Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333", // Dark grey text color
  },
});
