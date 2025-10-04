import React from 'react';
import { Image, View } from 'react-native';
import styles from './style';

export default function Imagem() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://preview.redd.it/any-recommendations-of-stories-revolving-around-riddler-v0-4fogzj02ejnc1.jpg?width=365&format=pjpg&auto=webp&s=8b75749ca9bcd1f2d16ddc4a17358781c904ddbb' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
