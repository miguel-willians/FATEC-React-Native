import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Input from "./components/Input/Input";
import Resultado from "./components/Resultado/Resultado";
import Pressable from "./components/Pressable/Pressable";
import styles from "./style"

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  const handleCalcular = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (isNaN(precoAlcool) || isNaN(precoGasolina)) {
      setResultado("⚠️ Digite valores válidos!");
      return;
    }

    const res = precoAlcool / precoGasolina;

    if (res < 0.7) {
      setResultado(`O etanol é melhor (resultado = ${res.toFixed(2)})`);
    } else if (res > 0.7) {
      setResultado(`A gasolina é melhor (resultado = ${res.toFixed(2)})`);
    } else {
      setResultado(`Custo é equivalente (resultado = ${res.toFixed(2)})`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>

      <Input
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      <Input
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <Pressable title="Calcular" onPress={handleCalcular} />

      {resultado !== "" && <Resultado texto={resultado} />}
    </View>
  );
}