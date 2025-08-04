import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/GlobalColors";

function SegmentControl({ children, onPress, activeSegmentControl }) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor:
              activeSegmentControl === children ? Colors.buttonBG : "white",
          },
        ]}
      >
        <Text
          style={[
            activeSegmentControl === children ? styles.activeText : styles.text,
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default SegmentControl;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 16,
    height: 50,
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    color: "black",
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
});
