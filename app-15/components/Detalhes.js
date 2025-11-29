import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Detalhes = ({ route }) => {
  const { vaga } = route.params;

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailHeader}>{vaga.titulo}</Text>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Salário:</Text>
        <Text style={styles.value}>{vaga.salario}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.value}>{vaga.descricao}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Contato:</Text>
        <Text style={styles.value}>{vaga.contato}</Text>
      </View>
    </View>
  );
};

export default Detalhes;