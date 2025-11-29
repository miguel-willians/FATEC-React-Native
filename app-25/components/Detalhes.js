import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const Detalhes = ({ route }) => {
  
  const { filme } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.tituloDetalhes}>
        {filme.nome} - Sinopse
      </Text>

      <View style={styles.sinopseBox}>
        <Text style={styles.sinopseText}>
          {filme.sinopse}
        </Text>
      </View>
    </View>
  );
};

export default Detalhes;