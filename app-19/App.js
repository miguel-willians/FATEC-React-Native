import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TelaConversor from './components/TelaConversor';

const Tab = createMaterialTopTabNavigator();

const DolarScreen = () => <TelaConversor moedaDestino="Dólar" taxaConversao={1/5.00} />;
const EuroScreen = () => <TelaConversor moedaDestino="Euro" taxaConversao={1/5.40} />;
const BitcoinScreen = () => <TelaConversor moedaDestino="BitCoin" taxaConversao={1/350000} />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#fff', marginTop: 30 },
          tabBarIndicatorStyle: { backgroundColor: '#2ecc71' },
          tabBarActiveTintColor: '#2ecc71',
          tabBarInactiveTintColor: '#ccc',
        }}
      >
        <Tab.Screen name="Dólar" component={DolarScreen} />
        <Tab.Screen name="Euro" component={EuroScreen} />
        <Tab.Screen name="BitCoin" component={BitcoinScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}