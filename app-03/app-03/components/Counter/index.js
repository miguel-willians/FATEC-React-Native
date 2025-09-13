import { View } from 'react-native';
import Button from '../Button/index';
import Input from '../Input/index';
import { useState } from 'react';

export default function Counter({ onChangeText, stateVariable, stateSetter }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <Button
        buttonStyle={{
          backgroundColor: 'red',
        }}
        onPress={() => stateSetter((stateVariable) => stateVariable - 1)}
        textStyle={{ color: 'white' }}>
        -
      </Button>
      <Input defaultValue={stateVariable} onChangeText={onChangeText} />

      <Button
        buttonStyle={{
          backgroundColor: 'blue',
        }}
        onPress={() => stateSetter((stateVariable) => stateVariable + 1)}
        textStyle={{ color: 'white' }}>
        +
      </Button>
    </View>
  );
}
