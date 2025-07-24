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
  validation = false,
  validationMessage,
  autoCapitalize = "none",
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
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
        <View>
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
              secureTextEntry={isPassword && showPassword}
              value={value}
              onChangeText={onChangeText}
              autoCapitalize={autoCapitalize}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {isPassword && (
                <Ionicons name={eyeIcon} size={24} color="black" />
              )}
            </Pressable>
          </Pressable>
          <View style={styles.validMessageContainer}>
            {!validation && <Text>{validationMessage}</Text>}
          </View>
        </View>
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
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  validMessageContainer: {
    height: 15,
  },
});
