import { Text, TouchableOpacity } from 'react-native';

export default function Button({
  buttonStyle,
  textStyle,
  children,
  onPress,
}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
