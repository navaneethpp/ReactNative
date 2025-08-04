import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { getItemFor } from "../../util/StorageHelper";
import HomeScreen from "../HomeScreen/HomeScreen";
import FavoriteScreen from "../HomeScreen/FavoriteScreen";
import KartScreen from "../HomeScreen/KartScreen";
import NotificationScreen from "../HomeScreen/NotificationScreen";
import Colors from "../../constants/GlobalColors";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

function HomeScreenContainer() {
  // const [userName, setUserName] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const storedName = await getItemFor("name");
  //     console.log("Stored Name:", storedName);
  //     if (storedName) setUserName(storedName);
  //   };

  //   getData();
  // }, []);

  return (
    // <View style={styles.container}>
    //   <Text>{userName}</Text>
    //   <Text>Welcome</Text>
    // </View>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: "shift",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBar}>
              <Ionicons
                name="home"
                color={focused ? Colors.buttonBG : Colors.inactiveColor}
                size={24}
              />
              {focused && <View style={styles.bar}></View>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBar}>
              <Ionicons
                name="heart-half-outline"
                color={focused ? Colors.buttonBG : Colors.inactiveColor}
                size={28}
              />
              {focused && <View style={styles.bar}></View>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="KartScreen"
        component={KartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBar}>
              <Ionicons
                name="bag"
                color={focused ? Colors.buttonBG : Colors.inactiveColor}
                size={28}
              />
              {focused && <View style={styles.bar}></View>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconBar}>
              <Ionicons
                name="notifications"
                color={focused ? Colors.buttonBG : Colors.inactiveColor}
                size={28}
              />
              {focused && <View style={styles.bar}></View>}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreenContainer;

const styles = StyleSheet.create({
  iconBar: {
    gap: 3,
    alignItems: "center",
  },
  bar: {
    width: 20,
    height: 5,
    backgroundColor: Colors.buttonBG,
    borderRadius: 24,
    elevation: 2,
  },
});
