import { View } from "react-native";
import DateAndTime from "./components/DateAndTime";

export default function App() {
  const currentTime = new Date();

  return (
    <View>
      <DateAndTime />
    </View>
  );
}
