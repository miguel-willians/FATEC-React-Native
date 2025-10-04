import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './style';
import ImagemIMC from './components/Image/Image';
import Input from './components/Input/Input';
import PressableButton from './components/Pressable/Pressable';
import Resultado from './components/Resultado/Resultado';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const handleCalcular = () => {
    setError('');
    setResultado('');

    const pesoFloat = parseFloat(peso.replace(',', '.'));
    const alturaFloat = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
      setError('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const alturaEmMetros = alturaFloat > 3 ? alturaFloat / 100 : alturaFloat;

    if (alturaEmMetros > 3) {
      setError('Por favor, insira uma altura realista.');
      return;
    }

    const imc = pesoFloat / (alturaEmMetros * alturaEmMetros);
    const imcFormatado = imc.toFixed(2);

    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade Grau I';
    else if (imc < 39.9) classificacao = 'Obesidade Grau II';
    else classificacao = 'Obesidade Grau III (Mórbida)';

    setResultado('Seu IMC é ' + imcFormatado + '. Classificação: ' + classificacao + '.');
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Cálculo de IMC</Text>
        <Text style={styles.subtitle}>Índice de Massa Corporal</Text>

        <ImagemIMC />

        <View style={styles.formContainer}>
          <Input label="Peso (kg)" placeholder="Ex: 70,5" value={peso} onChangeText={setPeso} keyboardType="numeric" />
          <Input label="Altura (m ou cm)" placeholder="Ex: 1,75 ou 175" value={altura} onChangeText={setAltura} keyboardType="numeric" />
        </View>

        <PressableButton text="Calcular" onPress={handleCalcular} />

        <Resultado error={error} resultado={resultado} />
      </View>
    </ScrollView>
  );
}
