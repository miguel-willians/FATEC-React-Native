import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const Detalhes = ({ route }) => {
  const { produto } = route.params;

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{produto.nome}</Text>
      
      <Image source={{ uri: produto.imagem }} style={styles.detailImage} />
      
      <Text style={styles.detailDescription}>
        {produto.descricao}
      </Text>
    </View>
  );
};

export default Detalhes;