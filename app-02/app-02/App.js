import { View, Text } from 'react-native';
import Button from "./components/Button/index"
import { useState } from 'react';

export default function App() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{quantidade}</Text>

      <Button
        buttonStyle={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => setQuantidade(quantidade => quantidade + 1)}
        textStyle={{ color: 'white' }}
      >
      +
      </Button>

      <Button
        buttonStyle={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => setQuantidade(quantidade => quantidade - 1)}
        textStyle={{ color: 'white' }}
      >
      -
      </Button>
    </View>
  );
}
