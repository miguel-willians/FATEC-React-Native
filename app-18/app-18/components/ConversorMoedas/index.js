import  { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './style';


const ConversorScreen = ({ toCurrency, rate }) => {
  const [realValue, setRealValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const convert = () => {
    Keyboard.dismiss(); 
    setError('');
    setResult(null); 
    
    const amount = parseFloat(realValue.replace(',', '.')); 

    if (isNaN(amount) || amount <= 0) {
      setError('Por favor, digite um valor válido em R$.');
      return;
    }

    const convertedValue = amount * rate;

    const formattedResult = convertedValue.toFixed(4).replace('.', ','); 
    setResult(formattedResult);
  };

  return (
    <View style={styles.screenContent}>
      <Text style={styles.title}>
        Real {'\u2192'} {toCurrency}
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor em R$"
        value={realValue}
        onChangeText={text => {
          setRealValue(text);
          setResult(null);
          setError('');
        }}
      />

      <TouchableOpacity style={styles.convertButton} onPress={convert}>
        <Text style={styles.convertButtonText}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Resultado</Text>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : result !== null && (
          <Text style={styles.resultText}>
            {`${result} ${toCurrency.toUpperCase()}`}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ConversorScreen;