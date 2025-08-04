import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const SamplePdfScreen = () => {
  const pdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: pdfUrl }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default SamplePdfScreen;
