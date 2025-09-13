import { View, Text } from 'react-native';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(undefined);

  // Handler genérico que recebe o setter correto
  const handleChange = (setter) => (texto) => {
    const somenteNumeros = texto.replace(/\D/g, '');
    setter(Number(somenteNumeros));
  };

  const handleCalcular = (numero1, numero2) => {
    if(numero1 === 0 || numero2 === 0) return
    setResultado(numero1 * numero2)
  };

  return (
    <View
      style={{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
      }}>
      <Text style={{fontSize: 20}}>Multiplicador de números</Text>

      <Counter
        onChangeText={handleChange(setNumero1)}
        stateVariable={numero1}
        stateSetter={setNumero1}
      />
      <Counter
        onChangeText={handleChange(setNumero2)}
        stateVariable={numero2}
        stateSetter={setNumero2}
      />

      <Button onPress={() => handleCalcular(numero1, numero2)}>Calcular</Button>

      {resultado && <Text>O resultado da multiplicação é: {resultado}</Text>}

    </View>
  );
}
