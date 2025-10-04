import React from 'react';
import { Image, View } from 'react-native';
import styles from './style';

export default function ImagemIMC() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://s2.static.brasilescola.uol.com.br/be/2025/05/2-imc-classificacao.jpg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
