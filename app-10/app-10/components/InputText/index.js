import { Text, TextInput } from 'react-native';
import { styles } from './style';

export default function InputText({
  label,
  placeholder,
  value,
  onChangeText,
  disabled,
}) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={[styles.input, disabled && styles.inputDisabled]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
      />
    </>
  );
}
