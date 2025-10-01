import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./style";

export default function Button({ title, onPress }) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}