import { useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/GlobalColors";

function InputBox({
  children,
  keyboardType = "default",
  isPassword = false,
  value,
  onChangeText,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const handleContainerPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  let eyeIcon = showPassword ? "eye-outline" : "eye-off-outline";

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        <Text>{children}</Text>
        <Pressable
          style={[
            styles.inputBox,
            { borderColor: isFocused ? Colors.buttonBG : "#b6b5b5ff" },
          ]}
          onPress={() => setIsFocused(true)}
        >
          <TextInput
            ref={inputRef}
            style={styles.input}
            keyboardType={keyboardType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={isPassword}
            value={value}
            onChangeText={onChangeText}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {isPassword && <Ionicons name={eyeIcon} size={24} color="black" />}
          </Pressable>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default InputBox;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    width: screenWidth * 0.8,
    paddingVertical: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 18,
    marginVertical: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
