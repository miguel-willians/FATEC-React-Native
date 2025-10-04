import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./style";


export default function Button({ title, text, onPress }) {
  const label = title ?? text ?? "";
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      android_ripple={{ color: "rgba(255,255,255,0.08)" }}
      accessibilityRole="button"
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}