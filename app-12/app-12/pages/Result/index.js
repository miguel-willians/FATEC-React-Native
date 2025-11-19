import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/index';
import { styles } from './style';

export default function Result({ route }) {

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
    <View style={styles.resultado}>
      <Text style={styles.subtitulo}>Dados informados:</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexo}</Text>
      <Text>Escolaridade: {route.params?.escolaridade}</Text>
      <Text>Limite: {route.params?.limite.toFixed(0)}</Text>
      <Text>Brasileiro: {route.params?.brasileiro ? 'Sim' : 'Não'}</Text>

    </View>
  );
}
