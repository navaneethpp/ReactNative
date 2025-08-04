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
import Colors from "../../constants/GlobalColors";

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
            color="white"
            size={24}
            style={{ flex: 1 }}
          />

          <View style={style.searchContainer}>
            {!isFocused ? (
              <Text style={style.searchText}>{value ? value : children}</Text>
            ) : (
              <TextInput
                style={{ flex: 1, color: "white" }}
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoFocus={true}
                value={value}
                onChangeText={onChangeText}
              />
            )}
          </View>
          <Pressable
            style={({ pressed }) => [
              style.preferenceIcon,
              pressed && style.pressed,
            ]}
          >
            <Ionicons name="options-outline" color="white" size={24} />
          </Pressable>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SearchBar;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffffff77",
    width: "100%",
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    alignContent: "stretch",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  searchContainer: {
    paddingHorizontal: 10,
    flex: 8,
  },
  searchText: {
    fontSize: 18,
    color: "white",
  },
  preferenceIcon: {
    backgroundColor: Colors.buttonBG,
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
