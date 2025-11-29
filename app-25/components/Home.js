import React, { useState, useEffect } from 'react';
// 1. Importar ScrollView e remover FlatList
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { styles } from './style';

const Home = ({ navigation }) => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes');
        setFilmes(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Erro ao buscar filmes:', error);
      }
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#121212" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>
          Em Cartaz
        </Text>

        {filmes.map((item) => (
          
          <View key={item.id} style={styles.card}>
            <View style={styles.headerFilme}>
              <Text style={styles.tituloFilme}>{item.nome}</Text>
              
              <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { filme: item })}>
                <Text style={styles.linkLeiaMais}>Leia mais -</Text>
              </TouchableOpacity>
            </View>

            <Image 
              source={{ uri: item.foto }} 
              style={styles.capaFilme} 
            />
          </View>

        ))}

      </ScrollView>
    </View>
  );
};

export default Home;