import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { styles } from './styles';

const TelaConversor = ({ moedaDestino, taxaConversao }) => {
  const [valorReal, setValorReal] = useState('');
  const [resultado, setResultado] = useState(null);

  const converter = () => {
    const valor = parseFloat(valorReal.replace(',', '.'));
    
    if (!isNaN(valor)) {
      const valorConvertido = valor * taxaConversao;
      setResultado(valorConvertido);
      Keyboard.dismiss();
    } else {
      alert('Por favor, digite um valor válido!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <Text style={styles.subtitle}>Real {'->'} {moedaDestino}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        value={valorReal}
        onChangeText={(text) => setValorReal(text)}
      />

      <TouchableOpacity style={styles.button} onPress={converter}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Resultado:</Text>
          <Text style={styles.resultValue}>
            {moedaDestino === 'BitCoin' 
              ? `${resultado.toFixed(8)} BTC` 
              : `${resultado.toFixed(2)} ${moedaDestino}`}
          </Text>
        </View>
      )}
    </View>
  );
};



export default TelaConversor;