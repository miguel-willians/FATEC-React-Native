import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';
import { styles } from './style';

export default function Result({ nome, idade, sexo, escolaridade, limite, brasileiro, onCancelar, onFinalizar }) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.subtitulo}>Dados informados:</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite: {limite.toFixed(0)}</Text>
      <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>

      <CustomButton title="Cancelar" onPress={onCancelar} />
      <CustomButton title="Finalizar Conta" onPress={onFinalizar} />
    </View>
  );
}
