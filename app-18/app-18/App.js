import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConversorScreen from './components/ConversorMoedas/index';
import { Text } from 'react-native'; 

const Tab = createBottomTabNavigator();

// ** Taxas de Câmbio Fixas e Hipotéticas (Valor de 1 Real) **
const RATES = {
  DOLAR: 0.19,     
  EURO: 0.18,      
  BITCOIN: 0.0000020, 
};

const TAB_ICONS = {
  Dolar: '$',
  Euro: '€',
  Bitcoin: '₿',
};


const DolarScreen = () => (
  <ConversorScreen 
    toCurrency="Dolar" 
    rate={RATES.DOLAR} 
  />
);

const EuroScreen = () => (
  <ConversorScreen 
    toCurrency="Euro" 
    rate={RATES.EURO} 
  />
);

const BitcoinScreen = () => (
  <ConversorScreen 
    toCurrency="Bitcoin" 
    rate={RATES.BITCOIN} 
  />
);


const AppConversorTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dolar"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color: color, fontWeight: 'bold' }}>
              {TAB_ICONS[route.name]}
            </Text>
          ),
          tabBarActiveTintColor: '#5CB85C', 
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { 
            height: 60,
            paddingBottom: 5,
          },
          headerShown: false, 
        })}
      >
        <Tab.Screen 
          name="Dolar" 
          component={DolarScreen}
        />
        <Tab.Screen 
          name="Euro" 
          component={EuroScreen}
        />
        <Tab.Screen 
          name="Bitcoin" 
          component={BitcoinScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppConversorTabs;