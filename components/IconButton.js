import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ onPress, color, icon }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={50} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: 0.7,
});

export default IconButton;
