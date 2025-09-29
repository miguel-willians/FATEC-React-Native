import { Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function InputSlider({
  label,
  value,
  onValueChange,
  min = 0,
  max = 1000,
  step = 50,
  disabled,
}) {
  return (
    <>
      <Text>
        {label}: {value.toFixed(0)}
      </Text>
      <Slider
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        minimumTrackTintColor={disabled ? '#ccc' : '#2196F3'} 
        maximumTrackTintColor={disabled ? '#eee' : '#999'}
        thumbTintColor={disabled ? '#888' : '#2196F3'} 
      />
    </>
  );
}
