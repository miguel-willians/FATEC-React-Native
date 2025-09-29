import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Title from './components/Title/index';
import CustomButton from './components/CustomButton/index';
import InputSwitch from './components/InputSwitch/index';
import InputSlider from './components/InputSlider/index';
import InputPicker from './components/InputPicker/index';
import InputText from './components/InputText/index';
import Result from './components/Result/index';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(200);
  const [brasileiro, setBrasileiro] = useState(false);

  const [exibirDados, setExibirDados] = useState(false);
  const [disabled, setDisabled] = useState(false); 

  const handleConfirmar = () => {
    setDisabled(true);
    setExibirDados(true); 
  };

  const handleCancelar = () => {
    setDisabled(false); 
    setExibirDados(false); 
  };

  const handleFinalizar = () => {
    setNome('');
    setIdade('');
    setSexo('');
    setEscolaridade('');
    setLimite(200);
    setBrasileiro(false);
    setDisabled(false);
    setExibirDados(false);
  };

  return (
    <View style={styles.container}>
      <Title />

      <InputText
        label="Nome:"
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        disabled={disabled}
      />

      <InputText
        label="Idade:"
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
        disabled={disabled}
      />

      <InputPicker
        label="Sexo:"
        selectedValue={sexo}
        onValueChange={setSexo}
        options={['Masculino', 'Feminino']}
        disabled={disabled}
      />

      <InputPicker
        label="Escolaridade:"
        selectedValue={escolaridade}
        onValueChange={setEscolaridade}
        options={['Fundamental', 'Médio', 'Superior', 'Pós-graduação']}
        disabled={disabled}
      />

      <InputSlider
        label="Limite"
        value={limite}
        onValueChange={setLimite}
        min={0}
        max={1000}
        step={50}
        disabled={disabled}
      />

      <InputSwitch
        label="Brasileiro:"
        value={brasileiro}
        onValueChange={setBrasileiro}
        disabled={disabled}
      />

      {!exibirDados && (
        <CustomButton title="Confirmar" onPress={handleConfirmar} />
      )}

      {exibirDados && (
        <Result
          nome={nome}
          idade={idade}
          sexo={sexo}
          escolaridade={escolaridade}
          limite={limite}
          brasileiro={brasileiro}
          onCancelar={handleCancelar}
          onFinalizar={handleFinalizar}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
