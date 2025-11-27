import React, { useState, useEffect } from 'react';
import { View, Text, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const Frases = () => {
  const [dia, setDia] = useState(true);
  const [pequeno, setPequeno] = useState(true);

  useEffect(() => {
    loadPreferences();
  }, []);

  useEffect(() => {
    savePreference('dia', dia);
  }, [dia]);

  useEffect(() => {
    savePreference('pequeno', pequeno);
  }, [pequeno]);

  const loadPreferences = async () => {
    try {
      const diaSalvo = await AsyncStorage.getItem('dia');
      const pequenoSalvo = await AsyncStorage.getItem('pequeno');

      if (diaSalvo !== null) setDia(JSON.parse(diaSalvo));
      if (pequenoSalvo !== null) setPequeno(JSON.parse(pequenoSalvo));
    } catch (e) {
      console.log('Erro ao carregar:', e);
    }
  };

  const savePreference = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log('Erro ao salvar:', e);
    }
  };

  return (
    <View style={[
      styles.container, 
      { backgroundColor: dia ? '#f1f2f6' : '#2f3542' }
    ]}>
      
      <Text style={[styles.title, { color: dia ? '#000' : '#fff' }]}>
        Frases
      </Text>

      {/* Área dos Switches */}
      <View style={styles.switchesContainer}>
        <View style={styles.switchBlock}>
          <Text style={styles.label}>Dia</Text>
          <Switch 
            value={dia}
            onValueChange={(valor) => setDia(valor)}
          />
        </View>

        <View style={styles.switchBlock}>
          <Text style={styles.label}>Pequeno</Text>
          <Switch 
            value={pequeno}
            onValueChange={(valor) => setPequeno(valor)}
          />
        </View>
      </View>

      {/* Área da Frase */}
      <View style={[
        styles.quoteContainer,
        { borderColor: dia ? '#000' : '#fff' } 
      ]}>
        <Text style={{
          fontSize: pequeno ? 15 : 30,
          color: dia ? '#000' : '#fff', 
          fontStyle: 'italic'
        }}>
          "Cannarozzo On top!"
        </Text>
        
        <Text style={[
          styles.author,
          { 
            color: dia ? '#000' : '#fff',
            fontSize: pequeno ? 12 : 20 
          }
        ]}>
          (Whinderson Nunes)
        </Text>
      </View>

    </View>
  );
};

export default Frases;