import React from "react";
import { Text } from "react-native";
import styles from "./style";

export default function Resultado({ texto }) {
  return <Text style={styles.resultado}>{texto}</Text>;
}