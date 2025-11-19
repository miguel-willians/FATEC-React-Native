import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';

export default function InputPicker({ label, selectedValue, onValueChange, options, disabled }) {
  return (
    <>
      <Text>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
        enabled={!disabled} 
      >
        <Picker.Item label="Selecione" value="" />
        {options.map((opt, index) => (
          <Picker.Item key={index} label={opt} value={opt} />
        ))}
      </Picker>
    </>
  );
}
