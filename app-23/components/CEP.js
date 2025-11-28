import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './style';

const Cep = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const consultarCep = async () => {
    const cepLimpo = cep.replace(/\D/g, ''); 

    if (cepLimpo.length !== 8) {
      Alert.alert('Erro', 'O CEP deve conter 8 dígitos!');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);

      if (response.data.erro) {
        Alert.alert('Ops!', 'CEP não encontrado.');
        setEndereco(null);
        return;
      }

      setEndereco(response.data);
      Keyboard.dismiss(); 

    } catch (error) {
      Alert.alert('Erro', 'Houve um problema na busca, verifique sua conexão.');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cep x Endereço</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP..."
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
        />
        
        <TouchableOpacity style={styles.button} onPress={consultarCep}>
          <Ionicons name="checkmark" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {endereco && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            <Text style={styles.label}>Cep:</Text> {endereco.cep}
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.label}>Logradouro:</Text> {endereco.logradouro}
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.label}>Bairro:</Text> {endereco.bairro}
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.label}>Cidade:</Text> {endereco.localidade}
          </Text>
          <Text style={styles.resultText}>
            <Text style={styles.label}>Estado:</Text> {endereco.uf}
          </Text>
        </View>
      )}

    </View>
  );
};

export default Cep;