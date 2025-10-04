import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "./components/Pressable/Pressable";
import Imagem from "./components/Image/Image";
import Resultado from "./components/Resultado/Resultado";
import Input from "./components/Input/Input";
import styles from "./style";

export default function App() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  function handleJogar() {
    const n = parseInt(numero);
    if (isNaN(n) || n < 0 || n > 10) {
      setResultado("Digite um número válido entre 0 e 10!");
      return;
    }

    const aleatorio = Math.floor(Math.random() * 11);

    if (n === aleatorio) {
      setResultado(`Você acertou! O número era ${aleatorio}`);
    } else {
      setResultado(`Você errou! O número era ${aleatorio}`);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Jogo do Nº Aleatório</Text>

        <Imagem />

        <Input label="1 a 10" placeholder="Pense em um numero de 1 a 10" value={numero} onChangeText={setNumero} keyboardType="numeric" />

        <Button title="Descobrir" onPress={handleJogar} />

        <Resultado resultado={resultado} />
      </View>
    </View>
  );
}
