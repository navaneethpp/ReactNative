import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";

import Header from "../../components/HomeScreen/Header";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../../components/HomeScreen/SearchBar";
import SegmentControl from "../../components/HomeScreen/SegmentControl";
import { cappuccinoVarieties } from "../../data/Cappuccino";
import { coffeeTypes } from "../../data/coffeeTypes";
import ItemCard from "../../components/UI/ItemCard";
import { MacchiatoVarieties } from "../../data/MacchiatoVarieties";
import { latteVarieties } from "../../data/Latte";
import { americanoVarieties } from "../../data/AmericanoVarieties";
import { flatWhiteVarieties } from "../../data/FlatWhiteVarieties";
import { mochaVarieties } from "../../data/MochaVarieties";

function HomeScreen() {
  const [search, setSearch] = useState();
  const [activeSegmentControl, setActiveSegmentControl] =
    useState("Cappuccino");

  const [activeSegment, setActiveSegment] = useState(cappuccinoVarieties);

  const itemHandler = (item) => {
    if (item == "Cappuccino") setActiveSegment(cappuccinoVarieties);
    else if (item == "Machiato") setActiveSegment(MacchiatoVarieties);
    else if (item == "Latte") setActiveSegment(latteVarieties);
    else if (item == "Americano") setActiveSegment(americanoVarieties);
    else if (item == "Flat White") setActiveSegment(flatWhiteVarieties);
    else if (item == "Mocha") setActiveSegment(mochaVarieties);
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <LinearGradient
          colors={["#161616", "#696868ff"]}
          style={styles.linearGradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Header />
          <SearchBar value={search} onChangeText={setSearch}>
            Search Coffee
          </SearchBar>
        </LinearGradient>

        <View style={styles.segmentContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {coffeeTypes.map((type) => (
              <SegmentControl
                key={type}
                onPress={() => {
                  setActiveSegmentControl(type);
                  itemHandler(type);
                }}
                activeSegmentControl={activeSegmentControl}
              >
                {type}
              </SegmentControl>
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={activeSegment}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <ScrollView>
                <ItemCard
                  title={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                />
              </ScrollView>
            )}
          />
        </View>
        <Pressable style={styles.promoImage}>
          <Image source={require("../../assets/img/promoImg.png")} />
        </Pressable>
      </View>
    </>
  );
}

export default HomeScreen;

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  linearGradient: {
    gap: 30,
    paddingVertical: 100,
    paddingHorizontal: 50,
    height: screenHeight * 0.36,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  promoImage: {
    width: "80%",
    resizeMode: "cover",
    alignSelf: "center",
    position: "absolute",
    marginTop: screenHeight * 0.29,
    top: 0,
    borderRadius: 24,
    elevation: 8,
    backgroundColor: "transparent",
  },
  segmentContainer: {
    marginTop: screenHeight * 0.101,
    marginBottom: 8,
    justifyContent: "flex-start",
  },
  itemContainer: {
    flex: 1,
  },
});
