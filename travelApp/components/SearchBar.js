import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Colors } from "../constants/colors";

function SearchBar({ children, value, onChangeText }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleContainerPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View>
        <Pressable
          onPress={() => setIsFocused(!isFocused)}
          style={style.mainContainer}
        >
          <Ionicons
            name="search-outline"
            color="black"
            size={24}
            style={{ flex: 1, paddingLeft: 8 }}
          />

          <View style={style.searchContainer}>
            {!isFocused ? (
              <Text style={style.searchText}>{value ? value : children}</Text>
            ) : (
              <TextInput
                style={{ flex: 1 }}
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoFocus={true}
                value={value}
                onChangeText={onChangeText}
              />
            )}
          </View>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SearchBar;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 28,
    flexDirection: "row",
    alignContent: "stretch",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 16,
  },
  searchContainer: {
    paddingHorizontal: 10,
    flex: 8,
  },
  searchText: {
    fontSize: 18,
    color: "black",
  },
  preferenceIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    height: "80%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
