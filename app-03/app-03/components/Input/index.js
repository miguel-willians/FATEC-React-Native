import { styles } from './styles';

import { TextInput } from 'react-native';

export default function Input({ defaultValue, onChangeText}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Digite apenas números"
      keyboardType="numeric"
      value={defaultValue}
      onChangeText={onChangeText}
    />
  );
}
