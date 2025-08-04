import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CallBox from "./components/CallBox";

const users = [
  { id: 1, name: "Rahul Sharma", phone: "+91-9876543210" },
  { id: 2, name: "Priya Verma", phone: "+91-9123456789" },
  { id: 3, name: "Amit Kumar", phone: "+91-9988776655" },
  { id: 4, name: "Neha Singh", phone: "+91-9090909090" },
  { id: 5, name: "Karan Mehta", phone: "+91-9012345678" },
  { id: 6, name: "Sanya Gupta", phone: "+91-9345678901" },
  { id: 7, name: "Ravi Patel", phone: "+91-9871234567" },
  { id: 8, name: "Anjali Joshi", phone: "+91-9567890123" },
  { id: 9, name: "Manish Reddy", phone: "+91-9321987654" },
  { id: 10, name: "Divya Nair", phone: "+91-9456123789" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Contacts:{users.length}</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <CallBox name={item.name} mobileNumber={item.phone} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    justifyContent: "flex-start",
    paddingVertical: 70,
    paddingHorizontal: 16,
    gap: 10,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
  },
});
