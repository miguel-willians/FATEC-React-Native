import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; 

const TAB_ICONS = {
  Pessoal: '👤',
  Formacao: '🎓',
  Experiencia: '💼',
};

const BottomTabBar = ({ activeTab, onTabChange, tabs }) => {
  return (
    <View style={styles.tabBar}>
      {tabs.map((tabName) => {
        const isActive = activeTab === tabName;
        
        return (
          <TouchableOpacity
            key={tabName}
            style={[
              styles.tabButton,
              isActive && styles.tabButtonActive 
            ]}
            onPress={() => onTabChange(tabName)}
          >
            <Text style={styles.tabIcon}>{TAB_ICONS[tabName]}</Text>
            
            <Text style={[
              styles.tabText,
              isActive && styles.tabTextActive
            ]}>
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;