import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { WebView } from "react-native-webview";

const PdfViewer = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const pickPdf = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    if (result.type === "success") {
      const uri = result.assets?.[0]?.uri || result.uri;

      if (Platform.OS === "web") {
        setPdfUri(uri);
      } else {
        // Google Docs Viewer workaround
        const encoded = encodeURIComponent(uri);
        const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${encoded}`;
        setPdfUri(googleViewerUrl);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Pick a PDF" onPress={pickPdf} />

      {pdfUri ? (
        <WebView
          source={{ uri: pdfUri }}
          style={styles.webview}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
        />
      ) : (
        <View style={styles.centered}>
          <Text>No PDF selected</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    flex: 1,
    marginTop: 10,
  },
});

export default PdfViewer;
