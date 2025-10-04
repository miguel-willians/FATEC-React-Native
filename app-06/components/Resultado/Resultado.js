import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Resultado({ error, resultado }) {
  if (!error && !resultado) return null;
  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}