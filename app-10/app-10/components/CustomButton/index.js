import { Pressable, Text } from 'react-native';
import { styles } from './style';

export default function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
