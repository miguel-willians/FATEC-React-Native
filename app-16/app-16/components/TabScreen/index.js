import { View, Text } from 'react-native';
import styles from './style'; 


const TabScreen = ({ title, content }) => {
  return (
    <View style={styles.screenContent}>
      <Text style={styles.screenTitle}>{title}</Text>
      <Text style={styles.screenText}>{content}</Text>
    </View>
  );
};

export default TabScreen;