import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { ImageBackground, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import people from "../data/people";
import { touristPlaces } from "../data/touristPlaces";
import { Colors } from "../constants/colors";
import SearchBar from "../components/SearchBar";
import CircularPlace from "../components/CircularPlace";
import PlaceTile from "../components/PlaceTile";

function HomeScreen({ navigation }) {
  const getRandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    return people[randomIndex].name;
  };

  const [person, setPerson] = useState(getRandomPerson());
  const [search, setSearch] = useState("");

  return (
    <ImageBackground
      source={require("../assets/img/bg.png")}
      style={styles.img}
    >
      <SafeAreaView>
        <Text style={styles.nameText}>Hi, {person}!</Text>
        <Text style={styles.title}>Where do you</Text>
        <Text style={styles.title}>want to go?</Text>
        <Text style={styles.nameText}>
          We filter out a best place for your next vacation
        </Text>

        <SearchBar icon="search" value={search} onChangeText={setSearch}>
          Search city
        </SearchBar>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.isArray(touristPlaces) &&
            touristPlaces.map((place) => (
              <CircularPlace
                key={place.id}
                image={place.imageUrl}
                title={place.name}
                country={place.country}
              />
            ))}
        </ScrollView>

        <View style={styles.youMightLike}>
          <Text style={styles.templateTitle}>You might like!</Text>
          <FlatList
            data={touristPlaces}
            keyExtractor={(place) => place.id.toString()}
            renderItem={({ item }) => (
              <PlaceTile
                placeId={item.id}
                onPress={() => {
                  navigation.navigate("PlaceScreen", { placeId: item.id });
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default HomeScreen;

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  nameText: {
    color: Colors.primary,
    fontSize: 16,
  },
  title: {
    fontFamily: "primary",
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  youMightLike: {
    height: screenHeight * 0.49,
    backgroundColor: Colors.primary,
    borderRadius: 35,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  templateTitle: {
    fontSize: 24,
    fontFamily: "primary",
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});
