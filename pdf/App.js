import React from "react";
import SamplePdfScreen from "./screens/SamplePdfScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 100 }}>
      <SamplePdfScreen />
    </View>
  );
}
