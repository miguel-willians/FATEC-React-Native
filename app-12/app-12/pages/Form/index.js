import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Title from '../../components/Title/index';
import CustomButton from '../../components/CustomButton/index';
import InputSwitch from '../../components/InputSwitch/index';
import InputSlider from '../../components/InputSlider/index';
import InputPicker from '../../components/InputPicker/index';
import InputText from '../../components/InputText/index';

export default function Form({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(200);
  const [brasileiro, setBrasileiro] = useState(false);

  const handleConfirmar = () => {
    navigation.navigate('Result', {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}>
        <Title />

        <InputText
          label="Nome:"
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <InputText
          label="Idade:"
          placeholder="Digite sua idade"
          value={idade}
          onChangeText={setIdade}
        />

        <InputPicker
          label="Sexo:"
          selectedValue={sexo}
          onValueChange={setSexo}
          options={['Masculino', 'Feminino']}
        />

        <InputPicker
          label="Escolaridade:"
          selectedValue={escolaridade}
          onValueChange={setEscolaridade}
          options={['Fundamental', 'Médio', 'Superior', 'Pós-graduação']}
        />

        <InputSlider
          label="Limite"
          value={limite}
          onValueChange={setLimite}
          min={0}
          max={1000}
          step={50}
        />

        <InputSwitch
          label="Brasileiro:"
          value={brasileiro}
          onValueChange={setBrasileiro}
        />

        <CustomButton title="Confirmar" onPress={handleConfirmar} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
});
