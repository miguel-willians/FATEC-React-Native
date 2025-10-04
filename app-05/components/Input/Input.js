import React from "react";
import { TextInput } from "react-native";
import styles from "./style.js";

export default function Input({ ...props }) {
  return <TextInput style={styles.input} {...props} />;
}
