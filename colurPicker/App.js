import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ColorBox from "./components/ColorBox";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    title: "Green",
    color: "green",
  },
  {
    id: 2,
    title: "Yellow",
    color: "yellow",
  },
  {
    id: 3,
    title: "Orange",
    color: "orange",
  },
  {
    id: 4,
    title: "Blue",
    color: "blue",
  },
  {
    id: 5,
    title: "Black",
    color: "black",
  },
  {
    id: 6,
    title: "Red",
    color: "red",
  },
  {
    id: 7,
    title: "Blue Violet",
    color: "blueviolet",
  },
  {
    id: 8,
    title: "Brown",
    color: "brown",
  },
  {
    id: 9,
    title: "Cyan",
    color: "cyan",
  },
  {
    id: 10,
    title: "White",
    color: "white",
  },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState();
  const [title, setTitle] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.selectionContainer}>
        <Text style={styles.text}>Selected Color</Text>
        {!selectedColor ? (
          <Text style={styles.placeholder}>Select a color to display</Text>
        ) : (
          <View style={styles.selectionColorBox}>
            <View
              style={[styles.colorBox, { backgroundColor: selectedColor }]}
            ></View>
            <Text>{title}</Text>
          </View>
        )}
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setSelectedColor(item.color);
              setTitle(item.title);
            }}
          >
            <ColorBox
              color={item.color}
              selection={selectedColor === item.color}
            >
              {item.title}
            </ColorBox>
          </Pressable>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 100,
  },
  selectionContainer: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 30,
    paddingBottom: 30,
    height: 100,
  },
  selectionColorBox: {
    alignItems: "center",
    gap: 4,
  },
  colorBox: {
    height: 40,
    width: 100,
  },
  text: {
    fontSize: 20,
  },
  placeholder: {
    color: "#bcbcbc",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
