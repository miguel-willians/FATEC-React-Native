import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';


const InputContainer = ({
  label,
  value,
  onChangeText,
  onButtonPress,
  isCurrencySelector = false,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType={isCurrencySelector ? 'default' : 'numeric'}
          placeholder={isCurrencySelector ? '' : 'Ex: 100'}
          value={value}
          onChangeText={onChangeText}
          editable={!isCurrencySelector} 
        />
        {isCurrencySelector && (
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={onButtonPress}>
            <Text style={styles.pickerButtonText}>V</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputContainer;