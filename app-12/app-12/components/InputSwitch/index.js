import { View, Text, Switch } from 'react-native';
import { styles } from './style';

export default function InputSwitch({ label, value, onValueChange, disabled }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} disabled={disabled} />
    </View>
  );
}
