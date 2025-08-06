import { Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";

import users from "../data/users";
import TopNavigation from "../components/TopNavigation";
import UserImage from "../components/UserImage";
import ContactBar from "../components/ContactBar";
import ContactContainerInfo from "../components/ContactContainerInfo";
import AboutContainer from "../components/AboutContainer";

const UserDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const user = users.find((item) => item.id === id);

  useEffect(() => {
    ToastAndroid.show(`${user.name} is opened`, ToastAndroid.BOTTOM);

    return () => {
      ToastAndroid.show("Returning to Home", ToastAndroid.BOTTOM);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation navigation={navigation} name={user.name} />

      <ScrollView persistentScrollbar={false}>
        <UserImage image={user.image} />

        <Text style={styles.name}>{user.name}</Text>

        <ContactBar />

        <ContactContainerInfo phoneNumber={user.phone} email={user.email} />

        <AboutContainer
          address={user.address}
          job={user.job}
          anniversary={user.anniversary}
          birthday={user.birthday}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 36,
    textAlign: "center",
  },
});
