import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Share } from "react-native";
import { useState } from "react";

import { touristPlaces } from "../data/touristPlaces";
import { Colors } from "../constants/colors";
import CircularIcon from "../components/CircularIcon";
import PlaceTile from "../components/PlaceTile";

function PlaceScreen({ route, navigation }) {
  const { placeId } = route.params;
  const place = touristPlaces.find((item) => item.id === placeId);

  const [saved, setSaved] = useState(false);

  const saveText = saved ? "Saved" : "Save";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I just find a awesome place named ${place.name}. Can we plan a trip?`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const openMap = (latitude, longitude) => {
    const latLng = `${latitude},${longitude}`;
    const label = "Selected location";

    let url = "";

    if (Platform.OS === "ios") {
      url = `http://maps.apple.com/?ll=${latLng}&q=${label}`;
    } else {
      url = `geo:${latLng}?q=${latLng}(${label})`;
    }

    Linking.openURL(url).catch((err) =>
      Alert.alert("Error Occurred", `${err}`)
    );
  };

  return (
    <ImageBackground
      source={require("../assets/img/bg.png")}
      style={styles.mainContainer}
    >
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.roundedContainer}
            onPress={() => navigation.goBack("")}
          >
            <Ionicons name="arrow-back" color="black" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>City Details</Text>

          <TouchableOpacity style={styles.roundedContainer} onPress={onShare}>
            <Ionicons name="share-social" color="black" size={24} />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Image source={{ uri: place.imageUrl }} style={styles.image} />
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleBar}>
              <View>
                <Text style={styles.sectionTitle}>{place.name}</Text>
                <Text style={styles.sectionSubtitle}>{place.country}</Text>
              </View>
              <View style={styles.sectionController}>
                <TouchableOpacity
                  style={[
                    styles.roundedContainer,
                    { backgroundColor: "#f2c449" },
                  ]}
                  onPress={() =>
                    openMap(place.location.lat, place.location.lng)
                  }
                >
                  <Ionicons name="location" color="black" size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSaved(!saved)}
                  style={styles.saved}
                >
                  <Ionicons
                    name="heart"
                    color={saved ? "red" : "white"}
                    size={24}
                  />

                  <Text style={{ color: saved ? "red" : "white" }}>
                    {saveText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text numberOfLines={2} style={{ fontWeight: 300 }}>
                {place.description}
              </Text>
            </View>

            <View style={styles.horizontalRuler}></View>

            <View style={styles.dataContainer}>
              <View style={styles.highlightContainer}>
                <Text style={styles.highlightHead}>{place.population}</Text>
                <Text style={styles.highlightText}>Population</Text>
              </View>

              <View style={styles.verticalRuler}></View>

              <View style={styles.highlightContainer}>
                <Text style={styles.highlightHead}>{place.language}</Text>
                <Text style={styles.highlightText}>Language</Text>
              </View>

              <View style={styles.verticalRuler}></View>

              <View style={styles.highlightContainer}>
                <Text style={styles.highlightHead}>{place.currency}</Text>
                <Text style={styles.highlightText}>Currency</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.youMightLike}>
          <Text style={styles.templateTitle}>Things To Do</Text>

          <FlatList
            horizontal={true}
            data={place.thingsToDo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CircularIcon icon={item.icon} label={item.label} />
            )}
          />

          <Text style={styles.templateTitle}>Must Visit</Text>

          <FlatList
            data={touristPlaces}
            style={{ paddingVertical: 8 }}
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

export default PlaceScreen;

const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  roundedContainer: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 6,
    borderColor: Colors.primary,
    position: "absolute",
    zIndex: 1,
    marginHorizontal: screenHeight * 0.02,
  },
  sectionContainer: {
    backgroundColor: Colors.primary,
    marginTop: screenHeight * 0.06,
    paddingTop: screenHeight * 0.08,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 24,
    borderRadius: 24,
  },
  sectionTitleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  sectionController: {
    flexDirection: "row",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  sectionSubtitle: {
    fontSize: 20,
    fontWeight: 200,
  },
  saved: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginHorizontal: 8,
    borderRadius: 24,
    gap: 8,
  },
  horizontalRuler: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "center",
    marginVertical: 8,
    width: "100%",
  },
  verticalRuler: {
    borderColor: "black",
    borderRightWidth: StyleSheet.hairlineWidth,
    alignSelf: "center",
    height: "100%",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  highlightContainer: {
    alignItems: "center",
  },
  highlightHead: {
    fontWeight: "900",
    fontSize: 18,
  },
  highlightText: {
    fontWeight: "300",
  },
  youMightLike: {
    height: screenHeight * 0.49,
    backgroundColor: Colors.primary,
    borderRadius: 35,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 12,
  },
  templateTitle: {
    fontSize: 24,
    fontFamily: "primary",
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
