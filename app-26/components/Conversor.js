import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importando o Dropdown
import axios from 'axios';
import { styles } from './styles';

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const converter = async () => {
    if (valor.trim() === '' || isNaN(valor)) {
      Alert.alert('Erro', 'Por favor, digite um valor numérico válido.');
      return;
    }

    // Se as moedas forem iguais, não precisa chamar API
    if (moedaDe === moedaPara) {
      setResultado(parseFloat(valor));
      return;
    }

    setLoading(true);
    Keyboard.dismiss();

    try {
      // Montagem Dinâmica da URL: ex: BRL-USD, USD-EUR, etc.
      const response = await axios.get(`https://economia.awesomeapi.com.br/last/${moedaDe}-${moedaPara}`);
      
      // A API retorna algo como: { USDBRL: { ask: "5.50" } }
      // Precisamos acessar a chave dinâmica "USDBRL" ou "BRLUSD"
      const key = moedaDe + moedaPara;
      const cotacao = parseFloat(response.data[key].ask);
      
      const valorConvertido = parseFloat(valor) * cotacao;
      
      setResultado(valorConvertido);

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível realizar a conversão. Verifique sua conexão ou o par de moedas.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>

      {/* Input Valor */}
      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 100.00"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* Picker DE */}
      <Text style={styles.label}>De:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moedaDe}
          onValueChange={(itemValue) => setMoedaDe(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        </Picker>
      </View>

      {/* Picker PARA */}
      <Text style={styles.label}>Para:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moedaPara}
          onValueChange={(itemValue) => setMoedaPara(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        </Picker>
      </View>

      {/* Botão Converter */}
      <TouchableOpacity style={styles.button} onPress={converter}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Converter</Text>
        )}
      </TouchableOpacity>

      {/* Resultado (Só mostra se tiver valor) */}
      {resultado !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Valor convertido</Text>
          <Text style={styles.resultValue}>
            {resultado.toLocaleString('pt-BR', { style: 'currency', currency: moedaPara })}
          </Text>
        </View>
      )}

    </View>
  );
};

export default Conversor;