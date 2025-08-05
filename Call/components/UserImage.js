import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const UserImage = ({ image }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
  },
  innerContainer: {
    width: 216,
    height: 216,
    borderRadius: 108,
    borderWidth: 5,
    borderColor: "#c4c4c4ff",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
