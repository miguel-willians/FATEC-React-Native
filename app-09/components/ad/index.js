import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export default function (props) {
  return (
    <View style={styles.box}>
      <Text numberOfLines={1} style={styles.adTitle}>{props.data.positionTitle}</Text>
      <Text numberOfLines={1} style={styles.text}>Salário: {props.data.wage}</Text>
      <Text numberOfLines={5}style={styles.text}>Descrição: {props.data.description}</Text>
      <Text numberOfLines={1}style={styles.text}>Contato: {props.data.contact}</Text>
    </View>
  );
}
