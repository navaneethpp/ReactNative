import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Library for picking images and taking photos
import { Ionicons } from "@expo/vector-icons"; // Used for a placeholder profile icon

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null); // State to store the URI of the profile image

  // useEffect hook to request necessary permissions when the component mounts
  useEffect(() => {
    (async () => {
      // Permissions are not needed on web platform for these operations
      if (Platform.OS !== "web") {
        // Request permission to access the media library (camera roll/gallery)
        const { status: cameraRollStatus } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (cameraRollStatus !== "granted") {
          Alert.alert(
            "Permission Required",
            "Sorry, we need camera roll permissions to pick images from your gallery!"
          );
        }

        // Request permission to access the camera
        const { status: cameraStatus } =
          await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus !== "granted") {
          Alert.alert(
            "Permission Required",
            "Sorry, we need camera permissions to take photos!"
          );
        }
      }
    })();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to pick an image from the device's gallery
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow images
        allowsEditing: true, // Allow user to crop/edit the image
        aspect: [1, 1], // Force a square aspect ratio
        quality: 1, // High quality image
      });

      // If the user didn't cancel and an image was selected
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri); // Set the selected image URI to state
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert(
        "Error",
        "Failed to pick image from gallery. Please try again."
      );
    }
  };

  // Function to take a new picture using the device's camera
  const takePicture = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow images
        allowsEditing: true, // Allow user to crop/edit the image
        aspect: [1, 1], // Force a square aspect ratio
        quality: 1, // High quality image
      });

      // If the user didn't cancel and a picture was taken
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri); // Set the captured image URI to state
      }
    } catch (error) {
      console.error("Error taking picture:", error);
      Alert.alert("Error", "Failed to take picture. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.imageContainer}>
        {profileImage ? (
          // Display the selected profile image if available
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          // Display a placeholder icon if no image is selected
          <View style={styles.placeholderImage}>
            <Ionicons name="person-circle-outline" size={100} color="#ccc" />
            <Text style={styles.placeholderText}>No Image Selected</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        {/* Button to pick image from gallery */}
        <Button title="Pick from Gallery" onPress={pickImage} />
        <View style={{ marginVertical: 10 }} /> {/* Spacer */}
        {/* Button to take a new picture */}
        <Button title="Take Picture" onPress={takePicture} />
      </View>
    </View>
  );
}

// Styles for the ProfileScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  imageContainer: {
    marginBottom: 30,
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the container circular
    backgroundColor: "#e0e0e0", // Light grey background for placeholder
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensures the image stays within the circular bounds
    borderWidth: 2,
    borderColor: "#ddd", // Light border
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensures the image covers the area without distortion
  },
  placeholderImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%", // Buttons take 80% width
  },
});
