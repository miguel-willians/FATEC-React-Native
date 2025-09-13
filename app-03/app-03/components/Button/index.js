import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({
  buttonStyle,
  textStyle,
  children,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonBase, buttonStyle]} // mescla base + sobrescrito
      onPress={onPress}
    >
      <Text style={[styles.textBase, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textBase: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
