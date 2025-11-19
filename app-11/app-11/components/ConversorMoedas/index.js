import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './style';
import InputContainer from '../InputContainer/index'; 

const EXCHANGE_RATES = {
  USD: { BRL: 5.20, EUR: 0.95, USD: 1.00 },
  BRL: { USD: 0.19, EUR: 0.18, BRL: 1.00 },
  EUR: { USD: 1.05, BRL: 5.50, EUR: 1.00 },
};

const CURRENCIES = ['USD', 'BRL', 'EUR'];

const ConversorMoedas = () => {
  const [value, setValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSelectCurrency = (setter) => {
    const currencyOptions = CURRENCIES.map(curr => ({
      text: curr,
      onPress: () => {
        setter(curr);
        setResult(null); 
        setError('');
      },
    }));

    Alert.alert('Selecione a Moeda', 'Escolha a moeda:', [
      ...currencyOptions,
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  const convert = () => {
    setError('');
    setResult(null);
    
    const amount = parseFloat(value.replace(',', '.')); 

    if (isNaN(amount) || amount <= 0) {
      setError('Por favor, insira um valor numérico válido.');
      return;
    }

    if (!EXCHANGE_RATES[fromCurrency] || !EXCHANGE_RATES[fromCurrency][toCurrency]) {
      setError('Taxas de câmbio não encontradas para as moedas selecionadas.');
      return;
    }

    const rate = EXCHANGE_RATES[fromCurrency][toCurrency];
    const convertedValue = amount * rate;

    const formattedResult = convertedValue.toFixed(2).replace('.', ','); 

    setResult(formattedResult);
  };

  const handleValueChange = (text) => {
    setValue(text);
    setResult(null);
    setError('');
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text style={{ ...styles.title, fontSize: 18 }}>Dólar, Real e Euro</Text>

        <InputContainer
          label="Valor:"
          value={value}
          onChangeText={handleValueChange}
          isCurrencySelector={false}
        />

        <InputContainer
          label="De:"
          value={fromCurrency}
          onButtonPress={() => handleSelectCurrency(setFromCurrency)}
          isCurrencySelector={true}
        />

        <InputContainer
          label="Para:"
          value={toCurrency}
          onButtonPress={() => handleSelectCurrency(setToCurrency)}
          isCurrencySelector={true}
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
              {`${value.replace(',', '.')} ${fromCurrency} = ${result} ${toCurrency}`}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ConversorMoedas;