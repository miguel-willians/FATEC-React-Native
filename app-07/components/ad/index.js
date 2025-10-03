import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export default function (props) {
  return (
    <View style={styles.box}>
      <Image source={{ uri: props.imgPath }} style={styles.img} />
      <Text numberOfLines={1} style={styles.adTitle}>{props.adTitle}</Text>
      <Text numberOfLines={6}style={styles.text}>{props.content}</Text>
    </View>
  );
}
